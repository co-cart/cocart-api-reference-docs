## Restore Item to Cart ##

This API helps you to restore an item to the cart. You can also request to return the whole cart once item is restored to reduce API requests and use the [Get Cart Content](#get-cart-contents) properties. 

### Properties ###

| Attribute       | Type   | Description                                   |
| --------------- | ------ | --------------------------------------------- |
| `cart_item_key` | string | The cart item key of the product that was in the cart recently. <i class="label label-info">mandatory</i> |
| `return_cart`   | bool   | Set as true to return the whole cart once item added. <i class="label label-info">optional</i> |

### HTTP request ###

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-get">GET</i>
    <h6>/wp-json/cocart/v1/item</h6>
    </div>
</div>

```shell
curl -X DELETE https://example.com/wp-json/cocart/v1/item \
  -H "Content-Type: application/json" \
  -d '{
    "cart_item_key": 404dcc91b2aeaa7caa47487d1483e48a
  }'
```

> JSON response example

```json
"Item has been restored to the cart.""
```
