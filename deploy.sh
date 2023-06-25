#!/bin/bash

# Update package list
sudo dnf update -y

# Install curl (to download Node.js)
sudo dnf install -y curl

# Download Node.js (replace 14.x with your desired version)
curl -sL https://rpm.nodesource.com/setup_18.x | sudo -E bash -

# Install Node.js
sudo dnf install -y nodejs

# Navigate to the app directory
cd $WORKSPACE/Avaloncore-one

# Install dependencies
npm install

# Build the app
npm run build

# Start the app
npm start
