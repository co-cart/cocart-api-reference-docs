## Filters ##

The cart API has a number of filters that you can use to extend or change the API.

See the [tweaks plugin for examples](https://github.com/co-cart/co-cart-tweaks).

<aside class="notice">
Please make sure you are viewing the PHP language to view examples of the filters in use.
</aside>

### Change empty response ###

If you don't want to return an empty array when the cart is empty, you can return a custom response instead.

> Change empty response example.

```php
<?php
add_filter( 'cocart_return_empty_cart', 'empty_cart_message' );

function empty_cart_message() {
  return 'Your cart is empty! Go and fill it.';
}
```

### Change thumbnail size ###

By default the size of the thumbnail uses `woocommerce_thumbnail`. You can change this by filtering the size using `cocart_item_thumbnail_size` filter.

> Change thumbnail size example.

```php
<?php
add_filter( 'cocart_item_thumbnail_size', 'thumbnail_size' );

function thumbnail_size() {
  return 'thumbnail';
}
```

### Return more item details ###

Sometimes you just need more product data for the items added. You can do so using `cocart_cart_contents` filter.

| Parameter        | Type   | Description |
| ---------------- | ------ | ----------- |
| `$cart_contents` | array  | An array of items added to the cart. |
| `$item_key`      | string | Unique generated ID for the item in cart. |
| `$cart_item`     | array  | An array of details of the item in the cart. |
| `$_product`      | object | The product data of the item. |

> Return more item details.

```php
<?php
add_filter( 'cocart_cart_contents', 'return_product_weight', 15, 4 );

function return_product_sku( $cart_contents, $item_key, $cart_item, $_product ) {
  $cart_contents[$item_key]['sku'] = $_product->get_sku();

  return $cart_contents;
}
```

### Sold Individually Quantity Override ###

With this filter you can force items sold individually to have more or less.

> Sold Individually Quantity Override example.

```php
<?php
add_filter( 'cocart_add_to_cart_sold_individually_quantity', '' );

function override_sold_individual_quantity() {
  return 2;
}
```

### OK to add item? ###

Want to stop an item being added and return a custom message should it require an item not in the cart first.

Use the `cocart_ok_to_add` and `cocart_ok_to_add_response` filters.

| Parameter       | Type   | Description |
| --------------- | ------ | ----------- |
| `$status`       | bool   | The status of adding an item to cart. |
| `$response`     | string | The returned message. |
| `$product_data` | object | The product data of the item. |

> OK to add item examples.

```php
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

add_filter( 'cocart_ok_to_add_message', 'requires_specific_item', 10, 2 );

function requires_specific_item_response( $response, $product_data ) {
  $response = __( 'This item requires a specific item to be added first to the cart.' );

  return $response;
}
```

### Return cart contents ###

If you are in need to change the formatting of the returned cart data, this filter is for you.

Use the `cocart_return_cart_contents` filter. In CoCart Pro you can filter the same results for removed cart contents.

> Return cart contents example.

```php
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
