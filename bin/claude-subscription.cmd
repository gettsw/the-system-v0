@echo off
rem Runs the official Claude CLI on your Claude subscription login, ignoring the
rem gateway redirect (ANTHROPIC_BASE_URL / API key) in ~/.claude/settings.json and
rem the Windows user environment. Used by The System as CLAUDE_CODE_COMMAND.
set ANTHROPIC_BASE_URL=
set ANTHROPIC_API_KEY=
set ANTHROPIC_AUTH_TOKEN=
set ANTHROPIC_MODEL=
claude --setting-sources project,local %*
