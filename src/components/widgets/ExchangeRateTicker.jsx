import { exchangeRates } from "../../data/mockData";
import { TrendingUp, TrendingDown } from "lucide-react";

export default function ExchangeRateTicker() {
    return (
        <div className="mt-3 bg-surface-700 rounded-2xl p-4 border border-amen-blue/20 animate-fade-in">
            <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">💱</span>
                <h3 className="font-bold text-white text-sm">Taux de Change — Dinar Tunisien (TND)</h3>
            </div>
            <div className="text-xs text-gray-400 mb-3 flex items-center gap-1">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Mis à jour il y a 2 min · Source: BCT
            </div>
            <div className="grid grid-cols-2 gap-2">
                {exchangeRates.map((r) => (
                    <div key={r.devise} className="bg-surface-600 rounded-xl p-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className="text-lg">{r.flag}</span>
                            <div>
                                <div className="font-bold text-white text-sm">{r.devise}</div>
                                <div className="text-xs text-gray-400">{r.achat.toFixed(3)}</div>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="font-semibold text-sm text-amen-gold">{r.vente.toFixed(3)}</div>
                            <div className={`text-xs flex items-center gap-0.5 ${r.variation >= 0 ? "text-green-400" : "text-red-400"}`}>
                                {r.variation >= 0
                                    ? <TrendingUp size={10} />
                                    : <TrendingDown size={10} />}
                                {r.variation >= 0 ? "+" : ""}{r.variation.toFixed(3)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-3 flex gap-2 text-xs text-gray-500">
                <span className="bg-surface-600 px-2 py-1 rounded-lg">Achat = prix que la banque achète</span>
                <span className="bg-surface-600 px-2 py-1 rounded-lg">Vente = prix que vous achetez</span>
            </div>
        </div>
    );
}
