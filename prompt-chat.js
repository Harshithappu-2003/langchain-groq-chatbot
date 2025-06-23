// prompt-chat.js
import { ChatPromptTemplate } from "@langchain/core/prompts";

// Create and export the prompt template
export const chatPrompt = ChatPromptTemplate.fromMessages([
  ["system", "You are a helpful AI assistant."],
  ["human", "{input}"],
]);
