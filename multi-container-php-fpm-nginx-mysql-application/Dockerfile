FROM php:8.3-fpm-bookworm

WORKDIR /var/www/html

COPY app/ .

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
    CMD php-fpm -t || exit 1

USER www-data