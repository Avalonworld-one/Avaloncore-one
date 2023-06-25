# Use Node.js v18
FROM node:18

# Create a directory in the container to hold the app
WORKDIR /app

# Copy package.json and package-lock.json to the app directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the app code to the app directory
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port the app runs on
EXPOSE 8080

# Start the app
CMD [ "npm", "run", "start" ]
