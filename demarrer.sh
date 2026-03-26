#!/bin/bash
# Script pour démarrer le chatbot AMEN BANK en arrière-plan

# Aller dans le dossier du projet
cd "$(dirname "$0")"

# Arrêter toute instance existante sur ce port précis (5175)
fuser -k 5175/tcp > /dev/null 2>&1

# Vérifier si les dépendances sont installées
if [ ! -d "node_modules" ]; then
    echo "❌ Erreur : Le dossier 'node_modules' est introuvable."
    echo "👉 Veuillez lancer 'npm install' avant de démarrer le serveur."
    exit 1
fi

# Lancer Vite en arrière-plan avec le chemin direct
nohup ./node_modules/.bin/vite > dev-server.log 2>&1 &

# Lancer le tunnel Cloudflared en arrière-plan
nohup cloudflared tunnel --url http://localhost:5175 > cloudflared.log 2>&1 &

echo "✅ Le chatbot AMEN BANK est lancé sur http://localhost:5175"
echo "⏳ Création du tunnel Cloudflare en cours..."
sleep 5
echo "🔗 Lien du tunnel (si disponible) :"
grep -o "https://.*\.trycloudflare\.com" cloudflared.log | tail -n 1
echo "👉 Utilisez ./log.sh pour voir les logs."
echo "👉 Utilisez ./arreter.sh pour arrêter le serveur."
