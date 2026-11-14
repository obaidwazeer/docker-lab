# build stage
FROM node:20-alpine as builder

# defining working directory
WORKDIR /app

# copy packages files
COPY package*.json .

# install packages
RUN npm ci

# copy the whole src file to the working directory
COPY . .

# build the image
RUN npm run build 


# production runtime stage
FROM nginx:alpine

# remove the existing default nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# copy our predefined nginx configuration in the runtime environment
COPY nginx.conf /etc/nginx/conf.d/default.conf

# copy the build file to the nginx to serve
COPY --from=builder /app/dist /usr/share/nginx/html

# expose the port
EXPOSE 80

# start nginx in the background
CMD [ "nginx", "-g", "daemon off;" ]

