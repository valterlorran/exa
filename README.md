# Exa
Exa is a Laravel package that records the routes usage and map all the inputs so you can run tests painless. 
You can map the inputs to use random data, fixed value or get data from the database.

## Installation 


Add our service provider in `providers` array in `app/config.php`

```php
'providers' => [
    // ...
    ValterLorran\Exa\ExaServiceProvider::class,
    // ...
],
```

Publish the package using artisan:
```
php artisan vendor:publish --tag=exa
```

Add the variable `EXA_RECORD` in you env file. Set it to true to enable recording the urls.
```
EXA_RECORD=true
```

Run the `migrations`:
```
php artisan migrate
```
