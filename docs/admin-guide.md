# Fleet Services ROI Calculator - Administrator Guide

## Introduction

This Administrator Guide provides technical information and instructions for deploying, maintaining, and customizing the Fleet Services ROI Calculator. This guide is intended for IT administrators, developers, and technical staff responsible for managing the application.

## System Architecture

The Fleet Services ROI Calculator is a single-page application (SPA) built with React. It runs entirely in the client's browser and does not require a backend server for its core functionality.

### Technology Stack

- **Frontend Framework**: React
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Charts and Visualizations**: Recharts
- **PDF Generation**: jsPDF
- **CSV Export**: Custom implementation

### Directory Structure

```
fleet-roi-calculator/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── common/         # Reusable UI components
│   │   ├── input/          # Input form components
│   │   ├── interactive/    # Interactive features
│   │   ├── layout/         # Layout components
│   │   ├── results/        # Results visualization
│   │   └── testing/        # Testing components
│   ├── utils/              # Utility functions
│   │   └── calculationEngine.ts  # ROI calculation logic
│   ├── contexts/           # React contexts
│   ├── hooks/              # Custom React hooks
│   ├── styles/             # Global styles
│   ├── App.tsx             # Main application component
│   └── index.tsx           # Application entry point
├── deployment/             # Deployment configurations
└── docs/                   # Documentation
```

## Deployment

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)
- Web server (for hosting)

### Deployment Options

The application can be deployed to various hosting platforms:

1. **Static Web Hosting** (Recommended)
   - AWS S3 + CloudFront
   - Netlify
   - Vercel
   - GitHub Pages

2. **Traditional Web Server**
   - Apache
   - Nginx

For detailed deployment instructions, refer to the `deployment/deployment-guide.md` file.

### Configuration

The application can be configured using environment variables:

```
NODE_ENV=production
PUBLIC_URL=https://your-domain.com
REACT_APP_API_URL=https://api.your-domain.com
REACT_APP_ANALYTICS_ID=UA-XXXXXXXXX-X
REACT_APP_VERSION=1.0.0
```

Create a `.env.production` file in the project root to set these variables for production builds.

### Server Configuration

Server configuration files are provided for both Nginx and Apache:

- `deployment/nginx.conf` - Nginx configuration
- `deployment/htaccess` - Apache configuration

These configurations include:
- SPA routing
- Security headers
- Cache control
- Compression settings

## Maintenance

### Updating the Application

To update the application:

1. Pull the latest code from the repository
2. Install dependencies: `npm install`
3. Build the application: `npm run build`
4. Deploy the updated build to your hosting platform

### Monitoring

Monitor the application using:

1. Web analytics (Google Analytics, Matomo, etc.)
2. Server logs
3. Error tracking services (Sentry, LogRocket, etc.)

### Backup

Regularly backup:

1. Application code
2. Configuration files
3. User data (if applicable)

## Customization

### Branding

To customize the branding:

1. Update logo and favicon in the `public` directory
2. Modify color scheme in `src/styles/tailwind.css`
3. Update company information in relevant components

### Calculation Parameters

The calculation engine parameters can be modified in:
`src/utils/calculationEngine.ts`

Key parameters include:
- Default maintenance cost reduction percentages
- Fuel efficiency improvement factors
- Downtime cost calculations
- Vehicle lifespan extension factors

### Adding New Features

To add new features:

1. Create new components in the appropriate directories
2. Update the main application flow in `App.tsx`
3. Add any new utility functions or hooks as needed
4. Update the documentation to reflect the new features

## Troubleshooting

### Common Issues

1. **Blank Page After Deployment**
   - Check if the PUBLIC_URL is set correctly
   - Verify that all assets are being served correctly
   - Check browser console for errors

2. **PDF Generation Issues**
   - Ensure the browser supports canvas operations
   - Check for any CORS issues with fonts or images
   - Verify sufficient memory is available for large reports

3. **Performance Problems**
   - Check for unnecessary re-renders using React DevTools
   - Optimize large data processing operations
   - Ensure images and assets are properly optimized

### Debugging

To debug the application:

1. Enable development tools: `npm start`
2. Use browser developer tools to inspect components
3. Check the browser console for errors and warnings
4. Use React DevTools for component inspection

## Security Considerations

### Best Practices

1. **Regular Updates**
   - Keep all dependencies updated
   - Apply security patches promptly

2. **Content Security Policy**
   - Configure appropriate CSP headers
   - Restrict to trusted sources only

3. **Data Handling**
   - Minimize sensitive data collection
   - Implement proper data sanitization

4. **Access Control**
   - Restrict access to admin functions
   - Implement proper authentication if needed

## Technical Support

For technical support:

- Email: tech-support@example.com
- Phone: (555) 123-4567
- Internal ticketing system: https://support.example.com

## Appendix

### API Documentation

If the application integrates with any APIs, their documentation would be included here.

### Third-Party Libraries

The application uses the following key third-party libraries:

- React: UI framework
- Tailwind CSS: Styling
- Recharts: Data visualization
- jsPDF: PDF generation
- FileSaver.js: File download handling

### Changelog

A detailed changelog would be maintained here to track version changes and updates.

---

© 2025 Fleet Services Company. All rights reserved.
