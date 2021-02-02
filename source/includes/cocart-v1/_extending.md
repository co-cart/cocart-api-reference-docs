# Extending CoCart #

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [Edit on GitHub](https://github.com/co-cart/co-cart-docs/blob/master/source/includes/cocart-v1/_extending.md)

CoCart is developer friendly even for extending support for other product types. This is useful for WooCommerce extensions developed by a 3rd party. Take the [WooCommerce Mix and Match Products](#woocommerce-extensions-mix-and-match-products) extension for example.

## Add to Cart Handler ##

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [View source](https://github.com/co-cart/co-cart/search?q=cocart_add_to_cart_handler+in%3Afile&type=Code)

The handler allows support for other product types besides simple and variable products.

It allows you to override the product type to trigger the product handler before the item is added to the cart.

This is handy if you don't need to provide your own product handler for your custom product type but just need to use a handler already in the core of CoCart.

In [CoCart Pro](#cocart-add-ons-cocart-pro) this filter is used so simple subscriptions and variable subscriptions can be added as a simple or variable product as there is not difference between the two when being added to the cart.

```php
<?php
add_filter( 'cocart_add_to_cart_handler', 'my_add_to_cart_handler' );

function my_add_to_cart_handler( $handler ) {
  if ( $handler == 'my-custom-product-type' ) {
    return 'simple';
  }
}
```

<div style="clear: both;"></div>

## Add to Cart Validation ##

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [View source](https://github.com/co-cart/co-cart/search?l=PHP&q=cocart_add_to_cart_validation+in%3Afile&type=Code)

This filter allows plugin developers to pass their own validation before an item is added to the cart. Unlike the `woocommerce_add_to_cart_validation` filter, you can not pass form requests. If you have custom data for the product that must be validated, it must be passed via `$cart_item_data` and checked to see if it exists.

In addition, to save time identifying the product type, it is also passed through automatically for you via `$product_type` which saves a database request and increases loading speed.

| Parameter            | Type    | Description                                                                            |
| -------------------- | ------- | -------------------------------------------------------------------------------------- |
| `$passed_validation` | bool    | The status of adding an item to cart. <i class="label label-info">Default is true.</i> |
| `$product_id`        | integer | The product ID.                                                                        |
| `$quantity`          | float   | The quantity of the product.                                                           |
| `$variation_id`      | integer | The variation of the product being added to the cart.                                  |
| `$variation`         | array   | Attribute values.                                                                      |
| `$cart_item_data`    | array   | Cart item data passed with the item.                                                   |
| `$product_type`      | string  | The product type.                                                                      |

```php
<?php
add_filter( 'cocart_add_to_cart_validation', 'my_add_to_cart_validation', 10, 7 );

function my_add_to_cart_validation( $passed_validation, $product_id, $quantity, $variation_id, $variation, $cart_item_data, $product_type ) {
  // Add your validation here and simply return true|false.
  return true;
}
```

<div style="clear: both;"></div>

## Add cart item data ##

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [View source](https://github.com/co-cart/co-cart/search?l=PHP&q=cocart_add_cart_item_data+in%3Afile&type=Code)

```php
<?php
add_filter( 'cocart_add_cart_item_data', 'my_add_cart_item_data', 10, 7 );

function my_add_cart_item_data( $cart_item_data ) {
  // Add your validation here and simply return true|false.
  return $cart_item_data;
}
```

<div style="clear: both;"></div>

## Extending Schema ##

Details coming soon.

<div style="clear: both;"></div>
