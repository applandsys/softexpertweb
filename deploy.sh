#!/bin/bash
set -e

echo "=== Pulling latest changes from Git ==="
git pull origin master || git pull origin main || git pull

echo "=== Building and restarting Docker containers ==="
docker compose up -d --build

echo "=== Cleaning up dangling images ==="
docker image prune -f

echo "=== Deployment completed successfully! ==="
