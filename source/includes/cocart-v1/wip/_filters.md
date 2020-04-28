# Filters #

These are new filters added to cart API to manipulate data and returned response messages. Some examples show the default response.

<aside class="notice">
Please make sure you are viewing the PHP language to view examples of the filters in use.
</aside>

## Product Validation ##

### Add to Cart Handler ###

A new feature is to have support for other product types besides simple and variable products.

It allows you to override the product type to trigger the product handler before the item is added to the cart.

This is handy if you don't need to provide your own product handler for your custom product type but just need to use a handler already in the core of CoCart. In CoCart Pro this filter is used so simple subscriptions and variable subscriptions can be added as a simple or variable product as there is not difference between the two when being added to the cart.

> Add to Cart Handler

```php
<?php
add_filter( 'cocart_add_to_cart_handler', 'my_add_to_cart_handler' );
function my_add_to_cart_handler( $handler ) {
	if ( $handler == 'my-custom-product-type' ) {
		return 'simple';
	}
}
```

### Add to Cart Validation ###

This filter allows plugin developers to pass their own validation before an item is added to the cart. Unlike the `woocommerce_add_to_cart_validation` filter, you can not pass form requests. If you have custom data for the product that must be validated, it must be passed via `$cart_item_data` and checked to see if it exists.

In addition, to save time identifying the product type it is passed through automatically for you via `$product_type` which saves a database request and increases loading speed.

> Add to Cart Validation

```php
<?php
add_filter( 'cocart_add_to_cart_validation', 'my_add_to_cart_validation', 10, 7 );
function my_add_to_cart_validation( $passed_validation, $product_id, $quantity, $variation_id, $variation, $cart_item_data, $product_type ) {
	// Add your validation here and simply return true|false.
	return true;
}
```

## Get Cart ##

### Override product name ###

> Override product name

```php
<?php
add_filter( 'cocart_product_name', 'override_product_name', 10, 3 );
function override_product_name( $_product, $cart_item, $item_key ) {
	return 'This product is special';
}
```

### Override product title ###

> Override product title

```php
<?php
add_filter( 'cocart_product_title', 'override_product_title', 10, 3 );
function override_product_title( $_product, $cart_item, $item_key ) {
	return 'This product is awesome';
}

```

### Override product thumbnail source ###

This filter in particular allows you to change the source image for a specific item. The source could be external for example.

<aside class="warning">
	The filter is triggered after the <code>cocart_item_thumbnail_size</code> filter so you will need to have the new source image in the size you want.
</aside>

> Override product thumbnail source

```php
<?php
add_filter( 'cocart_item_thumbnail_src', 'override_item_thumbail_src', 10, 3 );
function override_item_thumbail_src( $thumbnail_src, $cart_item, $item_key ) {
	return 'https://placekitten.com/100/100';
}
```

### Override product quantity ###

You could use this filter to force certain products to be added to the cart with a certain quantity or for example use the `$quantity` value to calculate double the amount if your doing something unique for your store.

<aside class="warning">
	The quantity however will not change if you have the product setup to only allow only one.
</aside>

> Override product quantity

```php
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

### Add cart item data ###

> Add cart item data

```php
<?php
add_filter( 'cocart_add_cart_item_data', '' );

```

### Return Cart Session Contents ###

Identical to `cocart_return_cart_contents` filter, only this one is used to filter the cart contents returned for a cart in session.

> Return Cart Session Contents

```php
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

## Response Messages ##

If you need or want to override the response messages, use the following filters. There are more, I just haven't got round to listing all the filters just yet.

### Cannot Add Product Type to Cart Message ###

This filter was introduced with the improved product validation. For example this message is returned if you try to add an external product to the cart.

> Cannot Add Product Type to Cart Message

```php
<?php
add_filter( 'cocart_cannot_add_product_type_to_cart_message', 'cannot_add_product_type_to_cart_message' );
function cannot_add_product_type_to_cart_message() {
	/* params: %1$s: product name, %2$s: product type */
	sprintf( 'You cannot add "%1$s" to your cart as it is a "%2$s" product.', $product_data->get_name(), $product_data->get_type() );
}
```

### Cart Item Removed Message ###

> Cart Item Removed Message

```php
<?php
add_filter( 'cocart_cart_item_removed_message', 'cart_item_removed_message', 10, 2 );
function cart_item_removed_message( $message, $_product ) {
	return sprintf( '%s has been removed from your cart because it can no longer be purchased. Please contact us if you need assistance.', $_product->get_name() );
}
```

## Session ##

### Change cart session cookie name ###

This could be changed to include your store brand name.

<aside class="notice">
	Recommend that you at least leave in place the <strong>COOKIEHASH</strong> which by default is your site URL encrypted. It is used to guarantee unique hash for cookies.
</aside>

> Change cart session cookie name

```php
<?php
add_filter( 'cocart_cookie', 'my_cocart_cookie_name' );
function my_cocart_cookie_name() {
  return 'randomloot_store_' . COOKIEHASH;
}

```

### Should cart cookie be secure? ###

Be default this will set as true if your site has SSL enabled. Otherwise it will return false. Filtering will force it.

> Should cart cookie be secure?

```php
<?php
add_filter( 'cocart_cart_use_secure_cookie', function() { return true; });
```

### Cart Expiration ###

There are two filters for cart expiration. The first is used to detect if we are close to expiration of the cart. The second is used to set how long the cart will be stored until expired.

<aside class="notice">
	Close to expiration by default is 29 days. Cart expiration by default is 30 days.
</aside>

> Cart Expiration

```php
<?php
add_filter( 'cocart_cart_expiring', function() { return DAY_IN_SECONDS * 6; });
add_filter( 'cocart_cart_expiration', function() { return DAY_IN_SECONDS * 7; });
```

### Empty Cart Expiration ###

This filter allows you to change the expiration of an empty cart. Default value is 6 hours.

> Empty Cart Expiration

```php
<?php
add_filter( 'cocart_empty_cart_expiration', function() { return HOUR_IN_SECONDS * 1; });
```

### Generated Customer ID ###

This filter allows you to change the generated customer ID for the guest customer. Use this filter with caution. Can not be longer than 32 characters for the database.

> Generated Customer ID

```php
<?php
add_filter( 'cocart_customer_id', 'my_custom_generate_customer_id' );
function my_custom_generate_customer_id( $hasher ) {
	return md5( $hasher->get_random_bytes( 32 ) );
}
```

## Load Cart into Web ##

### Cart Loaded Successful Message ###

> Cart Loaded Susccessful Message

```php
<?php
add_filter( 'cocart_cart_loaded_successful_message', 'cart_loaded_successful_message' );
function cart_loaded_successful_message( $message ) {
	return sprintf( 'Your 🛒 cart has been transferred over. You may %1$scontinue shopping%3$s or %2$scheckout%3$s.', '<a href="' . wc_get_page_permalink( "shop" ) . '">', '<a href="' . wc_get_checkout_url() . '">', '</a>' ) );
}
```

### Merge Cart Items ###

This filter allows you to change how the items are merged together before loaded into session when requesting to keep the current cart via the web.

> Merge Cart Items

```php
<?php
/**
 * @param `$new_cart_content` - Returns the cart items merged from both cart in session and the cart requested to load.
 * @param `$new_cart` - Returns the requested cart to load.
 * @param `$cart_in_session` - Returns the current cart contents, if any.
 */
add_filter( 'cocart_merge_cart_content', 'merge_cart_contents', 10, 3 );
function merge_cart_contents( $new_cart_content, $new_cart, $cart_in_session ) {
	return $new_cart_content;
}
```

## CoCart Logging ##

> CoCart Logging

```php
<?php
add_filter( 'cocart_logging', function() { return true; });
```
