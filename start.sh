#!/bin/bash

# Design Hub - Quick Start Script
# This script helps you run the e-commerce prototype

echo "🎨 Design Hub - E-commerce Prototype"
echo "===================================="
echo ""

# Check current directory
if [ ! -f "index.html" ]; then
    echo "❌ Error: Please run this script from the scalex directory"
    echo "   cd /Users/aagarwal/Documents/scalex"
    exit 1
fi

echo "✓ Found project files"
echo ""

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Display options
echo "Choose how to run the prototype:"
echo ""
echo "1) Open directly in browser (simplest)"
echo "2) Python 3 HTTP Server (recommended)"
echo "3) Python 2 HTTP Server"
echo "4) Node.js HTTP Server"
echo "5) PHP Built-in Server"
echo ""
read -p "Enter your choice (1-5): " choice

case $choice in
    1)
        echo ""
        echo "📂 Opening index.html in your default browser..."
        if [[ "$OSTYPE" == "darwin"* ]]; then
            open index.html
        elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
            xdg-open index.html
        else
            start index.html
        fi
        echo "✓ Browser opened!"
        ;;
    
    2)
        if command_exists python3; then
            echo ""
            echo "🚀 Starting Python 3 HTTP Server on port 8000..."
            echo "📱 Open your browser and visit: http://localhost:8000"
            echo ""
            echo "Press Ctrl+C to stop the server"
            echo ""
            python3 -m http.server 8000
        else
            echo "❌ Python 3 not found. Please install Python 3 or choose another option."
            exit 1
        fi
        ;;
    
    3)
        if command_exists python; then
            echo ""
            echo "🚀 Starting Python 2 HTTP Server on port 8000..."
            echo "📱 Open your browser and visit: http://localhost:8000"
            echo ""
            echo "Press Ctrl+C to stop the server"
            echo ""
            python -m SimpleHTTPServer 8000
        else
            echo "❌ Python not found. Please install Python or choose another option."
            exit 1
        fi
        ;;
    
    4)
        if command_exists npx; then
            echo ""
            echo "🚀 Starting Node.js HTTP Server on port 8000..."
            echo "📱 Open your browser and visit: http://localhost:8000"
            echo ""
            echo "Press Ctrl+C to stop the server"
            echo ""
            npx -y http-server -p 8000
        else
            echo "❌ Node.js/npx not found. Please install Node.js or choose another option."
            exit 1
        fi
        ;;
    
    5)
        if command_exists php; then
            echo ""
            echo "🚀 Starting PHP Built-in Server on port 8000..."
            echo "📱 Open your browser and visit: http://localhost:8000"
            echo ""
            echo "Press Ctrl+C to stop the server"
            echo ""
            php -S localhost:8000
        else
            echo "❌ PHP not found. Please install PHP or choose another option."
            exit 1
        fi
        ;;
    
    *)
        echo "❌ Invalid choice. Please run the script again and choose 1-5."
        exit 1
        ;;
esac
