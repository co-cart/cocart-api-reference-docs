# Sessions #

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [Edit on GitHub](https://github.com/co-cart/co-cart-docs/blob/master/source/includes/cocart-v2/wip/_sessions.md)

<aside class="warning">
  These API's are for administrators/shop managers <strong>ONLY</strong>!
</aside>

 * [Get Sessions](#sessions-get-sessions)
 * [View Cart in Session](#sessions-view-cart-in-session)
 * [View Cart Items in Session](#sessions-view-cart-items-in-session)

## Get Sessions ##

This API helps you retrieve all sessions for the store.

### HTTP request ###

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-get">GET</i>
    <h6>/wp-json/cocart/v2/sessions</h6>
  </div>
</div>

```shell
curl -X GET https://example.com/wp-json/cocart/v2/sessions \
  -u username:password \
  -H "Content-Type: application/json"
```

```javascript--node
// import CoCartAPI from "@cocart/cocart-rest-api"; // Supports ESM
const CoCartAPI = require("@cocart/cocart-rest-api").default;
 
const CoCart = new CoCartAPI({
  url: "https://example.com",
  consumerKey: 'sebtest123',
  consumerSecret: 'happycoding24'
});

CoCart.get("sessions")
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
$.ajax({
  url: "https://example.com/wp-json/cocart/v2/sessions",
  headers: {
      "Authorization": "Basic " + btoa('username:password'),
  },
  method: "GET",
  dataType: "json",
  contentType: "application/json; charset=utf-8",
  complete: function (response) {
    console.log(response);
  }
});
```

```php
<?php
$curl = curl_init();

curl_setopt_array( $curl, array(
  CURLOPT_URL => "https://example.com/wp-json/cocart/v2/sessions",
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTPHEADER => array(
    'Accept: application/json',
    'User-Agent: CoCart API/v2',
    'Authorization: Basic ' . base64_encode($username . ':' . $password)
  )
) );

$response = curl_exec($curl);

curl_close($curl);

echo $response;
```

```php--wp-http-api
<?php
$response = wp_remote_get( 'https://example.com/wp-json/cocart/v2/sessions' );
$body = wp_remote_retrieve_body( $response );
```

```json
[
  {
    "cart_id": "4038",
    "cart_key": "afa399e3a0647fe660438409d9ad7eb9",
    "customers_name": "John Snow",
    "customers_email": "",
    "cart_created": "04/23/2021 07:46:59",
    "cart_expiry": "04/30/2021 07:48:40",
    "cart_source": "woocommerce",
    "link": "https://example.com/wp-json/cocart/v2/session/afa399e3a0647fe660438409d9ad7eb9"
  },
  {
    "cart_id": "4335",
    "cart_key": "8f36f08beca94f2b51faedcb7c6864b8",
    "customers_name": "Clark Kent",
    "customers_email": "clark@dailyplanet.wb",
    "cart_created": "04/25/2021 12:14:09",
    "cart_expiry": "05/02/2021 12:14:05",
    "cart_source": "cocart",
    "link": "https://example.com/wp-json/cocart/v2/session/8f36f08beca94f2b51faedcb7c6864b8"
  }
]
```

## View Cart in Session ##

This API helps you retrieve a specified session and return the cart details.

### HTTP request ###

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-get">GET</i>
    <h6>/wp-json/cocart/v2/session/&lt;cart_key&gt;</h6>
  </div>
</div>

```shell
curl -X GET https://example.com/wp-json/cocart/v2/session/<cart_key> \
  -u username:password \
  -H "Content-Type: application/json"
```

```javascript--node
// import CoCartAPI from "@cocart/cocart-rest-api"; // Supports ESM
const CoCartAPI = require("@cocart/cocart-rest-api").default;
 
const CoCart = new CoCartAPI({
  url: "https://example.com",
  consumerKey: 'sebtest123',
  consumerSecret: 'happycoding24'
});

CoCart.get("session/<cart_key>")
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
$.ajax({
  url: "https://example.com/wp-json/cocart/v2/session/<cart_key>",
  headers: {
      "Authorization": "Basic " + btoa('username:password'),
  },
  method: "GET",
  dataType: "json",
  contentType: "application/json; charset=utf-8",
  complete: function (response) {
    console.log(response);
  }
});
```

```php
<?php
$curl = curl_init();

curl_setopt_array( $curl, array(
  CURLOPT_URL => "https://example.com/wp-json/cocart/v2/session/<cart_key>",
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTPHEADER => array(
    'Accept: application/json',
    'User-Agent: CoCart API/v2',
    'Authorization: Basic ' . base64_encode($username . ':' . $password)
  )
) );

$response = curl_exec($curl);

curl_close($curl);

echo $response;
```

```php--wp-http-api
<?php
$response = wp_remote_get( 'https://example.com/wp-json/cocart/v2/session/<cart_key>' );
$body = wp_remote_retrieve_body( $response );
```

```json
```

## View Cart Items in Session ##

This API helps you retrieve a specified session and returns just the cart items.

### HTTP request ###

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-get">GET</i>
    <h6>/wp-json/cocart/v2/session/&lt;cart_key&gt;/items</h6>
  </div>
</div>

```shell
curl -X GET https://example.com/wp-json/cocart/v2/session/<cart_key>/items \
  -u username:password \
  -H "Content-Type: application/json"
```

```javascript--node
// import CoCartAPI from "@cocart/cocart-rest-api"; // Supports ESM
const CoCartAPI = require("@cocart/cocart-rest-api").default;
 
const CoCart = new CoCartAPI({
  url: "https://example.com",
  consumerKey: 'sebtest123',
  consumerSecret: 'happycoding24'
});

CoCart.get("session/<cart_key>/items")
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
$.ajax({
  url: "https://example.com/wp-json/cocart/v2/session/<cart_key>/items",
  headers: {
      "Authorization": "Basic " + btoa('username:password'),
  },
  method: "GET",
  dataType: "json",
  contentType: "application/json; charset=utf-8",
  complete: function (response) {
    console.log(response);
  }
});
```

```php
<?php
$curl = curl_init();

curl_setopt_array( $curl, array(
  CURLOPT_URL => "https://example.com/wp-json/cocart/v2/session/<cart_key>/items",
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTPHEADER => array(
    'Accept: application/json',
    'User-Agent: CoCart API/v2',
    'Authorization: Basic ' . base64_encode($username . ':' . $password)
  )
) );

$response = curl_exec($curl);

curl_close($curl);

echo $response;
```

```php--wp-http-api
<?php
$response = wp_remote_get( 'https://example.com/wp-json/cocart/v2/session/<cart_key>/items' );
$body = wp_remote_retrieve_body( $response );
```

```json
```
