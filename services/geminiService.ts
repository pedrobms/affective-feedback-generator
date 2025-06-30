import { StructuredFeedback } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const generateFeedbackViaBackend = async (userText: string): Promise<StructuredFeedback> => {
  try {
    const response = await fetch(`${API_BASE_URL}/generate-feedback`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: userText }),
    });

    if (!response.ok) {
      let errorMessage = `Erro do servidor: ${response.status} ${response.statusText}`;
      try {
        const errorData = await response.json();
        errorMessage = errorData.error || errorData.message || errorMessage;
      } catch (e) {
        // Failed to parse error JSON, use default status text
      }
      throw new Error(errorMessage);
    }

    const data = await response.json();

    if (!data.feedback || !data.feedback.padAnalysis) { // Verifica a nova estrutura
      throw new Error("O serviço de feedback retornou uma resposta inesperada ou inválida.");
    }

    return data.feedback;

  } catch (error) {
    console.error("Error calling backend service:", error);
    if (error instanceof Error) {
      throw new Error(`Falha ao comunicar com o serviço de feedback: ${error.message}. Verifique sua conexão ou tente mais tarde.`);
    }
    throw new Error("Ocorreu um erro desconhecido ao tentar obter o feedback do serviço.");
  }
};
