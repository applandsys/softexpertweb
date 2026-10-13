#!/bin/bash
set -e

echo "=========================================================="
echo "1. Rebuilding Docker container with latest Dockerfile"
echo "=========================================================="
cd /var/www/softexpertweb
docker compose up -d --build

echo ""
echo "=========================================================="
echo "2. Testing Port 3000 directly from inside server"
echo "=========================================================="
curl -I http://127.0.0.1:3000/e-commerce-website || echo "PORT 3000 COULD NOT BE REACHED"

echo ""
echo "=========================================================="
echo "3. Removing any old conflicting files in Nginx"
echo "=========================================================="
rm -f /etc/nginx/sites-enabled/*
rm -f /etc/nginx/conf.d/*.conf
rm -f /etc/nginx/sites-available/softexpertzone.com.conf

CERT_PATH=$(ls -d /etc/letsencrypt/live/softexpertzone.com* 2>/dev/null | head -n 1)
echo "SSL cert: $CERT_PATH"

cp softexpertzone.conf /etc/nginx/sites-available/softexpertzone.conf
sed -i "s|/etc/letsencrypt/live/softexpertzone.com/fullchain.pem|$CERT_PATH/fullchain.pem|g" /etc/nginx/sites-available/softexpertzone.conf
sed -i "s|/etc/letsencrypt/live/softexpertzone.com/privkey.pem|$CERT_PATH/privkey.pem|g" /etc/nginx/sites-available/softexpertzone.conf

ln -sf /etc/nginx/sites-available/softexpertzone.conf /etc/nginx/sites-enabled/softexpertzone.conf

echo ""
echo "=========================================================="
echo "4. Testing Nginx syntax and restarting"
echo "=========================================================="
nginx -t
systemctl restart nginx

echo ""
echo "=========================================================="
echo "5. Testing HTTP (Port 80) via localhost"
echo "=========================================================="
curl -I -H "Host: softexpertzone.com" http://127.0.0.1/e-commerce-website || true

echo ""
echo "=========================================================="
echo "6. Testing HTTPS (Port 443) via localhost"
echo "=========================================================="
curl -k -I -H "Host: softexpertzone.com" https://127.0.0.1/e-commerce-website || true

echo ""
echo "=========================================================="
echo "7. Testing full domain curl"
echo "=========================================================="
curl -IL https://softexpertzone.com/e-commerce-website
