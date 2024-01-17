FROM yiisoftware/yii2-php:8.1-apache

RUN a2enmod rewrite

WORKDIR /app

ADD composer.lock composer.json /app/
RUN composer install --prefer-dist --optimize-autoloader --no-dev && \
    composer clear-cache

COPY . .

RUN mkdir -p runtime web/assets && \
    chmod -R 775 runtime web/assets && \
    chown -R www-data:www-data runtime web/assets

RUN mkdir -p runtime runtime/cache && \
    chmod -R 775 runtime runtime/cache && \
    chown -R www-data:www-data runtime runtime/cache

