import 'dotenv/config';
import readline from 'readline';
import { ChatGroq } from "@langchain/groq";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence } from "@langchain/core/runnables";

// Step 1: Set up the model
const model = new ChatGroq({
  apiKey: process.env.GROQ_API_KEY,
  model: "llama3-70b-8192",
});

// Step 2: Set up the prompt template
const prompt = ChatPromptTemplate.fromMessages([
  ["system", "You are a helpful AI assistant."],
  ["human", "{input}"],
]);

// Step 3: Build the chain (prompt → model)
const chain = RunnableSequence.from([prompt, model]);

// Step 4: Set up readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Step 5: Ask user input repeatedly
function ask() {
  rl.question("You: ", async (input) => {
    if (input.toLowerCase() === 'exit') {
      console.log("👋 Goodbye!");
      rl.close();
      return;
    }

    try {
      const response = await chain.invoke({ input });
      console.log("AI:", response.content);
    } catch (err) {
      console.error("❌ Error:", err.message);
    }

    ask(); // Keep asking
  });
}

console.log("🤖 Groq Chatbot CLI is running (type 'exit' to quit)");
ask();
