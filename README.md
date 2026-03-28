# 🏥 MediBook — Doctor Appointment System

A full-stack MERN (MongoDB, Express, React, Node.js) web application for booking doctor appointments.

---

## ✨ Features

- ✅ User Registration & Login (JWT Authentication)
- ✅ Browse Approved Doctors
- ✅ Search Doctors by Name / Specialization
- ✅ Book Appointments with Date & Time
- ✅ View All Your Appointments (with status: Pending / Approved / Rejected)
- ✅ Dashboard with Stats Overview
- ✅ Protected Routes (login required)
- ✅ Clean, Responsive Design — no UI library dependency

---

## 🛠️ Tech Stack

| Layer     | Technology                  |
|-----------|-----------------------------|
| Frontend  | React 18, React Router v6   |
| Backend   | Node.js, Express.js         |
| Database  | MongoDB (Mongoose ODM)      |
| Auth      | JWT + bcryptjs              |
| Styling   | Pure CSS (custom variables) |

---

## 🚀 How to Run

### Step 1 — Prerequisites
Make sure you have installed:
- [Node.js](https://nodejs.org/) (v16 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (running locally) **OR** a free [MongoDB Atlas](https://www.mongodb.com/atlas) cluster

---

### Step 2 — Clone / Extract the project

```bash
# If you downloaded the zip, extract it and open a terminal inside the folder
cd doctor-appointment
```

---

### Step 3 — Setup Environment Variables

```bash
# Copy the example env file
cp .env.example .env
```

Open `.env` and fill in your values:

```
PORT=8080
NODE_MODE=development
MONGO_URL=mongodb://localhost:27017/doctor-appointment
JWT_SECRET=change_this_to_a_long_random_string
```

> **MongoDB Atlas users:** replace `MONGO_URL` with your Atlas connection string.

---

### Step 4 — Install Dependencies

```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd client
npm install
cd ..
```

---

### Step 5 — Seed Sample Doctors (Optional but Recommended)

```bash
node seedDoctors.js
```

This adds 5 approved doctors so you can test bookings right away.

---

### Step 6 — Run the Application

```bash
# Run both frontend and backend together
npm run dev
```

- **Backend:** http://localhost:8080
- **Frontend:** http://localhost:3000

---

## 📁 Project Structure

```
doctor-appointment/
├── server.js                  # Express server entry point
├── package.json               # Backend dependencies & scripts
├── .env                       # Environment variables (create this)
├── seedDoctors.js             # Script to add sample doctors
│
├── config/
│   └── db.js                  # MongoDB connection
│
├── middleware/
│   └── authMiddleware.js      # JWT authentication middleware
│
├── models/
│   ├── userModel.js           # User schema
│   ├── doctorModel.js         # Doctor schema
│   └── appointmentModel.js   # Appointment schema
│
├── controllers/
│   ├── userCtrl.js            # Register, Login, Get Profile
│   ├── doctorCtrl.js          # Get all doctors, Get by ID
│   └── appointmentCtrl.js    # Book, Get user appointments
│
├── routes/
│   ├── userRoutes.js
│   ├── doctorRoutes.js
│   └── appointmentRoutes.js
│
└── client/                    # React frontend
    ├── package.json
    ├── public/
    │   └── index.html
    └── src/
        ├── App.js             # Routes & protected routes
        ├── index.css          # All CSS styles
        ├── components/
        │   └── Navbar.js
        └── pages/
            ├── Login.js
            ├── Register.js
            ├── HomePage.js
            ├── Doctors.js
            ├── BookAppointment.js
            └── Dashboard.js
```

---

## 🔌 API Endpoints

### User
| Method | Route                    | Auth | Description       |
|--------|--------------------------|------|-------------------|
| POST   | /api/v1/user/register    | No   | Register new user |
| POST   | /api/v1/user/login       | No   | Login user        |
| GET    | /api/v1/user/profile     | Yes  | Get user profile  |

### Doctors
| Method | Route                       | Auth | Description          |
|--------|-----------------------------|------|----------------------|
| GET    | /api/v1/doctor/all          | Yes  | Get all doctors      |
| GET    | /api/v1/doctor/:doctorId    | Yes  | Get doctor by ID     |

### Appointments
| Method | Route                               | Auth | Description              |
|--------|-------------------------------------|------|--------------------------|
| POST   | /api/v1/appointment/book            | Yes  | Book an appointment      |
| GET    | /api/v1/appointment/my-appointments | Yes  | Get user's appointments  |

---

## 🐛 Bugs Fixed From Original

1. **JWT bug** — `user.__id` → `user._id` (the original never generated valid tokens)
2. **Typo** — `nodemon serevr.js` → `nodemon server.js`
3. **No auth middleware** — added `authMiddleware.js` for protected routes
4. **No `.env` template** — added `.env.example`
5. **antd dependency removed** — replaced with pure CSS forms (no heavy UI library)
6. **Empty HomePage** — replaced with full dashboard
7. **Missing features** — added Doctors list, Book Appointment, Dashboard pages

---

## 📸 Pages

| Page | Route | Description |
|------|-------|-------------|
| Login | /login | Sign in to your account |
| Register | /register | Create new account |
| Home | / | Dashboard with stats and recent appointments |
| Doctors | /doctors | Browse and search doctors |
| Book | /book-appointment/:id | Select date and time |
| Dashboard | /dashboard | All appointments with filter |
