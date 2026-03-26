import { useState } from "react";

const QUESTIONS = [
    {
        q: "Quel est votre objectif principal ?",
        tn: "Chnoua el hadaf mte3ek ?",
        options: [
            { label: "Sécuriser mon épargne", tn: "Nhafedh 3la flouss mte3i", score: 0 },
            { label: "Préparer ma retraite", tn: "Nprépari pensioni", score: 1 },
            { label: "Faire croître mon capital", tn: "Nkabber capital mte3i", score: 2 },
            { label: "Spéculer / gains rapides", tn: "Rbeh sur3 bel spéculation", score: 3 },
        ],
    },
    {
        q: "Combien pouvez-vous épargner par mois ?",
        tn: "Qaddesh tanajjem thottek fel chher ?",
        options: [
            { label: "Moins de 100 TND", tn: "Akall men 100 DT", score: 0 },
            { label: "100 – 500 TND", tn: "100 – 500 DT", score: 1 },
            { label: "500 – 2000 TND", tn: "500 – 2000 DT", score: 2 },
            { label: "Plus de 2000 TND", tn: "Akthar men 2000 DT", score: 3 },
        ],
    },
    {
        q: "Sur combien de temps souhaitez-vous investir ?",
        tn: "Qaddesh sanin tabi tastathmer ?",
        options: [
            { label: "Moins de 1 an", tn: "Akall men sena", score: 0 },
            { label: "1 à 3 ans", tn: "1 l 3 snin", score: 1 },
            { label: "3 à 10 ans", tn: "3 l 10 snin", score: 2 },
            { label: "Plus de 10 ans", tn: "Akthar men 10 snin", score: 3 },
        ],
    },
    {
        q: "Si votre investissement perd 15% en 1 mois, que faites-vous ?",
        tn: "Ken el placement mte3ek khser 15% f chher, chbik ta3mel ?",
        options: [
            { label: "Je vends tout immédiatement", tn: "Nbi3 kol chay lhtha", score: 0 },
            { label: "J'attends et je revends une partie", tn: "Nstana w nbi3 chwaya", score: 1 },
            { label: "J'attends le rebond", tn: "Nstana recovery", score: 2 },
            { label: "J'achète davantage", tn: "Nzid n5ri akthar", score: 3 },
        ],
    },
    {
        q: "Avez-vous besoin d'accéder à votre argent rapidement ?",
        tn: "Lazem flouss mte3ek fil 3ajel ?",
        options: [
            { label: "Oui, à tout moment", tn: "Iii, waqt mta waqt", score: 0 },
            { label: "Dans les 6 mois", tn: "Fi 6 chhor", score: 1 },
            { label: "Dans 1 à 2 ans", tn: "Fi sena aww 2", score: 2 },
            { label: "Non, je peux bloquer", tn: "La, ynajem yblok", score: 3 },
        ],
    },
    {
        q: "Quel est votre niveau de connaissance financière ?",
        tn: "Qadesh 3aref fi domaine el mali ?",
        options: [
            { label: "Débutant complet", tn: "Mch 3aref walo", score: 0 },
            { label: "Quelques bases", tn: "3andi chwaya notions", score: 1 },
            { label: "Intermédiaire", tn: "Moyen level", score: 2 },
            { label: "Expert", tn: "Expert", score: 3 },
        ],
    },
    {
        q: "Quelle part de vos économies souhaitez-vous investir ?",
        tn: "Qaddesh mel flouss mte3ek tabi tastathmer ?",
        options: [
            { label: "Moins de 10%", tn: "Akall men 10%", score: 0 },
            { label: "10 – 30%", tn: "10 – 30%", score: 1 },
            { label: "30 – 60%", tn: "30 – 60%", score: 2 },
            { label: "Plus de 60%", tn: "Akthar men 60%", score: 3 },
        ],
    },
];

const PROFILES = [
    {
        name: "Défensif 🛡️",
        range: [0, 8],
        color: "text-blue-400",
        bg: "bg-blue-900/30",
        border: "border-blue-500/30",
        desc: "Vous privilégiez la sécurité. Vos placements idéaux : livret d'épargne, dépôts à terme, bons du Trésor.",
        products: ["livret_a", "depot_terme", "bon_tresor"],
    },
    {
        name: "Équilibré ⚖️",
        range: [9, 16],
        color: "text-yellow-400",
        bg: "bg-yellow-900/30",
        border: "border-yellow-500/30",
        desc: "Vous cherchez l'équilibre entre sécurité et performance. OPCVM obligataires et mixtes vous correspondent bien.",
        products: ["opcvm_monetaire", "opcvm_obligataire", "assurance_vie"],
    },
    {
        name: "Dynamique 🚀",
        range: [17, 21],
        color: "text-green-400",
        bg: "bg-green-900/30",
        border: "border-green-500/30",
        desc: "Vous acceptez le risque pour maximiser vos gains. Actions BVMT et OPCVM Actions sont faits pour vous.",
        products: ["opcvm_actions", "opcvm_obligataire", "assurance_vie"],
    },
];

export default function RiskQuiz({ onComplete, language = "fr" }) {
    const [step, setStep] = useState(0);
    const [scores, setScores] = useState([]);
    const [done, setDone] = useState(false);
    const [result, setResult] = useState(null);

    const isTn = language === "tn";

    const handleAnswer = (score) => {
        const newScores = [...scores, score];
        if (step < QUESTIONS.length - 1) {
            setScores(newScores);
            setStep(step + 1);
        } else {
            const total = newScores.reduce((a, b) => a + b, 0);
            const profile = PROFILES.find(p => total >= p.range[0] && total <= p.range[1]) || PROFILES[1];
            setResult({ profile, total });
            setDone(true);
            onComplete && onComplete(profile);
        }
    };

    if (done && result) {
        const p = result.profile;
        return (
            <div className={`mt-3 rounded-2xl p-4 border ${p.bg} ${p.border} animate-fade-in`}>
                <div className="text-center mb-3">
                    <div className={`text-2xl font-bold ${p.color}`}>{p.name}</div>
                    <div className="text-xs text-gray-400 mt-1">Score : {result.total}/21</div>
                </div>
                <p className="text-sm text-gray-300 text-center mb-4">{p.desc}</p>
                <div className="text-xs text-gray-400 mb-2 font-semibold text-center">Produits recommandés pour vous</div>
                <div className="flex flex-col gap-2">
                    {p.products.map(pid => (
                        <div key={pid} className="bg-surface-700 rounded-xl px-3 py-2 text-sm text-amen-gold">
                            ✅ {pid.replace(/_/g, " ").replace(/\b\w/g, c => c.toUpperCase())}
                        </div>
                    ))}
                </div>
                <button
                    onClick={() => { setStep(0); setScores([]); setDone(false); setResult(null); }}
                    className="mt-3 w-full text-xs text-gray-400 hover:text-white transition-colors"
                >
                    Recommencer le quiz ↩️
                </button>
            </div>
        );
    }

    const q = QUESTIONS[step];
    const progress = ((step) / QUESTIONS.length) * 100;

    return (
        <div className="mt-3 bg-surface-700 rounded-2xl p-4 border border-amen-blue/20 animate-fade-in">
            <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-gray-400">Question {step + 1}/{QUESTIONS.length}</span>
                <span className="text-xs text-amen-gold">{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-surface-500 rounded-full h-1 mb-4">
                <div className="bg-amen-gold h-1 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>
            <p className="text-sm font-semibold text-white mb-1">{isTn ? q.tn : q.q}</p>
            {isTn && <p className="text-xs text-gray-400 mb-3 italic">{q.q}</p>}
            <div className="flex flex-col gap-2">
                {q.options.map((opt, i) => (
                    <button
                        key={i}
                        onClick={() => handleAnswer(opt.score)}
                        className="text-left px-4 py-3 rounded-xl border border-amen-blue/20 bg-surface-600 hover:bg-amen-blue/20 hover:border-amen-blue/50 transition-all duration-200 text-sm text-gray-200 hover:text-white"
                    >
                        {isTn ? opt.tn : opt.label}
                        {isTn && <span className="block text-xs text-gray-500 mt-0.5 italic">{opt.label}</span>}
                    </button>
                ))}
            </div>
        </div>
    );
}
