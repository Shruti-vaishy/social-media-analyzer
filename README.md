# 📊 Social Media Content Analyzer  

![GitHub repo size](https://img.shields.io/github/repo-size/Shruti-vaishy/social-media-analyzer?color=blueviolet)  
![GitHub last commit](https://img.shields.io/github/last-commit/Shruti-vaishy/social-media-analyzer?color=green)  
![GitHub issues](https://img.shields.io/github/issues/Shruti-vaishy/social-media-analyzer?color=yellow)  
![GitHub stars](https://img.shields.io/github/stars/Shruti-vaishy/social-media-analyzer?style=social)  

---

## ✨ Overview  
The **Social Media Content Analyzer** is a web application that helps users improve their social media content with **AI-powered engagement suggestions**.  

- Upload a **PDF** 📄 or an **Image** 🖼️  
- Extract text automatically (via **PDF parsing** + **OCR**)  
- Get **Gemini AI analysis** with actionable tips such as:  
  - ✍️ Text improvements  
  - 😀 Emoji recommendations  
  - 🔥 Hashtag ideas  
  - 🎭 Tone adjustments  

---

## 🚀 Tech Stack  

### 🔹 Frontend  
- ⚛️ **React (Vite)**  
- 🎨 **TailwindCSS**  
- 📂 **React Dropzone** (drag & drop uploads)  

### 🔹 Backend  
- 🟢 **Node.js + Express**  
- 📑 **pdf-parse** (PDF extraction)  
- 🔎 **tesseract.js** (OCR for images)  
- 🤖 **Google Gemini API** (AI suggestions)  

### 🔹 Deployment  
- 🌐 **Frontend** → Vercel / Netlify  
- 🔧 **Backend** → Render / Railway  

---

## 🛠️ Setup Instructions  

### 1️⃣ Clone Repo  
```bash
git clone https://github.com/Shruti-vaishy/social-media-analyzer.git
cd social-media-analyzer
```
### 2️⃣ Backend Setup  
```bash
cd backend
npm install
```
Create a .env file inside backend/:
```bash
PORT=5000
GEMINI_API_KEY=your_gemini_api_key_here
```
Run backend:
```bash
npm start
```

### 3️⃣ Frontend Setup
```bash
cd frontend
npm install
npm run dev

```

