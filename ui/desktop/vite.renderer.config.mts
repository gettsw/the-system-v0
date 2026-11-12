import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config
export default defineConfig({
  define: {
    'process.env.GOOSE_TUNNEL': JSON.stringify(process.env.GOOSE_TUNNEL !== 'no' && process.env.GOOSE_TUNNEL !== 'none'),
  },

  // react() gives Fast Refresh: an edit to src/experience/ swaps the component in
  // place instead of reloading the page, so the chat session survives.
  plugins: [react(), tailwindcss()],

  // Vite caches a copy of @aaif/goose-acp-client and doesn't notice when we rebuild it
  // locally, so it serves stale code until you clear node_modules/.vite by hand.
  // Excluding it makes Vite always read the latest ui/goose-acp-client/dist build.
  // Dev-server only — release builds ignore optimizeDeps.
  optimizeDeps: {
    exclude: ['@aaif/goose-acp-client'],
  },

  server: {
    // The System: a syntax error in the agent-edited canvas is reported by
    // src/system/SystemHost.tsx instead of an overlay that would cover the prompt.
    hmr: { overlay: false },
    // SystemHost imports recipes/your-experience.yaml from the repo root.
    fs: { allow: ['../..'] },
  },

  build: {
    target: 'esnext'
  },
});
