## Calculate Shipping ##

This API helps you calculate the shipping costs and available methods. You can also request to return the shipping methods once calculated to reduce API requests.

### Properties ###

| Attribute        | Type   | Description       |
| ---------------- | ------ | ----------------- |
| `country`        | string | Set the country of the shipping location. <i class="label label-info">required</i> |
| `state`          | string | Setting the state is optional but maybe required under some circumstances. <i class="label label-info">optional</i> |
| `city`           | string | Set the city to specify location in country. <i class="label label-info">optional</i> |
| `postcode`       | string | Enter postcode / ZIP to narrow down location for more accurate shipping cost. <i class="label label-info">optional</i> |
| `return_methods` | bool   | Set as true to return the shipping methods once calculated. <i class="label label-info">optional</i> |

### HTTP request ###

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-post">POST</i>
    <h6>/wp-json/cocart/v1/calculate/shipping</h6>
  </div>
</div>

```shell
curl -X POST https://example.com/wp-json/cocart/v1/calculate/shipping \
  -H "Content-Type: application/json"
  -d '{
    "country": "GB"
  }'
```

> JSON response example

```json
"Shipping costs updated."
```
