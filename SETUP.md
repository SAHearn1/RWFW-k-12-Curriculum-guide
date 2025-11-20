# RootWork Framework - Setup Guide

## Overview

This is a Next.js 16 application with authentication, protected routes, and Prisma ORM for database management. The application requires users to sign up and verify their email before accessing curriculum content.

## Prerequisites

- Node.js 18.x or higher
- npm or yarn
- PostgreSQL database (Vercel Postgres provided)
- Vercel CLI (optional, but recommended for Vercel deployments):
  ```bash
  npm install -g vercel
  ```

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Database URLs (provided in problem statement)
DATABASE_URL="postgres://1e2918c80dc611fd28addfd88612e77dd27b43b095542c698063a699b27f0bdf:sk_klPbplP_zN2xftMfj_tJW@db.prisma.io:5432/postgres?sslmode=require"
PRISMA_DATABASE_URL="prisma+postgres://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RfaWQiOjEsInNlY3VyZV9rZXkiOiJza19rbFBicGxQX3pOMnhmdE1mal90SlciLCJhcGlfa2V5IjoiMDFLODBYU0Q3Vk40WldORVZLRDEwUkE5UEMiLCJ0ZW5hbnRfaWQiOiIxZTI5MThjODBkYzYxMWZkMjhhZGRmZDg4NjEyZTc3ZGQyN2I0M2IwOTU1NDJjNjk4MDYzYTY5OWIyN2YwYmRmIiwiaW50ZXJuYWxfc2VjcmV0IjoiNjUxYmQyNTktMWIyZi00YTIwLWI5MGUtOTE0ODljYTE5MDNiIn0.oTwywAhI8TJoZA9BXTi79O1TyYDgYUe-ByW_ee41SCc"

# NextAuth Configuration
NEXTAUTH_SECRET="your-secure-secret-key-change-in-production"
NEXTAUTH_URL="http://localhost:3000"

# Email Configuration (optional for now)
EMAIL_SERVER=""
EMAIL_FROM="noreply@rootworkframework.com"
```

**IMPORTANT**: For production, generate a secure `NEXTAUTH_SECRET`:
```bash
openssl rand -base64 32
```

## Installation

### Option 1: Using Vercel CLI (Recommended for Vercel deployments)

1. Pull environment variables from Vercel:
```bash
vercel env pull .env.development.local
```

2. Install dependencies:
```bash
npm install
```

3. Run database migration:
```bash
npx prisma migrate dev --name init
```

4. Start development server:
```bash
npm run dev
```

### Option 2: Manual Setup (Without Vercel CLI)

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` file with environment variables (see Environment Variables section above)

3. Generate Prisma Client:
```bash
npx prisma generate
```

4. Push the database schema (when database is accessible):
```bash
npx prisma db push
```

5. Start development server:
```bash
npm run dev
```

## Database Schema

The application uses the following User model:

```prisma
model User {
  id                String    @id @default(cuid())
  email             String    @unique
  password          String
  name              String?
  emailVerified     Boolean   @default(false)
  verificationToken String?   @unique
  createdAt         DateTime  @default(now())
  updatedAt         DateTime  @updatedAt
}
```

## Running the Application

### Development Mode
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Production Build
```bash
npm run build
npm start
```

## Application Structure

### Public Routes
- `/` - Landing page with curriculum overview
- `/auth/signin` - Sign-in page
- `/auth/signup` - Sign-up page

### Protected Routes (Require Authentication)
- `/dashboard` - User dashboard with account info and curriculum access
- `/grade-k-2` - Grades K-2 curriculum content
- `/grade-3-5` - Grades 3-5 curriculum content
- `/grade-6-8` - Grades 6-8 curriculum content
- `/grade-9-12` - Grades 9-12 curriculum content

### API Routes
- `/api/auth/[nextauth]` - NextAuth.js authentication endpoints
- `/api/register` - User registration
- `/api/verify` - Email verification handler

## Authentication Flow

1. **Sign Up**: User creates account at `/auth/signup`
   - Email, password, and optional name required
   - Password is hashed with bcrypt
   - Verification token is generated
   - In development, verification URL is displayed
   - In production, verification email would be sent

2. **Email Verification**: User clicks verification link
   - Token is validated
   - User's `emailVerified` flag is set to `true`
   - Redirect to sign-in page with success message

3. **Sign In**: User signs in at `/auth/signin`
   - Credentials are validated
   - Email verification status is checked
   - JWT session is created
   - User is redirected to dashboard

4. **Access Protected Content**: Middleware checks authentication
   - If authenticated, user can access curriculum pages
   - If not authenticated, user is redirected to sign-in

5. **Sign Out**: User clicks sign-out button
   - Session is destroyed
   - User is redirected to landing page

## Email Verification

### Development Mode
In development, the verification URL is returned in the registration API response and logged to the console. Visit the URL manually to verify the email.

### Production Mode
To enable email verification in production, configure an email service provider:

1. Set up an SMTP server or use a service like SendGrid, Mailgun, or AWS SES
2. Update `.env.local` with email server credentials:
```env
EMAIL_SERVER="smtp://username:password@smtp.example.com:587"
EMAIL_FROM="noreply@rootworkframework.com"
```

3. Implement email sending in `/api/register/route.ts`:
```typescript
// Example using nodemailer
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport(process.env.EMAIL_SERVER);

await transporter.sendMail({
  from: process.env.EMAIL_FROM,
  to: email,
  subject: 'Verify your email',
  html: `<p>Click <a href="${verificationUrl}">here</a> to verify your email.</p>`
});
```

## Deployment to Vercel

1. Push your code to GitHub

2. Connect your repository to Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Next.js

3. Configure environment variables in Vercel dashboard:
   - Add all variables from `.env.local`
   - Update `NEXTAUTH_URL` to your production URL

4. Deploy:
   - Vercel will automatically build and deploy
   - Database migrations will run automatically

5. After deployment, run database migrations:
   ```bash
   npx prisma db push --skip-generate
   ```

## Security Considerations

1. **Password Security**
   - Passwords are hashed with bcrypt (cost factor: 10)
   - Never stored in plain text
   - Minimum 8 characters required

2. **Session Security**
   - JWT-based sessions
   - Sessions expire automatically
   - Secure httpOnly cookies

3. **Environment Variables**
   - Never commit `.env` or `.env.local` to version control
   - Use different secrets for development and production
   - Rotate secrets regularly

4. **Database Security**
   - Use provided Vercel Postgres credentials
   - SSL/TLS connection enforced
   - Parameterized queries prevent SQL injection

## Troubleshooting

### Database Connection Issues
If you cannot connect to the database:
1. Verify DATABASE_URL is correct
2. Check network connectivity
3. Ensure database server is running
4. Try using PRISMA_DATABASE_URL (Accelerate) instead

### Build Errors
If the build fails:
1. Clear Next.js cache: `rm -rf .next`
2. Delete node_modules and reinstall: `rm -rf node_modules && npm install`
3. Regenerate Prisma client: `npx prisma generate`

### Authentication Issues
If authentication isn't working:
1. Verify NEXTAUTH_SECRET is set
2. Check NEXTAUTH_URL matches your domain
3. Clear browser cookies and try again
4. Check console for error messages

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [NextAuth.js Documentation](https://next-auth.js.org/)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Vercel Postgres Documentation](https://vercel.com/docs/storage/vercel-postgres)

## Support

For issues or questions, contact:
- Dr. Shawn Hearn
- Email: hearn.sa@gmail.com
- Organization: Community Exceptional Children's Services
