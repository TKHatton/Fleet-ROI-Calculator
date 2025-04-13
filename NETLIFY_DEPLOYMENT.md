# Deployment Guide for Netlify

This file contains important information about deploying this application to Netlify.

## Configuration Files

The following configuration files have been added to ensure proper deployment:

1. `netlify.toml` - Main configuration file for Netlify that specifies:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - SPA routing configuration
   - Cache and security headers

2. `public/_redirects` - Backup redirect configuration for client-side routing

## Common Deployment Issues

If you encounter issues during deployment, check the following:

1. **Build Command**: Ensure Netlify is using `npm run build` as the build command
2. **Publish Directory**: Ensure Netlify is using `dist` as the publish directory
3. **Node Version**: If you encounter build errors, try specifying Node.js version 18.x or higher
4. **Dependencies**: Make sure all dependencies are properly installed before deployment

## Environment Variables

This application doesn't require any environment variables for basic functionality.

## Post-Deployment Checks

After deployment, verify:
1. The homepage loads correctly
2. Navigation between calculator steps works
3. All assets (CSS, JavaScript) load properly
4. No console errors appear in the browser developer tools
