# Cart #

The cart API is powerful and allows you to view the cart in session, add new items, update the quantity of an item and delete individual items from the cart.

Using the individual endpoints and their properties, you can control what you need and what is returned when the request is finished.

## Retrieve Cart Contents ##

This API returns the contents of the cart from a logged in customer or guest customer.

### Properties ###

| Property  | Type    | Description                                                                   |
| --------- | ------- | ----------------------------------------------------------------------------- |
| `id`      | integer | Unique identifier for the customer. <i class="label label-info">read-only</i> |
| `thumb`   | bool    | Set as true to return the product thumbnail for each item.                    |

### HTTP request ###

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-get">GET</i>
    <h6>/wp-json/cocart/v1/get-cart</h6>
  </div>
</div>

```shell
curl -X GET https://example.com/wp-json/cocart/v1/get-cart \
  -H "Content-Type: application/json"
```

```javascript--jquery
var settings = {
  "url": "https://example.com/wp-json/cocart/v1/get-cart",
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
  CURLOPT_URL => "https://example.com/wp-json/cocart/v1/get-cart",
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_RETURNTRANSFER => true
) );

$response = curl_exec($curl);

curl_close($curl);

echo $response;
```

```php--wp-http-api
<?php
$response = wp_remote_get( 'https://example.com/wp-json/cocart/v1/get-cart' );
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

> Here is what to do to include the product thumbnail.

```shell
curl -X GET https://example.com/wp-json/cocart/v1/get-cart \
  -H "Content-Type: application/json" \
  -d '{
    "thumb": true
  }'
```

```javascript--jquery
var settings = {
  "url": "https://example.com/wp-json/cocart/v1/get-cart",
  "method": "GET",
  "data": {
    "thumb" : true
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
  CURLOPT_URL => "https://example.com/wp-json/cocart/v1/get-cart",
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
  'thumb' => true
);
$response = wp_remote_get( 'https://example.com/wp-json/cocart/v1/get-cart', $args );
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
    "product_price": "£18",
    "product_image":"https://example.com/wp-content/uploads/2019/06/vneck-tee.jpg"
  }
}
```

## Retrieve a Customers Cart Contents ##

This API returns the cart contents for a specific registered customer and is only for testing purposes. Only administrator users has the ability to access this API. You can also use the [Get Cart Content](#get-cart-contents) properties.

<aside class="notice">
  Please note that to return a registered customer, you must have persistent cart left enabled in you WooCommerce store for this to work and will only return if it has not expired or the cart is not cleared from the session table.
</aside>

### HTTP request ###

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-get">GET</i>
    <h6>/wp-json/cocart/v1/get-cart/&lt;id&gt;</h6>
  </div>
</div>

```shell
curl -X GET https://example.com/wp-json/cocart/v1/get-cart/123 \
  -u username:password \
  -H "Content-Type: application/json"
```

```javascript--jquery
var settings = {
  "url": "https://example.com/wp-json/cocart/v1/get-cart/123",
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
  CURLOPT_URL => "https://example.com/wp-json/cocart/v1/get-cart/123",
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
$response = wp_remote_get( 'https://example.com/wp-json/cocart/v1/get-cart/123', $args );
$body = wp_remote_retrieve_body( $response );
```

> The JSON response returns the same as the examples above.
