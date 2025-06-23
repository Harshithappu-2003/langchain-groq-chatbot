
🤖 **LangChain Groq Chatbot**  

A lightweight AI-powered chatbot built using **LangChain**, **Groq API**, and **LLaMA3** models.  
It includes both a **CLI interface** and an extendable base for building a **UI-based chatbot**, ready to deploy on platforms like **Vercel**.

* * *

✨ **Features**

* *   ⚡ Uses [Groq's ultra-fast LLaMA3](https://console.groq.com/) for response generation
*     
* *   🧱 Built with [LangChain.js](https://js.langchain.com) and modular architecture
*     
* *   💬 CLI interface for terminal-based interaction
*     
* *   🧠 Prompt templating via `prompt-chat.js`
*     
* *   🔁 Chain + memory pipeline support
*     
* *   🌐 Frontend-ready structure (can plug into Next.js or Vite)
*     
* *   ☁️ Easy deployment on [Vercel](https://vercel.com/)
*     

* * *

## 📁 Project Structure

LangChain-GroqBot/
├── chat.js # Core chat logic (prompt → model)
├── cli-chat.js # CLI chat interface
├── prompt-chat.js # Prompt template logic
├── memory.js # (Optional) BufferMemory config
├── .env # Groq API Key
├── package.json
└── README.md



🧠 **Extending the Chatbot**

You can enhance this bot with:

* *   🧠 Chat memory (`BufferMemory`)
*     
* *   📄 File upload & Q&A (PDFs, text, etc.)
*     
* *   🔍 Vector search (e.g., Pinecone, ChromaDB)
*     
* *   🖥️ Web UI using React, Vite, or Next.js
*     
* *   🔄 Model switcher (Groq, OpenAI, Gemini, Claude)
*     

* * *
![Screenshot 2025-06-23 150042](https://github.com/user-attachments/assets/0c6cc59c-50e6-48b4-af66-d547215c0b4c)
![Screenshot 2025-06-23 150049](https://github.com/user-attachments/assets/23bbfc81-fc04-4bf5-b7c6-3d360bab7de9)





