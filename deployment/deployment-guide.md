# Fleet Services ROI Calculator - Deployment Guide

## Overview
This document provides instructions for deploying the Fleet Services ROI Calculator web application to a production environment. The application is built using React and can be deployed to various hosting platforms.

## Prerequisites
- Node.js (v16 or higher)
- npm (v7 or higher)
- Access to a web hosting service (AWS S3, Netlify, Vercel, GitHub Pages, etc.)

## Deployment Options

### Option 1: Static Web Hosting (Recommended)
The Fleet Services ROI Calculator is a client-side application that can be deployed to any static web hosting service.

1. **AWS S3 + CloudFront**
   - Upload the build directory to an S3 bucket
   - Configure the bucket for static website hosting
   - Set up CloudFront for CDN and HTTPS

2. **Netlify**
   - Connect your repository to Netlify
   - Configure build settings: `npm run build`
   - Set build directory to `build`

3. **Vercel**
   - Connect your repository to Vercel
   - Vercel will automatically detect React configuration
   - Deploy with default settings

4. **GitHub Pages**
   - Set `PUBLIC_URL` to your GitHub Pages URL
   - Run `npm run build`
   - Deploy the build directory to the gh-pages branch

### Option 2: Traditional Web Server
You can also deploy the application to a traditional web server:

1. **Apache**
   - Copy the build directory to your web server's document root
   - Configure .htaccess for SPA routing

2. **Nginx**
   - Copy the build directory to your web server's document root
   - Configure nginx.conf for SPA routing

## Deployment Steps

1. **Prepare Environment Variables**
   Create a `.env.production` file with the following variables:
   ```
   NODE_ENV=production
   PUBLIC_URL=https://your-domain.com
   REACT_APP_API_URL=https://api.your-domain.com
   REACT_APP_ANALYTICS_ID=UA-XXXXXXXXX-X
   REACT_APP_VERSION=1.0.0
   ```

2. **Create Production Build**
   ```
   npm run build
   ```
   This will create an optimized production build in the `build` directory.

3. **Test Production Build Locally**
   ```
   npx serve -s build
   ```
   Open http://localhost:5000 to verify the build works correctly.

4. **Deploy to Hosting Platform**
   Follow the specific instructions for your chosen hosting platform to upload the build directory.

5. **Configure Cache Control**
   Set the following cache control headers:
   - HTML files: `no-cache`
   - JS/CSS files: `max-age=31536000`
   - Images/fonts: `max-age=31536000`

6. **Configure Security Headers**
   Set the following security headers:
   - Content-Security-Policy: `default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:;`
   - X-Content-Type-Options: `nosniff`
   - X-Frame-Options: `DENY`
   - X-XSS-Protection: `1; mode=block`
   - Referrer-Policy: `same-origin`
   - Strict-Transport-Security: `max-age=31536000; includeSubDomains; preload`

7. **Verify Deployment**
   - Test the application on various browsers and devices
   - Verify all features work correctly
   - Check performance metrics

## Automated Deployment

We've provided a deployment script that automates most of these steps:

```
./deployment/deploy.sh
```

This script will:
1. Set environment variables
2. Create a production build
3. Test the build locally
4. Create a deployment package
5. Generate a verification page

After running the script, you'll find the deployment package at:
`/deployment/fleet-roi-calculator-deployment.zip`

## Troubleshooting

### Common Issues

1. **Blank Page After Deployment**
   - Check if the PUBLIC_URL is set correctly
   - Verify that all assets are being served correctly
   - Check browser console for errors

2. **API Connection Issues**
   - Verify REACT_APP_API_URL is set correctly
   - Check CORS configuration on the API server

3. **Routing Issues**
   - Configure server to redirect all requests to index.html
   - For Apache, use the provided .htaccess file
   - For Nginx, configure try_files directive

### Support

For additional support, please contact the development team at support@example.com.
