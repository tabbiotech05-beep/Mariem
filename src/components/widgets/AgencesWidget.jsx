import { agences } from "../../data/mockData";
import { MapPin, Phone, Clock } from "lucide-react";

export default function AgencesWidget() {
    return (
        <div className="mt-3 bg-surface-700 rounded-2xl border border-amen-blue/20 animate-fade-in overflow-hidden">
            <div className="bg-amen-navy px-4 py-3 flex items-center gap-2">
                <MapPin size={14} className="text-amen-gold" />
                <span className="text-xs font-semibold text-white">Nos agences AMEN BANK</span>
            </div>
            <div className="divide-y divide-surface-600 max-h-72 overflow-y-auto">
                {agences.map((a) => (
                    <div key={a.id} className="p-3 hover:bg-surface-600/50 transition-colors">
                        <div className="font-semibold text-white text-sm mb-1">{a.nom}</div>
                        <div className="flex items-start gap-1.5 text-xs text-gray-400 mb-1">
                            <MapPin size={11} className="text-amen-gold mt-0.5 flex-shrink-0" />
                            <span>{a.adresse}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-1">
                            <Clock size={11} className="text-amen-gold flex-shrink-0" />
                            <span>{a.horaires}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-amen-gold">
                            <Phone size={11} />
                            <span>{a.tel}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
