
import React from 'react';
import { AlertTriangleIcon } from './Icons'; // Assuming Icons.tsx for this

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="my-6 p-4 bg-red-900/30 border border-red-700 text-red-300 rounded-lg flex items-start space-x-3 shadow-md" role="alert">
      <AlertTriangleIcon className="h-6 w-6 text-red-400 flex-shrink-0 mt-0.5" />
      <div>
        <h4 className="font-semibold text-red-200">Ocorreu um Erro</h4>
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
};
