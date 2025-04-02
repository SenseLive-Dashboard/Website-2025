#!/bin/bash

# Exit on error
set -e

echo "===== SenseLive Website Production Build Script ====="
echo "This script will prepare a production-ready build of the SenseLive website."

# Clean previous builds
echo "Cleaning previous builds..."
rm -rf .next out senselive-website-build.zip

# Install dependencies
echo "Installing dependencies..."
npm ci

# Run linting and type checking
echo "Running linting and type checking..."
npm run lint
npm run check-types

# Check for broken links
echo "Checking for broken links..."
npm run check-links

# Optimize images
echo "Optimizing images..."
npm run optimize-images

# Build the application
echo "Building the application..."
npm run build

# Create deployment package
echo "Creating deployment package..."
cd .next/standalone
cp -r ../.next/static ./.next/
cp -r ../../public ./
zip -r ../../senselive-website-build.zip .
cd ../..

echo "===== Build Complete ====="
echo "Production build created: senselive-website-build.zip"
echo "To deploy:"
echo "1. Upload this file to your hosting provider"
echo "2. Extract the contents to your web root directory"
echo "3. Follow the instructions in DEPLOYMENT.md for next steps"
echo ""
echo "Testing the deployment locally:"
echo "cd .next/standalone && node server.js"

# Generate a summary report
echo "Generating deployment readiness report..."
echo "Deployment Summary Report" > deployment-report.txt
echo "Date: $(date)" >> deployment-report.txt
echo "Next.js Version: $(npm list next | grep next)" >> deployment-report.txt
echo "Node.js Version: $(node -v)" >> deployment-report.txt
echo "" >> deployment-report.txt
echo "Build Status: Success" >> deployment-report.txt
echo "Optimized Images: Yes" >> deployment-report.txt
echo "Linting Passed: Yes" >> deployment-report.txt
echo "TypeScript Checks Passed: Yes" >> deployment-report.txt
echo "Link Verification: Complete" >> deployment-report.txt
echo "" >> deployment-report.txt
echo "Deployment package: senselive-website-build.zip" >> deployment-report.txt
echo "Package size: $(du -h senselive-website-build.zip | cut -f1)" >> deployment-report.txt
echo "" >> deployment-report.txt
echo "See DEPLOYMENT.md for detailed instructions." >> deployment-report.txt

echo "Report generated: deployment-report.txt"

