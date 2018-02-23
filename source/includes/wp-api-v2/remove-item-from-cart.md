## Remove Item from Cart ##

This API helps you to remove an item from the cart.

### Remove item properties ###

| Attribute       | Type   | Description                                   |
| --------------- | ------ | --------------------------------------------- |
| `cart_item_key` | string | The cart item key of the product in the cart. <i class="label label-info">mandatory</i> |

### HTTP request ###

<div class="api-endpoint">
	<div class="endpoint-data">
		<i class="label label-delete">DELETE</i>
		<h6>/wp-json/wc/v2/cart?cart_item_key=&lt;cart_item_key&gt;</h6>
	</div>
</div>

```shell
curl -X DELETE https://example.com/wp-json/wc/v2/cart?cart_item_key=404dcc91b2aeaa7caa47487d1483e48a \
	-H "Content-Type: application/json"
```

```javascript
WooCommerce.delete('cart?cart_item_key=404dcc91b2aeaa7caa47487d1483e48a', function(err, data, res) {
  console.log(res);
});
```

```php
<?php
print_r($woocommerce->delete('cart?cart_item_key=404dcc91b2aeaa7caa47487d1483e48a'));
?>
```

```python
print(wcapi.delete("cart?cart_item_key=404dcc91b2aeaa7caa47487d1483e48a").json())
```

```ruby
woocommerce.delete("cart?cart_item_key=404dcc91b2aeaa7caa47487d1483e48a").parsed_response
```

> JSON response example:

```json
"Item has been removed from cart."
```
