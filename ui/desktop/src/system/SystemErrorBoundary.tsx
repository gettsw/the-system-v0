import React from 'react';

interface Props {
  children: React.ReactNode;
  fallback: (error: Error, componentStack: string) => React.ReactNode;
}

interface State {
  error: Error | null;
  componentStack: string;
}

/**
 * Catches runtime errors thrown by the mutable canvas. The fallback is rendered
 * by the host, so the chat channel stays usable while the canvas is broken.
 * The boundary retries the canvas after every Vite hot update.
 */
export class SystemErrorBoundary extends React.Component<Props, State> {
  state: State = { error: null, componentStack: '' };

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    this.setState({ componentStack: info.componentStack ?? '' });
    window.electron?.logInfo(`[SYSTEM CANVAS ERROR] ${error.stack ?? error}`);
  }

  private reset = () => this.setState({ error: null, componentStack: '' });

  componentDidMount() {
    import.meta.hot?.on('vite:afterUpdate', this.reset);
  }

  componentWillUnmount() {
    import.meta.hot?.off('vite:afterUpdate', this.reset);
  }

  render() {
    return this.state.error
      ? this.props.fallback(this.state.error, this.state.componentStack)
      : this.props.children;
  }
}
