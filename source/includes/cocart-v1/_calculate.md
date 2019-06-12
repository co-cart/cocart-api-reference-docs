## Calculate Cart Totals ##

This API helps you calculate the cart totals.

### Properties ###

| Attribute | Type | Description       |
| --------- | ---- | ----------------- |
| `return`  | bool | Used to return the totals once calculated. <i class="label label-info">optional</i> |

### HTTP request ###

<div class="api-endpoint">
	<div class="endpoint-data">
		<i class="label label-post">POST</i>
		<h6>/wp-json/cocart/v1/calculate</h6>
	</div>
</div>

```shell
curl -X POST https://example.com/wp-json/cocart/v1/calculate \
	-H "Content-Type: application/json"
```

> JSON response example

```json
"Cart totals have been calculated."
```
