# Cart Weight #

This API helps you get the cart weight. The weight unit returned is set in your WooCommerce settings.

### HTTP request ###

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-get">GET</i>
    <h6>/wp-json/cocart/v1/weight</h6>
  </div>
</div>

```shell
curl -X GET https://example.com/wp-json/cocart/v1/weight \
  -H "Content-Type: application/json"
```

> JSON response example

```json
"4 kg"
```
