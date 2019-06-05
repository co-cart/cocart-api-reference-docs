## Get Cart Totals ##

This API helps you get the cart totals.

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
  "subtotal":"42.00",
  "subtotal_tax":0,
  "shipping_total":"0.00",
  "shipping_tax":0,
  "shipping_taxes":[],
  "discount_total":0,
  "discount_tax":0,
  "cart_contents_total":"42.00",
  "cart_contents_tax":0,
  "cart_contents_taxes":[],
  "fee_total":"0.00",
  "fee_tax":0,
  "fee_taxes":[],
  "total":"42.00",
  "total_tax":0
}
```
