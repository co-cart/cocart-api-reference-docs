# Totals #

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [Edit on GitHub](https://github.com/co-cart/co-cart-docs/blob/master/source/includes/cocart-v1/_totals.md)

 * [Retrieve Cart Totals](#totals-retrieve-cart-totals)
 * [Calculate Cart Totals](#totals-calculate-cart-totals)

## Retrieve Cart Totals ##

This API helps you retrieve the cart totals. You can also return the totals pre-formatted to save you time applying the currency symbol.

### Parameters ###

| Parameter  | Type   | Description                                                                                                                 |
| ---------- | ------ | --------------------------------------------------------------------------------------------------------------------------- |
| `cart_key` | string | Unique identifier for the cart. <a class="label label-info" href="#cart-key">?</a> <i class="label label-info">optional</i> |

### Properties ###

| Attribute | Type   | Description                                                                                                |
| --------- | ------ | ---------------------------------------------------------------------------------------------------------- |
| `html`    | bool   | Set as true to return the totals as strings with currency symbol. <i class="label label-info">optional</i> |

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

```javascript--node
CoCart.get("totals")
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
  url: "https://example.com/wp-json/cocart/v1/totals",
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
  CURLOPT_URL => "https://example.com/wp-json/cocart/v1/totals",
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
$args = array(
  'headers' => array(
    'Content-Type' => 'application/json; charset=utf-8',
  ),
  'timeout' => 30
);

$response = wp_remote_get( 'https://example.com/wp-json/cocart/v1/totals', $args );
$body = wp_remote_retrieve_body( $response );
```

```json
{
  "subtotal":"123.00",
  "subtotal_tax":8.4,
  "shipping_total":"33.00",
  "shipping_tax":6.6,
  "shipping_taxes": {
    "12": 6.6
  },
  "discount_total":24.6,
  "discount_tax":0,
  "cart_contents_total":"98.40",
  "cart_contents_tax":8.4,
  "cart_contents_taxes": {
    "12": 8.4
  },
  "fee_total":"0.00",
  "fee_tax":0,
  "fee_taxes":[],
  "total":"146.40",
  "total_tax":15
}
```

> Here is what to do to return the totals formatted with currency symbol.

```shell
curl -X GET https://example.com/wp-json/cocart/v1/totals \
  -H "Content-Type: application/json" \
  -d '{
    "html": true
  }'
```

```javascript--jquery
$.ajax({
  url: "https://example.com/wp-json/cocart/v1/totals",
  method: "GET",
  data: JSON.stringify({
    "html" : true
  }),
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

$args = array(
  'html' => true
);

curl_setopt_array( $curl, array(
  CURLOPT_URL => "https://example.com/wp-json/cocart/v1/totals",
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_POSTFIELDS => $args,
  CURLOPT_RETURNTRANSFER => true
) );

$response = curl_exec($curl);

curl_close($curl);

echo $response;
```

```php--wp-http-api
<?php
$args = array(
  'headers' => array(
    'Content-Type' => 'application/json; charset=utf-8',
  ),
  'body' => wp_json_encode( [
    'html' => true
  ] ),
  'timeout' => 30
);

$response = wp_remote_get( 'https://example.com/wp-json/cocart/v1/totals', $args );
$body = wp_remote_retrieve_body( $response );
```

```json
{
  "subtotal":"£123.00",
  "subtotal_tax":"£8.40",
  "shipping_total":"£33.00",
  "shipping_tax":"£6.60",
  "shipping_taxes": {
    "12": 6.6
  },
  "discount_total":"£24.60",
  "discount_tax":"£0.00",
  "cart_contents_total":"£98.40",
  "cart_contents_tax":"£8.40",
  "cart_contents_taxes": {
    "12": 8.4
  },
  "fee_total":"£0.00",
  "fee_tax":"£0.00",
  "fee_taxes":[],
  "total":"£146.40",
  "total_tax":"£15.00"
}
```
