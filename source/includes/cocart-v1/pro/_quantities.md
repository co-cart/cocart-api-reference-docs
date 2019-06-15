# Quantities #

This API helps you get the quantities of each product added to the cart.

### HTTP request ###

<div class="api-endpoint">
	<div class="endpoint-data">
		<i class="label label-get">GET</i>
		<h6>/wp-json/cocart/v1/quantities</h6>
	</div>
</div>

```shell
curl -X GET https://example.com/wp-json/cocart/v1/quantities \
	-H "Content-Type: application/json"
```

> JSON response example

```json
{
  "31": 1,
  "32": 1,
  "36": 2
}
```
