// Intent detection engine — keyword/regex scoring across 15 categories
// Supports: French, Arabic, Tunisian dialect

const INTENTS = {
    // ── Banking Categories ──────────────────────────────────────────────────────
    info_horaires: {
        keywords: ["horaire", "heure", "ouverture", "fermeture", "agence", "localisation", "adresse", "où", "situee",
            "mifteh", "waqt", "sa3a", "sa3aat", "fein el far3", "far3"],
        weight: 10,
    },
    info_conditions: {
        keywords: ["ouvrir", "ouverture compte", "conditions", "document", "pièce identité", "cin", "carte identité",
            "créer compte", "nouveau compte", "nbeh nfetah", "compte", "formalités"],
        weight: 10,
    },
    info_tarifs: {
        keywords: ["tarif", "commission", "frais", "prix", "coût", "combien", "taxe", "payer", "qchhal", "qaddesh"],
        weight: 10,
    },
    info_delais: {
        keywords: ["délai", "traitement", "combien de temps", "quand", "durée", "attendre", "waqtesh"],
        weight: 8,
    },
    solde_transactions: {
        keywords: ["solde", "balance", "combien j'ai", "historique", "transactions", "mouvements", "qassem", "kchef",
            "hsabek", "relevé", "extrait", "compte", "argent", "flouss"],
        weight: 12,
    },
    virement: {
        keywords: ["virement", "virer", "transférer", "envoyer argent", "envoi", "swift", "national", "international",
            "ab3ath", "transfer", "mandat", "rib"],
        weight: 10,
    },
    carte_probleme: {
        keywords: ["carte", "bloquée", "bloquer", "perdue", "volée", "problème carte", "signaler", "opposition",
            "karta", "mchkelti", "olet"],
        weight: 10,
    },
    releve_document: {
        keywords: ["relevé", "document", "attestation", "certificat", "bordereau", "courrier", "papier"],
        weight: 8,
    },
    credit_consommation: {
        keywords: ["crédit consommation", "prêt personnel", "financement", "voiture", "auto", "achat", "emprunt",
            "qroudh", "mrabaha"],
        weight: 10,
    },
    credit_immobilier: {
        keywords: ["crédit immobilier", "hypothèque", "logement", "maison", "appartement", "dar", "immeuble", "construire"],
        weight: 10,
    },
    operations_internationales: {
        keywords: ["international", "swift", "devises", "étranger", "change", "taux change", "dollar", "euro", "dinar",
            "crédit documentaire", "LC", "lettre crédit", "export", "import", "douane", "commerce extérieur"],
        weight: 12,
    },
    inclusion_financiere: {
        keywords: ["bancarisation", "premier compte", "jamais eu compte", "rural", "agriculteur", "non bancarisé",
            "wesh", "chneya", "kifeh", "3leh", "mch3aref", "maaref", "barsha", "taw"],
        weight: 10,
    },
    securite_risque: {
        keywords: ["suspect", "fraude", "frauduleux", "arnaque", "phishing", "vol", "bizarre", "transaction inhabituelle",
            "alerte", "hacking", "piraté", "danger", "mchkouk"],
        weight: 15,
    },
    escalade_conseiller: {
        keywords: ["conseiller", "humain", "parler à quelqu'un", "rendez-vous", "rdv", "prendre rdv", "expert",
            "rencontrer", "agence", "appointment"],
        weight: 8,
    },

    // ── Investment & Finance Categories ─────────────────────────────────────────
    education_financiere: {
        keywords: ["c'est quoi", "qu'est-ce", "expliquer", "comprendre", "action", "obligation", "dividende",
            "bourse", "investissement", "épargne", "rendement", "risque", "apprendre", "chneya hiya",
            "chneya el bourse", "ma3riftech"],
        weight: 10,
    },
    marche_tunisien: {
        keywords: ["bvmt", "tunindex", "tunindex20", "cmf", "marché financier", "bourse tunis", "indice",
            "sociétés cotées", "actions tunisiennes"],
        weight: 12,
    },
    profil_investisseur: {
        keywords: ["profil", "investisseur", "risque", "tolérance", "objectif financier", "retraite", "projet",
            "horizon placement", "quel type", "quiz", "évaluation", "analyser profil"],
        weight: 10,
    },
    recommandation_produits: {
        keywords: ["recommander", "conseiller", "quel produit", "meilleur placement", "où placer", "investir comment",
            "quoi choisir", "produit épargne", "opcvm", "bon trésor", "assurance vie", "pel"],
        weight: 12,
    },
    simulation: {
        keywords: ["simuler", "simulation", "calculer", "calcul", "combien vaut", "si je place", "épargner",
            "intérêts composés", "projection", "après x ans", "capital futur", "estimer"],
        weight: 12,
    },
    suivi_portefeuille: {
        keywords: ["portefeuille", "performance", "rééquilibrer", "dividende", "remboursement", "rendement actuel",
            "mes placements", "comparer indice", "diversifier"],
        weight: 10,
    },
    inclusion_investissement: {
        keywords: ["petit montant", "peu d'argent", "commencer avec peu", "micro-épargne", "100 dinar", "50 dinar",
            "même avec peu", "primo-investisseur", "première fois investir", "barsha ma3ndich"],
        weight: 10,
    },
};

/**
 * Detect the most likely intent from user input
 * Returns { intent, confidence, rawScores }
 */
export function detectIntent(text) {
    const lower = text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const scores = {};

    for (const [intent, config] of Object.entries(INTENTS)) {
        let score = 0;
        for (const kw of config.keywords) {
            const kwNorm = kw.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            if (lower.includes(kwNorm)) {
                score += config.weight;
            }
        }
        if (score > 0) scores[intent] = score;
    }

    if (Object.keys(scores).length === 0) {
        return { intent: "default", confidence: 0, rawScores: {} };
    }

    const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const topIntent = sorted[0][0];
    const topScore = sorted[0][1];
    const confidence = Math.min(topScore / 30, 1);

    return { intent: topIntent, confidence, rawScores: scores };
}

export const INTENT_LABELS = Object.keys(INTENTS);
