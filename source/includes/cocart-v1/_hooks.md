# Hooks #

The cart API has a number of action hooks that you can use to extend the API.

See the [tweaks plugin for examples](https://github.com/co-cart/co-cart-tweaks).

<aside class="notice">
Please make sure you are viewing the PHP language to view examples of the filters in use.
</aside>

### Get Cart ###

Perhaps you need to apply something to the whole of the cart before it returns or send a notification. The choice is yours.

Hook name: `cocart_get_cart`

| Parameter | Type | Description |
| ------------ | -------------- | ------------ |
| `$cart_contents` | array | An array of items added to the cart. |

### Clear Cart ###

Could be used to send a logged in customer an email once they have emptied their cart. 😢

Hook name: `cocart_cart_cleared`

### Item Added ###



Hook name: `cocart_item_added_to_cart`

Hook name: `cocart_item_removed`

Hook name: `cocart_item_restored`

Hook name: `cocart_item_quantity_changed`

