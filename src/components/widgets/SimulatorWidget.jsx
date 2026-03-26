import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

function formatTND(n) {
    return n.toLocaleString("fr-TN", { minimumFractionDigits: 0 }) + " TND";
}

export default function SimulatorWidget({ onClose }) {
    const [capital, setCapital] = useState(10000);
    const [monthly, setMonthly] = useState(200);
    const [rate, setRate] = useState(7);
    const [years, setYears] = useState(10);

    // Compute compound interest with monthly contributions
    const data = Array.from({ length: years + 1 }, (_, i) => {
        const months = i * 12;
        const futureCapital = capital * Math.pow(1 + rate / 100 / 12, months);
        const futureContribs = monthly * ((Math.pow(1 + rate / 100 / 12, months) - 1) / (rate / 100 / 12));
        const total = futureCapital + (months > 0 ? futureContribs : 0);
        const invested = capital + monthly * months;
        return {
            an: `An ${i}`,
            total: Math.round(total),
            investi: invested,
            gain: Math.round(total) - invested,
        };
    });

    const final = data[data.length - 1];

    return (
        <div className="mt-3 bg-surface-700 rounded-2xl p-4 border border-amen-blue/20 animate-fade-in">
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-white flex items-center gap-2">
                    🧮 Simulateur d'Épargne
                </h3>
                {onClose && (
                    <button onClick={onClose} className="text-gray-400 hover:text-white text-sm">✕</button>
                )}
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
                <div>
                    <label className="text-xs text-gray-400 mb-1 block">Capital initial</label>
                    <input
                        type="range" min="0" max="100000" step="500" value={capital}
                        onChange={e => setCapital(+e.target.value)}
                        className="w-full accent-amen-gold"
                    />
                    <span className="text-amen-gold font-semibold text-sm">{formatTND(capital)}</span>
                </div>
                <div>
                    <label className="text-xs text-gray-400 mb-1 block">Versement mensuel</label>
                    <input
                        type="range" min="0" max="5000" step="50" value={monthly}
                        onChange={e => setMonthly(+e.target.value)}
                        className="w-full accent-amen-gold"
                    />
                    <span className="text-amen-gold font-semibold text-sm">{formatTND(monthly)}/mois</span>
                </div>
                <div>
                    <label className="text-xs text-gray-400 mb-1 block">Taux annuel</label>
                    <input
                        type="range" min="2" max="15" step="0.5" value={rate}
                        onChange={e => setRate(+e.target.value)}
                        className="w-full accent-amen-gold"
                    />
                    <span className="text-amen-gold font-semibold text-sm">{rate}%</span>
                </div>
                <div>
                    <label className="text-xs text-gray-400 mb-1 block">Durée (ans)</label>
                    <input
                        type="range" min="1" max="30" step="1" value={years}
                        onChange={e => setYears(+e.target.value)}
                        className="w-full accent-amen-gold"
                    />
                    <span className="text-amen-gold font-semibold text-sm">{years} ans</span>
                </div>
            </div>

            <div className="h-40 mb-4">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#1E2D45" />
                        <XAxis dataKey="an" tick={{ fill: "#94A3B8", fontSize: 10 }} />
                        <YAxis tick={{ fill: "#94A3B8", fontSize: 10 }} tickFormatter={v => `${(v / 1000).toFixed(0)}k`} />
                        <Tooltip
                            contentStyle={{ backgroundColor: "#111827", border: "1px solid #003580", borderRadius: 8 }}
                            labelStyle={{ color: "#E2E8F0" }}
                            formatter={(v, n) => [formatTND(v), n === "total" ? "Capital Total" : n === "investi" ? "Investi" : "Gains"]}
                        />
                        <Line type="monotone" dataKey="total" stroke="#C8A000" strokeWidth={2} dot={false} name="total" />
                        <Line type="monotone" dataKey="investi" stroke="#003580" strokeWidth={2} dot={false} strokeDasharray="4 4" name="investi" />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-3 gap-2">
                <div className="bg-surface-600 rounded-xl p-3 text-center">
                    <div className="text-xs text-gray-400">Total investi</div>
                    <div className="font-bold text-white text-sm mt-1">{formatTND(final.investi)}</div>
                </div>
                <div className="bg-amen-blue/20 rounded-xl p-3 text-center">
                    <div className="text-xs text-gray-400">Capital final</div>
                    <div className="font-bold text-amen-gold text-sm mt-1">{formatTND(final.total)}</div>
                </div>
                <div className="bg-green-900/30 rounded-xl p-3 text-center">
                    <div className="text-xs text-gray-400">Gain total</div>
                    <div className="font-bold text-green-400 text-sm mt-1">+{formatTND(final.gain)}</div>
                </div>
            </div>
        </div>
    );
}
