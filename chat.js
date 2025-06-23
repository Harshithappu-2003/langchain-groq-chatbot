import 'dotenv/config';
import { ChatGroq } from "@langchain/groq";
import { RunnableSequence } from "@langchain/core/runnables";
import { chatPrompt } from "./prompt-chat.js"; // <-- importing from the new file

const model = new ChatGroq({
  apiKey: process.env.GROQ_API_KEY,
  model: "llama3-70b-8192",
});

const chain = RunnableSequence.from([
  chatPrompt,
  model,
]);

const userInput = "Explain quantum computing in simple terms.";

const response = await chain.invoke({ input: userInput });

console.log("Response:", response.content);
