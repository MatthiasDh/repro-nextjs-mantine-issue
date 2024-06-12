# Base on offical Node.js Alpine image
FROM node:20-alpine

# Increase max heap size for Node.js
RUN echo "⬆️ Increasing max heap size for Node.js to 6GB"
ENV NODE_OPTIONS=--max_old_space_size=6144

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY ./package.json ./
COPY ./yarn.lock ./

# Install dependencies
RUN echo "📦 Installing dependencies"
RUN yarn install

# Copy all files
COPY ./ ./

# Build app
RUN echo "🏗️ Building app"
RUN yarn run build

# Expose the listening port
EXPOSE 3000

# Run container as non-root (unprivileged) user
# The node user is provided in the Node.js Alpine base image
USER node

# Run npm start script with PM2 when container starts
RUN echo "🚀 Running app"
CMD ["npm", "run", "deploy:prod"]