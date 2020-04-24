# Cart #

A new addition to carts is the ability to view any cart in session.

## Retrieve a Cart ##

This API allows you to retrieve a cart stored in the database that is in session.

The properties are the same except the ID property is used to identify the cart key in the database instead and is required in order to use this API.

<aside class="notice">
  If the cart you requested does not return. Then the cart in session either does not exist or has expired. By default, carts are stored in the database for 30 days from the last cart update.
</aside>

### Properties ###

| Attribute | Type   | Description                                                              |
| --------- | ------ | ------------------------------------------------------------------------ |
| `id`      | string | Unique identifier for the cart. <i class="label label-info">required</i> |
| `thumb`   | bool   | Set as true to return the product thumbnail for each item.               |

### HTTP request ###

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-get">GET</i>
    <h6>/wp-json/cocart/v1/get-cart/saved</h6>
  </div>
</div>

```shell
curl -X GET https://example.com/wp-json/cocart/v1/get-cart/saved \
  -H "Content-Type: application/json" \
  -d '{
    "id": "edc0b4345d20d0c6859c919463bdd15d",
  }'
```

```javascript--jquery
var settings = {
  "url": "https://example.com/wp-json/cocart/v1/get-cart/saved",
  "method": "GET",
  "data": {
    "id": "edc0b4345d20d0c6859c919463bdd15d"
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
  'id' => 'edc0b4345d20d0c6859c919463bdd15d'
);

curl_setopt_array( $curl, array(
  CURLOPT_URL => "https://example.com/wp-json/cocart/v1/get-cart/saved",
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
  'id' => 'edc0b4345d20d0c6859c919463bdd15d'
);

$response = wp_remote_get( 'https://example.com/wp-json/cocart/v1/get-cart/saved', $args );
$body = wp_remote_retrieve_body( $response );
```

> JSON response example

## Retrieve a Customers Cart saved via Persistent Cart ##

<aside class="warning">
Only the route of this endpoint has changed in this release in order to support getting carts in session better. Was previously <em>/get-cart/1</em>, now changed to <em>/get-cart/customer/1</em>.
</aside>

This API returns the cart contents for a specific registered customer and is mainly for testing purposes. Only **administrator users** has the ability to access this API.

<aside class="notice">
  Please note that to return a registered customer, you must have <strong>persistent cart</strong> left enabled in you WooCommerce store for this to work and will only return cart data if one exists for that customer.
</aside>

### Properties ###

| Property  | Type    | Description                                                                   |
| --------- | ------- | ----------------------------------------------------------------------------- |
| `id`      | integer | Unique identifier for the customer. <i class="label label-info">read-only</i> |
| `thumb`   | bool    | Set as true to return the product thumbnail for each item.                    |

### HTTP request ###

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-get">GET</i>
    <h6>/wp-json/cocart/v1/get-cart/customer/&lt;id&gt;</h6>
  </div>
</div>

```shell
curl -X GET https://example.com/wp-json/cocart/v1/get-cart/customer/123 \
  -u username:password \
  -H "Content-Type: application/json"
```

```javascript--jquery
var settings = {
  "url": "https://example.com/wp-json/cocart/v1/get-cart/customer/123",
  "method": "GET",
  "headers": {
    'Authorization', 'Basic ' + btoa( username + ':' + password ) )
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
  'thumb' => true
);

curl_setopt_array( $curl, array(
  CURLOPT_URL => "https://example.com/wp-json/cocart/v1/get-cart/customer/123",
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_HTTPHEADER => [
    'Authorization: Basic ' . base64_encode($username . ':' . $password)
  ],
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
    'Authorization' => 'Basic ' . base64_encode( username . ':' . password )
  )
);
$response = wp_remote_get( 'https://example.com/wp-json/cocart/v1/get-cart/customer/123', $args );
$body = wp_remote_retrieve_body( $response );
```

> The JSON response returns similar as the example above.
