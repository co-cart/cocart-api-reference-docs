## Get Cart Totals ##

This API helps you get the cart totals. You can also return the totals pre-formatted to save you time applying the currency symbol.

### Properties ###

| Attribute | Type | Description       |
| --------- | ---- | ----------------- |
| `html`    | bool | Set as true to return the totals as strings with currency symbol. <i class="label label-info">optional</i> |

### HTTP request ###

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-get">GET</i>
    <h6>/wp-json/cocart/v1/totals</h6>
  </div>
</div>

```shell
curl -X GET https://example.com/wp-json/cocart/v1/totals \
 -H "Content-Type: application/json"
```

> JSON response example

```json
{
  "subtotal":"123.00",
  "subtotal_tax":0,
  "shipping_total":"33.00",
  "shipping_tax":0,
  "shipping_taxes":[],
  "discount_total":24.6,
  "discount_tax":0,
  "cart_contents_total":"98.40",
  "cart_contents_tax":0,
  "cart_contents_taxes":[],
  "fee_total":"0.00",
  "fee_tax":0,
  "fee_taxes":[],
  "total":"131.40",
  "total_tax":0
}
```

```shell
curl -X GET https://example.com/wp-json/cocart/v1/totals \
  -H "Content-Type: application/json" \
  -d '{
    "html": true
  }'
```

> JSON response example

```json
{
  "subtotal":"$123.00",
  "subtotal_tax":"£0.00",
  "shipping_total":"£33.00",
  "shipping_tax":"£0.00",
  "shipping_taxes":[],
  "discount_total":"£24.60",
  "discount_tax":"£0.00",
  "cart_contents_total":"£98.40",
  "cart_contents_tax":"£0.00",
  "cart_contents_taxes":[],
  "fee_total":"£0.00",
  "fee_tax":"£0.00",
  "fee_taxes":[],
  "total":"£131.40",
  "total_tax":"£0.00"
}
```
