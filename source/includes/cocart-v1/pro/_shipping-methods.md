# Shipping Methods #

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [Edit on GitHub](https://github.com/co-cart/co-cart-docs/blob/master/source/includes/cocart-v1/pro/_shipping-methods.md)

 * [Calculate Shipping](#shipping-methods-calculate-shipping)
 * [Get Shipping Methods](#shipping-methods-get-shipping-methods)
 * [Set Shipping Method](#shipping-methods-set-shipping-method)

## Calculate Shipping ##

This API helps you calculate the shipping costs and get the available methods. You can also request to return the shipping methods once calculated to reduce API requests.

<aside class="notice">
  You must pass the country code, <strong>NOT</strong> the country name via the <code>country</code> parameter. The same is for the state. Pass the state code, <strong>NOT</strong> the state name via the <code>state</code> parameter.
</aside>

### Properties ###

| Attribute        | Type   | Description                                                                                                                           |
| ---------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| `cart_key`       | string | Unique identifier for the cart. <a class="label label-info" href="index.html#cart-key">?</a> <i class="label label-info">optional</i> |
| `country`        | string | Set the country code of the shipping location. <a class="label label-info" target="_blank" href="https://github.com/woocommerce/woocommerce/blob/master/i18n/countries.php">Country codes</a> <i class="label label-info">required</i>                                               |
| `state`          | string | Setting the state is optional but maybe required under some circumstances. <a class="label label-info" target="_blank" href="https://github.com/woocommerce/woocommerce/blob/master/i18n/states.php">State codes</a> <i class="label label-info">optional</i>                   |
| `city`           | string | Set the city to specify location in country. <i class="label label-info">optional</i>                                                 |
| `postcode`       | string | Enter postcode / ZIP to narrow down location for more accurate shipping cost. <i class="label label-info">optional</i>                |
| `return_methods` | bool   | Set as true to return the shipping methods once calculated. <i class="label label-info">optional</i>                                  |

#### HTTP request ####

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-post">POST</i>
    <h6>/wp-json/cocart/v1/calculate/shipping</h6>
  </div>
</div>

> Example of calculating shipping methods for Great Britain.

```shell
curl -X POST https://example.com/wp-json/cocart/v1/calculate/shipping \
  -H "Content-Type: application/json"
  -d '{
    "country": "GB"
  }'
```

```javascript--node
var data = {
  "country": "GB"
};

CoCart.post("calculate/shipping", data)
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
var settings = {
  "url": "https://example.com/wp-json/cocart/v1/calculate/shipping",
  "method": "POST",
  "data": {
    "country" : "GB",
  }
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
```

```php
<?php
$curl = curl_init();

$args = array(
  'country' => 'GB',
);

curl_setopt_array( $curl, array(
  CURLOPT_URL => "https://example.com/wp-json/cocart/v1/calculate/shipping",
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => $args,
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
  'body' => wp_json_encode( [
    'country' => 'GB',
  ] ),
  'timeout' => 30
);

$response = wp_remote_post( 'https://example.com/wp-json/cocart/v1/calculate/shipping', $args );
$body = wp_remote_retrieve_body( $response );
```

> JSON response example

```json
"Shipping costs updated."
```

## Get Shipping Methods ##

This API returns all available shipping methods once the customer has [calculated shipping](#shipping-methods-calculate-shipping).

### Properties ###

| Property             | Type   | Description                                                                                                                           |
| -------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| `cart_key`           | string | Unique identifier for the cart. <a class="label label-info" href="index.html#cart-key">?</a> <i class="label label-info">optional</i> |
| `recurring_cart_key` | string | The recurring cart key identifies each subscription in cart. <i class="label label-info">required, only for subscriptions.</i>        |

### HTTP request ###

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-get">GET</i>
    <h6>/wp-json/cocart/v1/shipping-methods</h6>
  </div>
</div>

> Example of getting the shipping methods.

```shell
curl -X GET https://example.com/wp-json/cocart/v1/shipping-methods \
  -H "Content-Type: application/json"
```

```javascript--node
CoCart.get("shipping-methods")
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
var settings = {
  "url": "https://example.com/wp-json/cocart/v1/shipping-methods",
  "method": "GET"
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
```

```php
<?php
$curl = curl_init();

curl_setopt_array( $curl, array(
  CURLOPT_URL => "https://example.com/wp-json/cocart/v1/shipping-methods",
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTPHEADER => array(
    'Accept: application/json',
    'Content-Type: application/json',
    'User-Agent: CoCart API/v1',
  )
) );

$response = curl_exec($curl);

curl_close($curl);

echo $response;
```

```php--wp-http-api
<?php
$response = wp_remote_get( 'https://example.com/wp-json/cocart/v1/shipping-methods' );
$body = wp_remote_retrieve_body( $response );
```

> JSON response example

```json
{
  "flat_rate:1":{
    "key": "flat_rate:1",
    "method_id": "flat_rate",
    "instance_id": 1,
    "label": "Flat rate",
    "cost": "33.00",
    "html": "Flat rate: £33.00",
    "taxes": {
      "12": 6.6
    },
    "chosen_method": true
  },
  "free_shipping:3":{
    "key": "free_shipping:3",
    "method_id": "free_shipping",
    "instance_id": 3,
    "label": "Free shipping",
    "cost": "0.00",
    "html": "Free shipping",
    "taxes": [],
    "chosen_method": false
  }
}
```

## Set Shipping Method ##

This API applies a shipping method to the cart. Can only apply once the customer has [calculated shipping](#shipping-methods-calculate-shipping).

### Properties ###

| Property             | Type   | Description                                                                                                                           |
| -------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| `cart_key`           | string | Unique identifier for the cart. <a class="label label-info" href="index.html#cart-key">?</a> <i class="label label-info">optional</i> |
| `key`                | string | The key of the shipping method. <i class="label label-info">required</i>                                                              |
| `recurring_cart_key` | string | The recurring cart key identifies each subscription in cart. <i class="label label-info">required, only for subscriptions.</i>        |

### HTTP request ###

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-post">POST</i>
    <h6>/wp-json/cocart/v1/shipping-methods</h6>
  </div>
</div>

> Example of setting the shipping method for the cart.

```shell
curl -X POST https://example.com/wp-json/cocart/v1/shipping-methods \
  -H "Content-Type: application/json" \
  -d '{
    "key": "free_shipping:3"
  }'
```

```javascript--node
var data = {
  "key": "free_shipping:3"
};

CoCart.post("shipping-methods", data)
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
var settings = {
  "url": "https://example.com/wp-json/cocart/v1/shipping-methods",
  "method": "POST",
  "data": {
    "key": "free_shipping:3"
  }
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
```

```php
<?php
$curl = curl_init();

$args = array(
  "key" => "free_shipping:3"
);

curl_setopt_array( $curl, array(
  CURLOPT_URL => "https://example.com/wp-json/cocart/v1/shipping-methods",
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => $args,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTPHEADER => array(
    'Accept: application/json',
    'Content-Type: application/json',
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
  'body' => wp_json_encode( [
    "key" => "free_shipping:3"
  ] ),
  'timeout' => 30
);

$response = wp_remote_post( 'https://example.com/wp-json/cocart/v1/shipping-methods', $args );
$body = wp_remote_retrieve_body( $response );
```

> JSON response example.

```json
true
```
