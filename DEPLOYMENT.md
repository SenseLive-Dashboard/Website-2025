# SenseLive Website Deployment Guide

This document provides comprehensive instructions for deploying the SenseLive website to production.

## Prerequisites

- Node.js 18.x or later
- Access to your hosting platform (Vercel, Hostinger, etc.)
- Your domain name and DNS configuration access

## Deployment Options

### Option 1: Deploy to Vercel (Recommended for Next.js)

1. **Connect your repository to Vercel**:
   - Sign up or log in to [Vercel](https://vercel.com)
   - Import your repository
   - Vercel will automatically detect Next.js settings

2. **Configure environment variables**:
   - Add the PORT environment variable (default: 3000)
   - Add any API keys or other environment variables needed

3. **Deploy**:
   - Vercel will automatically build and deploy your site
   - You'll receive a preview URL once the deployment is complete

4. **Configure your custom domain**:
   - In the Vercel dashboard, go to your project settings
   - Navigate to "Domains"
   - Add your custom domain and follow the instructions to verify ownership

### Option 2: Deploy to Hostinger

1. **Prepare your build**:
   ```bash
   npm run create-deployment-package

