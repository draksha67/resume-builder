import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const FormSection = ({ title, icon: Icon, children, isOpen: defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:border-slate-600/50">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-5 hover:bg-white/5 transition-colors text-left"
            >
                <div className="flex items-center gap-3">
                    {Icon && <div className="p-2 bg-slate-800 rounded-lg text-blue-400 group-hover:text-blue-300 transition-colors"><Icon className="w-5 h-5" /></div>}
                    <span className="font-semibold text-slate-200 text-lg">{title}</span>
                </div>
                {isOpen ? <ChevronUp className="w-5 h-5 text-slate-500" /> : <ChevronDown className="w-5 h-5 text-slate-500" />}
            </button>

            {isOpen && (
                <div className="p-5 border-t border-slate-700/50 animate-in slide-in-from-top-2 duration-200 bg-slate-900/40">
                    {children}
                </div>
            )}
        </div>
    );
};

export default FormSection;
