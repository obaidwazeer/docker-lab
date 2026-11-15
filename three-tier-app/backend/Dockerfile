# Sets Node.js 20 on Alpine Linux as the lightweight runtime user space
FROM node:20-alpine

# Installs 'curl' via Alpine's package manager (apk) so Docker's HEALTHCHECK can test the API
RUN apk add --no-cache curl

# Creates and sets /usr/src/app as the working directory inside the container
WORKDIR /usr/src/app

# Copies package.json first so Docker caches the npm install layer unless dependencies change
COPY package*.json ./

# Installs only production dependencies and skips devDependencies to keep the image small
RUN npm install --omit=dev

# Copies the backend application source code into the working directory
COPY server.js .

# Switches from the default 'root' user to the built-in non-root 'node' user for security
USER node

# Documents that the Node.js Express server listens on port 4000
EXPOSE 4000

# Instructs Docker to ping /health every 30s; marks container unhealthy if 3 checks fail
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:4000/health || exit 1

# Starts the Node.js application when the container boots
CMD ["node", "server.js"]
