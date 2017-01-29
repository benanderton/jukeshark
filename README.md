# jukeshark

Will flesh this out later. To get started;

* Start docker containers `docker-compose up -d`
* Copy `web/.env.example` to `web/.env`
* Exec into php container `docker exec -it jukeshark_php_1 bash` and cd to web directory
 - Install dependencies `composer install`
 - Generate key `php artisan key:generate`
 - Clear config cache `php artisan config:clear`
* cd to `web/resources/js`
 - Install front end dependencies `npm install`
 - Run Webpack `webpack`

# Troubleshooting
I had to recursively chmod to 777 my storage directory for some reason.
