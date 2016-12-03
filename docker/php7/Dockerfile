FROM php:7-fpm
# Install modules


RUN apt-get update && apt-get install -y \
        libz-dev libmemcached-dev \
        libfreetype6-dev \
        libjpeg62-turbo-dev \
        libpq-dev \
        libjpeg-dev \
        libmcrypt-dev \
        libpng12-dev \
        libxml2-dev \
        libcurl4-gnutls-dev \
        git \
        zip \
        unzip \

        
    && docker-php-ext-install -j$(nproc) iconv mcrypt \
    && docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ \
    && docker-php-ext-install -j$(nproc) gd \
    #&& docker-php-ext-install -j$(nproc) openssl \
    && docker-php-ext-install -j$(nproc) pdo \
    && docker-php-ext-configure xml --with-libxml-dir=/usr/include/ \
    && docker-php-ext-install -j$(nproc) xml \
    && docker-php-ext-install -j$(nproc) curl \
    && docker-php-ext-install -j$(nproc) zip \
    && docker-php-ext-install -j$(nproc) pdo_pgsql \
    && docker-php-ext-install -j$(nproc) pgsql

RUN apt-get install -y postgresql-client

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN composer global require "laravel/installer"
ENV PATH="/root/.composer/vendor/bin:${PATH}"