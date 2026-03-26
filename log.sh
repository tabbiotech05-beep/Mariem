#!/bin/bash
# Script pour voir les logs du chatbot AMEN BANK

# Aller dans le dossier du projet
cd "$(dirname "$0")"

if [ ! -f dev-server.log ]; then
    echo "⚠️ Aucun fichier de log trouvé. Le serveur est-il lancé ?"
    exit 1
fi

tail -f dev-server.log
