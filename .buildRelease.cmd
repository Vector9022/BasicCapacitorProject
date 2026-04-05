@echo off
setlocal
call .sync.cmd nopause
cd android
call ./gradlew assembleRelease --parallel
cd ..
zipalign -v -p 4 android/app/build/outputs/apk/release/app-release-unsigned.apk android/app/build/outputs/apk/release/app-release-unsigned-aligned.apk
call apksigner sign --ks releaseKey.jks --ks-key-alias release --out android/app/build/outputs/apk/release/app-release-signed-aligned.apk android/app/build/outputs/apk/release/app-release-unsigned-aligned.apk
call apksigner verify --verbose android/app/build/outputs/apk/release/app-release-signed-aligned.apk
mkdir ".build"
move "android\app\build\outputs\apk\release\app-release-signed-aligned.apk" ".build\app-release.apk"
pause