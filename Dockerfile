# Use Node.js v18
FROM node:18

# Create a directory in the container to hold the app
WORKDIR /app

# Copy the package.json and package-lock.json files into the container
COPY package*.json ./

# Check the filesystem state
RUN ls -la

# Install dependencies
RUN npm install

# Check the filesystem state
RUN ls -la

# Copy the rest of your app's source code from your host to your image filesystem
COPY . .

# Check the filesystem state
RUN ls -la

# Build the app
RUN npm run build

# Check the filesystem state
RUN ls -la

# Expose the port that your app will run on
EXPOSE 8080

# Run the app
CMD [ "npm", "run", "start" ]
