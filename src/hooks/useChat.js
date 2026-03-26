import { useState, useCallback, useRef } from "react";
import { detectIntent } from "../engine/intentDetector";
import { buildResponse } from "../engine/responseBuilder";

const WELCOME_MESSAGE = {
    id: "welcome",
    role: "bot",
    text: `Bienvenue chez **AMEN BANK** ! 👋\n\nJe suis votre assistant financier intelligent, disponible 24h/24. Je parle **français**, **arabe** et **dialecte tunisien**.\n\nComment puis-je vous aider aujourd'hui ?`,
    widget: null,
    quickReplies: ["Voir mon solde 💳", "Taux de change 🌍", "Investir mon épargne 📈", "Ouvrir un compte 🏦", "Parler à un conseiller 👤"],
    timestamp: new Date().toISOString(),
};

export function useChat() {
    const [messages, setMessages] = useState([WELCOME_MESSAGE]);
    const [isTyping, setIsTyping] = useState(false);
    const [language, setLanguage] = useState("fr");
    const [userProfile, setUserProfile] = useState(null);
    const [conversationHistory, setConversationHistory] = useState([
        { id: "conv-1", title: "Nouvelle conversation", timestamp: new Date().toISOString(), active: true },
    ]);
    const typingTimer = useRef(null);

    const sendMessage = useCallback(
        async (text) => {
            if (!text.trim()) return;

            // Detect Tunisian dialect heuristic
            const tnKeywords = ["wesh", "kifeh", "chneya", "barsha", "mch", "3andek", "ya3tik", "nbda", "nib3ha"];
            const isLikelyTunisian = tnKeywords.some((kw) => text.toLowerCase().includes(kw));
            const effectiveLang = isLikelyTunisian ? "tn" : language;

            // Add user message
            const userMsg = {
                id: `user-${Date.now()}`,
                role: "user",
                text,
                timestamp: new Date().toISOString(),
            };
            setMessages((prev) => [...prev, userMsg]);
            setIsTyping(true);

            // Simulate async processing delay
            const { intent } = detectIntent(text);
            const delay = 800 + Math.random() * 600;

            clearTimeout(typingTimer.current);
            typingTimer.current = setTimeout(() => {
                const response = buildResponse(intent, effectiveLang);
                const botMsg = {
                    id: `bot-${Date.now()}`,
                    role: "bot",
                    ...response,
                };
                setMessages((prev) => [...prev, botMsg]);
                setIsTyping(false);

                // Update conversation title from first meaningful user message
                setConversationHistory((prev) =>
                    prev.map((c) =>
                        c.active ? { ...c, title: text.length > 40 ? text.slice(0, 40) + "…" : text } : c
                    )
                );
            }, delay);
        },
        [language]
    );

    const newConversation = useCallback(() => {
        setConversationHistory((prev) => [
            { id: `conv-${Date.now()}`, title: "Nouvelle conversation", timestamp: new Date().toISOString(), active: true },
            ...prev.map((c) => ({ ...c, active: false })),
        ]);
        setMessages([WELCOME_MESSAGE]);
        setIsTyping(false);
    }, []);

    const updateUserProfile = useCallback((profile) => {
        setUserProfile(profile);
    }, []);

    return {
        messages,
        isTyping,
        language,
        setLanguage,
        sendMessage,
        newConversation,
        conversationHistory,
        userProfile,
        updateUserProfile,
    };
}
