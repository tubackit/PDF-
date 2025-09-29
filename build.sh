#!/bin/bash

echo "Building PDF Tools Application..."
echo

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "Error: Node.js is not installed"
    echo "Please install Node.js from https://nodejs.org/"
    exit 1
fi

# Check if npm is available
if ! command -v npm &> /dev/null; then
    echo "Error: npm is not available"
    exit 1
fi

echo "Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "Error: Failed to install dependencies"
    exit 1
fi

echo
echo "Building application..."

# Detect platform and build accordingly
case "$(uname -s)" in
    Darwin*)
        echo "Building for macOS..."
        npm run build-mac
        ;;
    Linux*)
        echo "Building for Linux..."
        npm run build-linux
        ;;
    CYGWIN*|MINGW32*|MSYS*|MINGW*)
        echo "Building for Windows..."
        npm run build-win
        ;;
    *)
        echo "Unknown platform. Building for current platform..."
        npm run build
        ;;
esac

if [ $? -ne 0 ]; then
    echo "Error: Build failed"
    exit 1
fi

echo
echo "Build completed successfully!"
echo "The application can be found in the 'dist' folder."
echo
