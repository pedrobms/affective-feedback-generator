import React from 'react';
import {FeedbackSection} from "@/components/FeedbackSection.tsx";

interface FeedbackDisplayProps {
    technicalContent: string;
    affectiveContent: string;
    padAnalysisReview: string;
}

export const FeedbackDisplay: React.FC<FeedbackDisplayProps> = ({
                                                                    technicalContent,
                                                                    affectiveContent,
                                                                    padAnalysisReview
                                                                }) => {
    return (
        <div className="space-y-8">
            {padAnalysisReview && (
                <FeedbackSection
                    title="Análise do PAD"
                    content={padAnalysisReview.replace("🔍 Revisão PAD:", "").trim()}
                    icon="🔍"
                    titleColor="text-yellow-400"
                    borderColor="border-yellow-500"
                />
            )}
            {technicalContent && (
                <FeedbackSection
                    title="Feedback Técnico"
                    content={technicalContent.replace("✅ Feedback Técnico:", "").trim()}
                    icon="✅"
                    titleColor="text-sky-400"
                    borderColor="border-sky-500"
                />
            )}
            {affectiveContent && (
                <FeedbackSection
                    title="Feedback Afetivo"
                    content={affectiveContent.replace("❤️ Feedback Afetivo:", "").trim()}
                    icon="❤️"
                    titleColor="text-pink-400"
                    borderColor="border-pink-500"
                />
            )}
        </div>
    );
};
