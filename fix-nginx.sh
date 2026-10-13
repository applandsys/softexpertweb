#!/bin/bash
set -e

echo "=========================================================="
echo "1. Checking all existing 301 redirects in /etc/nginx/"
echo "=========================================================="
grep -rn "301" /etc/nginx/ || echo "No 301 found in /etc/nginx"

echo ""
echo "=========================================================="
echo "2. Detecting Let's Encrypt SSL certificate path"
echo "=========================================================="
CERT_PATH=$(ls -d /etc/letsencrypt/live/softexpertzone.com* 2>/dev/null | head -n 1)
if [ -z "$CERT_PATH" ]; then
    echo "ERROR: SSL certificate folder for softexpertzone.com not found!"
    ls -la /etc/letsencrypt/live/ || true
    exit 1
fi
echo "Found SSL certificate in: $CERT_PATH"

echo ""
echo "=========================================================="
echo "3. Cleaning old/conflicting files in sites-enabled and conf.d"
echo "=========================================================="
rm -f /etc/nginx/sites-enabled/*
rm -f /etc/nginx/conf.d/*.conf

echo ""
echo "=========================================================="
echo "4. Deploying clean softexpertzone.conf"
echo "=========================================================="
cp softexpertzone.conf /etc/nginx/sites-available/softexpertzone.conf
sed -i "s|/etc/letsencrypt/live/softexpertzone.com/fullchain.pem|$CERT_PATH/fullchain.pem|g" /etc/nginx/sites-available/softexpertzone.conf
sed -i "s|/etc/letsencrypt/live/softexpertzone.com/privkey.pem|$CERT_PATH/privkey.pem|g" /etc/nginx/sites-available/softexpertzone.conf

ln -sf /etc/nginx/sites-available/softexpertzone.conf /etc/nginx/sites-enabled/softexpertzone.conf

echo ""
echo "=========================================================="
echo "5. Testing Nginx syntax"
echo "=========================================================="
nginx -t

echo ""
echo "=========================================================="
echo "6. Restarting Nginx"
echo "=========================================================="
systemctl restart nginx

echo ""
echo "=========================================================="
echo "7. Ensuring Docker container is up on port 3000"
echo "=========================================================="
docker compose up -d

echo ""
echo "=========================================================="
echo "8. Testing live curl response from local server"
echo "=========================================================="
curl -IL https://softexpertzone.com/e-commerce-website
