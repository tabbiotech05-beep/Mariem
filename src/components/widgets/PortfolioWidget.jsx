import { portfolioMock } from "../../data/mockData";
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { TrendingUp } from "lucide-react";

export default function PortfolioWidget() {
    const { valeurTotale, performance, repartition, historique } = portfolioMock;

    return (
        <div className="mt-3 bg-surface-700 rounded-2xl border border-amen-blue/20 animate-fade-in overflow-hidden">
            <div className="bg-gradient-to-r from-amen-navy to-amen-blue p-4">
                <div className="flex justify-between items-center">
                    <div>
                        <div className="text-xs text-blue-200">Valeur du portefeuille</div>
                        <div className="text-2xl font-bold text-amen-gold mt-1">
                            {valeurTotale.toLocaleString("fr-TN")} TND
                        </div>
                    </div>
                    <div className="flex items-center gap-1 bg-green-900/40 px-3 py-1.5 rounded-full">
                        <TrendingUp size={14} className="text-green-400" />
                        <span className="text-green-400 font-bold text-sm">+{performance}%</span>
                    </div>
                </div>
            </div>

            <div className="p-4 grid grid-cols-2 gap-4">
                {/* Pie chart */}
                <div>
                    <div className="text-xs text-gray-400 mb-2 font-semibold">Répartition</div>
                    <PieChart width={140} height={140}>
                        <Pie data={repartition} cx={65} cy={65} innerRadius={40} outerRadius={65} dataKey="value">
                            {repartition.map((entry, i) => (
                                <Cell key={i} fill={entry.color} />
                            ))}
                        </Pie>
                    </PieChart>
                </div>

                {/* Legend */}
                <div className="flex flex-col gap-2 justify-center">
                    {repartition.map((r, i) => (
                        <div key={i} className="flex items-center gap-2">
                            <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: r.color }} />
                            <div>
                                <div className="text-xs text-white leading-tight">{r.name}</div>
                                <div className="text-xs text-gray-400">{r.pct}% · {r.value.toLocaleString("fr-TN")} TND</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Performance chart */}
            <div className="px-4 pb-4">
                <div className="text-xs text-gray-400 mb-2 font-semibold">Évolution 6 mois</div>
                <div className="h-28">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={historique} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#1E2D45" />
                            <XAxis dataKey="mois" tick={{ fill: "#94A3B8", fontSize: 10 }} />
                            <YAxis tick={{ fill: "#94A3B8", fontSize: 10 }} tickFormatter={v => `${(v / 1000).toFixed(0)}k`} />
                            <Tooltip
                                contentStyle={{ backgroundColor: "#111827", border: "1px solid #003580", borderRadius: 8 }}
                                formatter={v => [`${v.toLocaleString("fr-TN")} TND`, "Valeur"]}
                            />
                            <Line type="monotone" dataKey="valeur" stroke="#C8A000" strokeWidth={2} dot={{ fill: "#C8A000", r: 3 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
