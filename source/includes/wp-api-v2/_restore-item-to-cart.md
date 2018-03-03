## Restore Item to Cart ##

This API helps you to restore an item to the cart.

### Restore item properties ###

| Attribute       | Type   | Description                                   |
| --------------- | ------ | --------------------------------------------- |
| `cart_item_key` | string | The cart item key of the product that was in the cart recently. <i class="label label-info">mandatory</i> |

### HTTP request ###

<div class="api-endpoint">
	<div class="endpoint-data">
		<i class="label label-get">GET</i>
		<h6>/wp-json/wc/v2/cart/cart-item</h6>
	</div>
</div>

```shell
curl -X DELETE https://example.com/wp-json/wc/v2/cart/cart-item \
	-H "Content-Type: application/json" \
	-d '{
		"cart_item_key": 404dcc91b2aeaa7caa47487d1483e48a
	}'
```

```javascript
var data = {
	cart_item_key: "404dcc91b2aeaa7caa47487d1483e48a"
};

WooCommerce.get('cart/cart-item', data, function(err, data, res) {
	console.log(res);
});
```

```php
<?php
$data = [
	"cart_item_key" => "404dcc91b2aeaa7caa47487d1483e48a"
];

print_r($woocommerce->get('cart/cart-item', $data));
?>
```

```python
data = {
	"cart_item_key": "404dcc91b2aeaa7caa47487d1483e48a"
}

print(wcapi.get("cart/cart-item", data).json())
```

```ruby
data = {
	cart_item_key: "404dcc91b2aeaa7caa47487d1483e48a"
}

woocommerce.get("cart/cart-item", data).parsed_response
```

> JSON response example:

```json
"Item has been restored to the cart.""
```
