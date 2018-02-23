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
		<h6>/wp-json/wc/v2/cart?cart_item_key=&lt;cart_item_key&gt;</h6>
	</div>
</div>

```shell
curl -X GET https://example.com/wp-json/wc/v2/cart?cart_item_key=404dcc91b2aeaa7caa47487d1483e48a \
	-H "Content-Type: application/json"
```

```javascript
WooCommerce.get('cart?cart_item_key=404dcc91b2aeaa7caa47487d1483e48a', function(err, data, res) {
  console.log(res);
});
```

```php
<?php
print_r($woocommerce->get('cart?cart_item_key=404dcc91b2aeaa7caa47487d1483e48a'));
?>
```

```python
print(wcapi.get("cart?cart_item_key=404dcc91b2aeaa7caa47487d1483e48a").json())
```

```ruby
woocommerce.get("cart?cart_item_key=404dcc91b2aeaa7caa47487d1483e48a").parsed_response
```

> JSON response example:

```json
"Item has been restored to the cart."
```
