#!/bin/bash

echo "🔧 Checking deployment readiness..."

# Check if package.json exists
if [ -f "package.json" ]; then
    echo "✅ package.json found"
else
    echo "❌ package.json not found"
    exit 1
fi

# Check if lockfile exists
if [ -f "pnpm-lock.yaml" ]; then
    echo "✅ pnpm-lock.yaml found"
else
    echo "❌ pnpm-lock.yaml not found"
    exit 1
fi

# Check if .npmrc exists
if [ -f ".npmrc" ]; then
    echo "✅ .npmrc configuration found"
else
    echo "⚠️  .npmrc not found (optional but recommended)"
fi

# Check if vercel.json exists
if [ -f "vercel.json" ]; then
    echo "✅ vercel.json configuration found"
else
    echo "⚠️  vercel.json not found (optional but recommended)"
fi

# Test build
echo "🏗️  Testing local build..."
if pnpm run build; then
    echo "✅ Build successful"
else
    echo "❌ Build failed"
    exit 1
fi

echo "🚀 Ready for deployment!"
