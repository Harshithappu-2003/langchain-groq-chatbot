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

📁 **Project Structure**

bash

CopyEdit

`LangChain-GroqBot/ ├── chat.js          # Core chat logic (prompt → model) ├── cli-chat.js      # CLI chat interface ├── prompt-chat.js   # Prompt template logic ├── memory.js        # (Optional) BufferMemory config ├── .env             # Groq API Key ├── package.json └── README.md`

* * *

🔐 **.env Setup**  
Create a `.env` file in the root folder with the following:

ini

CopyEdit

`GROQ_API_KEY=your_groq_api_key_here`

Get your API key from 👉 [https://console.groq.com/keys](https://console.groq.com/keys)

* * *

🛠️ **Installation**

bash

CopyEdit

`git clone https://github.com/Harshithappu-2003/langchain-groq-chatbot.git cd langchain-groq-chatbot npm install`

* * *

💻 **Usage**

▶️ Run once:

nginx

CopyEdit

`node chat.js`

💬 Start CLI chatbot:

nginx

CopyEdit

`node cli-chat.js`

Type your message and get AI responses in real time.  
Type `exit` to quit.

* * *

🚀 **Deploying UI on Vercel**

This project supports adding a frontend UI. Steps:

1. 1.  🧭 Push to GitHub
1.     
1. 2.  🔗 Create a new project on [vercel.com](https://vercel.com/) from your GitHub repo
1.     
1. 3.  🔑 Add your API key in Project Settings → Environment Variables (`GROQ_API_KEY`)
1.     
1. 4.  💻 Add frontend (Next.js, React, or plain HTML/JS)
1.     
1. 5.  ✅ Deploy
1.     

📝 _Note: If you're only using CLI, Vercel isn't needed._

* * *

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

🧩 **Example Prompt Setup**  
Defined in `prompt-chat.js`:
js
`["system", "You are a helpful AI assistant."] ["human", "{input}"]`

Used in `chat.js` via LangChain’s RunnableSequence.
