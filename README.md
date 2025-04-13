# README for Netlify Deployment - FIXED VERSION

## Fleet Services ROI Calculator

This is a web-based ROI calculator for fleet services that helps potential clients understand the tangible benefits of fleet services.

## IMPORTANT: Fixed Deployment Configuration

This package has been corrected to fix the previous deployment error. The main change is:

- **Removed the NextJS plugin** from netlify.toml (this is a Vite/React project, not a Next.js project)

All other Netlify configurations remain in place:
- SPA routing configuration
- Cache and security headers
- Node version specification

## Deployment Instructions

### Option 1: Deploy via Netlify UI (Recommended)

1. Go to [Netlify](https://app.netlify.com/) and log in
2. Click "Add new site" > "Import an existing project"
3. Connect to your GitHub repository
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"

### Option 2: Deploy via Netlify CLI

1. Install Netlify CLI: `npm install -g netlify-cli`
2. Login to Netlify: `netlify login`
3. Initialize site: `netlify init`
4. Follow the prompts to create a new site or connect to an existing one
5. Deploy: `netlify deploy --prod`

## Troubleshooting

If you encounter deployment issues:

1. Check Netlify build logs for specific errors
2. Ensure Node.js version 18+ is being used
3. Try adding `--legacy-peer-deps` to npm install command if dependency issues occur
4. Verify the build command and publish directory are correctly set

## What Was Fixed

The previous deployment failed because the netlify.toml file incorrectly included the NextJS plugin (`@netlify/plugin-nextjs`), but this is a Vite/React project, not a Next.js project. The plugin was looking for a Next.js build in the dist directory, but since this is a Vite project, the dist directory contains a standard Vite build.

This version has the correct configuration for a Vite/React project.
