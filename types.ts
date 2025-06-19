export interface ChatMessage {
    id: string;
    sender: 'user' | 'bot';
    text: string;
}

export interface Conversation {
    id: string;
    title: string;
    messages: ChatMessage[];
}
