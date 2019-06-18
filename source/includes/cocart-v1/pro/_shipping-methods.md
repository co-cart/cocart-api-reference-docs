# Shipping Methods #

This API helps you get and set shipping methods.

### Shipping Method Properties ###

| Attribute   | Type   | Description       |
| ----------- | ------ | ----------------- |
| `method_id` | string | The ID of the shipping method. <i class="label label-info">required</i> |

## Get Shipping Methods  ##

Returns all available shipping methods once the customer has calculated shipping.

### HTTP request ###

<div class="api-endpoint">
	<div class="endpoint-data">
		<i class="label label-get">GET</i>
		<h6>/wp-json/cocart/v1/shipping-methods</h6>
	</div>
</div>

```shell
curl -X GET https://example.com/wp-json/cocart/v1/shipping-methods \
	-H "Content-Type: application/json"
```

> JSON response example

```json
[
  {
    "id": "flat_rate:1",
    "method_id": "flat_rate",
    "instance_id": 1,
    "label": "Flat rate",
    "cost": "33.00",
    "html": "Flat rate: £33.00",
    "taxes": [],
    "chosen_method": true
  },
  {
    "id": "free_shipping:3",
    "method_id": "free_shipping",
    "instance_id": 3,
    "label": "Free shipping",
    "cost": "0.00",
    "html": "Free shipping",
    "taxes": [],
    "chosen_method": false
  }
]
```

## Set Shipping Method ##

Apply a shipping method to the cart. Can only apply once the customer has calculated shipping.

### HTTP request ###

<div class="api-endpoint">
	<div class="endpoint-data">
		<i class="label label-post">POST</i>
		<h6>/wp-json/cocart/v1/shipping-methods</h6>
	</div>
</div>

```shell
curl -X POST https://example.com/wp-json/cocart/v1/shipping-method \
  -H "Content-Type: application/json" \
  -d '{
    "method_id": "free_shipping",
    "instance_id": "3"
  }'
```

> JSON response example.

```json
```
