UNO MINDA ERP Portal – Machine Instruction & Compliance System
📌 Overview

UNO MINDA ERP Portal is a web-based Machine Instruction & Compliance Management System designed to streamline industrial operations, machine instruction handling, employee acknowledgements, compliance tracking, and reporting. The platform provides role-based access for administrators, supervisors, and employees, ensuring secure and efficient management of manufacturing instructions and operational compliance.

🚀 Features
🔐 Authentication & Authorization
Secure user login system
Role-based access control
JWT authentication
Session management
📄 Machine Instruction Management
Create machine instructions
Update and manage instructions
Upload supporting documents
Version tracking
🏭 Production Line Management
Manage production lines
Assign instructions to specific lines
Track machine-wise documentation
👨‍🏭 Employee Compliance Tracking
Employee acknowledgement system
Compliance monitoring
Instruction completion tracking
Status reporting
📊 Analytics Dashboard
Real-time statistics
Compliance metrics
Instruction completion analysis
Performance insights
🤖 AI Integration
AI-assisted instruction support
Intelligent content analysis
Automated recommendations
📈 Reports & Monitoring
Compliance reports
User activity reports
Machine instruction reports
Downloadable analytics
🛠️ Technology Stack
Frontend
React.js
TypeScript
Vite
Tailwind CSS
Context API
Backend
Node.js
Express.js
TypeScript
JWT Authentication
Database
PostgreSQL
Prisma ORM
Neon Database
Deployment
Frontend: Vercel
Backend: Render
Database: Neon
📂 Project Structure
UNOMINDA/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── components/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── services/
│   │   └── config/
│   │
│   ├── prisma/
│   └── uploads/
│
└── README.md
⚙️ Installation
Clone Repository
git clone https://github.com/yourusername/UNOMINDA.git
cd UNOMINDA
Backend Setup
cd backend
npm install

Create .env

DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
PORT=5000

Run Prisma Migration

npx prisma generate
npx prisma db push

Start Backend

npm run dev
Frontend Setup
cd frontend
npm install

Create .env

NEXT_PUBLIC_API_URL=https://your-backend-url/api

Start Frontend

npm run dev
🌐 Deployment
Backend (Render)
Build Command:
npm install && npx prisma generate && npm run build

Start Command:
npm start
Frontend (Vercel)
NEXT_PUBLIC_API_URL=https://your-backend-url/api

Deploy directly from GitHub.

🔑 User Roles
Role	Access
Admin	Full System Control
Supervisor	Manage Instructions & Reports
Employee	View Instructions & Submit Acknowledgements
📊 Core Modules
Authentication Module
Machine Management Module
Production Line Module
Instruction Management Module
Compliance Tracking Module
Analytics Dashboard
Reports Module
AI Assistant Module
🎯 Objectives
Improve manufacturing compliance.
Digitize machine instruction management.
Enhance employee accountability.
Reduce paperwork and manual tracking.
Provide real-time operational visibility.
🔒 Security Features
JWT Authentication
Password Encryption
Role-Based Authorization
Secure API Endpoints
Environment Variable Protection
📸 Screenshots

<img width="730" height="469" alt="image" src="https://github.com/user-attachments/assets/0b663728-1bcf-47ba-8bf1-eea6ee2185ee" />
<img width="779" height="469" alt="image" src="https://github.com/user-attachments/assets/be93c03e-00c0-45b0-af92-bc050c9670f1" />
<img width="739" height="456" alt="image" src="https://github.com/user-attachments/assets/2e01e4ae-0a39-44b7-8f94-dcc3d136a663" />
<img width="764" height="461" alt="image" src="https://github.com/user-attachments/assets/5bb43cf7-6327-4c8b-a94f-276423df69d8" />

👨‍💻 Developed For

UNO MINDA
Main Facility (Seating / Casting / Switch Division):Survey No. 209/2A2, 2B1, 2B2, 2C1Thalli Road, Mathagondapalli VillageHosur, Krishnagiri, Tamil Nadu, 635114
⭐ If you found this project useful, please give it a star on GitHub.

UNO MINDA – Machine Instruction & Compliance Management System

A modern ERP solution developed to improve industrial instruction handling, employee compliance monitoring, and operational efficiency.
