# Filters #

These are new filters added to cart API to manipulate data and returned response messages.

<aside class="notice">
Please make sure you are viewing the PHP language to view examples of the filters in use.
</aside>

### Add to cart validation ###

This filter allows plugin developers to pass their own validation before item is added to the cart.

```php
<?php
add_filter( 'cocart_add_to_cart_validation', 'add_to_cart_validation' );

function add_to_cart_validation( $passed_validation, $product_id, $quantity, $variation_id, $variation, $cart_item_data, $product_type ) {
	/**
	 * Developer Notes
	 *
	 * Unlike the `woocommerce_add_to_cart_validation` filter, you can not pass form requests.
	 * If you have custom data for the product that must be validated, 
	 * it must be passed via `$cart_item_data` and checked to see if it exists.
	 *
	 * In addition, to save time identifying the product type it is passed through automatically 
	 * for you via `$product_type` which saves a database request and increases loading speed.
	 *
	 * TODO: Add your validation here and simply return true|false.
	 */

	return true;
}
```

### Override product name ###

```php
<?php
add_filter( 'cocart_product_name', '' );

```

### Override product title ###

```php
<?php
add_filter( 'cocart_product_title', '' );

```

### Override product thumbnail source ###

```php
<?php
add_filter( 'cocart_item_thumbnail_src', '' );

```

### Override product quantity ###

```php
<?php
add_filter( 'cocart_add_to_cart_quantity', '' );

```

### Add cart item data ###

```php
<?php
add_filter( 'cocart_add_cart_item_data', '' );

```

