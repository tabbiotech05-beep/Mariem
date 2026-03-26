export default function TypingIndicator() {
    return (
        <div className="flex gap-3 animate-fade-in">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amen-blue to-amen-navy flex items-center justify-center flex-shrink-0 shadow-lg shadow-amen-blue/20">
                <span className="text-xs font-bold text-amen-gold">AB</span>
            </div>
            <div className="bg-surface-600 rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "300ms" }} />
            </div>
        </div>
    );
}
