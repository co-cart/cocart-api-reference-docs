## Clear Cart ##

This API helps you clear the contents of the cart.

### HTTP request ###

<div class="api-endpoint">
	<div class="endpoint-data">
		<i class="label label-post">POST</i>
		<h6>/wp-json/cocart/v1/clear</h6>
	</div>
</div>

<aside class="notice">
It is important that you use POST and not GET as it will cache and return with a false response.
</aside>

```shell
curl -X POST https://example.com/wp-json/cocart/v1/clear \
	-H "Content-Type: application/json"
```

> JSON response example

```json
"Cart is cleared."
```
