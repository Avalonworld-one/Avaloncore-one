# Set the base image. This is the image your image will be based on
FROM node:14-alpine

# Create a directory in the container to hold the app
WORKDIR /app

# Copy the package.json and package-lock.json files into the container
COPY package*.json ./

# Install app dependencies inside the container
RUN npm install

# Copy the rest of your app's source code from your host to your image filesystem
COPY . .

# Build the app
RUN npm run build

# Expose the port that your app will run on
EXPOSE 8080

# Command to start the application
CMD ["npm", "run", "start"]
