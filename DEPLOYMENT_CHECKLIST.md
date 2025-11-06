# Deployment Checklist for RootWork Framework

## Pre-Deployment

### 1. Environment Variables Setup
- [ ] Generate secure NEXTAUTH_SECRET: `openssl rand -base64 32`
- [ ] Set NEXTAUTH_URL to production domain (e.g., https://curriculum.rootworkframework.com)
- [ ] Verify DATABASE_URL is correct
- [ ] Configure EMAIL_SERVER for production email sending (optional but recommended)
- [ ] Update EMAIL_FROM with production email address

### 2. Database Setup
- [ ] Ensure database is accessible from deployment environment
- [ ] Run `npx prisma generate` to generate Prisma client
- [ ] Run `npx prisma db push` to create database tables
- [ ] Verify database schema is created correctly

### 3. Code Review
- [x] All TypeScript errors resolved
- [x] Build completes successfully (`npm run build`)
- [x] CodeQL security scan passed (0 vulnerabilities)
- [x] Code review feedback addressed
- [x] No console.log statements in production code (except API routes for debugging)

## Vercel Deployment Steps

### Step 1: Push to GitHub
```bash
git push origin main  # or your production branch
```

### Step 2: Connect Repository to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js configuration

### Step 3: Configure Environment Variables in Vercel
In Vercel dashboard, add these environment variables:

**Required:**
```
DATABASE_URL=postgres://1e2918c80dc611fd28addfd88612e77dd27b43b095542c698063a699b27f0bdf:sk_klPbplP_zN2xftMfj_tJW@db.prisma.io:5432/postgres?sslmode=require

NEXTAUTH_SECRET=[Generate with: openssl rand -base64 32]

NEXTAUTH_URL=https://your-domain.vercel.app
```

**Optional (for email):**
```
EMAIL_SERVER=smtp://username:password@smtp.example.com:587
EMAIL_FROM=noreply@rootworkframework.com
```

### Step 4: Deploy
1. Click "Deploy" in Vercel
2. Wait for build to complete
3. Verify deployment succeeded

### Step 5: Run Database Migrations
After first deployment:
```bash
# Install Vercel CLI if not already installed
npm install -g vercel

# Login to Vercel
vercel login

# Link to your project
vercel link

# Run Prisma commands
vercel env pull .env.local
npx prisma generate
npx prisma db push
```

## Post-Deployment Verification

### Functionality Tests
- [ ] Visit homepage - should load without errors
- [ ] Click "Sign Up" - should show registration form
- [ ] Create a test account
- [ ] Check verification email (or console logs in dev)
- [ ] Click verification link
- [ ] Sign in with verified account
- [ ] Access dashboard - should show user info
- [ ] Access each grade page (K-2, 3-5, 6-8, 9-12)
- [ ] Sign out - should return to homepage
- [ ] Try accessing protected route while signed out - should redirect to sign-in

### Security Checks
- [ ] HTTPS is enabled (Vercel provides this automatically)
- [ ] Environment variables are not exposed in client code
- [ ] Database credentials are secure
- [ ] Password requirements are enforced (min 8 characters)
- [ ] Email verification is required before curriculum access
- [ ] Session cookies are httpOnly and secure

### Performance Checks
- [ ] Homepage loads in < 3 seconds
- [ ] Images are optimized
- [ ] No console errors in browser
- [ ] Mobile responsive design works correctly
- [ ] All links work correctly

## Production Email Setup (Recommended)

For production email sending, choose one of these services:

### Option 1: SendGrid
1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Create API key
3. Set environment variable:
   ```
   EMAIL_SERVER=smtp://apikey:[YOUR_API_KEY]@smtp.sendgrid.net:587
   ```

### Option 2: AWS SES
1. Set up AWS SES
2. Verify domain and email addresses
3. Get SMTP credentials
4. Set environment variable:
   ```
   EMAIL_SERVER=smtp://[USERNAME]:[PASSWORD]@email-smtp.[REGION].amazonaws.com:587
   ```

### Option 3: Mailgun
1. Sign up at [mailgun.com](https://mailgun.com)
2. Verify domain
3. Get SMTP credentials
4. Set environment variable:
   ```
   EMAIL_SERVER=smtp://[USERNAME]:[PASSWORD]@smtp.mailgun.org:587
   ```

### Implement Email Sending
Update `/app/api/register/route.ts`:

```typescript
import nodemailer from 'nodemailer';

// After creating user
if (process.env.EMAIL_SERVER) {
  const transporter = nodemailer.createTransporter(process.env.EMAIL_SERVER);
  
  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: email,
    subject: 'Verify your RootWork Framework account',
    html: `
      <h1>Welcome to RootWork Framework!</h1>
      <p>Click the link below to verify your email address:</p>
      <a href="${verificationUrl}">Verify Email</a>
      <p>If you didn't create this account, you can safely ignore this email.</p>
    `
  });
}
```

## Monitoring & Maintenance

### Set Up Monitoring
- [ ] Configure Vercel Analytics
- [ ] Set up error tracking (Sentry, LogRocket, etc.)
- [ ] Monitor database usage
- [ ] Set up uptime monitoring

### Regular Maintenance
- [ ] Check error logs weekly
- [ ] Monitor database size and performance
- [ ] Update dependencies monthly: `npm update`
- [ ] Review security advisories: `npm audit`
- [ ] Backup database regularly

## Rollback Plan

If issues occur after deployment:

1. **Immediate Rollback in Vercel:**
   - Go to Vercel dashboard
   - Click "Deployments"
   - Find previous working deployment
   - Click "..." menu → "Promote to Production"

2. **Fix and Redeploy:**
   - Fix issues locally
   - Test thoroughly
   - Push to GitHub
   - Vercel will auto-deploy

3. **Database Rollback (if needed):**
   - Use database backup
   - Restore to previous state
   - May need to adjust schema if migrations changed

## Support Contacts

**Technical Issues:**
- Repository: https://github.com/SAHearn1/RWFW-k-12-Curriculum-guide
- Email: hearn.sa@gmail.com

**Vercel Support:**
- Documentation: https://vercel.com/docs
- Support: https://vercel.com/support

**Database Support:**
- Prisma Docs: https://www.prisma.io/docs
- Vercel Postgres: https://vercel.com/docs/storage/vercel-postgres

## Success Criteria

Deployment is successful when:
- ✅ Application is accessible at production URL
- ✅ Users can sign up and receive verification emails (or see verification URL)
- ✅ Users can verify email and sign in
- ✅ Authenticated users can access all grade-level pages
- ✅ Non-authenticated users are redirected appropriately
- ✅ Sign-out works correctly
- ✅ No console errors or warnings
- ✅ Database connection is stable
- ✅ All security checks pass
- ✅ Performance is acceptable (< 3s page loads)

---

**Prepared by:** GitHub Copilot  
**Date:** 2025-11-06  
**Version:** 1.0
