export interface ChatMessage {
    id: string;
    sender: 'user' | 'bot';
    text: string | StructuredFeedback;
}

export interface Conversation {
    id: string;
    title: string;
    messages: ChatMessage[];
}

export interface PadScores {
    pleasure: number;
    arousal: number;
    dominance: number;
}

export interface StructuredFeedback {
    technicalFeedback: string;
    affectiveFeedback: string;
    padAnalysisReview: string;
    padAnalysis: PadScores;
}
