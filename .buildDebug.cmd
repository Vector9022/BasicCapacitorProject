@echo off
setlocal enabledelayedexpansion
call .sync.cmd nopause
cd android
call ./gradlew assembleDebug --parallel
cd ..
mkdir ".build"
move "android\app\build\outputs\apk\debug\app-debug.apk" ".build\app-debug.apk"
pause
adb install -r .build\app-debug.apk
for /f "tokens=1,2 delims== " %%a in ('findstr /r "applicationId " android\app\build.gradle') do (set id=%%b)
set appId=%id:"=%
adb shell monkey -p %appId% 1
pause