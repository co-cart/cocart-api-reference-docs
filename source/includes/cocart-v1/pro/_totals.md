# Totals #

This API helps you get all the cart totals including getting them individually.

## Get Cart Totals ##

This API helps you get the cart totals. You can also return the totals pre-formatted to save you time applying the currency symbol. [Get Cart Totals](index.html#get-cart-totals) properties.

<aside class="notice">
  With CoCart Pro, fees added are appended to the totals.
</aside>

The `fee_total`, `fee_tax` and `fee_taxes` are only updated if the [fees are calculated](#calculate-fees) or the [totals are calculated](#calculate-cart-totals) once the [fees have been added](#add-a-fee).

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
  "fee_total":"40.00",
  "fee_tax":0,
  "fee_taxes":[],
  "total":"171.40",
  "total_tax":0,
  "fees": {
    "cocart-extra-package-protection":{
        "id": "cocart-extra-package-protection",
        "name": "Extra Package Protection",
        "amount": "40",
        "taxable": false,
        "tax_class": "",
        "total": 4000
    }
  }
}
```
