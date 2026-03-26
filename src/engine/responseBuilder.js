// Response builder — maps intents to structured responses (text + widget)

export const WIDGET_TYPES = {
    AGENCES: "agences",
    TRANSACTIONS: "transactions",
    EXCHANGE_RATES: "exchange_rates",
    SIMULATOR: "simulator",
    RISK_QUIZ: "risk_quiz",
    PRODUCTS: "products",
    PORTFOLIO: "portfolio",
    BVMT: "bvmt",
    APPOINTMENT: "appointment",
    CREDIT_FORM: "credit_form",
};

const RESPONSES = {
    info_horaires: {
        fr: {
            text: `Voici les informations sur nos **agences AMEN BANK** les plus proches 📍\n\nToutes nos agences sont ouvertes du **lundi au vendredi de 8h30 à 16h30**. Le samedi, nos agences centrales ouvrent de 8h30 à 12h30.\n\nPour les opérations urgentes, vous pouvez aussi utiliser notre **service bancaire en ligne 24h/24** ou nos DAB disponibles en permanence.`,
            widget: WIDGET_TYPES.AGENCES,
            quickReplies: ["Ouvrir un compte", "Parler à un conseiller", "Services en ligne"],
        },
        tn: {
            text: `Ahlan! Voici les farè3 mte3 AMEN BANK 📍\n\nFar3 el Tunis markouz yeftah men **8h30 l 16h30** من الاثنين لحد الجمعة. الأحد مسكر.\n\nAma tnajem ta3mel operations online 24/24 🏦`,
            widget: WIDGET_TYPES.AGENCES,
            quickReplies: ["Nfeteh compte", "Ncallm ma3 conseiller"],
        },
        ar: {
            text: `مرحباً! إليك أقرب فروع بنك الأمان 📍\n\nجميع الفروع مفتوحة من **الاثنين إلى الجمعة من 8:30 إلى 16:30**. السبت مفتوح حتى 12:30 للفروع الرئيسية.\n\nيمكنك أيضاً استخدام خدماتنا الرقمية على مدار الساعة.`,
            widget: WIDGET_TYPES.AGENCES,
            quickReplies: ["فتح حساب", "التحدث مع مستشار"],
        },
    },

    info_conditions: {
        fr: {
            text: `Pour **ouvrir un compte bancaire** chez AMEN BANK, voici ce qu'il vous faut :\n\n**Particulier :**\n• Carte d'identité nationale (CIN) ou passeport valide\n• Justificatif de domicile de moins de 3 mois\n• Dépôt initial minimum : **100 TND**\n• Formulaire de demande d'ouverture (rempli en agence)\n\n**Pour les non-résidents :**\n• Passeport valide\n• Visa ou titre de séjour\n• Justificatif d'adresse à l'étranger\n\nVoulez-vous prendre rendez-vous en agence pour compléter votre dossier ?`,
            widget: null,
            quickReplies: ["Prendre un RDV", "Compte épargne", "Tarifs et frais"],
        },
        tn: {
            text: `Tnajjem tou3od compte fi AMEN BANK b'haja basita :\n\n• **CIN** mte3ek wala passeport\n• Wtheqa el 3onwen (facture, contrat loyer)\n• Dépôt awal : **100 DT**\n\nTtahed fel far3 w nsawwroulk el papiers. Tabi RDV ?`,
            widget: null,
            quickReplies: ["Nakhouth RDV", "Chhed compte epargne", "Les frais qaddesh?"],
        },
        ar: {
            text: `لفتح حساب في بنك الأمان تحتاج:\n\n• **بطاقة هوية وطنية** أو جواز سفر ساري\n• وثيقة إقامة حديثة (أقل من 3 أشهر)\n• إيداع أولي: **100 دينار**\n• استمارة الطلب تُملأ في الفرع\n\nهل تريد حجز موعد؟`,
            widget: null,
            quickReplies: ["حجز موعد", "حساب توفير", "الرسوم والعمولات"],
        },
    },

    info_tarifs: {
        fr: {
            text: `Voici un récapitulatif des **principaux tarifs AMEN BANK** :\n\n| Service | Tarif |\n|---------|-------|\n| Tenue de compte | **Gratuite** |\n| Carte bancaire Visa Classic | 25 TND/an |\n| Carte bancaire Visa Gold | 50 TND/an |\n| Virement national | 2 TND |\n| Virement international | 15–25 TND + frais banque corr. |\n| Retrait DAB réseau AMEN | **Gratuit** |\n| Retrait DAB hors réseau | 1 TND |\n| Chèque de banque | 10 TND |\n\nVous souhaitez des détails sur un service particulier ?`,
            widget: null,
            quickReplies: ["Virements internationaux", "Cartes bancaires", "Crédit à la consommation"],
        },
        tn: {
            text: `Waw, voici les frais mte3na :\n\n• Compte : **Gratuit** mafech commissions\n• Carte Visa: 25–50DT/an\n• Virement local: 2DT\n• Virement international: 15–25DT\n• Retrait DAB AMEN: **Gratuit** 🎉\n\nTabi plus d'infos 3la chay ?`,
            widget: null,
            quickReplies: ["Carte bancaire", "Virements", "Crédits"],
        },
        ar: null,
    },

    info_delais: {
        fr: {
            text: `Voici les **délais de traitement** habituels chez AMEN BANK :\n\n⚡ **Instantané** : Consultation solde, historique\n📅 **24h** : Virements nationaux\n🌍 **2–5 jours** : Virements internationaux (SWIFT)\n🏠 **15–30 jours** : Crédit immobilier (accord préalable)\n🚗 **7–10 jours** : Crédit à la consommation\n💳 **5–7 jours** : Nouvelle carte bancaire\n\nBesoin d'aide pour une opération spécifique ?`,
            widget: null,
            quickReplies: ["Suivre mon virement", "Crédit immobilier", "Nouvelle carte"],
        },
        tn: {
            text: `Délais normaux fi AMEN BANK :\n\n⚡ **Lhtha** : Solde w historique\n📅 **24H** : Virement tunisien\n🌍 **2-5 jours** : Virement l'étranger\n🏠 **15-30 jours** : Crédit immobilier\n\nAy opération tabi ta3mel ?`,
            widget: null,
            quickReplies: ["Virement", "Crédit"],
        },
        ar: null,
    },

    solde_transactions: {
        fr: {
            text: `Voici votre **situation de compte** en temps réel 📊\n\nPour des raisons de sécurité, j'ai vérifié votre identité. Vous pouvez consulter le détail complet de vos mouvements ci-dessous.`,
            widget: WIDGET_TYPES.TRANSACTIONS,
            quickReplies: ["Faire un virement", "Demander un relevé", "Signaler une transaction"],
        },
        tn: {
            text: `Kahh ! Voici le compte mte3ek 💳\n\nSolde w transactions ki bdhom. Tabi ta3mel chay ?`,
            widget: WIDGET_TYPES.TRANSACTIONS,
            quickReplies: ["Virement", "Relevé", "Mchkelti fi transaction"],
        },
        ar: null,
    },

    virement: {
        fr: {
            text: `Je peux vous aider à **initier un virement** 💸\n\nPour un virement **national** (vers une banque tunisienne), j'aurai besoin de :\n• RIB du bénéficiaire (20 chiffres)\n• Montant et motif\n• Date d'exécution souhaitée\n\nPour un virement **international (SWIFT)** :\n• IBAN et BIC/SWIFT du bénéficiaire\n• Pays de destination\n• Devise et montant\n\nQuelle option souhaitez-vous ?`,
            widget: null,
            quickReplies: ["Virement national", "Virement international", "Taux de change"],
        },
        tn: {
            text: `Tabi tab3ath flouss ? 💸\n\n**National** : RIB mte3 eli tab3ath leh + montant\n**International** : IBAN + SWIFT + devise\n\nAy des deux tabi ?`,
            widget: null,
            quickReplies: ["National", "International", "Taux change"],
        },
        ar: null,
    },

    carte_probleme: {
        fr: {
            text: `⚠️ Je traite votre signalement de problème de carte bancaire.\n\n**Que souhaitez-vous faire ?**\n\n🔴 **Blocage immédiat** — Si votre carte est perdue ou volée, je peux l'opposer immédiatement\n🔧 **Problème technique** — Carte refusée, lecteur défaillant\n🔄 **Renouvellement** — Demander une nouvelle carte\n\n_Si votre carte est volée, je vous conseille de l'opposer maintenant et de contacter la police._`,
            widget: null,
            quickReplies: ["Bloquer ma carte maintenant", "Problème technique", "Demander un renouvellement"],
        },
        tn: null,
        ar: null,
    },

    releve_document: {
        fr: {
            text: `Je peux vous aider à obtenir vos **documents bancaires** 📄\n\n• **Relevé de compte** : Disponible en téléchargement (3 derniers mois) ou sur demande pour les archives\n• **Attestation de solde** : Délivrée sous 24h en agence\n• **Attestation de bonne conduite** : Sous 48h\n• **Fiche de situation** : Immédiate via application\n\nQuel document souhaitez-vous ?`,
            widget: null,
            quickReplies: ["Relevé mensuel", "Attestation de solde", "Attestation bonne conduite"],
        },
        tn: null,
        ar: null,
    },

    credit_consommation: {
        fr: {
            text: `💳 **Crédit à la Consommation AMEN BANK**\n\nNous finançons vos projets personnels :\n\n| Type | Montant | Durée | Taux |\n|------|---------|-------|------|\n| Personnel | jusqu'à 50.000 TND | 1–7 ans | BDET + marge |\n| Auto | jusqu'à 80.000 TND | 1–5 ans | Taux préférentiel |\n| Éducation | jusqu'à 30.000 TND | 1–5 ans | Taux réduit |\n\n**Pour pré-qualifier votre demande**, j'ai besoin de quelques informations. Prêt à commencer ?`,
            widget: WIDGET_TYPES.CREDIT_FORM,
            quickReplies: ["Simuler ma mensualité", "Documents nécessaires", "Parler à un conseiller"],
        },
        tn: null,
        ar: null,
    },

    credit_immobilier: {
        fr: {
            text: `🏠 **Crédit Immobilier AMEN BANK**\n\nFinancez votre rêve :\n\n• Montant : jusqu'à **500.000 TND**\n• Durée : jusqu'à **25 ans**\n• Apport personnel : minimum **20%**\n• Taux : **BDET + 2,5%**\n• Assurance décès-invalidité incluse\n\n**Étapes :**\n1. Pré-qualification en ligne (ici ✅)\n2. Dossier complet en agence\n3. Évaluation du bien\n4. Accord de crédit (15–30 jours)\n\nSouhaitez-vous simuler vos mensualités ?`,
            widget: WIDGET_TYPES.SIMULATOR,
            quickReplies: ["Simuler mensualité", "Documents requis", "Prendre RDV"],
        },
        tn: null,
        ar: null,
    },

    operations_internationales: {
        fr: {
            text: `🌍 **Opérations Internationales AMEN BANK**\n\nNous sommes votre partenaire pour toutes les opérations transfrontalières :\n\n• **Taux de change** actuels contre le Dinar Tunisien\n• **Virements SWIFT** vers plus de 150 pays\n• **Lettres de crédit (LC/Credoc)** pour import/export\n• **Remises documentaires**\n• **Garanties bancaires** internationales\n\nLa réglementation tunisienne des changes (BCT) s'applique à toutes les opérations internationales.`,
            widget: WIDGET_TYPES.EXCHANGE_RATES,
            quickReplies: ["Taux de change", "Virement international", "Crédit documentaire"],
        },
        tn: null,
        ar: null,
    },

    inclusion_financiere: {
        fr: {
            text: `😊 Bienvenue ! Vous faites le **premier pas vers la bancarisation** et c'est formidable.\n\nUne banque, c'est simple : c'est un endroit sûr pour garder votre argent, le faire fructifier, et accéder à des services utiles.\n\n**Avec un compte AMEN BANK :**\n✅ Votre argent est **sécurisé et garanti**\n✅ Vous recevez votre salaire directement\n✅ Vous pouvez épargner, même **50 DT par mois**\n✅ Vous accédez à des crédits pour vos projets\n\nJe vais vous guider étape par étape !`,
            widget: null,
            quickReplies: ["Comment ouvrir un compte?", "Épargner avec peu", "Mes droits en banque"],
        },
        tn: {
            text: `Marhba bik! 🤝\n\nBanque = makenn aamen lel flouss mte3ek + tanajjem tjib rbeh!\n\nMa3ek hatta 50 DT — **tanajjem tebda!**\n\n✅ Flouss mte3ek mahfoudhin\n✅ Tanajjem ti8dh crédit\n✅ Tanajjem teb3ath l'étranger\n\nNbdaw bel awal, anaya m3ak pas à pas 👇`,
            widget: null,
            quickReplies: ["Kifeh nfeteh compte?", "Epargner b barcha mch flouss", "Les avantages"],
        },
        ar: {
            text: `أهلاً وسهلاً! 🤝\n\nالبنك مكان آمن لحفظ أموالك وتنميتها. مع بنك الأمان:\n\n✅ أموالك مضمونة ومحمية\n✅ يمكنك الادخار بدءاً من **50 دينار فقط**\n✅ الحصول على قروض لمشاريعك\n✅ التحويل والدفع الإلكتروني\n\nسأرشدك خطوة بخطوة!`,
            widget: null,
            quickReplies: ["كيف أفتح حساباً؟", "الادخار بمبالغ صغيرة"],
        },
    },

    securite_risque: {
        fr: {
            text: `🚨 **ALERTE SÉCURITÉ** — Je prends cela très au sérieux.\n\nSi vous avez détecté une transaction suspecte ou pensez que votre compte a été compromis :\n\n**⚡ Actions immédiates recommandées :**\n1. 🔴 **Bloquez votre carte** immédiatement\n2. 📞 **Appelez le 71 148 000** (hot-line sécurité 24h/24)\n3. ✉️ **Signalez la transaction** via ce chat\n4. 🏛️ En cas de fraude avérée : portez plainte\n\n_Notre équipe de conformité a été notifiée. Un conseiller vous contactera dans l'heure._\n\n**Votre sécurité est notre priorité absolue.**`,
            widget: null,
            quickReplies: ["Bloquer ma carte", "Parler à la sécurité", "Signaler une fraude"],
        },
        tn: {
            text: `⚠️ Mchkela sera! Tanajjem t3amel haka :\n\n1. 🔴 Bloque el carte mte3ek **lhtha**\n2. 📞 Call **71 148 000** — disponible 24/24\n3. Barra el transaction hena\n\nFerqa mte3na besh tcallmek fi sa3a. 💪`,
            widget: null,
            quickReplies: ["Block carte", "Tcallam m3a sécurité"],
        },
        ar: null,
    },

    escalade_conseiller: {
        fr: {
            text: `Je comprends que vous souhaitez parler à un **conseiller humain**. 🤝\n\nNos conseillers sont disponibles du **lundi au vendredi de 8h30 à 16h30**.\n\nJe peux :\n• Vous programmer un **rendez-vous** avec le bon spécialiste\n• Vous mettre en relation **immédiatement** si un conseiller est disponible\n• Transmettre votre dossier avec le contexte de notre échange\n\nQue préférez-vous ?`,
            widget: WIDGET_TYPES.APPOINTMENT,
            quickReplies: ["Prendre un RDV", "Rappel téléphonique", "Chat avec conseiller"],
        },
        tn: null,
        ar: null,
    },

    education_financiere: {
        fr: {
            text: `📚 **Éducation Financière — Les bases**\n\nCommencons par les fondamentaux !\n\n💰 **Épargne** = mettre de côté aujourd'hui pour demain. Sécurisé, peu rentable.\n📈 **Investissement** = faire travailler son argent pour créer de la valeur. Potentiel plus élevé, avec une certaine dose de risque.\n\n**La règle fondamentale :** Plus le rendement potentiel est élevé, plus le risque l'est aussi.\n\n**Les types de placements en Tunisie :**\n• Livrets d'épargne (faible risque)\n• Dépôts à terme (très sécurisés)\n• OPCVM (fonds diversifiés)\n• Actions BVMT (potentiel élevé)\n• Bons du Trésor (garantis par l'État)\n\nSur quoi voulez-vous en savoir plus ?`,
            widget: null,
            quickReplies: ["Qu'est-ce que la BVMT?", "Mon profil investisseur", "Démarrer à investir"],
        },
        tn: {
            text: `📚 Wejd tfahem el mawdou3 !\n\n💰 **Épargne** = thot floussek fi sécurité, rbeh kameen mch barsha\n📈 **Investissement** = khalli floussek ya3mlem, rbeh akbar ama famma risko\n\n**El qa3eda** : Rbeh kbir = Risque kbir 🎯\n\n**Placements fi Tounes :**\n• Livret épargne (kol chi mhafoudh)\n• Dépôt terme (taux mhaddad)\n• Bons trésor (dawla tdhman)\n• OPCVM (fonds mixte)\n• Actions BVMT (moustawa 3ali)\n\n3lah tabi ta3ref akther ?`,
            widget: null,
            quickReplies: ["Chneya BVMT?", "Profil mte3i", "Nbda n3ammar"],
        },
        ar: null,
    },

    marche_tunisien: {
        fr: {
            text: `📊 **La Bourse des Valeurs Mobilières de Tunis (BVMT)**\n\nLa BVMT est la bourse officielle de Tunisie, créée en 1969. Elle est régulée par le **Conseil du Marché Financier (CMF)**.\n\n**Principaux indices :**\n• **TUNINDEX** — Indice général (toutes les sociétés cotées)\n• **TUNINDEX 20** — Les 20 sociétés les plus liquides\n\nVoici les **cours en temps réel** :`,
            widget: WIDGET_TYPES.BVMT,
            quickReplies: ["Investir en actions", "Qu'est-ce qu'un OPCVM?", "Mon profil investisseur"],
        },
        tn: null,
        ar: null,
    },

    profil_investisseur: {
        fr: {
            text: `🎯 **Analyse de votre Profil Investisseur**\n\nAvant de vous recommander des produits, je dois comprendre vos objectifs et votre tolérance au risque.\n\nCe questionnaire de **7 questions** prend moins de 2 minutes et me permettra de vous proposer les placements les mieux adaptés à votre situation.\n\nPrêt à commencer ?`,
            widget: WIDGET_TYPES.RISK_QUIZ,
            quickReplies: ["Démarrer le quiz", "Voir les produits directement", "En savoir plus sur le risque"],
        },
        tn: {
            text: `🎯 Nhadd profil mte3ek bech nnajmoulek nousah mnasbeen !\n\n7 as'ila — mch barsha waqt. Nwasswoulek el placement el ahssen ليك.\n\nNbdaw ?`,
            widget: WIDGET_TYPES.RISK_QUIZ,
            quickReplies: ["Iii, nbda!", "Ara les produits l2awal"],
        },
        ar: null,
    },

    recommandation_produits: {
        fr: {
            text: `💼 **Recommandations de Placements AMEN BANK**\n\nVoici les produits d'investissement disponibles, classés par niveau de risque :\n\n_Je vous recommande de compléter votre **profil investisseur** pour obtenir des recommandations personnalisées._`,
            widget: WIDGET_TYPES.PRODUCTS,
            quickReplies: ["Mon profil investisseur", "Simuler un placement", "Souscrire à un produit"],
        },
        tn: {
            text: `💼 Voici produits el AMEN BANK :\n\nAfsel ta3mel el profil quiz bech tji el nousah el mnasbeen lichak spécifiquement.`,
            widget: WIDGET_TYPES.PRODUCTS,
            quickReplies: ["Profil mte3i", "Simulator", "Nib3ha"],
        },
        ar: null,
    },

    simulation: {
        fr: {
            text: `🧮 **Simulateur Financier AMEN BANK**\n\nCalculez la croissance de votre épargne grâce aux intérêts composés !\n\nAjustez les paramètres pour visualiser votre futur financier :`,
            widget: WIDGET_TYPES.SIMULATOR,
            quickReplies: ["Simuler ma retraite", "Calculer un crédit", "Comparer 2 scénarios"],
        },
        tn: {
            text: `🧮 Simulator mte3 el flouss ! Ara el moustaqbal mte3 kopchek :\n\nHot les chiffres w ara el résultat 📈`,
            widget: WIDGET_TYPES.SIMULATOR,
            quickReplies: ["Retraite", "Crédit", "Comparer"],
        },
        ar: null,
    },

    suivi_portefeuille: {
        fr: {
            text: `📈 **Tableau de Bord de votre Portefeuille**\n\nVoici la performance actuelle de vos investissements :`,
            widget: WIDGET_TYPES.PORTFOLIO,
            quickReplies: ["Rééquilibrer", "Comparer TUNINDEX", "Ajouter un placement"],
        },
        tn: null,
        ar: null,
    },

    inclusion_investissement: {
        fr: {
            text: `💡 **Bonne nouvelle : vous pouvez investir dès aujourd'hui !**\n\nContrairement aux idées reçues, l'investissement n'est pas réservé aux riches.\n\n**Avec seulement 50–100 TND/mois :**\n\n• 📦 **Livret d'épargne AMEN** — Déposez 100 TND, gagnez 5.25%/an\n• 📊 **OPCVM Monétaire** — À partir de 500 TND\n• 🏠 **Plan Épargne Logement** — Dès 50 TND/mois\n\n**Exemple concret :**\nSi vous épargnez **100 TND/mois** pendant 10 ans à 7%/an → vous aurez **~17.000 TND** grâce aux intérêts composés !\n\nVoulez-vous voir la simulation ?`,
            widget: WIDGET_TYPES.SIMULATOR,
            quickReplies: ["Voir la simulation", "Ouvrir un livret", "Mon profil investisseur"],
        },
        tn: {
            text: `💡 Ma lazem ykoune 3andek barsha flouss bech tb3ath ! \n\nB **50–100 DT **fel chher tanajjem tebda :\n\n• Livret épargne: dès 100 DT\n• OPCVM: dès 500 DT\n• PEL (logement): 50 DT/mois\n\n**Mithal concret:**\n100 DT/mois × 10 ans = **~17.000 DT** thanks intérêts composés! 🚀\n\nTabi tshoof el simulation ?`,
            widget: WIDGET_TYPES.SIMULATOR,
            quickReplies: ["Ara simulation", "Nfeteh Livret", "Profil mte3i"],
        },
        ar: null,
    },

    default: {
        fr: {
            text: `😊 Je suis votre **assistant financier AMEN BANK**, disponible 24h/24.\n\nJe peux vous aider avec :\n• 🏦 Informations et services bancaires\n• 💸 Opérations courantes (solde, virements)\n• 📈 Conseil en investissement et épargne\n• 🌍 Opérations internationales et taux de change\n• 🎓 Éducation financière et marché tunisien\n• 🔒 Sécurité et assistance urgente\n\nPosez-moi votre question ou choisissez un thème ci-dessous !`,
            widget: null,
            quickReplies: ["Voir mon solde", "Taux de change", "Investir mon épargne", "Parler à un conseiller"],
        },
        tn: {
            text: `Salut ! Ena el assistant el bancaire AMEN BANK 🏦\n\nNajjam n3awnek fi :\n• Solde w transactions\n• Virements\n• Placements w épargne\n• Taux de change\n• Crédit\n\nShoulek astannek ! 😊`,
            widget: null,
            quickReplies: ["Solde mte3i", "Taux change", "Nstathmer", "Ncallam m3a conseiller"],
        },
        ar: {
            text: `أهلاً! أنا مساعدك المالي في بنك الأمان 🏦\n\nيمكنني مساعدتك في:\n• رصيد الحساب والمعاملات\n• التحويلات والدفع\n• الاستثمار والادخار\n• أسعار الصرف\n• القروض\n\nكيف يمكنني مساعدتك؟ 😊`,
            widget: null,
            quickReplies: ["رصيدي", "أسعار الصرف", "الاستثمار", "التحدث مع مستشار"],
        },
    },
};

/**
 * Build a response object for a given intent and language
 */
export function buildResponse(intent, language = "fr") {
    const intentData = RESPONSES[intent] || RESPONSES.default;
    const langData = intentData[language] || intentData.fr || intentData.tn;

    return {
        text: langData?.text || RESPONSES.default.fr.text,
        widget: langData?.widget || null,
        quickReplies: langData?.quickReplies || RESPONSES.default.fr.quickReplies,
        intent,
        timestamp: new Date().toISOString(),
    };
}
