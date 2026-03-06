@echo off
REM Single File Daily Git Push Script for PG Finder Project
REM This script commits and pushes ONE file at a time

echo ========================================
echo PG Finder - Single File Daily Push
echo ========================================
echo.

REM Show all modified/new files
echo Current changes:
git status --short

echo.
echo ========================================
set /p file_path="Enter the file path to commit (e.g., src/pages/owner/AddPG.jsx): "

if "%file_path%"=="" (
    echo Error: File path cannot be empty!
    pause
    exit /b 1
)

REM Check if file exists
if not exist "%file_path%" (
    echo Error: File does not exist!
    pause
    exit /b 1
)

echo.
echo ========================================
echo Adding file: %file_path%
git add "%file_path%"

echo.
set /p commit_msg="Enter commit message (or press Enter for default): "

if "%commit_msg%"=="" (
    REM Generate default commit message with filename and date
    for /f "tokens=2-4 delims=/ " %%a in ('date /t') do (set mydate=%%c-%%a-%%b)
    set commit_msg=Update %file_path% - %mydate%
)

echo.
echo Committing with message: %commit_msg%
git commit -m "%commit_msg%"

echo.
echo ========================================
echo Pushing to GitHub...
git push origin main

echo.
echo ========================================
echo Done! File '%file_path%' has been pushed to GitHub.
echo ========================================
pause
