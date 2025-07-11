import React from 'react';
import { Conversation } from '../types';
import { FeedbackDisplay } from './FeedbackDisplay';
import { PadDisplay } from './PadDisplay';
import { StructuredFeedback } from '../types';

interface ConversationViewProps {
    conversation: Conversation | null;
}

export const ConversationView: React.FC<ConversationViewProps> = ({ conversation }) => {
    if (!conversation) {
        return (
            <div className="flex items-center justify-center h-full text-slate-500">
                <p>Selecione uma conversa ou inicie uma nova.</p>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl font-bold text-slate-100 pb-4 border-b border-slate-700">{conversation.title}</h2>
            {conversation.messages.map((message) => (
                <div key={message.id}>
                    {message.sender === 'user' ? (
                        <div className="bg-slate-700 p-4 rounded-xl shadow-md">
                            <h3 className="font-semibold text-sky-400 mb-2">Você escreveu:</h3>
                            <p className="text-slate-300 whitespace-pre-wrap">{message.text}</p>
                        </div>
                    ) : (
                        typeof message.text === 'object' ? (
                            <div className="space-y-8">
                                <PadDisplay scores={(message.text as StructuredFeedback).padAnalysis} />
                                <FeedbackDisplay
                                    technicalContent={(message.text as StructuredFeedback).technicalFeedback}
                                    affectiveContent={(message.text as StructuredFeedback).affectiveFeedback}
                                    padAnalysisReview={(message.text as StructuredFeedback).padAnalysisReview}
                                />
                            </div>
                    ) : (
                            <p>{message.text}</p>
                    ))}
                </div>
            ))}
        </div>
    );
};
