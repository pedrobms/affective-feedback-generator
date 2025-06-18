
# Feedback Afetivo para Escritas

## Descrição

"Feedback Afetivo para Escritas" é uma aplicação web que oferece análise de textos com foco em dois tipos de feedback:

- **Feedback Técnico:** Aspectos gramaticais, ortográficos, estruturais, de clareza e coesão.
- **Feedback Afetivo:** Reconhecimento do esforço, tom emocional e incentivo ao desenvolvimento.

A ferramenta busca apoiar o aprimoramento da escrita, considerando tanto a forma quanto o conteúdo emocional.

## Funcionalidades

- **Entrada de Texto:** Área simples para digitação ou colagem de texto.
- **Geração de Feedback com IA:** Utiliza um modelo de IA para analisar o texto e gerar feedback.
- **Feedback Estruturado:** Exibição separada por categoria (Técnico e Afetivo).
- **Interface Responsiva:** Desenvolvida com React e Tailwind CSS.

## Tecnologias Utilizadas

- **Frontend:** React 19, TypeScript, Tailwind CSS.
- **IA:** Google Gemini API (`@google/genai`).
- **Estrutura Base:** HTML5, CSS3, ES6 Modules via `importmap` (esm.sh).

## Configuração

### Obtenção e Configuração da API Key

1. Gere sua chave em: [Google AI Studio](https://aistudio.google.com/app/apikey).
2. Configure a variável `API_KEY` no ambiente de execução.
3. Configure o modelo a ser utilizado dentro do arquivo `constants.ts`.

## Execução

1. Clone o repositório este repositório.
2. Configure a API Key conforme indicado.
3. Execute `npm install` para instalar as dependências.
4. Execute `npm run dev` para iniciar o servidor de desenvolvimento.

## Como Usar

1. Insira o texto na área "Seu Texto".
2. Clique em "Gerar Feedback".
3. Aguarde o processamento.
4. Visualize o feedback separado por categorias.
5. Em caso de erro, siga as mensagens exibidas na tela.

## Estrutura do Projeto

```
.
├── index.html
├── index.tsx
├── App.tsx
├── metadata.json
├── constants.ts
├── types.ts
├── components/
│   ├── TextAreaInput.tsx
│   ├── SubmitButton.tsx
│   ├── FeedbackDisplay.tsx
│   ├── LoadingSpinner.tsx
│   ├── ErrorMessage.tsx
│   └── Icons.tsx
└── services/
    └── geminiService.ts
```

## Observações

- **Qualidade do Feedback:** Depende da API Gemini e do prompt definido (`USER_PROMPT_TEMPLATE`).
- **Limitações:** Sujeito a cotas de uso da API.
