## Update Item in Cart ##

This API helps you to update an item in the cart. You can also request to return the whole cart once item is updated to reduce API requests and use the [Get Cart Content](#get-cart-contents) properties.

### Properties ###

| Attribute       | Type    | Description       |
| --------------- | ------- | ----------------- |
| `cart_item_key` | string  | The cart item key of the product in the cart you want to update. <i class="label label-info">mandatory</i> |
| `quantity`      | integer | Set the quantity of the product you want to update in the cart. <i class="label label-info">Default is 1</i> |
| `return_cart`   | bool    | Set as true to return the whole cart once item added. <i class="label label-info">optional</i> |

### HTTP request ###

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-post">POST</i>
    <h6>/wp-json/cocart/v1/item</h6>
  </div>
</div>

```shell
curl -X POST https://example.com/wp-json/cocart/v1/item \
  -H "Content-Type: application/json" \
  -d '{
    "cart_item_key": "404dcc91b2aeaa7caa47487d1483e48a",
    "quantity": 2
  }'
```

> JSON response example

```json
"The quantity for 'Woo T-Shirt' has increased to '2'."
```
