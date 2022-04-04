# Cart API #

The cart API allows you to add, view, update, and delete individual items for the cart.

## View Cart Contents ##

This API helps you view the contents of the cart.

| Attribute | Type | Description                                    |
| --------- | ---- | ---------------------------------------------- |
| `thumb`   | bool | Returns the product thumbnail for the product. |

### HTTP request ###

<div class="api-endpoint">
	<div class="endpoint-data">
		<i class="label label-get">GET</i>
		<h6>/wp-json/wc/v2/cart</h6>
	</div>
</div>

```shell
curl -X GET https://example.com/wp-json/wc/v2/cart \
	-H "Content-Type: application/json"
```

```json
{
  "404dcc91b2aeaa7caa47487d1483e48a":{
    "key":"404dcc91b2aeaa7caa47487d1483e48a",
    "product_id":32,
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

## Clear Cart ##

This API helps you clear the contents of the cart.

### HTTP request ###

<div class="api-endpoint">
	<div class="endpoint-data">
		<i class="label label-post">POST</i>
		<h6>/wp-json/wc/v2/cart/clear</h6>
	</div>
</div>

<aside class="notice">
It is important that you use POST and not GET as it will cache and return with a false response.
</aside>

```shell
curl -X POST https://example.com/wp-json/wc/v2/cart/clear \
	-H "Content-Type: application/json"
```

```json
"Cart is cleared."
```

## Count Items ##

This API helps you count the items in the cart.

### HTTP request ###

<div class="api-endpoint">
	<div class="endpoint-data">
		<i class="label label-get">GET</i>
		<h6>/wp-json/wc/v2/cart/count-items</h6>
	</div>
</div>

```shell
curl -X GET https://example.com/wp-json/wc/v2/cart/count-items \
	-H "Content-Type: application/json"
```

```json
1
```

## Calculate Cart Totals ##

This API helps you calculate the cart totals.

### HTTP request ###

<div class="api-endpoint">
	<div class="endpoint-data">
		<i class="label label-post">POST</i>
		<h6>/wp-json/wc/v2/cart/calculate</h6>
	</div>
</div>

```shell
curl -X POST https://example.com/wp-json/wc/v2/cart/calculate \
	-H "Content-Type: application/json"
```

```json
"Cart totals have been calculated."
```

## Get Cart Totals ##

This API helps you get the cart totals.

### HTTP request ###

<div class="api-endpoint">
	<div class="endpoint-data">
		<i class="label label-get">GET</i>
		<h6>/wp-json/wc/v2/cart/totals</h6>
	</div>
</div>

```shell
curl -X GET https://example.com/wp-json/wc/v2/cart/totals \
	-H "Content-Type: application/json"
```

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
