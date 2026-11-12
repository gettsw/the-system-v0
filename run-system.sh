#!/usr/bin/env bash
# Launch "The System": build the goose backend, then start the desktop app in
# Vite + Electron hot-reload mode with The Mainframe agent.
# Works in Git Bash on Windows, macOS and Linux.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT"

# Rust and VS-bundled cmake are often installed but not on PATH on Windows.
export PATH="$HOME/.cargo/bin:$PATH"
if ! command -v cmake >/dev/null 2>&1; then
  for dir in "/c/Program Files"*"/Microsoft Visual Studio"/*/*/Common7/IDE/CommonExtensions/Microsoft/CMake/CMake/bin; do
    [ -d "$dir" ] && export PATH="$dir:$PATH"
  done
fi
if command -v pnpm >/dev/null 2>&1; then PNPM=(pnpm); else PNPM=(npx -y pnpm@10); fi

EXE=""
case "$(uname -s)" in MINGW* | MSYS* | CYGWIN*) EXE=".exe" ;; esac
export GOOSE_BINARY="$ROOT/target/debug/goose$EXE"
export SYSTEM_USER_DATA="$ROOT/.userdata"
export GOOSE_PATH_ROOT="$ROOT/.goose-data"

# A cargo check can recompile llama.cpp for several silent minutes, so skip it
# when the backend exists. SYSTEM_REBUILD=1 forces a build after Rust changes.
if [ ! -f "$GOOSE_BINARY" ] || [ -n "${SYSTEM_REBUILD:-}" ]; then
  echo "[ THE SYSTEM ] building backend (cargo build -p goose-cli, first run takes several minutes)..."
  cargo build -p goose-cli --bin goose
fi
# No per-token APIs: hide API keys/gateways from goose so its anthropic provider
# stays unconfigured. The Claude CLI uses your subscription login instead.
unset ANTHROPIC_API_KEY ANTHROPIC_BASE_URL ANTHROPIC_AUTH_TOKEN ANTHROPIC_MODEL

# Default to your Claude subscription through the official Claude CLI. The
# wrapper skips the gateway redirect in ~/.claude/settings.json.
export GOOSE_PROVIDER="${GOOSE_PROVIDER:-claude-code}"
export GOOSE_MODEL="${GOOSE_MODEL:-default}"
if [ -n "$EXE" ]; then
  export CLAUDE_CODE_COMMAND="${CLAUDE_CODE_COMMAND:-$(cygpath -w "$ROOT/bin/claude-subscription.cmd")}"
fi


# The terminal UI has no tool-approval prompt, so the agent runs unattended.
# It can read, write and run shell commands in this repository.
export GOOSE_MODE="${GOOSE_MODE:-auto}"

# Electron allows one instance: a second launch just focuses the old window,
# whose dev server may be gone. Stop any running copy so this launch is the one shown.
case "$(uname -s)" in
  MINGW* | MSYS* | CYGWIN*)
    powershell.exe -NoProfile -Command "Get-Process electron,goose -ErrorAction SilentlyContinue | Where-Object { \$_.Path -like '$(cygpath -w "$ROOT")\\*' } | Stop-Process -Force" || true ;;
  *) pkill -f "$ROOT/ui/node_modules/electron" || true ;;
esac

cd ui/desktop
# pnpm install's postinstall wipes the Vite cache, which blanks any window still
# served by it, so only install when dependencies are missing.
[ -d node_modules ] || "${PNPM[@]}" install
"${PNPM[@]}" run i18n:compile

cat <<EOF

  ┌──────────────────────────────────────────────────────────────┐
  │  THE SYSTEM is live.                                         │
  │  agent    THE MAINFRAME (recipes/your-experience.yaml)       │
  │  backend  goose serve (target/debug/goose$EXE)
  │  watching ui/desktop/src/experience/ for agent mutations     │
  │  mode     GOOSE_MODE=$GOOSE_MODE (tools run without approval)
  └──────────────────────────────────────────────────────────────┘

EOF

# Electron starts `goose serve` itself (src/gooseServe.ts) using GOOSE_BINARY.
# --dir makes the repository root the agent's working directory.
exec "${PNPM[@]}" exec electron-forge start -- --dir "$ROOT"
