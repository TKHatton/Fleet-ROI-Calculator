# Fleet Services ROI Calculator - Deployment Package

This directory contains all the necessary files and instructions for deploying the Fleet Services ROI Calculator to a production environment.

## Contents

- `production-config.js` - Configuration settings for production deployment
- `deploy.sh` - Automated deployment script
- `deployment-guide.md` - Comprehensive deployment instructions
- `deployment-checklist.md` - Checklist for deployment tasks
- `nginx.conf` - Nginx server configuration
- `.htaccess` - Apache server configuration
- `github-workflow.yml` - GitHub Actions workflow for CI/CD

## Quick Start

1. Review the `deployment-guide.md` for detailed instructions
2. Choose your preferred hosting platform
3. Run the deployment script: `./deploy.sh`
4. Follow the deployment checklist to ensure all steps are completed

## Deployment Options

The Fleet Services ROI Calculator can be deployed to various hosting platforms:

- Static web hosting (AWS S3, Netlify, Vercel, GitHub Pages)
- Traditional web servers (Apache, Nginx)

See the deployment guide for detailed instructions for each option.

## Server Configuration

We've provided server configuration files for both Nginx and Apache:

- `nginx.conf` - Copy to your Nginx configuration directory
- `.htaccess` - Place in the root directory of your Apache server

These configurations include:
- SPA routing
- Security headers
- Cache control
- Compression settings

## Automated Deployment

For automated CI/CD deployment, we've included a GitHub Actions workflow:

- `github-workflow.yml` - Copy to `.github/workflows/` in your repository

## Support

For additional support or questions about deployment, please contact the development team.
