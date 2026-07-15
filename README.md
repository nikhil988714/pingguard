# 🚀 PingGuard – Website Monitoring & Uptime Analytics

PingGuard is a modern website monitoring platform that enables developers and businesses to monitor website availability, uptime, and performance from a centralized dashboard. It provides real-time monitoring, historical analytics, and project-based organization to help ensure reliable online services.

---

## ✨ Features

- 🌐 Monitor website uptime and availability
- 📊 Real-time monitoring dashboard
- ⚡ Response time tracking
- 📈 Historical uptime analytics
- 🚨 Downtime detection
- 📁 Organize websites into projects
- 🔒 SSL certificate monitoring
- 🌙 Dark & Light mode support
- 🔐 Secure authentication with **Auth.js (GitHub OAuth)**
- 📱 Fully responsive interface

---

## 🛠 Tech Stack

### Frontend
- Next.js 15
- React 19
- TypeScript
- Tailwind CSS 4
- Radix UI
- Redux Toolkit
- Framer Motion

### Backend
- Next.js Server Actions
- Prisma ORM

### Database
- PostgreSQL

### Authentication
- Auth.js (NextAuth v5)
- GitHub OAuth

### Charts
- Recharts

---

## 📂 Project Structure

```
pingguard/
│
├── prisma/
├── public/
└── src/
    ├── app/
    │   ├── api/
    │   ├── dashboard/
    │   └── (landing)/
    │
    ├── components/
    │   ├── dashboard/
    │   ├── landing/
    │   ├── global/
    │   └── ui/
    │
    ├── hooks/
    ├── customHooks/
    └── lib/
        ├── actions/
        ├── reducers/
        ├── store/
        └── providers/
```

---

## 📦 Core Modules

- User Authentication
- Project Management
- Website Monitoring
- Performance Analytics
- Uptime Logging
- SSL Validation
- Alert Management
- Dashboard Analytics

---

## 🗄 Database Models

- User
- Account
- Session
- Project
- Website
- Check
- Alert
- PerformanceMetric
- UptimeLog
- Setting

---

## ⚙️ Installation

### Prerequisites

- Node.js 18+
- PostgreSQL
- GitHub OAuth App

### Clone Repository

```bash
git clone https://github.com/nikhil988714/pingguard.git

cd pingguard
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file:

```env
DATABASE_URL=
DIRECT_URL=

AUTH_SECRET=
AUTH_URL=http://localhost:3000

GITHUB_ID=
GITHUB_SECRET=
```

### Generate Prisma Client

```bash
npx prisma generate
```

### Push Database Schema

```bash
npx prisma db push
```

### Start Development Server

```bash
npm run dev
```

Visit:

```
http://localhost:3000
```

---

## 📸 Screenshots

Add screenshots of:

- Landing Page
- Dashboard
- Website Monitoring
- Project Management
- Analytics

---

## 📈 Future Improvements

- Email Notifications
- Slack & Discord Integration
- Custom Monitoring Intervals
- Public Status Pages
- Team Collaboration
- API Monitoring
- Incident Reports
- AI-powered anomaly detection

---

## 💡 Why PingGuard?

PingGuard was built as a full-stack web application to simplify website monitoring through an intuitive dashboard. It combines secure authentication, project management, uptime tracking, and performance analytics into a modern developer-friendly platform.

---

## 👨‍💻 Author

**Nikhil Jhalani**

GitHub: **https://github.com/nikhil988714**

---

## 📄 License

Licensed under the MIT License.