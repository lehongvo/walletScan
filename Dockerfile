# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY yarn.lock ./

# Install dependencies
RUN yarn install

# Copy source code
COPY . .

# Build the application
RUN yarn build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY yarn.lock ./

# Install production dependencies only
RUN yarn install --production

# Install PM2 globally for process management and auto-restart
RUN npm install pm2 -g

# Copy built files from builder stage
COPY --from=builder /app/dist ./dist

# Copy environment file
COPY .env ./

# Expose the port the app runs on
EXPOSE 3000

# Start the application with PM2 in production mode
CMD ["pm2-runtime", "start", "dist/main.js", "--name", "walletScan"]