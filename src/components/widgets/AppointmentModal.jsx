import { useState } from "react";
import { conseillers } from "../../data/mockData";
import { Calendar, Clock, User, CheckCircle } from "lucide-react";

const SLOTS = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"];
const DAYS = ["Lun 23 Fév", "Mar 24 Fév", "Mer 25 Fév", "Jeu 26 Fév", "Ven 27 Fév"];

export default function AppointmentModal({ onClose }) {
    const [step, setStep] = useState(1); // 1: advisor, 2: date/time, 3: confirm, 4: done
    const [selected, setSelected] = useState({ advisor: null, day: null, slot: null });

    if (step === 4) {
        return (
            <div className="mt-3 bg-surface-700 rounded-2xl p-5 border border-green-500/30 bg-green-900/10 animate-fade-in text-center">
                <CheckCircle size={36} className="text-green-400 mx-auto mb-3" />
                <div className="font-bold text-white text-sm mb-1">Rendez-vous confirmé ! 🎉</div>
                <div className="text-sm text-gray-300 mb-3">
                    <strong>{selected.advisor?.nom}</strong><br />
                    {selected.day} · {selected.slot}
                </div>
                <div className="text-xs text-gray-400">
                    Vous recevrez une confirmation par SMS et email. Pensez à apporter une pièce d'identité.
                </div>
            </div>
        );
    }

    return (
        <div className="mt-3 bg-surface-700 rounded-2xl border border-amen-blue/20 animate-fade-in overflow-hidden">
            <div className="bg-amen-navy px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-amen-gold" />
                    <span className="text-xs font-semibold text-white">Prendre rendez-vous</span>
                </div>
                <div className="flex gap-1">
                    {[1, 2, 3].map(s => (
                        <div key={s} className={`w-6 h-1 rounded-full ${step >= s ? "bg-amen-gold" : "bg-surface-500"}`} />
                    ))}
                </div>
            </div>

            <div className="p-4">
                {step === 1 && (
                    <>
                        <div className="text-xs text-gray-400 mb-3 font-semibold">Choisissez votre conseiller</div>
                        <div className="space-y-2">
                            {conseillers.map((c) => (
                                <button
                                    key={c.id}
                                    onClick={() => { setSelected(s => ({ ...s, advisor: c })); setStep(2); }}
                                    disabled={!c.disponible}
                                    className={`w-full flex items-center gap-3 p-3 rounded-xl border transition-all ${c.disponible
                                            ? "border-amen-blue/20 bg-surface-600 hover:bg-amen-blue/20 hover:border-amen-blue/50"
                                            : "border-surface-600 bg-surface-800 opacity-50 cursor-not-allowed"
                                        }`}
                                >
                                    <div className="w-8 h-8 rounded-full bg-amen-blue flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                                        {c.photo}
                                    </div>
                                    <div className="text-left flex-1">
                                        <div className="text-sm font-semibold text-white">{c.nom}</div>
                                        <div className="text-xs text-gray-400">{c.specialite}</div>
                                    </div>
                                    <div className={`text-xs px-2 py-0.5 rounded-full ${c.disponible ? "bg-green-900/40 text-green-400" : "bg-red-900/40 text-red-400"}`}>
                                        {c.disponible ? "Disponible" : "Occupé"}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </>
                )}

                {step === 2 && (
                    <>
                        <div className="text-xs text-gray-400 mb-3 font-semibold">Sélectionnez date et heure</div>
                        <div className="flex gap-2 overflow-x-auto pb-2 mb-3">
                            {DAYS.map(d => (
                                <button
                                    key={d}
                                    onClick={() => setSelected(s => ({ ...s, day: d }))}
                                    className={`flex-shrink-0 px-3 py-2 rounded-xl text-xs border transition-all ${selected.day === d
                                            ? "bg-amen-blue border-amen-blue text-white font-bold"
                                            : "border-surface-600 bg-surface-600 text-gray-300 hover:border-amen-blue/50"
                                        }`}
                                >
                                    {d}
                                </button>
                            ))}
                        </div>
                        <div className="grid grid-cols-3 gap-2 mb-4">
                            {SLOTS.map(slot => (
                                <button
                                    key={slot}
                                    onClick={() => setSelected(s => ({ ...s, slot }))}
                                    className={`py-2 rounded-xl text-xs border transition-all ${selected.slot === slot
                                            ? "bg-amen-gold border-amen-gold text-amen-navy font-bold"
                                            : "border-surface-600 bg-surface-600 text-gray-300 hover:border-amen-gold/50"
                                        }`}
                                >
                                    {slot}
                                </button>
                            ))}
                        </div>
                        <button
                            onClick={() => setStep(3)}
                            disabled={!selected.day || !selected.slot}
                            className="w-full py-2.5 rounded-xl bg-amen-blue text-white text-sm font-semibold hover:bg-blue-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                            Continuer →
                        </button>
                    </>
                )}

                {step === 3 && (
                    <>
                        <div className="text-xs text-gray-400 mb-3 font-semibold">Confirmation</div>
                        <div className="bg-surface-600 rounded-xl p-3 space-y-2 mb-4">
                            <div className="flex items-center gap-2 text-sm">
                                <User size={14} className="text-amen-gold" />
                                <span className="text-white">{selected.advisor?.nom}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <Calendar size={14} className="text-amen-gold" />
                                <span className="text-white">{selected.day}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <Clock size={14} className="text-amen-gold" />
                                <span className="text-white">{selected.slot}</span>
                            </div>
                        </div>
                        <button
                            onClick={() => setStep(4)}
                            className="w-full py-2.5 rounded-xl bg-amen-gold text-amen-navy text-sm font-bold hover:bg-amen-amber transition-colors"
                        >
                            ✅ Confirmer le rendez-vous
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}
