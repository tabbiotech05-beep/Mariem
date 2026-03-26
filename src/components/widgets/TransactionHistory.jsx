import { transactions, compteInfo } from "../../data/mockData";
import { TrendingUp, TrendingDown } from "lucide-react";

function formatDate(d) {
    return new Date(d).toLocaleDateString("fr-TN", { day: "2-digit", month: "short" });
}

export default function TransactionHistory() {
    return (
        <div className="mt-3 bg-surface-700 rounded-2xl border border-amen-blue/20 animate-fade-in overflow-hidden">
            {/* Account header */}
            <div className="bg-gradient-to-r from-amen-navy to-amen-blue p-4">
                <div className="flex justify-between items-start">
                    <div>
                        <div className="text-xs text-blue-200 mb-1">{compteInfo.typeCompte}</div>
                        <div className="font-bold text-white">{compteInfo.nom}</div>
                        <div className="text-xs text-blue-200 mt-1 font-mono">{compteInfo.rib}</div>
                    </div>
                    <div className="text-right">
                        <div className="text-xs text-blue-200">Solde disponible</div>
                        <div className="text-2xl font-bold text-amen-gold mt-1">
                            {compteInfo.solde.toLocaleString("fr-TN")} <span className="text-sm">TND</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Transactions */}
            <div className="divide-y divide-surface-600 max-h-64 overflow-y-auto">
                {transactions.map((t) => (
                    <div key={t.id} className="flex items-center gap-3 px-4 py-3 hover:bg-surface-600/50 transition-colors">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${t.type === "credit" ? "bg-green-900/40" : "bg-red-900/40"
                            }`}>
                            {t.type === "credit"
                                ? <TrendingUp size={14} className="text-green-400" />
                                : <TrendingDown size={14} className="text-red-400" />}
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="text-sm text-white truncate">{t.libelle}</div>
                            <div className="text-xs text-gray-400">{formatDate(t.date)}</div>
                        </div>
                        <div className={`font-semibold text-sm flex-shrink-0 ${t.type === "credit" ? "text-green-400" : "text-red-400"}`}>
                            {t.montant > 0 ? "+" : ""}{t.montant.toLocaleString("fr-TN")} TND
                        </div>
                    </div>
                ))}
            </div>
            <div className="px-4 py-2 text-xs text-gray-500 text-center bg-surface-800">
                8 dernières transactions · Données sécurisées 🔒
            </div>
        </div>
    );
}
