#!/bin/bash
# Script pour arrêter le chatbot AMEN BANK

fuser -k 5175/tcp > /dev/null 2>&1
pkill -f cloudflared > /dev/null 2>&1

echo "🛑 Le serveur a été arrêté."
