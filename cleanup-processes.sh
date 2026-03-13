#!/bin/bash

echo "FNM Law Advocates - Process Cleanup Script"
echo "=========================================="
echo

echo "Checking for running Node.js processes..."
if ! pgrep -f "node" > /dev/null; then
    echo "No Node.js processes found."
    exit 0
fi

echo
echo "Current Node.js processes:"
ps aux | grep -E "node|npm|npx" | grep -v grep
echo

echo "WARNING: This will terminate ALL Node.js/npm processes."
read -p "Do you want to continue? (y/N): " confirm
if [[ ! "$confirm" =~ ^[Yy]$ ]]; then
    echo "Cleanup cancelled."
    exit 0
fi

echo
echo "Terminating Node.js processes..."
if pkill -f "node"; then
    echo "✓ Node.js processes terminated successfully."
else
    echo "! No processes were running or termination failed."
fi

echo
echo "Cleaning build cache..."
if [ -d ".next" ]; then
    echo "Removing .next directory..."
    if rm -rf .next; then
        echo "✓ .next directory removed successfully."
    else
        echo "! Failed to remove .next directory."
    fi
else
    echo "No .next directory found."
fi

if [ -d "node_modules/.cache" ]; then
    echo "Removing node_modules cache..."
    if rm -rf "node_modules/.cache"; then
        echo "✓ Node modules cache cleared."
    else
        echo "! Failed to clear node modules cache."
    fi
else
    echo "No node modules cache found."
fi

echo
echo "Cleanup completed!"
echo
echo "To start fresh:"
echo "1. Run: npm install"
echo "2. Run: npm run dev"
echo