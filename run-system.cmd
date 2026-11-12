@echo off
rem Windows entry point: run-system.sh needs Git Bash, which PowerShell/cmd do not use for .sh files.
"C:\Program Files\Git\bin\bash.exe" "%~dp0run-system.sh" %*
