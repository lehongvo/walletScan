# Build stage
FROM node:22-alpine AS builder

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
FROM node:22-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY yarn.lock ./

# Install production dependencies only
RUN yarn install --production

# Copy built files from builder stage
COPY --from=builder /app/dist ./dist

# Copy environment file
COPY .env ./

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["node", "dist/main"] 