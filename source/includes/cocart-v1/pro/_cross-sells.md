# Cross Sells #

This API helps you get the cross sells. It returns not just the product ID's but the product name, price, regular price and sale price.

### Cross Sell Properties ###

| Attribute | Type | Description |
| --------- | ---- | ------------ |
| `thumb`   | bool | Set as true to return the product thumbnail for each item. |

### HTTP request ###

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-get">GET</i>
    <h6>/wp-json/cocart/v1/cross-sells</h6>
  </div>
</div>

```shell
curl -X GET https://example.com/wp-json/cocart/v1/cross-sells \
  -H "Content-Type: application/json"
```

> JSON response example

```json
[
  {
    "id": 35,
    "product_name":"Tshirt",
    "price":"£18.00",
    "regular_price":"£18.00",
    "sale_price":"£18.00"
  }
]
```
