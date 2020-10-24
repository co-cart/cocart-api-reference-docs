# Fees #

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [Edit on GitHub](https://github.com/co-cart/co-cart-docs/blob/master/source/includes/cocart-v1/pro/_fees.md)

This API helps you add a fee to the cart, get all fees added, and remove all fees.

## Get Fees ##

Returns all applied fees to the cart.

### Properties ###

| Property   | Type   | Description                                                             |
| ---------- | ------ | ----------------------------------------------------------------------- |
| `cart_key` | string | Unique identifier for the cart. <i class="label label-info">optional</> |

#### HTTP request ####

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-get">GET</i>
    <h6>/wp-json/cocart/v1/fees</h6>
  </div>
</div>

```shell
curl -X GET https://example.com/wp-json/cocart/v1/fees \
  -H "Content-Type: application/json"
```

```javascript--jquery
var settings = {
  "url": "https://example.com/wp-json/cocart/v1/fees",
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
  CURLOPT_URL => "https://example.com/wp-json/cocart/v1/fees",
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
$response = wp_remote_get( 'https://example.com/wp-json/cocart/v1/fees' );
$body = wp_remote_retrieve_body( $response );
```

> JSON response example for returning already applied fees.

```json
{
  "cocart-extra-package-protection":{
    "id": "cocart-extra-package-protection",
    "name": "Extra Package Protection",
    "amount": "40",
    "taxable": false,
    "tax_class": "",
    "total": 4000
  }
}
```

## Add a Fee ##

Apply a fee to the cart.

### Properties ###

| Property    | Type   | Description                                                                |
| ----------- | ------ | -------------------------------------------------------------------------- |
| `cart_key`  | string | Unique identifier for the cart. <i class="label label-info">optional</i>   |
| `name`      | string | Name of the fee. <i class="label label-info">required</i>                  |
| `amount`    | string | Amount for the fee. <i class="label label-info">required</i>               |
| `taxable`   | bool   | Determines if the fee is taxable. <i class="label label-info">optional</i> |
| `tax_class` | string | The tax class the fee applies to. <i class="label label-info">optional</i> |

#### HTTP request ####

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-post">POST</i>
    <h6>/wp-json/cocart/v1/fees</h6>
  </div>
</div>

```shell
curl -X POST https://example.com/wp-json/cocart/v1/fees \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Extra Package Protection",
    "amount": "40"
  }'
```

```javascript--jquery
var settings = {
  "url": "https://example.com/wp-json/cocart/v1/fees",
  "method": "POST",
  "data": {
    "name": "Extra Package Protection",
    "amount": "40"
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
  "name"   => "Extra Package Protection",
  "amount" => "40"
);

curl_setopt_array( $curl, array(
  CURLOPT_URL => "https://example.com/wp-json/cocart/v1/fees",
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
  "name"   => "Extra Package Protection",
  "amount" => "40"
);
$response = wp_remote_post( 'https://example.com/wp-json/cocart/v1/fees', $args );
$body = wp_remote_retrieve_body( $response );
```

> JSON response example.

```json
{
    "Fee \"Extra Package Protection\" for £40.00 has been added."
}
```

## Remove Fees ##

Remove all fees from the cart.

### Properties ###

| Property   | Type   | Description                                                             |
| ---------- | ------ | ----------------------------------------------------------------------- |
| `cart_key` | string | Unique identifier for the cart. <i class="label label-info">optional</> |

#### HTTP request ####

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-delete">DELETE</i>
    <h6>/wp-json/cocart/v1/fees</h6>
    </div>
</div>

```shell
curl -X DELETE https://example.com/wp-json/cocart/v1/fees \
  -H "Content-Type: application/json" \
```

```javascript--jquery
var settings = {
  "url": "https://example.com/wp-json/cocart/v1/fees",
  "method": "DELETE"
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
```

```php
<?php
$curl = curl_init();

curl_setopt_array( $curl, array(
  CURLOPT_URL => "https://example.com/wp-json/cocart/v1/fees",
  CURLOPT_CUSTOMREQUEST => "DELETE",
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
  'method' => 'DELETE'
);
$response = wp_remote_request( 'https://example.com/wp-json/cocart/v1/fees', $args );
$body = wp_remote_retrieve_body( $response );
```

> JSON response example.

```json
{
    "All cart fees have been removed."
}
```
