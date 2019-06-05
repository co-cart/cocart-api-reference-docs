## Add to Cart ##

This API helps you to add an item to the cart.

### Properties ###

| Attribute        | Type      | Description       |
| ---------------- | --------- | ----------------- |
| `product_id`     | integer   | The product ID is required in order to add a product to the cart. <i class="label label-info">mandatory</i> |
| `quantity`       | integer   | Set the quantity of the product you want to add to the cart. <i class="label label-info">Default is 1</i> |
| `variation_id`   | integer   | Used to set the variation of the product being added to the cart. <i class="label label-info">optional</i> |
| `variation`      | array     | Attribute values |
| `cart_item_data` | array     | Used to apply extra cart item data we want to pass with the item. <i class="label label-info">optional</i> |
| `return_cart`    | bool      | Used to return the whole cart once item added. |

### HTTP request ###

<div class="api-endpoint">
	<div class="endpoint-data">
		<i class="label label-post">POST</i>
		<h6>/wp-json/cocart/v1/add-item</h6>
	</div>
</div>

```shell
curl -X POST https://example.com/wp-json/cocart/v1/add-item \
	-H "Content-Type: application/json" \
  -d '{
    "product_id": 1722,
    "quantity": 1
  }'
```

> JSON response example

```json
{
  "404dcc91b2aeaa7caa47487d1483e48a":{
    "key":"404dcc91b2aeaa7caa47487d1483e48a",
    "product_id":1722,
    "variation_id":0,
    "variation":[],
    "quantity":1,
    "line_tax_data":{
      "subtotal":[],
      "total":[]
    },
    "line_subtotal":18,
    "line_subtotal_tax":0,
    "line_total":18,
    "line_tax":0,
    "data":{}
  }
}
```
