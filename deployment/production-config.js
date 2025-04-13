// Production build configuration for Fleet Services ROI Calculator
// This file contains the necessary steps to prepare the application for production deployment

// 1. Environment variables for production
const productionEnv = {
  NODE_ENV: 'production',
  PUBLIC_URL: 'https://fleet-roi-calculator.example.com',
  REACT_APP_API_URL: 'https://api.example.com/fleet-services',
  REACT_APP_ANALYTICS_ID: 'UA-XXXXXXXXX-X',
  REACT_APP_VERSION: '1.0.0'
};

// 2. Build optimization settings
const buildOptimizations = {
  minify: true,
  splitChunks: true,
  treeshaking: true,
  compressionLevel: 'maximum',
  sourceMap: false,
  bundleAnalyzer: false
};

// 3. Deployment targets
const deploymentTargets = {
  primary: 'static-web-hosting',
  alternatives: ['aws-s3', 'netlify', 'vercel', 'github-pages']
};

// 4. Cache control settings
const cacheControl = {
  html: 'no-cache',
  js: 'max-age=31536000',
  css: 'max-age=31536000',
  images: 'max-age=31536000',
  fonts: 'max-age=31536000'
};

// 5. Security headers
const securityHeaders = {
  'Content-Security-Policy': "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:;",
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'same-origin',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload'
};

// 6. Build and deployment steps
const deploymentSteps = [
  '1. Set environment variables for production',
  '2. Run npm run build to create optimized production build',
  '3. Test the production build locally using serve -s build',
  '4. Deploy the build directory to the chosen hosting platform',
  '5. Configure custom domain if applicable',
  '6. Set up proper cache control headers',
  '7. Configure security headers',
  '8. Verify the deployed application functionality',
  '9. Set up monitoring and analytics'
];

// Export configuration for use in deployment scripts
module.exports = {
  productionEnv,
  buildOptimizations,
  deploymentTargets,
  cacheControl,
  securityHeaders,
  deploymentSteps
};
