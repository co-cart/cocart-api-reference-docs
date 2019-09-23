# Fees #

This API helps you add a fee to the cart, get all fees added, and remove all fees.

## Get Fees ##

Returns all applied fees to the cart.

#### HTTP request ####

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-get">GET</i>
    <h6>/wp-json/cocart/v1/fees</h6>
  </div>
</div>

```shell
curl -X GET https://example.com/wp-json/cocart/v1/fees \
  -H "Content-Type: application/json"
```

> JSON response example for returning already applied fees.

```json
{
  "cocart-extra-package-protection":{
    "id": "cocart-extra-package-protection",
    "name": "Extra Package Protection",
    "amount": "5",
    "taxable": false,
    "tax_class": "",
    "total": 500
  }
}
```

## Add a Fee ##

Apply a fee to the cart.

### Properties ###

| Attribute   | Type   | Description       |
| ----------- | ------ | ----------------- |
| `name`      | string | Name of the fee. <i class="label label-info">required</i> |
| `amount`    | string | Amount for the fee. <i class="label label-info">required</i> |
| `taxable`   | bool   | Determins if the fee is taxable. <i class="label label-info">optional</i> |
| `tax_class` | string | The tax class the fee applies to. <i class="label label-info">optional</i> |

#### HTTP request ####

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-post">POST</i>
    <h6>/wp-json/cocart/v1/fees</h6>
  </div>
</div>

```shell
curl -X POST https://example.com/wp-json/cocart/v1/fees \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Extra Package Protection",
    "amount": 5
  }'
```

> JSON response example.

```json
{
    "Fee \"Extra Package Protection\" for £40.00 has been added."
}
```

## Remove Fees ##

Remove all fees from the cart.

#### HTTP request ####

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-delete">DELETE</i>
    <h6>/wp-json/cocart/v1/fees</h6>
    </div>
</div>

```shell
curl -X DELETE https://example.com/wp-json/cocart/v1/fees \
  -H "Content-Type: application/json" \
```

> JSON response example.

```json
{
    "All cart fees have been removed."
}
```
