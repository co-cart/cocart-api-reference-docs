# Get Cart #

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [Edit on GitHub](https://github.com/co-cart/co-cart-docs/blob/master/source/includes/cocart-v1/_cart.md)

The cart API is powerful and allows you to view the cart in session, add new items, update the quantity of an item and delete individual items from the cart.

Using the individual endpoints and their properties, you can control what you need and what is returned when the request is finished.

 * [Get Cart Contents](#get-cart-get-cart-contents)
 * [Cart for Guest Customers](#get-cart-cart-for-guest-customers)
 * [Retrieve a Cart in Session](#get-cart-retrieve-a-cart-in-session)
 * [Clear Cart](#get-cart-clear-cart)

## Get Cart Contents ##

This API returns the contents of the cart for a guest customer or logged in registered customer.

### Properties ###

| Property   | Type   | Description                                                                                                                 |
| ---------- | ------ | --------------------------------------------------------------------------------------------------------------------------- |
| `cart_key` | string | Unique identifier for the cart. <a class="label label-info" href="#cart-key">?</a> <i class="label label-info">optional</i> |
| `thumb`    | bool   | Set as true to return the product thumbnail for each item.                                                                  |

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

```javascript--node
CoCart.get("get-cart")
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
$response = wp_remote_get( 'https://example.com/wp-json/cocart/v1/get-cart' );
$body = wp_remote_retrieve_body( $response );
```

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

```javascript--node
CoCart.get("get-cart", {
  thumb: true
})
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
    'thumb' => true
  ] )
);

$response = wp_remote_get( 'https://example.com/wp-json/cocart/v1/get-cart', $args );
$body = wp_remote_retrieve_body( $response );
```

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

## Cart for Guest Customers ##

<span class="new">Supported since v2.1</span>

For guest customers there are two methods available for developers to use. The first method uses a cookie and handles everything for you. The second method allows you to set the cart key yourself.

### Cookie Method ###

Once a new customer has added the first item, a cookie is generated that stores the cart key and cart expiration. This cookie is used in order to load the cart again for that individual customer. No parameters are required to pass as it is all done in the background.

### Cart Key Method ###

This method allows you to set the cart key yourself via the `cart_key` parameter which must be passed with each API request made. This sets the ID in session allowing to create/fetch the cart before changes are made.

<aside class="notice">
  The cart key cannot be longer than <strong>42 characters</strong> as that is the limit for the database.
</aside>

<aside class="warning">
    The <code>cart_key</code> parameter is a global parameter so it must be queried rather than being added as part of the data you send with the API request you make. Otherwise it will not update the cart.
</aside>

> Example of getting the cart for a guest customer.

```shell
curl -X GET https://example.com/wp-json/cocart/v1/get-cart?cart_key=9e18904482b4faf8762361836a83b93d \
  -H "Content-Type: application/json"
```

```javascript--node
CoCart.get("get-cart?cart_key=9e18904482b4faf8762361836a83b93d")
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
  "url": "https://example.com/wp-json/cocart/v1/get-cart?cart_key=9e18904482b4faf8762361836a83b93d",
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
  CURLOPT_URL => "https://example.com/wp-json/cocart/v1/get-cart?cart_key=9e18904482b4faf8762361836a83b93d",
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
  )
);

$response = wp_remote_get( 'https://example.com/wp-json/cocart/v1/get-cart?cart_key=9e18904482b4faf8762361836a83b93d', $args );
$body = wp_remote_retrieve_body( $response );
```

> JSON response is the same as the example above.

## Retrieve a Cart in Session ##

This API allows you to retrieve a cart stored in the database that is in session.

<aside class="warning">
  This API does not load the cart into session for the customer. Carts for guest customers are loaded via a cookie stored on their device or set by a cart key. Carts for registered customers are loaded via the database as normal when authenticated. See <a href="#guest-customers">Guest Customers</a> for more details.
</aside>

<aside class="notice">
  If the cart you requested does not return then the cart in session either does not exist or has expired. By default, carts are stored in the database for 7 days from the last cart update.
</aside>

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

```javascript--node
CoCart.get("get-cart/9e18904482b4faf8762361836a83b93d")
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
$response = wp_remote_get( 'https://example.com/wp-json/cocart/v1/get-cart/9e18904482b4faf8762361836a83b93d' );
$body = wp_remote_retrieve_body( $response );
```

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
