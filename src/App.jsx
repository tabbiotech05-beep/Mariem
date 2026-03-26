import { useState } from "react";
import { useChat } from "./hooks/useChat";
import ChatWindow from "./components/chat/ChatWindow";
import Sidebar from "./components/sidebar/Sidebar";
import { Menu, Bell, HelpCircle } from "lucide-react";

export default function App() {
    const {
        messages, isTyping, language, setLanguage,
        sendMessage, newConversation, conversationHistory, updateUserProfile,
    } = useChat();

    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen w-screen bg-surface-900 overflow-hidden font-sans">
            {/* Mobile sidebar overlay */}
            {mobileSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-20 lg:hidden"
                    onClick={() => setMobileSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div className={`
        fixed lg:relative inset-y-0 left-0 z-30 lg:z-auto
        transition-transform duration-300
        ${mobileSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}>
                <Sidebar
                    conversationHistory={conversationHistory}
                    onNewChat={() => { newConversation(); setMobileSidebarOpen(false); }}
                    onSendMessage={(q) => { sendMessage(q); setMobileSidebarOpen(false); }}
                    language={language}
                    setLanguage={setLanguage}
                    collapsed={sidebarCollapsed}
                    onToggle={() => setSidebarCollapsed(c => !c)}
                />
            </div>

            {/* Main area */}
            <div className="flex-1 flex flex-col min-w-0 h-full">
                {/* Header */}
                <header className="flex items-center gap-3 px-4 py-3 border-b border-surface-600 bg-surface-800/80 backdrop-blur-sm flex-shrink-0">
                    {/* Mobile menu */}
                    <button
                        onClick={() => setMobileSidebarOpen(true)}
                        className="lg:hidden text-gray-400 hover:text-white transition-colors p-1"
                    >
                        <Menu size={18} />
                    </button>

                    {/* Bot info */}
                    <div className="flex items-center gap-2.5 flex-1">
                        <div className="relative">
                            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amen-blue to-amen-navy flex items-center justify-center shadow-lg shadow-amen-blue/30">
                                <span className="text-xs font-black text-amen-gold">AB</span>
                            </div>
                            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border-2 border-surface-800 rounded-full" />
                        </div>
                        <div>
                            <div className="font-semibold text-white text-sm">AMEN BANK Assistant</div>
                            <div className="text-xs text-green-400 flex items-center gap-1">
                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                En ligne · Répond en {language === "fr" ? "français" : language === "tn" ? "dialecte tunisien" : "arabe"}
                            </div>
                        </div>
                    </div>

                    {/* Header actions */}
                    <div className="flex items-center gap-2">
                        <div className="hidden sm:flex gap-1">
                            {[
                                { code: "fr", emoji: "🇫🇷" },
                                { code: "tn", emoji: "🇹🇳" },
                                { code: "ar", emoji: "🇸🇦" },
                            ].map(({ code, emoji }) => (
                                <button
                                    key={code}
                                    onClick={() => setLanguage(code)}
                                    className={`px-2 py-1 rounded-lg text-xs transition-all ${language === code ? "bg-amen-blue text-white" : "text-gray-400 hover:text-white hover:bg-surface-700"
                                        }`}
                                >
                                    {emoji}
                                </button>
                            ))}
                        </div>
                        <button className="text-gray-400 hover:text-white transition-colors p-2 rounded-xl hover:bg-surface-700">
                            <Bell size={15} />
                        </button>
                        <button className="text-gray-400 hover:text-white transition-colors p-2 rounded-xl hover:bg-surface-700">
                            <HelpCircle size={15} />
                        </button>
                    </div>
                </header>

                {/* Chat */}
                <div className="flex-1 min-h-0">
                    <ChatWindow
                        messages={messages}
                        isTyping={isTyping}
                        language={language}
                        sendMessage={sendMessage}
                        updateUserProfile={updateUserProfile}
                    />
                </div>
            </div>
        </div>
    );
}
