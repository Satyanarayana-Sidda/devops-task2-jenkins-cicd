# Use Node.js base image
FROM node:24-alpine

# Set working directory inside container
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install production dependencies
RUN npm ci --omit=dev

# Copy application and server files
COPY app.js server.js ./

# Application port
EXPOSE 3000

# Run application as non-root user
USER node

# Start application
CMD ["npm", "start"]
