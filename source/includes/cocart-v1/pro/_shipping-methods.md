# Shipping Methods #

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [Edit on GitHub](https://github.com/co-cart/co-cart-docs/blob/master/source/includes/cocart-v1/pro/_shipping-methods.md)

This API helps you get and set shipping methods.

## Get Shipping Methods ##

Returns all available shipping methods once the customer has [calculated shipping](#calculate-calculate-shipping).

### Properties ###

| Property             | Type   | Description       |
| -------------------- | ------ | ----------------- |
| `recurring_cart_key` | string | The recurring cart key identifies each subscription in cart. <i class="label label-info">required, only for subscriptions.</i> |

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

Apply a shipping method to the cart. Can only apply once the customer has calculated shipping.

### Properties ###

| Property             | Type   | Description       |
| -------------------- | ------ | ----------------- |
| `key`                | string | The key of the shipping method. <i class="label label-info">required</i> |
| `recurring_cart_key` | string | The recurring cart key identifies each subscription in cart. <i class="label label-info">required, only for subscriptions.</i> |

### HTTP request ###

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-post">POST</i>
    <h6>/wp-json/cocart/v1/shipping-methods</h6>
  </div>
</div>

```shell
curl -X POST https://example.com/wp-json/cocart/v1/shipping-methods \
  -H "Content-Type: application/json" \
  -d '{
    "key": "free_shipping:3"
  }'
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
