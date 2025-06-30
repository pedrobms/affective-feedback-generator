import React from 'react';
import {ChatMessage} from '../types';
import {FeedbackSection} from './FeedbackSection';

interface ChatHistoryDisplayProps {
    messages: ChatMessage[];
}

export const ChatHistoryDisplay: React.FC<ChatHistoryDisplayProps> = ({messages}) => {
    return (
        <div className="space-y-8 mt-8">
            {messages.map((message) => {
                if (message.sender === 'user') {
                    return (
                        <div key={message.id} className="bg-slate-700 p-4 rounded-xl shadow-lg ring-1 ring-slate-600">
                            <h3 className="text-lg font-semibold text-slate-200 mb-2">Você escreveu:</h3>
                            <pre
                                className="whitespace-pre-wrap text-slate-300 leading-relaxed text-base font-sans">{message.text}</pre>
                        </div>
                    );
                }

                if (message.sender === 'bot') {
                    let technicalContent: string | null = message.text.technicalFeedback;
                    let affectiveContent: string | null = message.text.affectiveFeedback;
                    let padAnalysisReview: string | null = message.text.padAnalysisReview;

                    return (
                        <div key={message.id} className="space-y-4">
                            {padAnalysisReview && (
                                <FeedbackSection}
                                    title="Análise do PAD"
                                    content={padAnalysisReview.replace("🔍 Análise do PAD:", "").trim()}
                                    icon="🔍"
                                    titleColor="text-yellow-400"
                                    borderColor="border-yellow-500"
                                />
                            )}
                            {technicalContent && (
                                <FeedbackSection
                                    title="Feedback Técnico"
                                    content={technicalContent}
                                    icon="✅"
                                    titleColor="text-sky-400"
                                    borderColor="border-sky-500"
                                />
                            )}
                            {affectiveContent && (
                                <FeedbackSection
                                    title="Feedback Afetivo"
                                    content={affectiveContent}
                                    icon="❤️"
                                    titleColor="text-pink-400"
                                    borderColor="border-pink-500"
                                />
                            )}
                            {!technicalContent && !affectiveContent && (
                                <FeedbackSection title="Feedback Recebido:" content={message.text}
                                                 borderColor="border-sky-500"/>
                            )}
                        </div>
                    );
                }
                return null;
            })}
        </div>
    );
};
