FROM yiisoftware/yii2-php:8.1-apache

RUN a2enmod rewrite

WORKDIR /app

COPY composer.json .
RUN composer install --prefer-dist --optimize-autoloader --no-dev && \
    composer clear-cache

COPY . .

RUN chown -R www-data:www-data runtime