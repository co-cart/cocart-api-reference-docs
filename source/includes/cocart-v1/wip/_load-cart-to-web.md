# Load Cart to Web #

Load cart to web is a new feature that allows you to transfer the cart over to the web version of your store. This allows the customer to continue shopping or checkout what they have added via your app if you don't yet have a checkout system in your app.

When a cart is loaded to the web, the original session handler in the core of WooCommerce will be used to handle the cart. You can choose to override the cart (if anything is set) via the web or merge the data together.

<aside class="notice">
    FYI: It does not matter if your customer is logged in or not already via the web version of your store. Only the cart data will be set. Customer details are not set.
</aside>

### Properties ###

| Property           | Type   | Description                                                                                                                     |
| ------------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------- |
| `cocart-load-cart` | string | Set as true to return the product thumbnail for each item. <i class="label label-info">mandatory</i>                            |
| `notify`           | bool   | Set as true to notify customers once arrived on the web version of your store. <i class="label label-info">Default is false</i> |
| `keep-cart`        | bool   | Set as false to merge cart data. <i class="label label-info">Default is true</i>                                                |
| `redirect`         | bool   | Set as true to redirect to cart page. <i class="label label-info">Default is false</i>                                          |

## Usage ##

To load the cart to the web, you must use the properties above to query your website.

e.g. `https://example.com/?cocart-load-cart=bbfa8e97ac9cff4c861d62a109e83bb6`

#### Things to improve on ####

If the same item already exists in cart and you are merging the two carts together, that item will not change. It will not increase or decrease the quantity if the item hash key are the same.
