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
curl -X GET https://example.com/wp-json/wc/v2/cart/cart-item \
	-H "Content-Type: application/json" \
	-d '{
		"cart_item_key": 404dcc91b2aeaa7caa47487d1483e48a
	}'
```

```json
"Item has been restored to the cart.""
```
