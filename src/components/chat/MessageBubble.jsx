import { WIDGET_TYPES } from "../../engine/responseBuilder";
import SimulatorWidget from "../widgets/SimulatorWidget";
import RiskQuiz from "../widgets/RiskQuiz";
import ExchangeRateTicker from "../widgets/ExchangeRateTicker";
import TransactionHistory from "../widgets/TransactionHistory";
import PortfolioWidget from "../widgets/PortfolioWidget";
import BVMTWidget from "../widgets/BVMTWidget";
import AgencesWidget from "../widgets/AgencesWidget";
import AppointmentModal from "../widgets/AppointmentModal";
import ProductsWidget from "../widgets/ProductsWidget";

function WidgetRenderer({ type, language, onUpdateProfile }) {
    switch (type) {
        case WIDGET_TYPES.AGENCES: return <AgencesWidget />;
        case WIDGET_TYPES.TRANSACTIONS: return <TransactionHistory />;
        case WIDGET_TYPES.EXCHANGE_RATES: return <ExchangeRateTicker />;
        case WIDGET_TYPES.SIMULATOR: return <SimulatorWidget />;
        case WIDGET_TYPES.RISK_QUIZ: return <RiskQuiz language={language} onComplete={onUpdateProfile} />;
        case WIDGET_TYPES.PRODUCTS: return <ProductsWidget />;
        case WIDGET_TYPES.PORTFOLIO: return <PortfolioWidget />;
        case WIDGET_TYPES.BVMT: return <BVMTWidget />;
        case WIDGET_TYPES.APPOINTMENT:
        case WIDGET_TYPES.CREDIT_FORM: return <AppointmentModal />;
        default: return null;
    }
}

function formatTime(iso) {
    return new Date(iso).toLocaleTimeString("fr-TN", { hour: "2-digit", minute: "2-digit" });
}

// Simple markdown renderer without external dep
function SimpleMarkdown({ text }) {
    // Bold **text**
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return (
        <span>
            {parts.map((p, i) =>
                p.startsWith("**") && p.endsWith("**")
                    ? <strong key={i}>{p.slice(2, -2)}</strong>
                    : p
            )}
        </span>
    );
}

function renderText(text) {
    return text.split("\n").map((line, i) => {
        if (!line.trim()) return <br key={i} />;
        // Heading
        if (line.startsWith("# ")) return <h3 key={i} className="font-bold text-base mt-2 mb-1">{line.slice(2)}</h3>;
        // Table row
        if (line.startsWith("|")) {
            const cells = line.split("|").filter(c => c.trim() && c.trim() !== "---" && !c.match(/^-+$/));
            if (cells.length === 0 || line.match(/^[\|:\-\s]+$/)) return null;
            const isHeader = i === 0 || true;
            return (
                <div key={i} className="flex gap-2 text-xs py-1 border-b border-surface-600/50 last:border-0">
                    {cells.map((c, j) => (
                        <span key={j} className={`flex-1 ${j === 0 ? "text-gray-300" : "text-amen-gold font-semibold"}`}>
                            <SimpleMarkdown text={c.trim()} />
                        </span>
                    ))}
                </div>
            );
        }
        // Bullet
        if (line.startsWith("•") || line.startsWith("·") || line.startsWith("-")) {
            return (
                <div key={i} className="flex gap-1.5 mb-0.5">
                    <span className="text-amen-gold flex-shrink-0">•</span>
                    <span><SimpleMarkdown text={line.replace(/^[•·\-]\s*/, "")} /></span>
                </div>
            );
        }
        // Numbered
        if (/^\d+\./.test(line)) {
            return (
                <div key={i} className="flex gap-1.5 mb-0.5">
                    <span className="text-amen-gold flex-shrink-0 font-semibold w-4">{line.match(/^\d+/)[0]}.</span>
                    <span><SimpleMarkdown text={line.replace(/^\d+\.\s*/, "")} /></span>
                </div>
            );
        }
        return <p key={i} className="mb-0.5"><SimpleMarkdown text={line} /></p>;
    }).filter(Boolean);
}

export default function MessageBubble({ message, language, onUpdateProfile, onQuickReply }) {
    const isUser = message.role === "user";

    return (
        <div className={`flex gap-3 animate-fade-in ${isUser ? "flex-row-reverse" : "flex-row"}`}>
            {/* Avatar */}
            {!isUser && (
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amen-blue to-amen-navy flex items-center justify-center flex-shrink-0 mt-1 shadow-lg shadow-amen-blue/20">
                    <span className="text-xs font-bold text-amen-gold">AB</span>
                </div>
            )}
            {isUser && (
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs text-white">👤</span>
                </div>
            )}

            <div className={`flex-1 max-w-sm ${isUser ? "items-end" : "items-start"} flex flex-col`}>
                {/* Bubble */}
                <div
                    className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${isUser
                        ? "bg-amen-blue text-white rounded-tr-sm self-end"
                        : "bg-surface-600 text-gray-100 rounded-tl-sm"
                        }`}
                >
                    {isUser ? (
                        <span>{message.text}</span>
                    ) : (
                        <div className="space-y-0.5">{renderText(message.text)}</div>
                    )}
                </div>

                {/* Timestamp */}
                <div className={`text-xs text-gray-500 mt-1 ${isUser ? "text-right" : "text-left"}`}>
                    {formatTime(message.timestamp)}
                </div>

                {/* Widget */}
                {!isUser && message.widget && (
                    <div className="w-full">
                        <WidgetRenderer type={message.widget} language={language} onUpdateProfile={onUpdateProfile} />
                    </div>
                )}

                {/* Quick replies */}
                {!isUser && message.quickReplies?.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                        {message.quickReplies.map((qr, i) => (
                            <button
                                key={i}
                                onClick={() => onQuickReply(qr)}
                                className="text-xs px-3 py-1.5 rounded-full border border-amen-blue/40 bg-amen-blue/10 text-amen-gold hover:bg-amen-blue/30 hover:border-amen-blue/70 transition-all duration-200 whitespace-nowrap"
                            >
                                {qr}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
