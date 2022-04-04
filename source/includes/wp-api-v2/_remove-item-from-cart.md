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

```json
"Item has been removed from cart."
```
