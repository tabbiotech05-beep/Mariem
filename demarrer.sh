#!/bin/bash
# Script pour démarrer le chatbot AMEN BANK en arrière-plan

# Aller dans le dossier du projet
cd "$(dirname "$0")"

# Arrêter toute instance existante sur ce port précis (5175)
fuser -k 5175/tcp > /dev/null 2>&1

# Lancer en arrière-plan
nohup npm run dev > dev-server.log 2>&1 &

echo "✅ Le chatbot AMEN BANK est lancé sur http://localhost:5175"
echo "👉 Utilisez ./log.sh pour voir les logs."
echo "👉 Utilisez ./arreter.sh pour arrêter le serveur."
