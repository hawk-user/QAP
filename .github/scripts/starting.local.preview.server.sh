#!/bin/bash

set -euo pipefail

for arg in "$@"; do
    case $arg in

        --help|-h)
            echo "Usage: ./starting.local.preview.server.sh --port=<number>"
            echo "Example: ./starting.local.preview.server.sh --port=8080"
            exit 0
            ;;

        --port=*)
            PORT="${arg#*=}"
            ;;
        *)

            echo "❌ Error: Unknown option '$arg'"
            echo "Use --help for usage information."
            exit 1
            ;;
    esac
done

if [[ -z "$PORT" ]]; then
    echo "❌ Error: No port provided. Use --port=<number>."
    exit 1
fi

if ! [[ "$PORT" =~ ^[0-9]+$ ]]; then
    echo "❌ Error: Invalid port '$PORT'. Port must be numeric."
    exit 1
fi

if (( PORT < 1 || PORT > 65535 )); then
    echo "❌ Error: Port '$PORT' is out of range (1–65535)."
    exit 1
fi

echo "☄️  Starting local preview server on port ${PORT}..."


if ! command -v pnpm &>/dev/null; then
    echo "🚨 Error: 'pnpm' is not installed or not in PATH. Please install it first."
    exit 1
fi

if ! command -v curl &>/dev/null; then
    echo "🚨 Error: 'curl' is required but not installed."
    exit 1
fi

if lsof -i :"$PORT" &>/dev/null; then
    echo "⚠️  Warning: Port ${PORT} is already in use. Please choose another port."
    exit 1
fi

echo "🏗️  Building project..."
if ! pnpm tsc && vite build --outDir dist; then
    echo "🚨 Build failed. Aborting."
    exit 1
fi

echo "🚀 Launching preview server..."
nohup pnpm preview --port "${PORT}" > ../server.log 2>&1 &

MAX_TRIES=20
for i in $(seq 1 $MAX_TRIES); do

    if curl -s --max-time 2 "http://localhost:${PORT}" | grep -q "<html>"; then
        echo "📡 Local app is live on port ${PORT}."
        exit 0
    fi

    echo "⏳ Waiting for local server to be ready (${i}/${MAX_TRIES})..."
    sleep 5
done

echo "🚨 Server did not respond after $((MAX_TRIES * 5)) seconds."
exit 1
