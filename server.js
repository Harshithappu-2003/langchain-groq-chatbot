import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import 'dotenv/config.js';
import { ChatGroq } from "@langchain/groq";
import { RunnableSequence } from "@langchain/core/runnables";
import { chatPrompt } from "./prompt-chat.js";

// Fix __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Serve static files from public/
app.use(express.static(path.join(__dirname, "public")));

const model = new ChatGroq({
  apiKey: process.env.GROQ_API_KEY,
  model: "llama3-70b-8192",
});

const chain = RunnableSequence.from([chatPrompt, model]);

app.post("/chat", async (req, res) => {
  const userInput = req.body.input;

  try {
    const response = await chain.invoke({ input: userInput });
    res.json({ response: response.content });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
