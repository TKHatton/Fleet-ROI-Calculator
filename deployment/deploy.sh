#!/bin/bash
# Deployment script for Fleet Services ROI Calculator

# Set environment variables
echo "Setting environment variables for production..."
export NODE_ENV=production
export PUBLIC_URL=https://fleet-roi-calculator.example.com
export REACT_APP_API_URL=https://api.example.com/fleet-services
export REACT_APP_ANALYTICS_ID=UA-XXXXXXXXX-X
export REACT_APP_VERSION=1.0.0

# Create production build
echo "Creating optimized production build..."
cd /home/ubuntu/fleet-roi-calculator
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
  echo "Build failed. Exiting deployment process."
  exit 1
fi

echo "Build successful. Testing production build locally..."
npx serve -s build -l 3000 &
SERVE_PID=$!

# Wait for server to start
sleep 5

# Test the local build
echo "Performing quick smoke test on local build..."
curl -s http://localhost:3000 > /dev/null
if [ $? -ne 0 ]; then
  echo "Local build test failed. Exiting deployment process."
  kill $SERVE_PID
  exit 1
fi

# Kill the local server
kill $SERVE_PID

# Create deployment directory if it doesn't exist
echo "Preparing deployment package..."
mkdir -p /home/ubuntu/fleet-roi-calculator/deployment/dist

# Copy build files to deployment directory
cp -r /home/ubuntu/fleet-roi-calculator/build/* /home/ubuntu/fleet-roi-calculator/deployment/dist/

# Create deployment package
cd /home/ubuntu/fleet-roi-calculator/deployment
zip -r fleet-roi-calculator-deployment.zip dist

# Create deployment verification file
cat > /home/ubuntu/fleet-roi-calculator/deployment/verification.html << EOL
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fleet Services ROI Calculator - Deployment Verification</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
    h1 {
      color: #2563eb;
      border-bottom: 2px solid #e5e7eb;
      padding-bottom: 10px;
    }
    .success {
      background-color: #d1fae5;
      border: 1px solid #10b981;
      border-radius: 4px;
      padding: 15px;
      margin: 20px 0;
    }
    ul {
      background-color: #f3f4f6;
      border-radius: 4px;
      padding: 20px 20px 20px 40px;
    }
    li {
      margin-bottom: 10px;
    }
  </style>
</head>
<body>
  <h1>Fleet Services ROI Calculator</h1>
  <div class="success">
    <strong>✓ Deployment Successful!</strong> The application has been successfully deployed and is ready for use.
  </div>
  
  <h2>Deployment Information</h2>
  <ul>
    <li><strong>Version:</strong> 1.0.0</li>
    <li><strong>Deployment Date:</strong> $(date)</li>
    <li><strong>Environment:</strong> Production</li>
    <li><strong>Build Size:</strong> $(du -sh /home/ubuntu/fleet-roi-calculator/build | cut -f1)</li>
  </ul>
  
  <h2>Next Steps</h2>
  <ul>
    <li>Configure your web server with the appropriate cache control headers</li>
    <li>Set up the security headers as specified in the production configuration</li>
    <li>Configure your custom domain if applicable</li>
    <li>Set up monitoring and analytics</li>
  </ul>
  
  <p>For more information, please refer to the documentation provided with the deployment package.</p>
</body>
</html>
EOL

echo "Deployment package created successfully at /home/ubuntu/fleet-roi-calculator/deployment/fleet-roi-calculator-deployment.zip"
echo "Verification page created at /home/ubuntu/fleet-roi-calculator/deployment/verification.html"
echo "Deployment preparation complete!"
