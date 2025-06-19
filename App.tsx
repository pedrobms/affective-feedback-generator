import React, { useState, useCallback } from 'react';
import { Sidebar } from './components/Sidebar';
import { MainView } from './components/MainView';
import { ConversationView } from './components/ConversationView';
import { MenuIcon, SparklesIcon } from './components/Icons';
import { Conversation } from './types';

const App: React.FC = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [currentView, setCurrentView] = useState<'main' | 'conversation'>('main');
  const [selectedConversationId, setSelectedConversationId] = useState<string | null>(null);
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const handleNewConversation = useCallback((conversation: Conversation) => {
    setConversations(prev => [conversation, ...prev]);
    setSelectedConversationId(conversation.id);
    setCurrentView('conversation');
  }, []);

  const handleSelectConversation = useCallback((id: string) => {
    setSelectedConversationId(id);
    setCurrentView('conversation');
    setSidebarOpen(false);
  }, []);

  const handleStartNewConversation = useCallback(() => {
    setCurrentView('main');
    setSelectedConversationId(null);
    setSidebarOpen(false);
  }, []);

  const selectedConversation = conversations.find(c => c.id === selectedConversationId) || null;

  return (
      <div className="h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 flex overflow-hidden selection:bg-sky-500 selection:text-white">
        <div className={`absolute md:relative z-20 h-full transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
          <Sidebar
              conversations={conversations}
              onConversationSelect={handleSelectConversation}
              onNewConversation={handleStartNewConversation}
          />
        </div>

        <div className="flex-1 flex flex-col">
          <header className="w-full py-4 px-6 flex items-center justify-between md:justify-center text-center bg-slate-900/50 backdrop-blur-sm flex-shrink-0">
            <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="md:hidden text-slate-300 z-30">
              <MenuIcon className="h-6 w-6" />
            </button>
            <div className="flex items-center justify-center">
              <SparklesIcon className="w-8 h-8 text-sky-400 mr-3" />
              <h1 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-cyan-300 to-teal-400">
                Feedback Afetivo para Escritas
              </h1>
            </div>
            <div className="md:hidden w-6"></div> {/* Spacer */}
          </header>

          <main className="flex-1 overflow-y-auto p-4 md:p-6">
            {currentView === 'main' && <MainView onNewConversation={handleNewConversation} />}
            {currentView === 'conversation' && <ConversationView conversation={selectedConversation} />}
          </main>
        </div>

        {isSidebarOpen && (
            <div
                onClick={() => setSidebarOpen(false)}
                className="md:hidden fixed inset-0 bg-black/50 z-10"
            ></div>
        )}
      </div>
  );
};

export default App;
