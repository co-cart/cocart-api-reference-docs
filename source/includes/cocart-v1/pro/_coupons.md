# Coupons #

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [Edit on GitHub](https://github.com/co-cart/co-cart-docs/blob/master/source/includes/cocart-v1/pro/_coupons.md)

This API helps you get applied coupons, add coupons to cart, remove coupons from cart and check coupons for validation.

### Coupon Properties ###

| Property  | Type   | Description       |
| --------- | ------ | ----------------- |
| `coupon`  | string | Coupon code is required in order to apply it to or remove it from cart. <i class="label label-info">required</i> |

## Applied Coupons ##

Returns all applied coupons to the cart.

### HTTP request ###

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-get">GET</i>
    <h6>/wp-json/cocart/v1/coupon</h6>
  </div>
</div>

```shell
curl -X GET https://example.com/wp-json/cocart/v1/coupon \
  -H "Content-Type: application/json"
```

```javascript--jquery
var settings = {
  "url": "https://example.com/wp-json/cocart/v1/coupon",
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
  CURLOPT_URL => "https://example.com/wp-json/cocart/v1/coupon",
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_RETURNTRANSFER => true
) );

$response = curl_exec($curl);

curl_close($curl);

echo $response;
```

```php--wp-http-api
<?php
$response = wp_remote_get( 'https://example.com/wp-json/cocart/v1/coupon' );
$body = wp_remote_retrieve_body( $response );
```

> JSON response example for returning already applied coupons.

```json
{
  "summer20"
}
```

## Apply Coupon ##

Apply a coupon to the cart.

### HTTP request ###

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-post">POST</i>
    <h6>/wp-json/cocart/v1/coupon</h6>
  </div>
</div>

```shell
curl -X POST https://example.com/wp-json/cocart/v1/coupon \
  -H "Content-Type: application/json" \
  -d '{
    "coupon": "summer20"
  }'
```

```javascript--jquery
var settings = {
  "url": "https://example.com/wp-json/cocart/v1/coupon",
  "method": "POST",
  "data": {
    "coupon": "summer20"
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
  'coupon' => 'summer20'
);

curl_setopt_array( $curl, array(
  CURLOPT_URL => "https://example.com/wp-json/cocart/v1/coupon",
  CURLOPT_CUSTOMREQUEST => "POST",
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
  'coupon' => 'summer20'
);
$response = wp_remote_post( 'https://example.com/wp-json/cocart/v1/coupon', $args );
$body = wp_remote_retrieve_body( $response );
```

> JSON response example.

```json
{
    "message": "Coupon was successfully added to cart.",
    "coupon": "summer20",
    "response": true
}
```

## Remove Coupon ##

Remove a coupon from the cart.

### HTTP request ###

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-delete">DELETE</i>
    <h6>/wp-json/cocart/v1/coupon</h6>
    </div>
</div>

```shell
curl -X DELETE https://example.com/wp-json/cocart/v1/coupon \
  -H "Content-Type: application/json" \
  -d '{
    "coupon": "summer20"
  }'
```

```javascript--jquery
var settings = {
  "url": "https://example.com/wp-json/cocart/v1/coupon",
  "method": "DELETE",
  "data": {
    "coupon": "summer20"
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
  'coupon' => 'summer20'
);

curl_setopt_array( $curl, array(
  CURLOPT_URL => "https://example.com/wp-json/cocart/v1/coupon",
  CURLOPT_CUSTOMREQUEST => "DELETE",
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
  'method' => 'DELETE',
  'coupon' => 'summer20'
);
$response = wp_remote_request( 'https://example.com/wp-json/cocart/v1/coupon', $args );
$body = wp_remote_retrieve_body( $response );
```

> JSON response example.

```json
{
    "message": "Coupon was successfully removed from cart.",
    "coupon": "summer20",
    "response": true
}
```

## Check Coupons ##

Checks applied coupons to see if they are still valid or if they have expired or no longer valid.

### HTTP request ###

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-get">GET</i>
    <h6>/wp-json/cocart/v1/check-coupons</h6>
  </div>
</div>

```shell
curl -X GET https://example.com/wp-json/cocart/v1/check-coupons \
  -H "Content-Type: application/json"
```

```javascript--jquery
var settings = {
  "url": "https://example.com/wp-json/cocart/v1/check-coupons",
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
  CURLOPT_URL => "https://example.com/wp-json/cocart/v1/check-coupons",
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_RETURNTRANSFER => true
) );

$response = curl_exec($curl);

curl_close($curl);

echo $response;
```

```php--wp-http-api
<?php
$response = wp_remote_get( 'https://example.com/wp-json/cocart/v1/check-coupons' );
$body = wp_remote_retrieve_body( $response );
```

> JSON response example.

```json
"Coupons applied are still valid!"
```
