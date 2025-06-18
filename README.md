# 📘 Paathshala – Learning Management System (LMS)

Paathshala is a MERN stack-based Learning Management System aiming to simplify online education. Instructors can upload and manage courses, while students can learn, track progress, and earn certificates — all from one intuitive platform.

---

## 📌 Table of Contents
- [About](#about)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Phases & Progress](#project-phases--progress)
- [Getting Started](#getting-started)
- [Contact](#contact)

---

## 📖 About <a id="about"></a>

**Paathshala** aims to bridge the education gap by enabling anyone to become a learner or an instructor. It provides:
- A platform for instructors to publish high-quality courses.
- A space for students to enroll, learn, and track their growth.
- Affordable and accessible e-learning for everyone, anywhere.

---

## ✨ Features <a id="features"></a>

### 👤 Authentication & Role Management
- Secure registration/login (JWT + bcrypt)
- Separate access for students and instructors
- Dashboard-based navigation by user role

### 🎓 Course Management (Instructor)
- Course creation/edit/delete with multimedia support
- **Multer-based** image/video upload
- Dashboard view of all published courses

### 🧑‍💻 Enrollment & Learning (Student)
- Enroll in courses
- Watch course videos, download resources
- Progress tracking system

### 🔍 Course Discovery
- **Search & Filter**: Find courses by name, category, rating
- Tags like "Popular", "Featured", "Free", etc.

### 💸 Payments
- **Paid courses with Esewa or Khalti (Nepal)** integration
- Purchase history
- Enroll instantly upon successful payment

### 🌓 UI Personalization
- **Light/Dark theme toggle**
- Responsive mobile-first UI using Tailwind

### 📊 Dashboards
- Instructor Dashboard: View stats, students, course performance
- Student Dashboard: View enrolled courses, progress

### 💬 Communication & Feedback
- Ratings & Reviews
- Comment system per course
- (Coming Soon) Real-time chat with instructors

### 🔐 Admin Panel (Optional)
- Manage users and courses
- Approve/ban instructors
- Remove inappropriate content

---

## 🧱 Technology Stack <a id="technology-stack"></a>

### 🌐 Frontend
- Next.js (App Router)
- Tailwind CSS + Shadcn UI
- Redux
- Formik + Yup
- Axios

### 🔧 Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- bcrypt
- jsonwebtoken (JWT)
- Multer (for file uploads)

---

## 🚀 Project Phases & Progress <a id="project-phases--progress"></a>

### ✅ Phase 1: Authentication Setup
- [x] Register & login using JWT and bcrypt
- [x] Basic login & register frontend pages
- [x] Connect frontend and backend

### 🧑‍🎓 Phase 2: User Roles & Access Control
- [x] Add `role` field in user model: student, instructor
- [x] Show different dashboards/pages by role
- [x] Middleware to protect instructor-only/student-only routes

### 🎓 Phase 3: Course Management (Instructor Panel)
- [x] Create `Course` model (title, price, content, thumbnail, etc.)
- [x] Instructor: Upload course form
- [x] **Use Multer for image/video upload**
- [x] Display uploaded courses in dashboard

### 🧑‍💻 Phase 4: Enrollment & Learning (Student Side)
- [ ] Enroll in a course
- [ ] Watch uploaded course videos/modules
- [ ] Track and save course progress

### 📊 Phase 5: Dashboards
#### Student:
- [ ] My Courses section
- [ ] Progress tracking

#### Instructor:
- [ ] Course stats
- [ ] Enrollments count

### 🔍 Phase 6: Discovery & Interaction
- [x] **Add Search & Filter for course discovery**
- [ ] Filter by category, price, rating, difficulty
- [ ] Display featured/latest/popular courses
- [ ] Comments & Reviews system

### 💰 Phase 7: Paid Courses & Payment
- [ ] Set free or paid status for course
- [x] **Use E-sewa or Khalti (for Nepal) for paid courses**
- [ ] Payment verification & enrollment access post-payment
- [ ] Payment history section in dashboard

### 🌙 Phase 8: Personalization & UI
- [x] **Add Light/Dark Theme toggle**
- [ ] Save theme preference in localStorage or user profile
- [ ] Polished UI with responsive layout

### 🔐 Phase 9: Admin Panel (Optional)
- [ ] View all users and courses
- [ ] Block/verify instructors
- [ ] Approve/reject course uploads
- [ ] Remove spam comments

### 🌍 Phase 10: Deployment & Optimization
- [ ] Host frontend (Vercel)
- [ ] Host backend (Render / Railway)
- [ ] Use MongoDB Atlas
- [ ] Custom domain + SEO
- [ ] Performance improvements

---

## 🛠️ Getting Started <a id="getting-started"></a>

### ⚙ Prerequisites
- Node.js (LTS version recommended)
- MongoDB (local installation or cloud-based service like MongoDB Atlas)

### 🔧 Installation

1.  **Clone the repository**:

    ```bash
    git clone https://github.com/GithubBirendra/paathshalahub.git
    cd paathshala
    ```
    
2.  **Backend Setup**:

    ```bash
    cd backend
    npm install
    ```

    Create a `.env` file in the `backend` directory and add your MongoDB connection string and JWT secret:

    ```env
    MONGO_URI="your_mongodb_connection_string"
    JWT_SECRET="a_strong_random_secret_key"
    ```

    Run the backend server:

    ```bash
    npm run dev
    ```

3.  **Frontend Setup**:

    ```bash
    cd frontend
    npm install
    ```

    Run the frontend development server:

    ```bash
    npm run dev
    ```

    The frontend should now be accessible at `http://localhost:3000`.

---

## 📞 Contact <a id="contact"></a>

If you have any questions, feel free to reach out!

* **Name**: [Birendra Bohara]  
* **Email**: [bbirendra693@gmail.com]  
* **GitHub**: [https://github.com/GithubBirendra/paathshalahub](https://github.com/GithubBirendra/paathshalahub)
