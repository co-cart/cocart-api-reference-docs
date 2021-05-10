# Load Cart from Session #

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [Edit on GitHub](https://github.com/co-cart/co-cart-docs/blob/master/source/source/includes/cocart-v2/_load-cart-from-session.md)

<aside class="warning">
  This feature is designed to support guest customers only and is not a REST API. Do not treat it as such!
</aside>

This feature is designed to transfer the cart over to the web version of your store. It allows the customer to continue shopping or checkout what they already have in the cart added via your app. Handy if you don't yet have a checkout system in your app.

You can choose to override the cart (if anything is set) or merge the cart items together. If a customer is logged in via the web version of your store then WooCommerce will then merge any items in the cart together with the items the guest customer has in cart.

<aside class="notice">
	FYI: It does not matter if your customer is logged in or not already via the web version of your store. Only the cart data will be set. Customer details are <strong>not transferred</strong>.
</aside>

## Properties ##

| Property           | Type   | Description                                                                                                                     |
| ------------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------- |
| `cocart-load-cart` | string | Set the cart key of the cart you wish to load. <i class="label label-info">mandatory</i>                                        |
| `notify`           | bool   | Set as true to notify customers once arrived on the web version of your store. <i class="label label-info">Default is false</i> |
| `keep-cart`        | bool   | Set as false to merge cart data. <i class="label label-info">Default is true</i>                                                |

To load the cart from session on your web store, you must use the properties above to query your website. You can query any page you prefer your customer to land on as the cart is loaded in the background.

<div class="api-endpoint">
  <div class="endpoint-data">
  	<i class="label label-example">Example</i>
    <h6>https://example.com/cart/?cocart-load-cart=bbfa8e97ac9cff4c861d62a109e83bb6</h6>
  </div>
</div>

If the same item already exists in cart and you are merging the two carts together, that item will not change. It will not increase or decrease the quantity if the cart item key are the same.
