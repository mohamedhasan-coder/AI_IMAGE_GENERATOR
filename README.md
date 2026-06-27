# 🎨 AI Image Generator

An AI-powered full-stack MERN application that transforms text prompts into stunning AI-generated images using the OpenAI API. Users can generate images, upload them to Cloudinary, and share them with a public community gallery.

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![React](https://img.shields.io/badge/Frontend-React-61DAFB)
![Node.js](https://img.shields.io/badge/Backend-Node.js-339933)
![Express](https://img.shields.io/badge/Framework-Express-black)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248)
![Cloudinary](https://img.shields.io/badge/Storage-Cloudinary-3448C5)
![OpenAI](https://img.shields.io/badge/AI-OpenAI-412991)

---

# 📖 Overview

AI Image Generator is a full-stack web application that allows users to generate high-quality AI images from text prompts. The application integrates the OpenAI API for image generation, Cloudinary for cloud image storage, and MongoDB Atlas for storing image metadata. Users can also publish their generated images to a public community gallery.

This project demonstrates modern full-stack development using the MERN stack along with third-party API integration.

---

# ✨ Features

- 🤖 Generate AI images from text prompts
- 🎲 Surprise Me prompt generator
- ☁️ Upload generated images to Cloudinary
- 📤 Share images with the community gallery
- 🖼️ Browse community-generated images
- ⚡ Fast REST API communication
- 📱 Fully responsive user interface
- 🌐 Cloud database using MongoDB Atlas

---

# 🛠 Tech Stack

## Frontend

- React
- React Router
- Styled Components
- Material UI
- Axios

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Cloudinary
- OpenAI API
- Dotenv

---

# 📂 Project Structure

```text
AI_IMAGE_GENERATOR/
│
├── client/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── ...
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── index.js
│   ├── package.json
│   └── ...
│
└── README.md
```

---

# 🏗️ Project Architecture

The application follows a **client-server architecture** using the MERN stack.

```text
                     User
                       │
                       ▼
             React Frontend (Client)
                       │
         Axios HTTP Requests (REST API)
                       │
                       ▼
          Express.js Backend (Server)
                       │
      ┌────────────────┼────────────────┐
      │                │                │
      ▼                ▼                ▼
 OpenAI API      Cloudinary API    MongoDB Atlas
(Image Generation) (Image Storage) (Metadata Storage)
```

## Architecture Flow

1. User enters a text prompt in the React application.
2. React sends the prompt to the Express backend through REST APIs.
3. The backend requests the OpenAI API to generate an image.
4. The generated image is uploaded to Cloudinary.
5. Cloudinary returns an image URL.
6. The backend stores the image URL, prompt, and user details in MongoDB Atlas.
7. The frontend retrieves community posts from the backend and displays them in the gallery.

---

# 📦 Application Components

## 🎨 Frontend

Responsible for:

- User Interface
- Prompt Input
- Image Preview
- Community Gallery
- API Communication
- Responsive Design

---

## ⚙️ Backend

Responsible for:

- REST API Development
- OpenAI API Integration
- Cloudinary Integration
- MongoDB Operations
- Request Processing
- Error Handling

---

## 🗄️ MongoDB Atlas

Stores:

- User Name
- Prompt
- Generated Image URL
- Community Gallery Posts

---

## ☁️ Cloudinary

Responsible for:

- Image Upload
- Secure Cloud Storage
- Optimized Image Delivery

---

## 🤖 OpenAI API

Responsible for:

- AI Image Generation
- Returning generated images based on user prompts

---

# 🚀 Installation

## 1. Clone the Repository

```bash
git clone https://github.com/mohamedhasan-coder/AI_IMAGE_GENERATOR.git
```

```bash
cd AI_IMAGE_GENERATOR
```

---

## 2. Install Frontend Dependencies

```bash
cd client
npm install
```

---

## 3. Install Backend Dependencies

```bash
cd ../server
npm install
```

---

# ⚙️ Environment Variables

Create a `.env` file inside the **server** directory.

```env
MONGODB_URL=your_mongodb_connection_string

OPENAI_API_KEY=your_openai_api_key

CLOUDINARY_CLOUD_NAME=your_cloud_name

CLOUDINARY_API_KEY=your_api_key

CLOUDINARY_API_SECRET=your_api_secret

PORT=8080
```

---

# ▶️ Running the Application

## Start Backend

```bash
cd server
npm start
```

## Start Frontend

```bash
cd client
npm start
```

---

# 🌐 API Endpoints

## Generate AI Image

```http
POST /api/v1/openai
```

Generates an AI image from a text prompt.

---

## Share Generated Image

```http
POST /api/v1/post
```

Stores the generated image and its details in MongoDB.

---

## Fetch Community Gallery

```http
GET /api/v1/post
```

Retrieves all community-shared images.

---

# 💡 Future Enhancements

- User Authentication
- Download Generated Images
- AI Prompt Enhancement
- Image Variations
- Favorite Images
- Prompt History
- Search & Filter
- Pagination
- Dark Mode
- Image Categories
- Rate Limiting
- User Dashboard
- AI Style Selection

---

# 🚀 Deployment

| Service | Platform |
|----------|----------|
| Frontend | Vercel |
| Backend | Render / Railway |
| Database | MongoDB Atlas |
| Image Storage | Cloudinary |

---

# 👨‍💻 Author

**Mohamed Hasan**

GitHub: https://github.com/mohamedhasan-coder

---

# ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub.

Your support motivates me to build more high-quality open-source projects.

---

# 📜 License

This project is licensed under the MIT License.
