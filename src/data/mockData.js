// AMEN BANK Mock Data — agences, products, transactions, exchange rates, portfolio

export const agences = [
    { id: 1, nom: "Agence Principale – Tunis Centre", adresse: "Av. Mohamed V, Tunis 1002", horaires: "Lun–Ven: 8h30–16h30 | Sam: 8h30–12h30", tel: "+216 71 148 000" },
    { id: 2, nom: "Agence La Marsa", adresse: "Rue du Marché, La Marsa 2078", horaires: "Lun–Ven: 8h30–16h30 | Sam: 8h30–12h30", tel: "+216 71 748 200" },
    { id: 3, nom: "Agence Sfax", adresse: "Av. Habib Bourguiba, Sfax 3000", horaires: "Lun–Ven: 8h30–16h30", tel: "+216 74 221 500" },
    { id: 4, nom: "Agence Sousse", adresse: "Rue Ibn Khaldoun, Sousse 4000", horaires: "Lun–Ven: 8h30–16h30", tel: "+216 73 215 600" },
    { id: 5, nom: "Agence Nabeul", adresse: "Av. Habib Thameur, Nabeul 8000", horaires: "Lun–Ven: 8h30–16h30", tel: "+216 72 286 100" },
    { id: 6, nom: "Agence Monastir", adresse: "Rue de l'Indépendance, Monastir 5000", horaires: "Lun–Ven: 8h30–16h30", tel: "+216 73 462 300" },
];

export const transactions = [
    { id: 1, date: "2026-02-20", libelle: "Virement reçu – Salaire Entreprise XYZ", montant: +3500, type: "credit", solde: 12850 },
    { id: 2, date: "2026-02-18", libelle: "Paiement chèque – Loyer", montant: -800, type: "debit", solde: 9350 },
    { id: 3, date: "2026-02-15", libelle: "Retrait DAB – La Marsa", montant: -300, type: "debit", solde: 10150 },
    { id: 4, date: "2026-02-12", libelle: "Virement international reçu – EUR → TND", montant: +1240, type: "credit", solde: 10450 },
    { id: 5, date: "2026-02-10", libelle: "Paiement en ligne – TOPNET", montant: -65, type: "debit", solde: 9210 },
    { id: 6, date: "2026-02-08", libelle: "Placement OPCVM – Souscription", montant: -2000, type: "debit", solde: 9275 },
    { id: 7, date: "2026-02-05", libelle: "Virement sortant – Famille Sfax", montant: -500, type: "debit", solde: 11275 },
    { id: 8, date: "2026-02-01", libelle: "Paiement facture STEG", montant: -120, type: "debit", solde: 11775 },
];

export const compteInfo = {
    nom: "Ahmed Ben Salah",
    rib: "07 006 0010000012345 67",
    solde: 12850,
    devise: "TND",
    typeCompte: "Compte Courant",
    agence: "Agence Tunis Centre",
    ouvertLe: "2019-03-15",
};

export const exchangeRates = [
    { devise: "EUR", flag: "🇪🇺", achat: 3.285, vente: 3.312, variation: +0.012 },
    { devise: "USD", flag: "🇺🇸", achat: 3.045, vente: 3.072, variation: -0.008 },
    { devise: "GBP", flag: "🇬🇧", achat: 3.840, vente: 3.872, variation: +0.021 },
    { devise: "CHF", flag: "🇨🇭", achat: 3.410, vente: 3.440, variation: +0.005 },
    { devise: "SAR", flag: "🇸🇦", achat: 0.801, vente: 0.820, variation: -0.002 },
    { devise: "CAD", flag: "🇨🇦", achat: 2.190, vente: 2.215, variation: +0.009 },
];

export const produitsEpargne = [
    {
        id: "livret_a",
        nom: "Livret d'Épargne AMEN",
        type: "Épargne sécurisée",
        rendement: "5.25% / an",
        risque: "Faible",
        liquidite: "Immédiate",
        montantMin: 100,
        profil: ["défensif"],
        description: "Épargne sécurisée garantie, parfaite pour un fonds de précaution.",
        avantages: ["Capital garanti", "Aucun frais", "Disponible immédiatement"],
    },
    {
        id: "depot_terme",
        nom: "Dépôt à Terme",
        type: "Épargne à terme",
        rendement: "7.5–9.0% / an",
        risque: "Très faible",
        liquidite: "À l'échéance",
        montantMin: 1000,
        profil: ["défensif", "équilibré"],
        description: "Placement à taux fixe sur 3, 6, 12 ou 24 mois. Idéal pour un projet précis.",
        avantages: ["Taux garanti", "Flexible en durée", "Fiscalité avantageuse"],
    },
    {
        id: "bon_tresor",
        nom: "Bons du Trésor",
        type: "Obligations d'État",
        rendement: "8.0–9.5% / an",
        risque: "Faible",
        liquidite: "Secondaire",
        montantMin: 5000,
        profil: ["défensif", "équilibré"],
        description: "Titres émis par l'État tunisien, garantis par la République Tunisienne.",
        avantages: ["Sécurité maximale", "Bon rendement", "Négociable"],
    },
    {
        id: "opcvm_monetaire",
        nom: "OPCVM Monétaire",
        type: "Fonds commun de placement",
        rendement: "6–7% / an",
        risque: "Faible",
        liquidite: "J+3",
        montantMin: 500,
        profil: ["défensif", "équilibré"],
        description: "Fonds investi en instruments du marché monétaire, géré par des experts AMEN.",
        avantages: ["Diversification automatique", "Gestion professionnelle", "Accessible"],
    },
    {
        id: "opcvm_obligataire",
        nom: "OPCVM Obligataire",
        type: "Fonds commun de placement",
        rendement: "8–10% / an",
        risque: "Modéré",
        liquidite: "J+5",
        montantMin: 1000,
        profil: ["équilibré"],
        description: "Fonds investi en obligations et bons du Trésor pour un rendement optimisé.",
        avantages: ["Rendement supérieur", "Risque maîtrisé", "Accessible à tous"],
    },
    {
        id: "opcvm_actions",
        nom: "OPCVM Actions BVMT",
        type: "Fonds actions",
        rendement: "10–15% / an (estimé)",
        risque: "Élevé",
        liquidite: "J+5",
        montantMin: 2000,
        profil: ["dynamique"],
        description: "Fonds investi en actions cotées à la BVMT, pour maximiser la performance sur le long terme.",
        avantages: ["Potentiel de gain élevé", "Expertise des gérants", "Diversifié BVMT"],
    },
    {
        id: "assurance_vie",
        nom: "Assurance-Vie & Épargne Retraite",
        type: "Épargne long terme",
        rendement: "6–8% / an garantis",
        risque: "Faible",
        liquidite: "À la retraite / Rachat partiel",
        montantMin: 200,
        profil: ["défensif", "équilibré", "dynamique"],
        description: "Solution complète pour préparer sa retraite avec couverture décès incluse.",
        avantages: ["Capital + décès garanti", "Avantages fiscaux", "Flexible"],
    },
    {
        id: "plan_epargne_logement",
        nom: "Plan Épargne Logement (PEL)",
        type: "Épargne projet immobilier",
        rendement: "5.5% + prime État",
        risque: "Nul",
        liquidite: "Après 2 ans minimum",
        montantMin: 50,
        profil: ["défensif", "équilibré"],
        description: "Épargnez pour votre futur logement et bénéficiez d'un prêt immobilier préférentiel.",
        avantages: ["Taux préférentiel crédit immobilier", "Prime État", "Accessible dès 50 TND"],
    },
];

export const portfolioMock = {
    valeurTotale: 18400,
    performance: +12.3,
    repartition: [
        { name: "OPCVM Obligataire", value: 6000, color: "#003580", pct: 32.6 },
        { name: "Bons du Trésor", value: 5000, color: "#C8A000", pct: 27.2 },
        { name: "Dépôt à Terme", value: 4000, color: "#22C55E", pct: 21.7 },
        { name: "OPCVM Actions", value: 2400, color: "#F59E0B", pct: 13.0 },
        { name: "Livret Épargne", value: 1000, color: "#64748B", pct: 5.5 },
    ],
    historique: [
        { mois: "Sep", valeur: 15200 },
        { mois: "Oct", valeur: 15800 },
        { mois: "Nov", valeur: 16100 },
        { mois: "Déc", valeur: 15700 },
        { mois: "Jan", valeur: 17200 },
        { mois: "Fév", valeur: 18400 },
    ],
};

export const bvmtData = {
    tunindex: { valeur: 9847.32, variation: +1.24, variationPct: +0.013 },
    tunindex20: { valeur: 4215.67, variation: -8.45, variationPct: -0.002 },
    societes: [
        { ticker: "BIAT", nom: "Banque Internationale Arabe de Tunisie", secteur: "Banque", cours: 142.5, variation: +2.1 },
        { ticker: "ATB", nom: "Arab Tunisian Bank", secteur: "Banque", cours: 8.94, variation: -0.12 },
        { ticker: "SFBT", nom: "Société de Fabrication des Boissons de Tunisie", secteur: "Agroalimentaire", cours: 16.80, variation: +0.5 },
        { ticker: "TPC", nom: "Tunisian Petroleum Company", secteur: "Pétrole & Gaz", cours: 12.20, variation: +0.3 },
        { ticker: "AMEN", nom: "AMEN BANK", secteur: "Banque", cours: 52.30, variation: +0.8 },
    ],
};

export const conseillers = [
    { id: 1, nom: "Hana Trabelsi", specialite: "Crédit Immobilier & Épargne", disponible: true, photo: "HT" },
    { id: 2, nom: "Karim Mansouri", specialite: "Opérations Internationales", disponible: true, photo: "KM" },
    { id: 3, nom: "Sonia Belhaj", specialite: "Investissement & Marchés Financiers", disponible: false, photo: "SB" },
    { id: 4, nom: "Youssef Hamdi", specialite: "PME & Crédit Entreprise", disponible: true, photo: "YH" },
];
