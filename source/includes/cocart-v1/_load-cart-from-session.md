# Load Cart from Session #

<span class="new">New Feature since v2.1</span>

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [Edit on GitHub](https://github.com/co-cart/co-cart-docs/blob/master/source/includes/cocart-v1/_load-cart-from-session.md)

Load cart from session allows the cart of your choosing to be set before anything WooCommerce handles.

For example if you have a returning customer that started as a guest and then logs in to their account. WooCommerce will then merge the carts together should the customer already have a saved cart.

This feature is designed to transfer the cart over to the web version of your store. It allows the customer to continue shopping or checkout what they already have in the cart added via your app. Handy if you don't yet have a checkout system in your app.

You can choose to override the cart (if anything is set) via the web or merge the cart items together.

<aside class="notice">
	FYI: It does not matter if your customer is logged in or not already via the web version of your store. Only the cart data will be set. Customer details are <strong>not transferred</strong>.
</aside>

## Load for the Web ##

To load the cart from session for the web, you must use the properties below to query your website.

```
https://example.com/cart/?cocart-load-cart=bbfa8e97ac9cff4c861d62a109e83bb6
```

<aside class="warning">
  ⚠️ This features is not a REST API. Do not treat it as such! ⚠️
</aside>

<aside class="notice">
	If the same item already exists in cart and you are merging the two carts together, that item will not change. It will not increase or decrease the quantity if the item hash key are the same.
</aside>

### Properties ###

| Property           | Type   | Description                                                                                                                     |
| ------------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------- |
| `cocart-load-cart` | string | Set the cart key of the cart you wish to load. <i class="label label-info">mandatory</i>                                        |
| `notify`           | bool   | Set as true to notify customers once arrived on the web version of your store. <i class="label label-info">Default is false</i> |
| `keep-cart`        | bool   | Set as false to merge cart data. <i class="label label-info">Default is true</i>                                                |