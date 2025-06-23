🤖 LangChain Groq Chatbot
=========================

A lightweight AI-powered chatbot built using **LangChain**, **Groq API**, and **LLaMA3** models. It includes both a **CLI interface** and an extendable foundation for building a **UI-based chatbot**, ready to deploy on platforms like **Vercel**.

🚀 Features
-----------

*   ✨ Uses [Groq's blazing fast LLaMA3](https://console.groq.com/) for response generation
    
*   🔧 Built with [LangChain.js](https://js.langchain.com) and modular architecture
    
*   💬 CLI interface for seamless terminal interaction
    
*   🧠 Extensible prompt templating (prompt.js)
    
*   🧩 Built-in support for memory and chain pipelines
    
*   🌐 Deployable frontend-ready structure (Next.js or Vite can be added)
    
*   ☁️ Easily deployable on [Vercel](https://vercel.com/)
    

📁 Project Structure
--------------------

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   bashCopyEditLangChain-GroqBot/  ├── chat.js           # Core chatbot logic (uses prompt + model)  ├── cli-chat.js       # Interactive CLI chat interface  ├── prompt-chat.js    # Prompt template file  ├── memory.js         # (Optional) Memory setup using BufferMemory  ├── .env              # Environment variables (Groq API key)  ├── package.json  └── README.md   `

🔐 .env Setup
-------------

Create a .env file in the root directory:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   iniCopyEditGROQ_API_KEY=your_groq_api_key_here   `

Get your API key from: [https://console.groq.com/keys](https://console.groq.com/keys)

🛠️ Installation
----------------

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   bashCopyEditgit clone https://github.com/Harshithappu-2003/langchain-groq-chatbot.git  cd langchain-groq-chatbot  npm install   `

💻 Usage
--------

### 🧪 Run chat.js (Single prompt test)

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   bashCopyEditnode chat.js   `

### 💬 Run CLI chat

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   bashCopyEditnode cli-chat.js   `

Type your input and get responses in real-time.Type exit to quit.

🌐 Deployment (Frontend UI on Vercel)
-------------------------------------

This repo supports easy frontend integration.

### Steps:

1.  Create a new Vercel project from your GitHub repo.
    
2.  Add your .env key in **Vercel dashboard → Project Settings → Environment Variables**
    
3.  Add a frontend (like Next.js or plain HTML/JS) to call a backend route that invokes the LangChain Groq chain
    
4.  Deploy!
    

✅ If you're using just the CLI/Node.js features, Vercel isn't required.

🧠 Extending Features
---------------------

You can extend the chatbot with:

*   Chat memory (BufferMemory)
    
*   File uploads (PDF/Q&A with LangChain tools)
    
*   Vector search (e.g., Pinecone, ChromaDB)
    
*   Web UI (React/Vite/Next.js + Tailwind)
    
*   Model switcher (Groq, OpenAI, Gemini, Claude via LangChain)
    

🧩 Example Prompt Logic
-----------------------

Defined in prompt-chat.js:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   jsCopyEditexport const chatPrompt = ChatPromptTemplate.fromMessages([    ["system", "You are a helpful AI assistant."],    ["human", "{input}"],  ]);   `

Used via LangChain pipeline in chat.js.

📸 Screenshot
![Screenshot 2025-06-23 135748](https://github.com/user-attachments/assets/fad87cfe-39e5-4a22-8694-e11bef5ec591)
