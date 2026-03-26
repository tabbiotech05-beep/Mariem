import { useState, useRef, useEffect } from "react";
import { Send, Mic, Paperclip } from "lucide-react";

const SUGGESTIONS = [
    "Quels sont les horaires des agences ?",
    "Voir mon solde et transactions",
    "Taux de change EUR/TND",
    "Je veux investir 500 TND/mois",
    "Simuler un placement sur 10 ans",
    "Prendre rendez-vous avec un conseiller",
];

export default function MessageInput({ onSend, disabled }) {
    const [text, setText] = useState("");
    const [focused, setFocused] = useState(false);
    const inputRef = useRef(null);

    const handleSend = () => {
        if (!text.trim() || disabled) return;
        onSend(text.trim());
        setText("");
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    useEffect(() => {
        if (!disabled) inputRef.current?.focus();
    }, [disabled]);

    return (
        <div className="p-4 border-t border-surface-600 bg-surface-800/80 backdrop-blur-sm">
            {/* Suggestion chips */}
            {!text && (
                <div className="flex gap-2 overflow-x-auto pb-2 mb-2 no-scrollbar">
                    {SUGGESTIONS.map((s, i) => (
                        <button
                            key={i}
                            onClick={() => onSend(s)}
                            disabled={disabled}
                            className="flex-shrink-0 text-xs px-3 py-1.5 rounded-full bg-surface-600 text-gray-300 border border-surface-500 hover:bg-amen-blue/20 hover:border-amen-blue/50 hover:text-amen-gold transition-all duration-200 disabled:opacity-40"
                        >
                            {s}
                        </button>
                    ))}
                </div>
            )}

            {/* Input row */}
            <div className={`flex items-end gap-2 bg-surface-700 rounded-2xl px-4 py-2 border transition-all duration-200 ${focused ? "border-amen-blue/60 shadow-lg shadow-amen-blue/10" : "border-surface-600"
                }`}>
                <button className="text-gray-500 hover:text-gray-300 transition-colors p-1 mb-0.5 flex-shrink-0">
                    <Paperclip size={16} />
                </button>
                <textarea
                    ref={inputRef}
                    value={text}
                    onChange={e => setText(e.target.value)}
                    onKeyDown={handleKeyDown}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    placeholder="Posez votre question en français, arabe ou dialecte tunisien..."
                    disabled={disabled}
                    rows={1}
                    className="flex-1 bg-transparent text-white text-sm resize-none outline-none placeholder-gray-500 py-1 max-h-32 overflow-y-auto disabled:opacity-50"
                    style={{ lineHeight: "1.5" }}
                />
                <button className="text-gray-500 hover:text-amen-gold transition-colors p-1 mb-0.5 flex-shrink-0">
                    <Mic size={16} />
                </button>
                <button
                    onClick={handleSend}
                    disabled={!text.trim() || disabled}
                    className="bg-amen-blue hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed text-white p-2 rounded-xl transition-all duration-200 flex-shrink-0 mb-0.5 hover:scale-105"
                >
                    <Send size={15} />
                </button>
            </div>
            <div className="text-xs text-gray-500 text-center mt-2">
                AMEN BANK Assistant · Vos données sont sécurisées 🔒
            </div>
        </div>
    );
}
