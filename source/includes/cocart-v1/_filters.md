# Filters #

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [Edit on GitHub](https://github.com/co-cart/co-cart-docs/blob/master/source/includes/cocart-v1/_filters.md)

The cart API has a number of filters that you can use to change or control the API to your needs.

See the [tweaks plugin for examples](https://github.com/co-cart/co-cart-tweaks).

 * [Cart Data](#filters-cart-data)
 * [Overrides](#filters-overrides)
 * [Session Management](#filters-session-management)
 * [API Access](#filters-api-access)
 * [Misc](#filters-misc)

## Cart Data ##

### Return Cart Contents ###

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [View source](https://github.com/co-cart/co-cart/search?q=cocart_return_cart_contents+in%3Afile&type=Code)

If you are in need to change the formatting of the returned cart contents, this filter `cocart_return_cart_contents` is for you.

In CoCart Pro you can filter the same results for removed cart contents.

If you have [Get Cart Enhanced](https://wordpress.org/plugins/cocart-get-cart-enhanced/) add-on installed, this filter will already be used but can still be used again to apply your own.

```php--filter
<?php
// Returns the cart contents without the cart item key as the parent array.
add_filter( 'cocart_return_cart_contents', 'remove_parent_cart_item_key', 0 );

function remove_parent_cart_item_key( $cart_contents ) {
  $new_cart_contents = array();

  foreach ( $cart_contents as $item_key => $cart_item ) {
    $new_cart_contents[] = $cart_item;
  }

  return $new_cart_contents;
}
```

<div style="clear: both;"></div>

### Return Cart Contents in Session ###

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [View source](https://github.com/co-cart/co-cart/search?q=cocart_return_cart_session_contents+in%3Afile&type=Code)

Identical to `cocart_return_cart_contents` filter, only this one is used to filter the cart contents returned for a cart in session that you have [requested to view specifically](#cart-retrieve-a-cart).

```php--filter
<?php
add_filter( 'cocart_return_cart_session_contents', 'remove_parent_cart_item_key' );

function remove_parent_cart_item_key( $cart_contents ) {
  $new_cart_contents = array();

  foreach ( $cart_contents as $item_key => $cart_item ) {
    $new_cart_contents[] = $cart_item;
  }

  return $new_cart_contents;
}
```

<div style="clear: both;"></div>

### Empty Cart ###

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [View source](https://github.com/co-cart/co-cart/search?l=PHP&q=cocart_return_empty_cart+in%3Afile&type=Code)

If you don't want to return an empty array when the cart is empty, you can return a custom response instead.

If you have [Get Cart Enhanced](https://wordpress.org/plugins/cocart-get-cart-enhanced/) add-on installed, this filter will already be used but can still be used again to apply your own.

```php--filter
<?php
add_filter( 'cocart_return_empty_cart', 'empty_cart_message' );

function empty_cart_message() {
  return 'Your cart is empty! Go and fill it.';
}
```

<div style="clear: both;"></div>

### Thumbnail size ###

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [View source](https://github.com/co-cart/co-cart/search?q=cocart_item_thumbnail_size+in%3Afile&type=Code)

By default, the product thumbnail returns using `woocommerce_thumbnail` image size. You can change this simply by returning the image size registered on your WordPress installation with this filter `cocart_item_thumbnail_size`.

```php--filter
<?php
add_filter( 'cocart_item_thumbnail_size', 'thumbnail_size' );

function thumbnail_size() {
  return 'thumbnail';
}
```

<div style="clear: both;"></div>

### Return more item details ###

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [View source](https://github.com/co-cart/co-cart/search?q=cocart_cart_contents+in%3Afile&type=Code)

Sometimes you just need more product data for the items added. You can do so using `cocart_cart_contents` filter.

| Parameter        | Type   | Description                                  |
| ---------------- | ------ | -------------------------------------------- |
| `$cart_contents` | array  | An array of items added to the cart.         |
| `$item_key`      | string | Unique generated ID for the item in cart.    |
| `$cart_item`     | array  | An array of details of the item in the cart. |
| `$_product`      | object | The product data of the item.                |

```php--filter
<?php
add_filter( 'cocart_cart_contents', 'return_product_weight', 15, 4 );

function return_product_sku( $cart_contents, $item_key, $cart_item, $_product ) {
  $cart_contents[$item_key]['sku'] = $_product->get_sku();

  return $cart_contents;
}
```

<div style="clear: both;"></div>

## Overrides ##

<aside class="notice">
Some of these overrides require that you also filter the overrides available in the core of WooCommerce in order to match.
</aside>

### Sold Individually ###

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [View source](https://github.com/co-cart/co-cart/search?q=cocart_add_to_cart_sold_individually_quantity+in%3Afile&type=Code)

With this filter you can force items sold individually to have more or less.

```php--filter
<?php
add_filter( 'cocart_add_to_cart_sold_individually_quantity', 'override_sold_individual_quantity' );

function override_sold_individual_quantity() {
  return 2;
}
```

<div style="clear: both;"></div>

### OK to add item? ###

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [View source](https://github.com/co-cart/co-cart/search?q=cocart_ok_to_add+in%3Afile&type=Code)

Want to stop an item being added and return a custom message should it require an item not in the cart first.

Use the `cocart_ok_to_add` and `cocart_ok_to_add_response` filters.

| Parameter       | Type   | Description                           |
| --------------- | ------ | ------------------------------------- |
| `$status`       | bool   | The status of adding an item to cart. |
| `$response`     | string | The returned message.                 |
| `$product_data` | object | The product data of the item.         |

```php--filter
<?php
add_filter( 'cocart_ok_to_add', 'requires_specific_item', 10, 2 );

function requires_specific_item( $status, $product_data ) {
  $cart_contents = isset( WC()->cart ) ? WC()->cart->get_cart() : WC()->session->cart;

  $required_product_id = '123'; // Replace with real product ID number.

  foreach ( $cart_contents as $item_key => $cart_item ) { 
      // If required product ID does not exist return false.
      if ( $cart_item['id'] != $required_product_id ) {
        $status = false;
      }
  }

  return $status;
}
```

```php--filter
<?php
add_filter( 'cocart_ok_to_add_message', 'requires_specific_item', 10, 2 );

function requires_specific_item_response( $response, $product_data ) {
  $response = __( 'This item requires a specific item to be added first to the cart.' );

  return $response;
}
```

<div style="clear: both;"></div>

### Product name ###

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [View source](https://github.com/co-cart/co-cart/search?l=PHP&q=cocart_product_name+in%3Afile&type=Code)

You can override the product name when cart is returned or just added to the cart.

| Parameter    | Type       | Description               |
| ------------ | ---------- | ------------------------- |
| `$name`      | string     | Original name of product. |
| `$_product`  | WC_Product | The product data.         |
| `$cart_item` | array      | Cart item.                |
| `$item_key`  | string     | Cart item key.            |

```php--filter
<?php
add_filter( 'cocart_product_name', 'override_product_name', 10, 4 );

function override_product_name( $name, $_product, $cart_item, $item_key ) {
  return 'This product is special';
}
```

```php--filter
<?php
add_filter( 'cocart_item_added_product_name', 'override_product_name', 10, 3 );

function override_product_name( $name, $_product, $item_key ) {
  return 'This product is special';
}
```

<div style="clear: both;"></div>

### Product title ###

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [View source](https://github.com/co-cart/co-cart/search?q=cocart_product_title+in%3Afile&type=Code)

You can override the product title when cart is returned or just added to the cart.

| Parameter    | Type       | Description               |
| ------------ | ---------- | ------------------------- |
| `$name`      | string     | Original name of product. |
| `$_product`  | WC_Product | The product data.         |
| `$cart_item` | array      | Cart item.                |
| `$item_key`  | string     | Cart item key.            |

```php--filter
<?php
add_filter( 'cocart_product_title', 'override_product_title', 10, 4 );

function override_product_title( $name, $_product, $cart_item, $item_key ) {
  return 'This product is awesome';
}
```

```php--filter
<?php
add_filter( 'cocart_item_added_product_title', 'override_product_title', 10, 3 );

function override_product_title( $name, $_product, $item_key ) {
  return 'This product is awesome';
}
```

<div style="clear: both;"></div>

### Product thumbnail source ###

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [View source](https://github.com/co-cart/co-cart/search?q=cocart_item_thumbnail_src+in%3Afile&type=Code)

This filter in particular allows you to change the source of the image for a specific item. The source could be external for example.

<aside class="warning">
  The filter is triggered after the <code>cocart_item_thumbnail_size</code> filter so you will need to have the new source image in the size you want.
</aside>

| Parameter        | Type       | Description                    |
| ---------------- | ---------- | ------------------------------ |
| `$thumbnail_src` | string     | The original thumbnail source. |
| `$cart_item`     | array      | Cart item.                     |
| `$item_key`      | string     | Cart item key.                 |

```php--filter
<?php
add_filter( 'cocart_item_thumbnail_src', 'override_item_thumbail_src', 10, 3 );

function override_item_thumbail_src( $thumbnail_src, $cart_item, $item_key ) {
  return 'https://placekitten.com/100/100';
}
```

<div style="clear: both;"></div>

### Product quantity ###

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [View source](https://github.com/co-cart/co-cart/search?q=cocart_add_to_cart_quantity+in%3Afile&type=Code)

You could use this filter to force certain products to be added to the cart with a certain quantity or for example use the `$quantity` value to calculate double the amount if your doing something unique for your store.

<aside class="warning">
  The quantity however will not change if you have the product setup to be sold individually.
</aside>

| Parameter         | Type    | Description                                                                            |
| ----------------- | ------- | -------------------------------------------------------------------------------------- |
| `$quantity`       | float   | The original quantity of the item.                                                     |
| `$product_id`     | integer | The product ID.                                                                        |
| `$variation_id`   | integer | The variation ID.                                                                      |
| `$variation`      | array   | The variation data.                                                                    |
| `$cart_item_data` | array   | Cart item data passed with the item.                                                   |

```php--filter
<?php
add_filter( 'cocart_add_to_cart_quantity', 'override_product_quantity', 10, 5 );

function override_product_quantity( $quantity, $product_id, $variation_id, $variation, $cart_item_data ) {
  // Make sure you specify the product ID you want to override.
  if ( $product_id == 32 ) {
    return 3; // Make sure that you just return the number and not override the `$quantity` variable.
  }

  // Return `$quantity` variable for all other products that you are NOT overriding.
  return $quantity;
}
```

<div style="clear: both;"></div>

### Cannot Add Product Type to Cart Message ###

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [View source](https://github.com/co-cart/co-cart/search?q=cocart_cannot_add_product_type_to_cart_message+in%3Afile&type=Code)

Change the returned message when you try to add a product type that cannot be added to the cart.

```php--filter
<?php
add_filter( 'cocart_cannot_add_product_type_to_cart_message', 'cannot_add_product_type_to_cart_message' );

function cannot_add_product_type_to_cart_message() {
  /* params: %1$s: product name, %2$s: product type */
  sprintf( 'You cannot add "%1$s" to your cart as it is a "%2$s" product.', $product_data->get_name(), $product_data->get_type() );
}
```

<div style="clear: both;"></div>

### Cart Item Removed Message ###

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [View source](https://github.com/co-cart/co-cart/search?q=cocart_cart_item_removed_message+in%3Afile&type=Code)

| Parameter   | Type       | Description           |
| ----------- | ---------- | --------------------- |
| `$message`  | string     | The original message. |
| `$_product` | WC_Product | The product data.     |

```php--filter
<?php
add_filter( 'cocart_cart_item_removed_message', 'cart_item_removed_message', 10, 2 );

function cart_item_removed_message( $message, $_product ) {
  return sprintf( '%s has been removed from your cart because it can no longer be purchased. Please contact us if you need assistance.', $_product->get_name() );
}
```

<div style="clear: both;"></div>

## Session Management ##

### Cookie Supported? ###

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [View source](https://github.com/co-cart/co-cart/search?q=cocart_cookie_supported+in%3Afile&type=Code)

This filter allows you to disable support for the CoCart cookie that handles the session for customers. Use only if you are using the alternative method for customers.

```php--filter
<?php
add_filter( 'cocart_cookie_supported', function() { return false; });
```

<div style="clear: both;"></div>

### Change Cookie Name ###

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [View source](https://github.com/co-cart/co-cart/search?q=cocart_cookie+in%3Afile&type=Code)

This could be changed to include your store brand name.

<aside class="notice">
  It is recommended that you at least leave in place the <strong>COOKIEHASH</strong> which by default is your site URL encrypted. It is used to guarantee unique hash for cookies.
</aside>

```php--filter
<?php
add_filter( 'cocart_cookie', 'my_cocart_cookie_name' );

function my_cocart_cookie_name() {
  return 'randomloot_store_' . COOKIEHASH;
}
```

<div style="clear: both;"></div>

### Should cart cookie be secure? ###

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [View source](https://github.com/co-cart/co-cart/search?q=cocart_cart_use_secure_cookie+in%3Afile&type=Code)

Be default this will set as true if your site has SSL enabled. Otherwise it will return false. Filtering will force it.

```php--filter
<?php
add_filter( 'cocart_cart_use_secure_cookie', function() { return true; });
```

<div style="clear: both;"></div>

### Cart Expiration ###

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [View source](https://github.com/co-cart/co-cart/search?q=cocart_cart_expiring+in%3Afile&type=Code)

There are two filters for cart expiration. The first is used to detect if we are close to expiration of the cart. The second is used to set how long the cart will be stored until expired.

<aside class="notice">
  Close to expiration by default is 29 days. Cart expiration by default is 30 days.
</aside>

```php--filter
<?php
add_filter( 'cocart_cart_expiring', function() { return DAY_IN_SECONDS * 3; });
add_filter( 'cocart_cart_expiration', function() { return DAY_IN_SECONDS * 4; });
```

<div style="clear: both;"></div>

### Empty Cart Expiration ###

<span class="deprecated">Deprecated since v2.7.2</span>

This filter allows you to change the expiration of an empty cart. Default value is 6 hours.

```php--filter
<?php
add_filter( 'cocart_empty_cart_expiration', function() { return HOUR_IN_SECONDS * 1; });
```

<div style="clear: both;"></div>

### Generated Customer ID ###

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [View source](https://github.com/co-cart/co-cart/search?q=cocart_customer_id+in%3Afile&type=Code)

This filter allows you to change the generated customer ID for the guest customer. Use this filter with caution. **Cannot** be longer than 42 characters, exceed it and the database will not save the cart.

```php--filter
<?php
add_filter( 'cocart_customer_id', 'my_custom_generate_customer_id' );

function my_custom_generate_customer_id( $hasher ) {
  return md5( $hasher->get_random_bytes( 42 ) );
}
```

<div style="clear: both;"></div>

### Cart Loaded Successful Message ###

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [View source](https://github.com/co-cart/co-cart/search?q=cocart_cart_loaded_successful_message+in%3Afile&type=Code)

```php--filter
<?php
add_filter( 'cocart_cart_loaded_successful_message', 'cart_loaded_successful_message' );

function cart_loaded_successful_message( $message ) {
  return sprintf( 'Your 🛒 cart has been transferred over. You may %1$scontinue shopping%3$s or %2$scheckout%3$s.', '<a href="' . wc_get_page_permalink( "shop" ) . '">', '<a href="' . wc_get_checkout_url() . '">', '</a>' ) );
}
```

<div style="clear: both;"></div>

## API Access ##

### CoCart Logging ###

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [View source](https://github.com/co-cart/co-cart/search?l=PHP&q=cocart_logging+in%3Afile&type=Code)

If you are debugging CoCart during your development, enabling the logger is a great tool to have.

Then when making any request, you can view the logs created via your WordPress dashboard under **WooCommerce > System Status > Logs**

I personally like to change the WooCommerce log handler to be stored via the database which you set in your `wp-config.php` file.

> WooCommerce Log Handler

```php--filter
<?php
define( 'WC_LOG_HANDLER', 'WC_Log_Handler_DB' );
```

<aside class="notice">
You must have <strong>WP_DEBUG</strong> enabled in your <i>wp-config.php</i> file first in order for the logs to record.
</aside>

> CoCart Logging filter

```php--filter
<?php
add_filter( 'cocart_logging', function() { return true; });
```

<div style="clear: both;"></div>

### CORS: Allow all cross origin headers ###

<span class="new">New Filter since v2.2</span>

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [View source](https://github.com/co-cart/co-cart/search?q=cocart_disable_all_cors+in%3Afile&type=Code)

If you are getting a warning about cross origin headers then you may need to enable support for it. Simply apply this filter and the headers will set for you with no further configuration.

```php--filter
<?php
add_filter( 'cocart_disable_all_cors', function() { return false; });
```

<div style="clear: both;"></div>

### Set Allow Origin Header ###

<span class="new">New Filter since v2.5.1</span>

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [View source](https://github.com/co-cart/co-cart/search?l=PHP&q=cocart_allow_origin+in%3Afile&type=Code)

For added security when you go into production. Set **'Access-Control-Allow-Origin'** header to be more specific. [Allow all cross origin headers](#filters-api-access-cors-allow-all-cross-origin-headers) must be enabled first as shown above.

```php--filter
<?php
add_filter( 'cocart_allow_origin', function() { return 'https://wp-demo.cocart.xyz'; });
```

<div style="clear: both;"></div>

### Is REST API Request? ###

<span class="new">New Filter since v2.7.0</span>

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [View source](https://github.com/co-cart/co-cart/search?l=PHP&q=cocart_is_rest_api_request+in%3Afile&type=Code)

This filter allows you to run your own API check-up with CoCart.

```php--filter
<?php
add_filter( 'cocart_is_rest_api_request', function() {
  $rest_prefix         = trailingslashit( rest_get_url_prefix() );
  $is_rest_api_request = ( false !== strpos( $_SERVER['REQUEST_URI'], $rest_prefix . 'myrestapi/' ) );

  return $is_rest_api_request;
});
```

<div style="clear: both;"></div>

## Misc ##

### Merge Cart Items ###

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [View source](https://github.com/co-cart/co-cart/search?q=cocart_merge_cart_content+in%3Afile&type=Code)

This filter allows you to change how the items are merged together before loaded into session when requesting to keep the current cart via the web.

```php--filter
<?php
/**
 * @param  `$new_cart_content` - Returns the cart items merged from both cart in session and the cart requested to load.
 * @param  `$new_cart` - Returns the requested cart to load.
 * @param  `$cart_in_session` - Returns the current cart contents, if any.
 * @return `$new_cart_content` - Returns your results of the cart contents.
 */
add_filter( 'cocart_merge_cart_content', 'merge_cart_contents', 10, 3 );

function merge_cart_contents( $new_cart_content, $new_cart, $cart_in_session ) {
  return $new_cart_content;
}
```

<div style="clear: both;"></div>

### Authenticate User ID ###

<span class="new">New Filter since v2.6.0</span>

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [View source](https://github.com/co-cart/co-cart/search?q=cocart_authenticate+in%3Afile&type=Code)

Overrides the determined user ID when authenticating. **NOTE** This will only be active if not already authenticated.

```php--filter
<?php
add_filter( 'cocart_authenticate', function(){});
```