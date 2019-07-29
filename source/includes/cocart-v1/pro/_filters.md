# Filters #

The cart API has a number of filters that you can use to extend or change the API.

See the [tweaks plugin for more examples](https://github.com/co-cart/co-cart-tweaks).

<aside class="notice">
  Please make sure you are viewing the PHP language to view examples of the filters in use.
</aside>

## Cross Sells ##

### Change Thumbnail Size ###

By default the size of the thumbnail uses `woocommerce_thumbnail`. You can change this by filtering the size using `cocart_cross_sell_item_thumbnail_size` filter.

```php
add_filter( 'cocart_cross_sell_item_thumbnail_size', 'thumbnail_size' );

function thumbnail_size() {
  return 'thumbnail';
}
```

### Override Thumbnail Image ###

You can override the thumbnail image used for the cross sell item simply by overriding the image ID using `cocart_cross_sell_item_thumbnail`.

### Format Response ###

If you need to change the layout of the response given you can use filter `cocart_cross_sells`.

## Customers ##

If you need to return additional data of the customer you can append the response by using filter `cocart_customer_details`.

## Quantities ##

If you need to change the response given for quantities you can use filter `cocart_quantities`.

## Removed Cart Items ##

This filter `cocart_return_removed_cart_contents` is the same as [return cart contents filter](index.html#return-more-item-details) to change the formatting of the returned cart data.

## Available Shipping Methods ##

With this filter `cocart_available_shipping_methods` you could restrict access to an available shipping method.

| Parameter                  | Type   | Description |
| -------------------------- | ------ | ----------- |
| `$available_methods`       | array  | An array of available shipping methods after the shipping was calculated. |
| `$chosen_shipping_methods` | array  | The set chosen shipping method by customer. |
| `$rates`                   | array  |  |
| `$recurring_cart_key`      | string | Used only for Subscriptions. |

## Cart Weight ##

If you need to change the response given for cart weight you can use filter `cocart_weight`.
