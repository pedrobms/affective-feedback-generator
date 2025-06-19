import React, { useState, useCallback } from 'react';
import { TextAreaInput } from './TextAreaInput';
import { SubmitButton } from './SubmitButton';
import { FeedbackDisplay } from './FeedbackDisplay';
import { LoadingSpinner } from './LoadingSpinner';
import { ErrorMessage } from './ErrorMessage';
import { generateFeedbackViaBackend } from '../services/geminiService';
import { Conversation, ChatMessage } from '../types';

interface MainViewProps {
    onNewConversation: (conversation: Conversation) => void;
}

export const MainView: React.FC<MainViewProps> = ({ onNewConversation }) => {
    const [inputText, setInputText] = useState<string>('');
    const [feedback, setFeedback] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputText(event.target.value);
    }, []);

    const handleSubmit = useCallback(async () => {
        if (!inputText.trim()) {
            setError('Por favor, insira um texto para avaliação.');
            return;
        }
        setIsLoading(true);
        setError(null);
        setFeedback(null);
        try {
            const result = await generateFeedbackViaBackend(inputText);
            setFeedback(result);

            const userMessage: ChatMessage = { id: Date.now().toString(), sender: 'user', text: inputText };
            const botMessage: ChatMessage = { id: (Date.now() + 1).toString(), sender: 'bot', text: result };

            const newConversation: Conversation = {
                id: Date.now().toString(),
                title: inputText.substring(0, 30) + '...',
                messages: [userMessage, botMessage],
            };
            onNewConversation(newConversation);

        } catch (err) {
            if (err instanceof Error) {
                setError(`${err.message}`);
            } else {
                setError('Ocorreu um erro desconhecido ao solicitar o feedback.');
            }
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }, [inputText, onNewConversation]);

    return (
        <div className="w-full max-w-3xl mx-auto bg-slate-800 shadow-2xl rounded-xl p-6 md:p-10 ring-1 ring-slate-700">
            <div className="space-y-6">
                <TextAreaInput
                    value={inputText}
                    onChange={handleInputChange}
                    placeholder="Cole ou digite aqui o texto que você gostaria de avaliar..."
                    disabled={isLoading}
                />
                <SubmitButton onClick={handleSubmit} isLoading={isLoading} disabled={!inputText.trim()} />
            </div>

            {isLoading && <LoadingSpinner />}
            {error && <ErrorMessage message={error} />}
            {feedback && !isLoading && (
                <div className="mt-8">
                    <FeedbackDisplay feedback={feedback} />
                </div>
            )}
        </div>
    );
};
