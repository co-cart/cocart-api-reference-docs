# Totals #

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [Edit on GitHub](https://github.com/co-cart/co-cart-docs/blob/master/source/includes/cocart-v1/pro/_totals.md)

This API helps you get all the cart totals including getting them individually.

## Get Cart Totals ##

This API helps you get the cart totals. You can also return the totals pre-formatted to save you time applying the currency symbol. [Get Cart Totals](index.html#get-cart-totals) properties.

<aside class="notice">
  With CoCart Pro, fees added are appended to the totals.
</aside>

The `fee_total`, `fee_tax` and `fee_taxes` are only updated if the [fees are calculated](#calculate-fees) or the [totals are calculated](#calculate-cart-totals) once the [fees have been added](#add-a-fee).

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

```javascript--jquery
var settings = {
  "url": "https://example.com/wp-json/cocart/v1/totals",
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
  CURLOPT_URL => "https://example.com/wp-json/cocart/v1/totals",
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_RETURNTRANSFER => true
) );

$response = curl_exec($curl);

curl_close($curl);

echo $response;
```

```php--wp-http-api
<?php
$response = wp_remote_get( 'https://example.com/wp-json/cocart/v1/totals' );
$body = wp_remote_retrieve_body( $response );
```

> JSON response example

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
  "fee_total":"5.00",
  "fee_tax":0.4,
  "fee_taxes":{
    "12": 0.4
  },
  "total":"146.40",
  "total_tax":15,
  "fees": {
    "cocart-extra-package-protection":{
        "id": "cocart-extra-package-protection",
        "name": "Extra Package Protection",
        "amount": "5",
        "taxable": false,
        "tax_class": "",
        "total": 500
    }
  }
}
```

## Get Discount Total ##

### HTTP request ###

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-get">GET</i>
    <h6>/wp-json/cocart/v1/totals/discount</h6>
  </div>
</div>

```shell
curl -X GET https://example.com/wp-json/cocart/v1/totals/discount \
 -H "Content-Type: application/json"
```

```javascript--jquery
var settings = {
  "url": "https://example.com/wp-json/cocart/v1/totals/discount",
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
  CURLOPT_URL => "https://example.com/wp-json/cocart/v1/totals/discount",
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_RETURNTRANSFER => true
) );

$response = curl_exec($curl);

curl_close($curl);

echo $response;
```

```php--wp-http-api
<?php
$response = wp_remote_get( 'https://example.com/wp-json/cocart/v1/totals/discount' );
$body = wp_remote_retrieve_body( $response );
```

> JSON response example

```json
"£8.40"
```

## Get Discount Totals ##

### HTTP request ###

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-get">GET</i>
    <h6>/wp-json/cocart/v1/totals/discount/coupon-totals</h6>
  </div>
</div>

```shell
curl -X GET https://example.com/wp-json/cocart/v1/totals/discount/coupon-totals \
 -H "Content-Type: application/json"
```

```javascript--jquery
var settings = {
  "url": "https://example.com/wp-json/cocart/v1/totals/discount/coupon-totals",
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
  CURLOPT_URL => "https://example.com/wp-json/cocart/v1/totals/discount/coupon-totals",
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_RETURNTRANSFER => true
) );

$response = curl_exec($curl);

curl_close($curl);

echo $response;
```

```php--wp-http-api
<?php
$response = wp_remote_get( 'https://example.com/wp-json/cocart/v1/totals/discount/coupon-totals' );
$body = wp_remote_retrieve_body( $response );
```

> JSON response example

```json
{
  "blizzard": "£8.40"
}
```

## Get Discount Tax Totals ##

### HTTP request ###

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-get">GET</i>
    <h6>/wp-json/cocart/v1/totals/discount/coupon-tax</h6>
  </div>
</div>

```shell
curl -X GET https://example.com/wp-json/cocart/v1/totals/discount/coupon-tax \
 -H "Content-Type: application/json"
```

```javascript--jquery
var settings = {
  "url": "https://example.com/wp-json/cocart/v1/totals/discount/coupon-tax",
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
  CURLOPT_URL => "https://example.com/wp-json/cocart/v1/totals/discount/coupon-tax",
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_RETURNTRANSFER => true
) );

$response = curl_exec($curl);

curl_close($curl);

echo $response;
```

```php--wp-http-api
<?php
$response = wp_remote_get( 'https://example.com/wp-json/cocart/v1/totals/discount/coupon-tax' );
$body = wp_remote_retrieve_body( $response );
```

## Get Fee Total ##

### HTTP request ###

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-get">GET</i>
    <h6>/wp-json/cocart/v1/totals/fee</h6>
  </div>
</div>

```shell
curl -X GET https://example.com/wp-json/cocart/v1/totals/fee \
 -H "Content-Type: application/json"
```

```javascript--jquery
var settings = {
  "url": "https://example.com/wp-json/cocart/v1/totals/fee",
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
  CURLOPT_URL => "https://example.com/wp-json/cocart/v1/totals/fee",
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_RETURNTRANSFER => true
) );

$response = curl_exec($curl);

curl_close($curl);

echo $response;
```

```php--wp-http-api
<?php
$response = wp_remote_get( 'https://example.com/wp-json/cocart/v1/totals/fee' );
$body = wp_remote_retrieve_body( $response );
```

> JSON response example

```json
"£40.00"
```

## Get Fee Tax ##

### HTTP request ###

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-get">GET</i>
    <h6>/wp-json/cocart/v1/totals/fee/tax</h6>
  </div>
</div>

```shell
curl -X GET https://example.com/wp-json/cocart/v1/totals/fee/tax \
 -H "Content-Type: application/json"
```

```javascript--jquery
var settings = {
  "url": "https://example.com/wp-json/cocart/v1/totals/fee/tax",
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
  CURLOPT_URL => "https://example.com/wp-json/cocart/v1/totals/fee/tax",
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_RETURNTRANSFER => true
) );

$response = curl_exec($curl);

curl_close($curl);

echo $response;
```

```php--wp-http-api
<?php
$response = wp_remote_get( 'https://example.com/wp-json/cocart/v1/totals/fee/tax' );
$body = wp_remote_retrieve_body( $response );
```

## Get Shipping Total ##

### HTTP request ###

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-get">GET</i>
    <h6>/wp-json/cocart/v1/totals/shipping</h6>
  </div>
</div>

```shell
curl -X GET https://example.com/wp-json/cocart/v1/totals/shipping \
 -H "Content-Type: application/json"
```

```javascript--jquery
var settings = {
  "url": "https://example.com/wp-json/cocart/v1/totals/shipping",
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
  CURLOPT_URL => "https://example.com/wp-json/cocart/v1/totals/shipping",
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_RETURNTRANSFER => true
) );

$response = curl_exec($curl);

curl_close($curl);

echo $response;
```

```php--wp-http-api
<?php
$response = wp_remote_get( 'https://example.com/wp-json/cocart/v1/totals/shipping' );
$body = wp_remote_retrieve_body( $response );
```

## Get Shipping Tax ##

### HTTP request ###

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-get">GET</i>
    <h6>/wp-json/cocart/v1/totals/shipping/tax</h6>
  </div>
</div>

```shell
curl -X GET https://example.com/wp-json/cocart/v1/totals/shipping/tax \
 -H "Content-Type: application/json"
```

```javascript--jquery
var settings = {
  "url": "https://example.com/wp-json/cocart/v1/totals/shipping/tax",
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
  CURLOPT_URL => "https://example.com/wp-json/cocart/v1/totals/shipping/tax",
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_RETURNTRANSFER => true
) );

$response = curl_exec($curl);

curl_close($curl);

echo $response;
```

```php--wp-http-api
<?php
$response = wp_remote_get( 'https://example.com/wp-json/cocart/v1/totals/shipping/tax' );
$body = wp_remote_retrieve_body( $response );
```

## Get Subtotal ##

### HTTP request ###

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-get">GET</i>
    <h6>/wp-json/cocart/v1/totals/subtotal</h6>
  </div>
</div>

```shell
curl -X GET https://example.com/wp-json/cocart/v1/totals/subtotal \
 -H "Content-Type: application/json"
```

```javascript--jquery
var settings = {
  "url": "https://example.com/wp-json/cocart/v1/totals/subtotal",
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
  CURLOPT_URL => "https://example.com/wp-json/cocart/v1/totals/subtotal",
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_RETURNTRANSFER => true
) );

$response = curl_exec($curl);

curl_close($curl);

echo $response;
```

```php--wp-http-api
<?php
$response = wp_remote_get( 'https://example.com/wp-json/cocart/v1/totals/subtotal' );
$body = wp_remote_retrieve_body( $response );
```

> JSON response example

```json
"£42.00"
```

## Get Subtotal Tax ##

### HTTP request ###

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-get">GET</i>
    <h6>/wp-json/cocart/v1/totals/subtotal/tax</h6>
  </div>
</div>

```shell
curl -X GET https://example.com/wp-json/cocart/v1/totals/subtotal/tax \
 -H "Content-Type: application/json"
```

```javascript--jquery
var settings = {
  "url": "https://example.com/wp-json/cocart/v1/totals/subtotal/tax",
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
  CURLOPT_URL => "https://example.com/wp-json/cocart/v1/totals/subtotal/tax",
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_RETURNTRANSFER => true
) );

$response = curl_exec($curl);

curl_close($curl);

echo $response;
```

```php--wp-http-api
<?php
$response = wp_remote_get( 'https://example.com/wp-json/cocart/v1/totals/subtotal/tax' );
$body = wp_remote_retrieve_body( $response );
```

## Get Cart Total Tax ##

### HTTP request ###

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-get">GET</i>
    <h6>/wp-json/cocart/v1/totals/tax</h6>
  </div>
</div>

```shell
curl -X GET https://example.com/wp-json/cocart/v1/totals/tax \
 -H "Content-Type: application/json"
```

```javascript--jquery
var settings = {
  "url": "https://example.com/wp-json/cocart/v1/totals/tax",
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
  CURLOPT_URL => "https://example.com/wp-json/cocart/v1/totals/tax",
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_RETURNTRANSFER => true
) );

$response = curl_exec($curl);

curl_close($curl);

echo $response;
```

```php--wp-http-api
<?php
$response = wp_remote_get( 'https://example.com/wp-json/cocart/v1/totals/tax' );
$body = wp_remote_retrieve_body( $response );
```

## Get Cart Total ##

### HTTP request ###

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-get">GET</i>
    <h6>/wp-json/cocart/v1/totals/total</h6>
  </div>
</div>

```shell
curl -X GET https://example.com/wp-json/cocart/v1/totals/total \
 -H "Content-Type: application/json"
```

```javascript--jquery
var settings = {
  "url": "https://example.com/wp-json/cocart/v1/totals/total",
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
  CURLOPT_URL => "https://example.com/wp-json/cocart/v1/totals/total",
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_RETURNTRANSFER => true
) );

$response = curl_exec($curl);

curl_close($curl);

echo $response;
```

```php--wp-http-api
<?php
$response = wp_remote_get( 'https://example.com/wp-json/cocart/v1/totals/total' );
$body = wp_remote_retrieve_body( $response );
```

> JSON response example

```json
"£33.60"
```
