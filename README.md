# 🎨 AI Image Generator

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Poppins&weight=700&size=30&pause=1000&color=00C2FF&center=true&vCenter=true&width=700&lines=AI+Image+Generator;Transform+Text+Into+AI+Art;Built+with+React+%7C+Node.js+%7C+MongoDB" alt="Typing SVG" />
</p>

<p align="center">
  <img src="https://skillicons.dev/icons?i=react,nodejs,express,mongodb,js,html,css,git,vscode" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/OpenAI-AI-412991?style=for-the-badge">
  <img src="https://img.shields.io/badge/Cloudinary-Storage-3448C5?style=for-the-badge">
  <img src="https://img.shields.io/badge/MERN-FullStack-00C853?style=for-the-badge">
</p>

---

# 🚀 Overview

AI Image Generator is a modern full-stack MERN application that converts natural language prompts into AI-generated images. The application integrates the OpenAI Images API for generation, Cloudinary for cloud storage, and MongoDB Atlas for persistent storage of community posts.

---

# ✨ Features

- 🤖 AI image generation from text prompts
- 🎲 Surprise Me prompt generator
- ☁️ Cloudinary image hosting
- 📤 Share generated images
- 🖼️ Community gallery
- ⚡ Fast REST APIs
- 📱 Responsive UI
- 🌍 MongoDB Atlas database

---

# 🛠️ Tech Stack

| Frontend | Backend | Database | Cloud | AI |
|-----------|----------|----------|-------|----|
| React | Node.js | MongoDB Atlas | Cloudinary | OpenAI |
| Styled Components | Express.js | Mongoose | | |

---

# 🏗️ Project Architecture

```text
                     User
                       │
                       ▼
              React Frontend
                       │
               Axios REST APIs
                       │
                       ▼
              Express.js Backend
                       │
      ┌────────────────┼────────────────┐
      │                │                │
      ▼                ▼                ▼
 OpenAI Images     Cloudinary      MongoDB Atlas
      │                │                │
      └───────────────► Response ◄──────┘
                       │
                       ▼
                  React UI
```

## Workflow

1. User enters a prompt.
2. React sends it to Express.
3. Express requests an image from OpenAI.
4. Image is uploaded to Cloudinary.
5. Metadata is stored in MongoDB Atlas.
6. Community gallery displays shared creations.

---

# 📂 Project Structure

```text
AI_IMAGE_GENERATOR/
├── client/
│   ├── public/
│   ├── src/
│   └── package.json
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── index.js
│   └── package.json
└── README.md
```

---

# ⚙️ Installation

```bash
git clone https://github.com/mohamedhasan-coder/AI_IMAGE_GENERATOR.git
cd AI_IMAGE_GENERATOR
```

Install frontend

```bash
cd client
npm install
```

Install backend

```bash
cd ../server
npm install
```

---

# 🔐 Environment Variables

Create `.env` inside `server/`

```env
MONGODB_URL=your_connection_string
OPENAI_API_KEY=your_api_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
PORT=8080
```

---

# ▶️ Run

Backend

```bash
cd server
npm start
```

Frontend

```bash
cd client
npm start
```

---

# 🌐 API

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/openai` | Generate AI image |
| POST | `/api/v1/post` | Share image |
| GET | `/api/v1/post` | Get community gallery |

---

# 🔮 Future Enhancements

- 🔐 Authentication
- ❤️ Favorites
- 📥 Download HD Images
- 🎨 AI Style Selection
- 📝 Prompt History
- 🌙 Dark Mode
- 🔎 Search & Filters
- 📄 Pagination
- 🚀 Rate Limiting
- 👤 User Dashboard

---

# 👨‍💻 Author

**Mohamed Hasan**

GitHub: https://github.com/mohamedhasan-coder

---

# ⭐ Support

If you like this project, give it a ⭐ on GitHub.
