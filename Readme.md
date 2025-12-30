


# 🩺 Diabetic Retinopathy Detection System

A full-stack **Diabetic Retinopathy Detection** platform demonstrating real-world software engineering practices:
- Modular backend with authentication (JWT)
- ML inference microservice
- Modern React frontend
- MongoDB persistence
- Fully Dockerized setup

> ⚠️ Note: The current ML model is a placeholder. The system is architected to swap in a production-grade model later without changing the frontend or backend contracts.



## 🏗️ System Architecture



Client (React + Vite)
|
| HTTP (REST)
v
Backend (Node.js + Express + JWT)
|
| HTTP (REST)
v
ML Service (FastAPI + TensorFlow)
|
v
MongoDB

Each service is **independent**, **replaceable**, and **containerized**.


## 📁 Project Structure

```text
Diabetic/
├── client/                    # React frontend (Vite)
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/                    # Node.js + Express backend
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── config/
│   └── server.js
│
├── ml_service/                # FastAPI ML inference service
│   ├── app.py
│   ├── inference.py
│   ├── preprocessing.py
│   └── requirements.txt
│
├── docker-compose.yaml
├── README.md
└── .gitignore
```

---

## 🚀 Running with Docker (Recommended)

### Prerequisites
- Docker Desktop
- Docker Compose

### Step 1: Build & Run

From the project root:

```bash
docker compose up --build
````

### Step 2: Access Services

| Service         | URL                                                      |
| --------------- | -------------------------------------------------------- |
| Frontend        | [http://localhost:5173](http://localhost:5173)           |
| Backend API     | [http://localhost:9000](http://localhost:9000)           |
| ML Service Docs | [http://localhost:8000/docs](http://localhost:8000/docs) |
| MongoDB         | localhost:27017                                          |

### Step 3: Stop Containers

```bash
docker compose down
```

---

## ⚙️ Running WITHOUT Docker (Local Setup)

### 1️⃣ MongoDB

Ensure MongoDB is running locally:

```bash
mongodb://localhost:27017
```

You can verify via **MongoDB Compass**.

---

### 2️⃣ Backend (Node.js + Express)

#### Prerequisites

* Node.js **18+**
* npm

```bash
cd server
npm install
```

Create `.env` file:

```env
PORT=9000
MONGO_URI=mongodb://localhost:27017/dr_system
JWT_SECRET=your_secret_key
```

Run backend:

```bash
node server.js
```

Backend runs on:

```
http://localhost:9000
```

---

### 3️⃣ ML Service (FastAPI)

#### Prerequisites

* Python 3.10+

```bash
cd ml_service
python -m venv venv
venv\Scripts\activate   # Windows
pip install -r requirements.txt
```

Run ML service:

```bash
uvicorn app:app --reload --port 8000
```

ML docs available at:

```
http://localhost:8000/docs
```

---

### 4️⃣ Frontend (React + Vite)

```bash
cd client
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## 🔐 Authentication (JWT)

* `/auth/signup` → creates user
* `/auth/login` → returns JWT access token
* Protected routes require:

```http
Authorization: Bearer <JWT_TOKEN>
```

JWT validation is enforced on backend middleware.

---

## 📊 Current Features

✅ User Signup & Login
✅ JWT Authentication
✅ Image Upload (Left & Right Retina)
✅ ML Inference API integration
✅ Dashboard UI
✅ Modular Backend Architecture
✅ Dockerized Microservices

---

## 🧠 ML Model Status

* Current model is **not production-grade**
* Architecture supports:

  * Model hot-swapping
  * Separate training pipeline
  * Independent scaling

This project **intentionally focuses on system design & deployment**, not just accuracy metrics.

---

## 🛠️ Tech Stack

**Frontend**

* React
* Vite
* React Router

**Backend**

* Node.js
* Express
* MongoDB
* JWT

**ML Service**

* FastAPI
* TensorFlow
* Python

**DevOps**

* Docker
* Docker Compose

---


## ✨ Future Improvements

* Production-grade DR model
* Role-based access control
* Cloud deployment (AWS/GCP)
* Async inference queue
* Result explainability (Grad-CAM)