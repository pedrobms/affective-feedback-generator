
import React, { useState, useCallback } from 'react';
import { TextAreaInput } from './components/TextAreaInput';
import { SubmitButton } from './components/SubmitButton';
import { FeedbackDisplay } from './components/FeedbackDisplay';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorMessage } from './components/ErrorMessage';
import { generateFeedbackViaBackend } from './services/geminiService'; // Updated import
import { GithubIcon, SparklesIcon } from './components/Icons';

const App: React.FC = () => {
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
      // Call the new service function that communicates with the backend
      const result = await generateFeedbackViaBackend(inputText);
      setFeedback(result);
    } catch (err) {
      if (err instanceof Error) {
        // Error messages are now more generic as they come from the backend call
        setError(`${err.message}`);
      } else {
        setError('Ocorreu um erro desconhecido ao solicitar o feedback.');
      }
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [inputText]);

  return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 flex flex-col items-center p-4 selection:bg-sky-500 selection:text-white">
        <header className="w-full max-w-3xl mx-auto py-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <SparklesIcon className="w-12 h-12 text-sky-400 mr-3" />
            <h1 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-cyan-300 to-teal-400">
              Feedback Afetivo para Escritas
            </h1>
          </div>
        </header>

        <main className="w-full max-w-3xl mx-auto bg-slate-800 shadow-2xl rounded-xl p-6 md:p-10 ring-1 ring-slate-700">
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
        </main>
      </div>
  );
};

export default App;
