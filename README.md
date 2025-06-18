# 📘 Paathshala – Learning Management System (LMS)

**Paathshala** is a full-featured MERN stack Learning Management System where instructors can publish interactive courses, and students can enroll, learn, and earn certifications.

---

## 📌 Table of Contents

- [About](#about)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Phases](#project-phases)
- [Getting Started](#getting-started)
- [Contact](#contact)

---

## 📖 About

Paathshala aims to make digital education accessible and interactive. It offers dashboards, role-based features, media support, and more — bringing instructors and learners together in one place.

---

## ✨ Features

- 🔐 Secure Authentication & Role Management  
- 🎓 Instructor & Student Dashboards  
- 📚 Course Uploading (Video, Description, Resources)  
- 📥 Enrollment System (Free & Paid)  
- 📊 Progress Tracking  
- 💬 Ratings & Comments  
- 🎨 Light/Dark Theme Toggle  
- 🧾 Admin Panel for Content & User Control  
- 💸 Esewa/Khalti Payment Integration (Coming Soon)  

---

## 🧱 Technology Stack

### Frontend

- Next.js (App Router)
- Tailwind CSS + Shadcn UI
- Redux Toolkit
- Formik + Yup
- Axios

### Backend

- Node.js + Express
- MongoDB + Mongoose
- JWT (jsonwebtoken) + bcrypt
- Multer (File Upload)

---

## 🚀 Project Phases

---

### ✅ Phase 1: Authentication, Roles & Dashboards

#### Frontend:
- [x] Create login & register pages
- [x] Form validation with Formik + Yup
- [x] Role-based dashboard routing
- [x] Redux auth setup
- [x] Basic layout (Navbar, Footer)

#### Backend:
- [x] Setup Express server
- [x] MongoDB connection
- [x] Create user schema with roles (student, instructor, admin)
- [x] JWT-based authentication system
- [x] Role-based access middleware

---

### 🛠 Phase 2: Course Management & Learning Modules

#### Frontend:
- [x] Instructor: Create/edit course page
- [x] File upload UI (videos, images)
- [x] Display course cards
- [ ] Student: Enroll in course
- [ ] Course content viewer page
- [ ] Track completed videos
- [ ] Add reviews section

#### Backend:
- [x] Create Course schema
- [x] Add Multer for file/video uploads
- [x] Instructor CRUD APIs for course
- [ ] Student course enrollment logic
- [ ] Progress tracking model
- [ ] Rating/comment schema

---

### 🕐 Phase 3: Payments, Admin Tools & UI Polishing

#### Frontend:
- [ ] Payment flow UI
- [ ] Admin panel pages (manage users, courses)
- [ ] Chat system (Socket.io or polling)
- [ ] Add search/filter for courses
- [ ] SEO optimization & theme preference save

#### Backend:
- [ ] Payment gateway integration (Esewa/Khalti)
- [ ] Admin user management API
- [ ] Course approval/reject APIs
- [ ] Chat system model

---

## 🛠 Getting Started

### ⚙ Prerequisites

- Node.js (LTS)
- MongoDB (Local or Atlas)

---

### 🔧 Installation

1. **Clone Repository**

```bash
git clone https://github.com/GithubBirendra/paathshalahub.git
cd paathshalahub
