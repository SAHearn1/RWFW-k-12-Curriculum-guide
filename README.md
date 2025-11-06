# RootWork Framework K-12 Curriculum

A comprehensive K-12 curriculum web application integrating trauma-informed care, therapeutic horticulture, and rigorous STEAM education for healing and academic excellence.

## 🌟 Features

### Authentication System
- **User Registration**: Sign up with email and password
- **Email Verification**: Secure account verification via email token
- **Password Security**: Bcrypt hashing with secure storage
- **Session Management**: JWT-based authentication with NextAuth.js
- **Protected Routes**: Curriculum content requires authentication

### Curriculum Content
- **Grades K-2**: Wonder & Discovery
- **Grades 3-5**: Investigation & Connection
- **Grades 6-8**: Systems & Leadership
- **Grades 9-12**: Impact & Innovation

### User Features
- **Landing Page**: Public overview with sign-in/sign-up options
- **User Dashboard**: Personalized dashboard with curriculum access
- **Profile Management**: View account information
- **Sign Out**: Secure session termination

## 🚀 Quick Start

### Prerequisites
- Node.js 18.x or higher
- npm or yarn
- PostgreSQL database (Vercel Postgres provided)

### Installation

#### Quick Start (with Vercel CLI)

```bash
# 1. Pull environment variables
vercel env pull .env.development.local

# 2. Install dependencies
npm install

# 3. Run database migration
npx prisma migrate dev --name init

# 4. Start development
npm run dev
```

#### Manual Setup (without Vercel CLI)

1. **Clone the repository**
   ```bash
   git clone https://github.com/SAHearn1/RWFW-k-12-Curriculum-guide.git
   cd RWFW-k-12-Curriculum-guide
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   DATABASE_URL="your-postgres-connection-string"
   NEXTAUTH_SECRET="your-secure-secret-key"
   NEXTAUTH_URL="http://localhost:3000"
   EMAIL_FROM="noreply@rootworkframework.com"
   ```

4. **Initialize the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📚 Documentation

For detailed setup instructions, deployment guides, and troubleshooting, see [SETUP.md](./SETUP.md).

## 🏗️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: NextAuth.js v5
- **Database**: PostgreSQL (Vercel Postgres)
- **ORM**: Prisma
- **Password Hashing**: bcryptjs
- **Deployment**: Vercel

## 📂 Project Structure

```
├── app/
│   ├── api/                    # API routes
│   │   ├── auth/              # NextAuth endpoints
│   │   ├── register/          # User registration
│   │   └── verify/            # Email verification
│   ├── auth/                  # Authentication pages
│   │   ├── signin/            # Sign-in page
│   │   └── signup/            # Sign-up page
│   ├── dashboard/             # User dashboard
│   ├── grade-k-2/             # K-2 curriculum
│   ├── grade-3-5/             # 3-5 curriculum
│   ├── grade-6-8/             # 6-8 curriculum
│   ├── grade-9-12/            # 9-12 curriculum
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Landing page
├── components/                # Reusable components
├── lib/                       # Utility functions
│   ├── auth.ts               # Auth configuration
│   └── prisma.ts             # Prisma client
├── prisma/                    # Database schema
│   └── schema.prisma         # User model
├── middleware.ts              # Route protection
└── public/                    # Static assets
```

## 🔐 Security

- Passwords are hashed using bcrypt with a cost factor of 10
- JWT-based sessions with secure httpOnly cookies
- Email verification required before accessing curriculum
- Protected routes with middleware authentication
- Environment variables for sensitive data
- SQL injection protection via Prisma ORM

## 🎨 Design Philosophy

The application follows the **5 Rs Framework** of trauma-informed care:
1. **Rooting**: Establishing safety and grounding
2. **Regulating**: Emotional regulation support
3. **Reflecting**: Metacognitive awareness
4. **Restoring**: Healing and recovery
5. **Reconnecting**: Building community connections

## 📖 About the RootWork Framework

Developed by **Dr. Shawn Hearn, Ed.D., J.D.**, the RootWork Framework represents a paradigm shift in education, seamlessly integrating therapeutic horticulture, trauma-informed pedagogy, and rigorous academic standards.

### Credentials
- Ed.D. in Educational Administration & Leadership
- J.D. from Southern University Law Center
- EBD Endorsement in Special Education
- 20+ Years Military Service

### Organization
Founder & Executive Director  
Community Exceptional Children's Services (CECS)  
Savannah High School Educator

## 🤝 Contributing

This is a production application. For feature requests or bug reports, please contact the project maintainer.

## 📝 License

© 2025 Dr. Shawn Hearn / Community Exceptional Children's Services. All rights reserved.

## 📧 Contact

**Dr. Shawn Hearn**  
Email: hearn.sa@gmail.com  
Location: Savannah, Georgia  
Organization: Community Exceptional Children's Services

## 🔗 Resources

- [AI Lesson Plan Generator](https://rwfw-lessonplan-generator.app/)
- [Next.js Documentation](https://nextjs.org/docs)
- [NextAuth.js Documentation](https://next-auth.js.org/)
- [Prisma Documentation](https://www.prisma.io/docs/)

---

**RootWork Framework K-12 Curriculum | From Garden to Growth**
