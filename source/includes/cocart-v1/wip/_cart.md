# Cart #

A new addition to cart API is the ability to view any cart in session now that support for guest customers is available.

## Guest Customers ##

For guest customers there are two methods available for developers to use. The first method uses a cookie and handles everything for you. The second method allows you to set the cart ID yourself.

### Cookie Method ###

Once a new customer has added the first item, a cookie is generated that stores a cart key. This cookie is used to retrieve the cart key and cart expiration in order to load the cart again for that individual customer. No parameters are required to pass as it is all done in the background.

### Set Cart ID Method ###

This method allows you to set the cart key yourself via the `id` parameter which must be passed with each API request made. This sets the ID in session allowing to fetch the cart before changes are made.

<aside class="warning">
	Unlike the cookie method, the downside to this method is that the cart expiration does not update.
</aside>

Here are a few examples on how to pass the cart ID with each API request.

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-get">GET CART</i>
    <h6>/wp-json/cocart/v1/get-cart/?id=9e18904482b4faf8762361836a83b93d</h6>
  </div>
</div>

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-post">ADD ITEM</i>
    <h6>/wp-json/cocart/v1/add-item/?id=9e18904482b4faf8762361836a83b93d&product_id=32</h6>
  </div>
</div>

## Retrieve a Cart ##

This API allows you to retrieve a cart stored in the database that is in session.

<aside class="warning">
	This API does not load the cart into session for the customer. Carts for guest customers are loaded via a cookie stored on their device or set by a cart ID. Carts for registered customers are loaded via the database as normal. See <a href="#guest-customers">Guest Customers</a> for more details.
</aside>

<aside class="notice">
	If the cart you requested does not return. Then the cart in session either does not exist or has expired. By default, carts are stored in the database for 30 days from the last cart update.
</aside>

### Properties ###

| Attribute | Type   | Description                                                              |
| --------- | ------ | ------------------------------------------------------------------------ |
| `id`      | string | Unique identifier for the cart. <i class="label label-info">mandatory</i> |
| `thumb`   | bool   | Set as true to return the product thumbnail for each item.               |

### HTTP request ###

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-get">GET</i>
    <h6>/wp-json/cocart/v1/get-cart/9e18904482b4faf8762361836a83b93d</h6>
  </div>
</div>

```shell
curl -X GET https://example.com/wp-json/cocart/v1/get-cart/9e18904482b4faf8762361836a83b93d \
  -H "Content-Type: application/json" \
```

```javascript--jquery
var settings = {
  "url": "https://example.com/wp-json/cocart/v1/get-cart/9e18904482b4faf8762361836a83b93d",
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
  CURLOPT_URL => "https://example.com/wp-json/cocart/v1/get-cart/9e18904482b4faf8762361836a83b93d",
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_RETURNTRANSFER => true
) );

$response = curl_exec($curl);

curl_close($curl);

echo $response;
```

```php--wp-http-api
<?php
$response = wp_remote_get( 'https://example.com/wp-json/cocart/v1/get-cart/9e18904482b4faf8762361836a83b93d' );
$body = wp_remote_retrieve_body( $response );
```

> JSON response example

```json
{
  "19ca14e7ea6328a42e0eb13d585e4c22":{
    "key":"19ca14e7ea6328a42e0eb13d585e4c22",
    "product_id":36,
    "variation_id":0,
    "variation":[],
    "quantity":1,
    "data_hash":"b5c1d5ca8bae6d4896cf1807cdf763f0",
    "line_tax_data": {
      "subtotal": {
        "12": 8.4
      },
      "total": {
        "12": 8.4
      }
    },
    "line_subtotal":18,
    "line_subtotal_tax":8.4,
    "line_total":14.4,
    "line_tax":8.4,
    "data":{},
    "product_name":"Vneck Tshirt",
    "product_title":"Vneck Tshirt",
    "product_price": "£18"
  }
}
```

## Retrieve a Customers Cart saved via Persistent Cart ##

<aside class="warning">
	Only the route of this endpoint has changed in this release in order to support getting carts in session better. Was previously <strong><em>/get-cart/1</em></strong>, now changed to <strong><em>/get-cart/customer/1</em></strong>.
</aside>

This API returns the cart contents for a specific registered customer and is mainly for testing purposes. Only **administrator users** has the ability to access this API.

<aside class="notice">
	Please note that to return a registered customer, you must have <strong>persistent cart</strong> left enabled in you WooCommerce store for this to work and will only return cart data if one exists for that customer.
</aside>

### Properties ###

| Property  | Type    | Description                                                                   |
| --------- | ------- | ----------------------------------------------------------------------------- |
| `id`      | integer | Unique identifier for the customer. <i class="label label-info">mandatory, read-only</i> |
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
