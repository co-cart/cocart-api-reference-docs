## Update Item in Cart ##

This API helps you to update an item in the cart.

### Update item properties ###

| Attribute       | Type    | Description       |
| --------------- | ------- | ----------------- |
| `cart_item_key` | string  | The cart item key of the product in the cart you want to update. <i class="label label-info">mandatory</i> |
| `quantity`      | integer | Set the quantity of the product you want to update in the cart. <i class="label label-info">Default is 1</i> |

### HTTP request ###

<div class="api-endpoint">
	<div class="endpoint-data">
		<i class="label label-post">POST</i>
		<h6>/wp-json/wc/v2/cart/cart-item</h6>
	</div>
</div>

```shell
curl -X POST https://example.com/wp-json/wc/v2/cart/cart-item \
	-H "Content-Type: application/json" \
	-d '{
		"cart_item_key": "404dcc91b2aeaa7caa47487d1483e48a",
		"quantity": 2
	}'
```

```javascript
var data = {
	cart_item_key: "404dcc91b2aeaa7caa47487d1483e48a",
	quantity: 2
};

WooCommerce.post('cart/cart-item', data, function(err, data, res) {
	console.log(res);
});
```

```php
<?php
$data = [
	"cart_item_key" => "404dcc91b2aeaa7caa47487d1483e48a",
	"quantity" => 2
];

print_r($woocommerce->post('cart/cart-item', $data));
?>
```

```python
data = {
	"cart_item_key": "404dcc91b2aeaa7caa47487d1483e48a",
	"quantity": 2
}

print(wcapi.post("cart/cart-item", data).json())
```

```ruby
data = {
	cart_item_key: "404dcc91b2aeaa7caa47487d1483e48a",
	quantity: 2
}

woocommerce.post("cart/cart-item", data).parsed_response
```

> JSON response example:

```json
"The quantity for 'Woo T-Shirt' has increased to '2'."
```
