# wp-config.php #

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [Edit on GitHub](https://github.com/co-cart/co-cart-docs/blob/master/source/includes/_wp-config.md)

For more handling over CoCart for your store or a client, you will find that using the `wp-config.php` file is the best place to setup certain conditions.

* [Uninstall](#wp-config-php-uninstall)
* [White Labelling](#wp-config-php-white-labelling)

<aside class="notice">
Please make sure you are viewing the PHP language to copy any code snippet.
</aside>

## Uninstall ##

To prevent any data loss when uninstalling CoCart from the backend and to ensure only the site owner can perform this action. You need to enable the ability to remove it.

```php--contants
<?php
/**
 * Allows the full un-installation of CoCart.
 */
define( 'COCART_REMOVE_ALL_DATA', true );
```

## White Labelling ##

If you are developing a headless store for a client and need to hide CoCart. Enabling white label mode comes in handy if that is something your would want.

Enabling this hides CoCart completely from the backend including the admin menu, plugin row links, plugin notices, WooCommerce inbox notices and WooCommerce System Status information.

```php--contants
<?php
/**
 * Hides CoCart from the WordPress dashboard.
 */
define( 'COCART_WHITE_LABEL', true );
```

<div style="clear: both;"></div>

### Load Cart for the Web ###

<span class="new">New Filter since v2.8.2</span>

In addition to white labelling, you can filter the parameter name `cocart-load-cart` `to what ever you like.

```php--filter
<?php
/**
 * Change the parameter name for loading the cart via the web.
 */
add_filter( 'cocart_load_cart_query_name', function() { return 'my-cart'; });
```
