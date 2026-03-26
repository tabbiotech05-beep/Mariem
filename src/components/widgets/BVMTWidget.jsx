import { bvmtData } from "../../data/mockData";
import { TrendingUp, TrendingDown } from "lucide-react";

export default function BVMTWidget() {
    const { tunindex, tunindex20, societes } = bvmtData;

    return (
        <div className="mt-3 bg-surface-700 rounded-2xl border border-amen-blue/20 animate-fade-in overflow-hidden">
            <div className="bg-gradient-to-r from-amen-navy to-amen-blue p-4">
                <div className="text-xs text-blue-200 mb-2 font-semibold">🏛️ BVMT — Bourse des Valeurs Mobilières de Tunis</div>
                <div className="grid grid-cols-2 gap-3">
                    {[{ label: "TUNINDEX", data: tunindex }, { label: "TUNINDEX 20", data: tunindex20 }].map(({ label, data }) => (
                        <div key={label} className="bg-white/10 rounded-xl p-3">
                            <div className="text-xs text-blue-200">{label}</div>
                            <div className="text-lg font-bold text-white">{data.valeur.toLocaleString("fr-TN")}</div>
                            <div className={`text-xs flex items-center gap-0.5 ${data.variation >= 0 ? "text-green-400" : "text-red-400"}`}>
                                {data.variation >= 0 ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
                                {data.variation >= 0 ? "+" : ""}{data.variation.toFixed(2)} ({(data.variationPct * 100).toFixed(2)}%)
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="p-4">
                <div className="text-xs text-gray-400 mb-3 font-semibold">Principales valeurs cotées</div>
                <div className="space-y-2">
                    {societes.map((s) => (
                        <div key={s.ticker} className="flex items-center justify-between bg-surface-600 rounded-xl px-3 py-2">
                            <div className="flex items-center gap-3">
                                <span className="bg-amen-blue/30 text-amen-gold text-xs font-bold px-2 py-0.5 rounded-lg w-12 text-center">
                                    {s.ticker}
                                </span>
                                <div>
                                    <div className="text-xs font-semibold text-white">{s.nom}</div>
                                    <div className="text-xs text-gray-400">{s.secteur}</div>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-sm font-bold text-white">{s.cours.toFixed(2)} TND</div>
                                <div className={`text-xs ${s.variation >= 0 ? "text-green-400" : "text-red-400"}`}>
                                    {s.variation >= 0 ? "+" : ""}{s.variation.toFixed(2)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-3 text-xs text-gray-500 text-center">
                    Données à titre indicatif · Source: BVMT 22/02/2026
                </div>
            </div>
        </div>
    );
}
