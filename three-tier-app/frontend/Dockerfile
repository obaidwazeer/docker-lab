# Sets the lightweight Alpine-based Nginx web server (~40MB) as the container user space
FROM nginx:alpine

# Removes the default Nginx welcome site configuration so it does not conflict with ours
RUN rm /etc/nginx/conf.d/default.conf

# Copies our custom Nginx reverse-proxy configuration into Nginx's active config folder
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copies our static HTML frontend page into Nginx's default public web root directory
COPY index.html /usr/share/nginx/html/index.html

# Documents that this container listens for incoming HTTP traffic on port 80
EXPOSE 80

# Starts Nginx in the foreground (daemon off) so Docker keeps the container running
CMD ["nginx", "-g", "daemon off;"]
