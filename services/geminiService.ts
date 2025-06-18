
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { GEMINI_MODEL_NAME, SYSTEM_INSTRUCTION, USER_PROMPT_TEMPLATE } from '../constants';

if (!process.env.API_KEY) {
  // This check is more for development warning. 
  // Production build might optimize process.env away if not properly handled by bundler.
  // The SDK will throw an error if API_KEY is missing/invalid when `new GoogleGenAI` is called.
  console.warn(
    "API_KEY environment variable is not set. The application might not work as expected."
  );
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "MISSING_API_KEY" }); // Provide a dummy if not set to avoid immediate crash, SDK handles it.

export const generateFeedbackFromGemini = async (userText: string): Promise<string> => {
  if (!process.env.API_KEY || process.env.API_KEY === "MISSING_API_KEY") {
    throw new Error("A chave da API Gemini não está configurada. Por favor, configure a variável de ambiente API_KEY.");
  }
  
  try {
    const prompt = USER_PROMPT_TEMPLATE(userText);
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: GEMINI_MODEL_NAME,
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        // temperature: 0.7, // Example: Adjust creativity. Default is usually fine.
      },
    });
    
    // As per Gemini API guidance, directly access .text
    const feedbackText = response.text;

    if (!feedbackText) {
        throw new Error("A API retornou uma resposta vazia.");
    }

    return feedbackText;

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    if (error instanceof Error) {
        // Customize error messages based on potential Gemini API error structures if needed
        if (error.message.includes("API key not valid")) {
             throw new Error("A chave da API Gemini fornecida não é válida. Verifique suas credenciais.");
        }
         throw new Error(`Falha ao comunicar com a API Gemini: ${error.message}`);
    }
    throw new Error("Ocorreu um erro desconhecido ao gerar feedback pela API Gemini.");
  }
};
