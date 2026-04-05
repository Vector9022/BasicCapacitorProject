@echo off
setlocal
call npm init -y
call npm install @capacitor/core @capacitor/cli @capacitor/android @capacitor/filesystem
call npx cap init --web-dir=prebuild
call npx cap add android
call npm install vite
keytool -genkey -v -keystore releaseKey.jks -keyalg RSA -keysize 2048 -validity 10000 -alias release
call .sync.cmd nopause
pause