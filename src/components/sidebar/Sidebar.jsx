import { useState } from "react";
import {
    MessageSquare, Plus, Settings, Globe, ChevronLeft, ChevronRight,
    TrendingUp, Shield, Users, Info, Landmark, Briefcase
} from "lucide-react";

const CATEGORIES = [
    { icon: Info, label: "Information", query: "Horaires et adresses des agences AMEN BANK" },
    { icon: Landmark, label: "Opérations", query: "Voir mon solde et historique de transactions" },
    { icon: TrendingUp, label: "Investissement", query: "Je veux analyser mon profil investisseur" },
    { icon: Globe, label: "International", query: "Taux de change et virements internationaux" },
    { icon: Users, label: "Inclusion", query: "Je n'ai jamais eu de compte bancaire" },
    { icon: Shield, label: "Sécurité", query: "J'ai détecté une transaction suspecte" },
    { icon: Briefcase, label: "BVMT", query: "Informations sur la Bourse de Tunis BVMT" },
    { icon: MessageSquare, label: "Conseiller", query: "Je veux prendre rendez-vous avec un conseiller" },
];

const LANGUAGES = [
    { code: "fr", label: "🇫🇷 Français" },
    { code: "tn", label: "🇹🇳 تونسي" },
    { code: "ar", label: "🇸🇦 العربية" },
];

export default function Sidebar({ conversationHistory, onNewChat, onSendMessage, language, setLanguage, collapsed, onToggle }) {
    return (
        <div className={`flex flex-col h-full bg-surface-900 border-r border-surface-600 transition-all duration-300 ${collapsed ? "w-14" : "w-72"}`}>
            {/* Logo */}
            <div className="p-4 border-b border-surface-600 flex items-center justify-between">
                {!collapsed && (
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-amen-blue flex items-center justify-center">
                            <span className="text-xs font-black text-amen-gold">AB</span>
                        </div>
                        <div>
                            <div className="font-bold text-white text-sm leading-tight">AMEN BANK</div>
                            <div className="text-xs text-gray-400">Assistant Financier</div>
                        </div>
                    </div>
                )}
                {collapsed && (
                    <div className="w-8 h-8 rounded-lg bg-amen-blue flex items-center justify-center mx-auto">
                        <span className="text-xs font-black text-amen-gold">AB</span>
                    </div>
                )}
                <button
                    onClick={onToggle}
                    className="text-gray-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-surface-700"
                >
                    {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
                </button>
            </div>

            {/* New chat button */}
            <div className="p-3">
                <button
                    onClick={onNewChat}
                    className={`flex items-center gap-2 rounded-xl bg-amen-blue hover:bg-blue-700 text-white transition-all duration-200 hover:scale-[1.02] ${collapsed ? "w-8 h-8 justify-center p-0 mx-auto" : "w-full px-3 py-2.5"
                        }`}
                >
                    <Plus size={14} />
                    {!collapsed && <span className="text-sm font-medium">Nouvelle conversation</span>}
                </button>
            </div>

            {/* Category quick access */}
            {!collapsed && (
                <div className="px-3 mb-2">
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-2 px-1">Accès rapide</div>
                    <div className="space-y-0.5">
                        {CATEGORIES.map(({ icon: Icon, label, query }) => (
                            <button
                                key={label}
                                onClick={() => onSendMessage(query)}
                                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-gray-400 hover:text-white hover:bg-surface-700 transition-all duration-150 group"
                            >
                                <Icon size={13} className="text-amen-gold group-hover:text-amen-amber flex-shrink-0" />
                                <span className="text-xs">{label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Conversation history */}
            {!collapsed && (
                <div className="flex-1 overflow-y-auto px-3 mt-2">
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-2 px-1">Historique</div>
                    <div className="space-y-0.5">
                        {conversationHistory.map((c) => (
                            <div
                                key={c.id}
                                className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs cursor-pointer transition-colors ${c.active ? "bg-amen-blue/20 text-white border border-amen-blue/30" : "text-gray-400 hover:bg-surface-700 hover:text-white"
                                    }`}
                            >
                                <MessageSquare size={11} className="flex-shrink-0" />
                                <span className="truncate">{c.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Language selector + settings */}
            <div className="p-3 border-t border-surface-600 space-y-2">
                {!collapsed && (
                    <>
                        <div className="text-xs text-gray-500 uppercase tracking-wider mb-2 px-1">Langue</div>
                        <div className="grid grid-cols-3 gap-1">
                            {LANGUAGES.map(({ code, label }) => (
                                <button
                                    key={code}
                                    onClick={() => setLanguage(code)}
                                    className={`py-1.5 rounded-lg text-xs transition-all ${language === code
                                            ? "bg-amen-blue text-white font-semibold"
                                            : "bg-surface-700 text-gray-400 hover:text-white"
                                        }`}
                                >
                                    {label.split(" ")[0]}
                                </button>
                            ))}
                        </div>
                    </>
                )}
                <button className={`flex items-center gap-2 text-gray-400 hover:text-white transition-colors rounded-xl hover:bg-surface-700 ${collapsed ? "w-8 h-8 justify-center p-0 mx-auto" : "w-full px-3 py-2"}`}>
                    <Settings size={13} />
                    {!collapsed && <span className="text-xs">Paramètres</span>}
                </button>
            </div>
        </div>
    );
}
