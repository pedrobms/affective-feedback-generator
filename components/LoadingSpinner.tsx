
import React from 'react';
import { LoadingSpinnerIcon } from './Icons';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center my-10 p-6 bg-slate-700/50 rounded-lg">
      <LoadingSpinnerIcon className="animate-spin h-12 w-12 text-sky-400 mb-4" />
      <p className="text-slate-300 text-lg">Aguarde, gerando seu feedback...</p>
      <p className="text-slate-400 text-sm">Isso pode levar alguns segundos.</p>
    </div>
  );
};
