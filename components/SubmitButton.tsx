
import React from 'react';
import { LoadingSpinnerIcon } from './Icons'; // Assuming Icons.tsx for this

interface SubmitButtonProps {
  onClick: () => void;
  isLoading: boolean;
  disabled?: boolean;
  text?: string;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick, isLoading, disabled, text = "Gerar Feedback" }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isLoading || disabled}
      className="w-full flex items-center justify-center px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-slate-800 transition-all duration-150 ease-in-out disabled:opacity-60 disabled:cursor-not-allowed group"
    >
      {isLoading ? (
        <>
          <LoadingSpinnerIcon className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
          Processando...
        </>
      ) : (
        text
      )}
    </button>
  );
};
