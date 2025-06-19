import React from 'react';
import { Conversation } from '../types';
import { PlusIcon } from './Icons';

interface SidebarProps {
    conversations: Conversation[];
    onConversationSelect: (id: string) => void;
    onNewConversation: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ conversations, onConversationSelect, onNewConversation }) => {
    return (
        <aside className="bg-slate-800 text-white w-64 md:w-72 h-full flex flex-col p-4 space-y-4">
            <button
                onClick={onNewConversation}
                className="w-full flex items-center justify-center px-4 py-2 bg-sky-600 hover:bg-sky-700 rounded-lg flex-shrink-0"
            >
                <PlusIcon className="w-6 h-6 mr-2" />
                Nova Conversa
            </button>
            <nav className="flex-1 overflow-y-auto">
                <ul>
                    {conversations.map(convo => (
                        <li key={convo.id} className="mb-2">
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    onConversationSelect(convo.id);
                                }}
                                className="block p-2 rounded-lg hover:bg-slate-700 truncate"
                            >
                                {convo.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};
