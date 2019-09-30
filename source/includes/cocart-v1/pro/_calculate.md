# Calculate #

The following allow you to calculate fees, shipping and the totals of the cart.

## Calculate Cart Totals ##

This API helps you calculate the cart totals. You can also request to return the totals once calculated to reduce API requests and use the [Get Cart Totals](index.html#get-cart-totals) properties.

<aside class="notice">
  CoCart Pro overrides the calculation endpoint in order to also calculate fees and shipping costs before the totals.
</aside>

### Properties ###

| Attribute | Type | Description       |
| --------- | ---- | ----------------- |
| `return`  | bool | Set as true to return the totals once calculated. <i class="label label-info">optional</i> |

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

```javascript--jquery
var settings = {
  "url": "https://example.com/wp-json/cocart/v1/calculate",
  "method": "POST"
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
```

```php
<?php
$curl = curl_init();

curl_setopt_array( $curl, array(
  CURLOPT_URL => "https://example.com/wp-json/cocart/v1/calculate",
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_RETURNTRANSFER => true
) );

$response = curl_exec($curl);

curl_close($curl);

echo $response;
```

```php--wp-http-api
<?php
$response = wp_remote_post( 'https://example.com/wp-json/cocart/v1/calculate' );
$body = wp_remote_retrieve_body( $response );
```

> JSON response example

```json
"Cart totals have been calculated."
```

## Calculate Fees ##

This API helps you calculate the fees.

### Properties ###

| Attribute     | Type | Description       |
| ------------- | ---- | ----------------- |
| `set_session` | bool | Sets the cart fees in session once calculated. <i class="label label-info">optional, used mainly for internal use.</i> |
| `return`      | bool | Returns the cart fees once calculated. |

#### HTTP request ####

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-post">POST</i>
    <h6>/wp-json/cocart/v1/calculate/fees</h6>
  </div>
</div>

```shell
curl -X POST https://example.com/wp-json/cocart/v1/calculate/fees \
  -H "Content-Type: application/json"
```

```javascript--jquery
var settings = {
  "url": "https://example.com/wp-json/cocart/v1/calculate/fees",
  "method": "POST"
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
```

```php
<?php
$curl = curl_init();

curl_setopt_array( $curl, array(
  CURLOPT_URL => "https://example.com/wp-json/cocart/v1/calculate/fees",
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_RETURNTRANSFER => true
) );

$response = curl_exec($curl);

curl_close($curl);

echo $response;
```

```php--wp-http-api
<?php
$response = wp_remote_post( 'https://example.com/wp-json/cocart/v1/calculate/fees' );
$body = wp_remote_retrieve_body( $response );
```

> JSON response example

```json
"Cart fees have been calculated."
```

## Calculate Shipping ##

This API helps you calculate the shipping costs and get the available methods. You can also request to return the shipping methods once calculated to reduce API requests.

### Properties ###

| Attribute        | Type   | Description       |
| ---------------- | ------ | ----------------- |
| `country`        | string | Set the country of the shipping location. <i class="label label-info">required</i> |
| `state`          | string | Setting the state is optional but maybe required under some circumstances. <i class="label label-info">optional</i> |
| `city`           | string | Set the city to specify location in country. <i class="label label-info">optional</i> |
| `postcode`       | string | Enter postcode / ZIP to narrow down location for more accurate shipping cost. <i class="label label-info">optional</i> |
| `return_methods` | bool   | Set as true to return the shipping methods once calculated. <i class="label label-info">optional</i> |

#### HTTP request ####

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
  CURLOPT_RETURNTRANSFER => true
) );

$response = curl_exec($curl);

curl_close($curl);

echo $response;
```

```php--wp-http-api
<?php
$args = array(
  'country' => 'GB',
);

$response = wp_remote_post( 'https://example.com/wp-json/cocart/v1/calculate/shipping', $args );
$body = wp_remote_retrieve_body( $response );
```

> JSON response example

```json
"Shipping costs updated."
```
