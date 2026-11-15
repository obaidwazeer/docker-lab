# Stage 1
# build the code
FROM node:20-alpine as builder 

# set working directory
WORKDIR /app

# copy the package file
COPY package*.json .

# install all the packages in the package file
RUN npm ci

# copy the source code
COPY . .

# build the code
RUN npm run build

# Stage 2
# upload the build file to the web server
FROM nginx:alpine

# set the nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# copy the configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# copy the above build code into nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# expose the port
EXPOSE 80

# start nginx in the background
CMD [ "nginx", "-g", "daemon off;" ]