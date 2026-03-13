@echo off
echo FNM Law Advocates - Process Cleanup Script
echo ==========================================
echo.

echo Checking for running Node.js processes...
tasklist | findstr "node" > nul
if %errorlevel% neq 0 (
    echo No Node.js processes found.
    goto :end
)

echo.
echo Current Node.js processes:
tasklist | findstr "node"
echo.

echo WARNING: This will terminate ALL Node.js processes.
set /p confirm="Do you want to continue? (y/N): "
if /i "%confirm%" neq "y" (
    echo Cleanup cancelled.
    goto :end
)

echo.
echo Terminating Node.js processes...
taskkill /F /IM node.exe > nul 2>&1
if %errorlevel% equ 0 (
    echo ✓ Node.js processes terminated successfully.
) else (
    echo ! No processes were running or termination failed.
)

echo.
echo Cleaning build cache...
if exist ".next" (
    echo Removing .next directory...
    rmdir /s /q .next > nul 2>&1
    if %errorlevel% equ 0 (
        echo ✓ .next directory removed successfully.
    ) else (
        echo ! Failed to remove .next directory completely.
    )
) else (
    echo No .next directory found.
)

if exist "node_modules\.cache" (
    echo Removing node_modules cache...
    rmdir /s /q "node_modules\.cache" > nul 2>&1
    if %errorlevel% equ 0 (
        echo ✓ Node modules cache cleared.
    ) else (
        echo ! Failed to clear node modules cache.
    )
) else (
    echo No node modules cache found.
)

echo.
echo Cleanup completed!
echo.
echo To start fresh:
echo 1. Run: npm install
echo 2. Run: npm run dev
echo.

:end
echo.
pause