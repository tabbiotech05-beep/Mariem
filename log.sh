#!/bin/bash
# Script pour voir les logs du chatbot AMEN BANK

# Aller dans le dossier du projet
cd "$(dirname "$0")"

# Par défaut, on montre les logs de Vite
LOG_FILE="dev-server.log"

# Si on passe "cf" en argument, on montre les logs de Cloudflare
if [ "$1" == "cf" ]; then
    LOG_FILE="cloudflared.log"
fi

if [ ! -f "$LOG_FILE" ]; then
    echo "⚠️ Aucun fichier de log $LOG_FILE trouvé. Le serveur est-il lancé ?"
    exit 1
fi

echo "📖 Affichage des logs : $LOG_FILE (Appuyez sur Ctrl+C pour quitter)"
tail -f "$LOG_FILE"
