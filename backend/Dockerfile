FROM php:8.2-apache

RUN docker-php-ext-install pdo pdo_mysql

# Serve the backend/ folder directly as the document root so endpoints
# are reachable at http://localhost:8080/get-messages.php etc.
COPY . /var/www/html/

RUN a2enmod headers

EXPOSE 80
