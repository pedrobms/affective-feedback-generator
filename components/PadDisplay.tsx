import React from 'react';
import { PadScores } from '../types';

interface PadDisplayProps {
    scores: PadScores;
}

const PadBar: React.FC<{ label: string; value: number }> = ({ label, value }) => {
    const percentage = ((value + 1) / 2) * 100; // Converte de [-1, 1] para [0, 100]
    const color = value > 0.1 ? 'bg-emerald-500' : value < -0.1 ? 'bg-red-500' : 'bg-slate-500';

    return (
        <div>
            <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-slate-300">{label}</span>
                <span className="text-sm font-bold text-white">{value.toFixed(2)}</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2.5">
                <div className={`${color} h-2.5 rounded-full`} style={{ width: `${percentage}%` }}></div>
            </div>
        </div>
    );
};


export const PadDisplay: React.FC<PadDisplayProps> = ({ scores }) => {
    return (
        <div className="bg-slate-800 p-6 rounded-xl shadow-lg ring-1 ring-slate-700 border-l-4 border-purple-500">
            <h3 className="text-2xl font-semibold text-purple-400 mb-4 flex items-center">
                <span className="mr-3 text-3xl">📊</span>
                Análise Emocional (PAD)
            </h3>
            <div className="space-y-4">
                <PadBar label="Prazer (Agradável)" value={scores.pleasure} />
                <PadBar label="Ativação (Energia)" value={scores.arousal} />
                <PadBar label="Dominância (Controle)" value={scores.dominance} />
            </div>
            <p className="text-xs text-slate-400 mt-4">
                Scores variam de -1.0 (e.g., triste, calmo, submisso) a +1.0 (e.g., feliz, enérgico, dominante).
            </p>
        </div>
    );
};
