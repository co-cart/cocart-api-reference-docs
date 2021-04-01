# Hooks #

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [Edit on GitHub](https://github.com/co-cart/co-cart-docs/blob/master/source/includes/cocart-v2/wip/_hooks.md)

The cart API has a number of action hooks that you can use to extend the API to your needs.

See the [tweaks plugin for examples](https://github.com/co-cart/co-cart-tweaks).

### Get Cart ###

Perhaps you need to apply something to the whole of the cart before it returns or send a notification. The choice is yours.

Use hook name: `cocart_get_cart`

| Parameter        | Type  | Description                          |
| ---------------- | ----- | ------------------------------------ |
| `$cart_contents` | array | An array of items added to the cart. |

### Clear Cart ###

Could be used to send a registered customer an email once they have emptied their cart. 😢

Use hook name: `cocart_cart_cleared`

### Item Added ###

You can do something once an item has been added to the cart.

Use hook name: `cocart_item_added_to_cart`

| Parameter     | Type   | Description                                   |
| ------------- | ------ | --------------------------------------------- |
| `$item_key`   | string | The cart item key of the product in the cart. |
| `$item_added` | array  | The details of the added item.                |

### Item Removed ###

Use hook name: `cocart_item_removed`

| Parameter       | Type  | Description                      |
| --------------- | ----- | -------------------------------- |
| `$current_data` | array | The details of the item removed. |

### Item Restored ###

Use hook name: `cocart_item_restored`

| Parameter       | Type  | Description                       |
| --------------- |------ | --------------------------------- |
| `$current_data` | array | The details of the item restored. |

### Item Quantity Changed ###

Should you need to change some other detail for the updated item.

Use hook name: `cocart_item_quantity_changed`

| Parameter        | Type   | Description                                   |
| ---------------- | ------ | --------------------------------------------- |
| `$cart_item_key` | string | The cart item key of the product in the cart. |
| `$new_data`      | array  | The details of the item updated.              |
