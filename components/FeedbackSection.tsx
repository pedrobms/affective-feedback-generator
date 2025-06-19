import React from 'react';

interface FeedbackSectionProps {
    title: string;
    content: string;
    icon?: string;
    titleColor?: string;
    borderColor?: string;
}

export const FeedbackSection: React.FC<FeedbackSectionProps> = ({ title, content, icon, titleColor = "text-slate-100", borderColor = "border-slate-700" }) => {
    const cleanedTitle = title.replace(icon || '', '').replace(':', '').trim();

    return (
        <div className={`bg-slate-800 p-6 rounded-xl shadow-lg ring-1 ring-slate-700 border-l-4 ${borderColor}`}>
            <h3 className={`text-2xl font-semibold ${titleColor} mb-4 flex items-center`}>
                {icon && <span className="mr-3 text-3xl">{icon}</span>}
                {cleanedTitle}
            </h3>
            <pre className="whitespace-pre-wrap text-slate-300 leading-relaxed text-base font-sans">{content}</pre>
        </div>
    );
};
