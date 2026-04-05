@echo off
setlocal
call npx vite build
call npx cap sync
if "%1"=="nopause" goto :eof
pause