FROM node:20-alpine 

# download curl
RUN apk add --no-cache curl

# set working directory
WORKDIR /usr/src/app

# copy package file
COPY package*json .

# install only production dependencies
RUN npm install --omit=dev

# copy backend api code
COPY server.js .

# uses built in node user
USER node

# expose api port
EXPOSE 4000

# run health check
HEALTHCHECK --interval=30s --timeout=3s \
  CMD curl -f http://localhost:4000/health || exit 1

# launches the node js serve
CMD [ "node", "server.js" ]