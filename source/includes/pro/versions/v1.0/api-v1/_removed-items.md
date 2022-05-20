# Removed Items #

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [Edit on GitHub](https://github.com/co-cart/co-cart-docs/blob/master/source/includes/cocart-v1/pro/_removed-items.md)

This API helps you get items removed by the customer. This can be helpful should you wish to remind and allow customers to re-add an item back to the cart.

## Parameters ##

| Parameter  | Type   | Description                                                                                                                 |
| ---------- | ------ | --------------------------------------------------------------------------------------------------------------------------- |
| `cart_key` | string | Unique identifier for the cart. <a class="label label-info" href="#cart-key">?</a> <i class="label label-info">optional</i> |

### HTTP request ###

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-get">GET</i>
    <h6>/wp-json/cocart/v1/removed-items</h6>
  </div>
</div>

```shell
curl -X GET https://example.com/wp-json/cocart/v1/removed-items \
  -H "Content-Type: application/json"
```

```javascript--node
CoCart.get("removed-items")
.then((response) => {
  // Successful request
  console.log("Response Status:", response.status);
  console.log("Response Headers:", response.headers);
  console.log("Response Data:", response.data);
})
.catch((error) => {
  // Invalid request, for 4xx and 5xx statuses
  console.log("Response Status:", error.response.status);
  console.log("Response Headers:", error.response.headers);
  console.log("Response Data:", error.response.data);
})
.finally(() => {
  // Always executed.
});
```

```javascript--jquery
$.ajax({
  url: "https://example.com/wp-json/cocart/v1/removed-items",
  method: "GET",
  dataType: "json",
  contentType: "application/json; charset=utf-8",
  complete: function (response) {
    console.log(response);
  }
});
```

```php
<?php
$curl = curl_init();

curl_setopt_array( $curl, array(
  CURLOPT_URL => "https://example.com/wp-json/cocart/v1/removed-items",
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTPHEADER => array(
    'Accept: application/json',
    'User-Agent: CoCart API/v1',
  )
) );

$response = curl_exec($curl);

curl_close($curl);

echo $response;
```

```php--wp-http-api
<?php
$response = wp_remote_get( 'https://example.com/wp-json/cocart/v1/removed-items' );
$body = wp_remote_retrieve_body( $response );
```

```json
{
  "40d8882729aa85d43fe007db12880105": {
    "key": "40d8882729aa85d43fe007db12880105",
    "product_id": 34,
    "variation_id": 0,
    "variation": [],
    "quantity": 1,
    "data_hash": "b5c1d5ca8bae6d4896cf1807cdf763f0",
    "line_tax_data": {
      "subtotal": [],
      "total": []
    },
    "line_subtotal": 20,
    "line_subtotal_tax": 0,
    "line_total": 16,
    "line_tax": 0
  }
}
```
