import { produitsEpargne } from "../../data/mockData";
import { ShieldCheck, TrendingUp, Droplets } from "lucide-react";

const RISK_COLORS = {
    "Nul": "text-green-400 bg-green-900/30",
    "Très faible": "text-green-300 bg-green-900/20",
    "Faible": "text-blue-400 bg-blue-900/20",
    "Modéré": "text-yellow-400 bg-yellow-900/20",
    "Élevé": "text-red-400 bg-red-900/20",
};

export default function ProductsWidget({ filterProfile }) {
    const produits = filterProfile
        ? produitsEpargne.filter(p => p.profil.includes(filterProfile))
        : produitsEpargne;

    return (
        <div className="mt-3 bg-surface-700 rounded-2xl border border-amen-blue/20 animate-fade-in overflow-hidden">
            <div className="bg-amen-navy px-4 py-3 flex items-center gap-2">
                <TrendingUp size={14} className="text-amen-gold" />
                <span className="text-xs font-semibold text-white">
                    Produits d'épargne & investissement AMEN BANK
                    {filterProfile && <span className="ml-1 text-amen-gold">— Profil {filterProfile}</span>}
                </span>
            </div>
            <div className="divide-y divide-surface-600 max-h-80 overflow-y-auto">
                {produits.map((p) => (
                    <div key={p.id} className="p-3 hover:bg-surface-600/30 transition-colors">
                        <div className="flex items-start justify-between mb-1">
                            <div className="font-semibold text-white text-sm">{p.nom}</div>
                            <span className={`text-xs px-2 py-0.5 rounded-full flex-shrink-0 ml-2 ${RISK_COLORS[p.risque] || "text-gray-400 bg-surface-600"}`}>
                                {p.risque}
                            </span>
                        </div>
                        <div className="text-xs text-gray-400 mb-2">{p.type}</div>
                        <div className="flex items-center gap-3 text-xs mb-2">
                            <span className="text-amen-gold font-bold">{p.rendement}</span>
                            <span className="text-gray-400 flex items-center gap-0.5">
                                <Droplets size={10} /> {p.liquidite}
                            </span>
                            <span className="text-gray-400">Min: {p.montantMin.toLocaleString("fr-TN")} TND</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                            {p.avantages.map((a, i) => (
                                <span key={i} className="text-xs bg-surface-600 text-gray-300 px-2 py-0.5 rounded-full flex items-center gap-1">
                                    <ShieldCheck size={8} className="text-amen-gold" /> {a}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
