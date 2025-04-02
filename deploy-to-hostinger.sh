#!/bin/bash

# Build the Next.js application
echo "Building Next.js application..."
npm run build

# Create a deployment directory
echo "Creating deployment directory..."
mkdir -p deployment

# Copy the standalone build
echo "Copying standalone build..."
cp -r .next/standalone/* deployment/
cp -r .next/static deployment/.next/
cp -r public deployment/

# Create a zip file for easy upload
echo "Creating zip file for deployment..."
cd deployment
zip -r ../senselive-hostinger-deploy.zip .
cd ..

echo "Deployment package created: senselive-hostinger-deploy.zip"
echo "Upload this file to your Hostinger hosting account."

