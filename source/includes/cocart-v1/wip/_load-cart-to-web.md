# Load Cart to Web #

<span class="new">New Feature</span>

Load cart to web is a new feature that allows you to transfer the cart over to the web version of your store. This allows the customer to continue shopping or checkout what they have added via your app if you don't yet have a checkout system in your app.

When a cart is loaded to the web, the original session handler in the core of WooCommerce will be used to handle the cart from then on. You can choose to override the cart (if anything is set) via the web or merge the data together.

<aside class="warning">
	Any changes made to the cart once loaded is not updated to the cart stored by CoCart.
</aside>

<aside class="notice">
	FYI: It does not matter if your customer is logged in or not already via the web version of your store. Only the cart data will be set. Customer details are <strong>not transferred</strong>.
</aside>

### Properties ###

| Property           | Type   | Description                                                                                                                     |
| ------------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------- |
| `cocart-load-cart` | string | Set the cart key of the cart you wish to load to the web. <i class="label label-info">mandatory</i>                             |
| `notify`           | bool   | Set as true to notify customers once arrived on the web version of your store. <i class="label label-info">Default is false</i> |
| `keep-cart`        | bool   | Set as false to merge cart data. <i class="label label-info">Default is true</i>                                                |
| `redirect`         | bool   | Set as true to redirect to cart page. <i class="label label-info">Default is false</i>                                          |

## Usage ##

To load the cart to the web, you must use the properties above to query your website.

<div class="api-endpoint">
  <div class="endpoint-data">
  	<i class="label label-example">Example</i>
    <h6>https://example.com/?cocart-load-cart=bbfa8e97ac9cff4c861d62a109e83bb6</h6>
  </div>
</div>

<aside class="notice">
	If the same item already exists in cart and you are merging the two carts together, that item will not change. It will not increase or decrease the quantity if the item hash key are the same.
</aside>
