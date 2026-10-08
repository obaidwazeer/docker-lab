FROM nginx:1.30.5-alpine3.24

LABEL org.opencontainers.image.title="Docker DevOps Project 01" \
      org.opencontainers.image.description="Custom Nginx static website"

WORKDIR /usr/share/nginx/html

COPY index.html .

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget -q -O /dev/null http://127.0.0.1/ || exit 1