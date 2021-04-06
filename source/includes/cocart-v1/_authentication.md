# Authentication #

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [Edit on GitHub](https://github.com/co-cart/co-cart-docs/blob/master/source/includes/cocart-v1/_authentication.md)

<aside class="notice">
  For those who don't know what "Authentication" means, it's equivalent to a user logging in.
</aside>

<aside class="warning">
  Authentication is <strong>ONLY</strong> required for registered customers. In order for a registered customer to access their cart, you will be required to pass the customers username and password or token depending on the authentication method you are using. It's important that you keep authenticating with <strong>all routes</strong> from the beginning so the cart in session remains the same. <strong>NOT</strong> doing so will cause another cart to be created and lose track of the items added. If you have any questions, please ask away in the chat window below.
</aside>

The WordPress REST API incorporates a method called [nonces](https://codex.wordpress.org/WordPress_Nonces) to deal with [CSRF](https://en.wikipedia.org/wiki/Cross-site_request_forgery) issues. This ensures that all activities on the website remain segregated. This is because the WordPress REST API just like the WooCommerce REST API is designed for the back-end.

CoCart however, is designed for the front-end so for any CoCart requests made, the [cookie authentication](https://developer.wordpress.org/rest-api/using-the-rest-api/authentication/) is disabled allowing the ability to authenticate in any code language without fault.

REST API authentication methods:

* [Basic Authentication](#authentication-basic-authentication) (Recommended with SSL Only!)
* [JWT Authentication for WP REST API](#authentication-jwt-authentication) (Not Recommended according to feedback)
* [WooCommerce API Keys](#authentication-woocommerce-api-keys) (Best for Administrators Only!)

## Basic Authentication ##

[What is the Basic Authentication method?](https://en.wikipedia.org/wiki/Basic_access_authentication)

If you use the Basic Authentication method (which you may find the easiest to use for your customers to login with), please make sure that you have SSL enabled when making requests with any of the CoCart API routes. Check out the example adding an item to the cart as a registered customer.

<aside class="notice">
  Replace the username and password with the customers login details.
</aside>

### Steps to follow ###

1. [Download and Install Basic Auth plugin](https://github.com/WP-API/Basic-Auth)

> Adding an item to the cart as a customer.

```shell
curl -X POST https://example.com/wp-json/cocart/v1/add-item \
  -u username:password \
  -H "Content-Type: application/json" \
  -d '{
    "product_id": "32",
    "quantity": 1
  }'
```

```javascript--node
// import CoCartAPI from "@cocart/cocart-rest-api"; // Supports ESM
const CoCartAPI = require("@cocart/cocart-rest-api").default;
 
const CoCart = new CoCartAPI({
  url: "https://example.com",
  consumerKey: 'sebtest123',
  consumerSecret: 'happycoding24'
});

var data = {
  "product_id": "32",
  "quantity": 1
};

CoCart.post("add-item", data)
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
  url: "https://example.com/wp-json/cocart/v1/add-item",
  headers: {
      "Authorization": "Basic " + btoa('username:password'),
  },
  method: "POST",
  data: JSON.stringify({
    "product_id" : "32",
    "quantity" : 1
  }),
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

$args = json_encode( array(
  'product_id' => "32",
  'quantity' => 1
) );

$headers = array(
  'Accept: application/json',
  'User-Agent: CoCart API/v1',
  'Authorization: Basic ' . base64_encode($username . ':' . $password)
);

curl_setopt_array( $curl, array(
  CURLOPT_URL => "https://example.com/wp-json/cocart/v1/add-item",
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => $args,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTPHEADER => $headers
) );

$response = curl_exec($curl);

curl_close($curl);

echo $response;
```

```php--wp-http-api
<?php
$args = array(
  'headers' => array(
    'Authorization' => 'Basic ' . base64_encode( 'username:password' ),
    'Content-Type' => 'application/json; charset=utf-8',
  ),
  'body' => wp_json_encode( [
    'product_id' => "32",
    'quantity' => 1
  ] ),
  'timeout' => 30
);

$response = wp_remote_post( 'https://example.com/wp-json/cocart/v1/add-item', $args );
$body = wp_remote_retrieve_body( $response );
```

```json
{
  "404dcc91b2aeaa7caa47487d1483e48a":{
    "key":"404dcc91b2aeaa7caa47487d1483e48a",
    "product_id":32,
    "variation_id":0,
    "variation":[],
    "quantity":1,
    "line_tax_data":{
      "subtotal":[],
      "total":[]
    },
    "line_subtotal":18,
    "line_subtotal_tax":0,
    "line_total":18,
    "line_tax":0,
    "data":{}
  }
}
```

### Authentication issues? ###

If the authentication header is not passing or authentication is not working you, adding a Rewrite rule to your `.htaccess` file might help.

> .htaccess Rewrite rule

```.htaccess
<IfModule mod_rewrite.c>
RewriteEngine on
RewriteCond %{HTTP:Authorization} ^(.*)
RewriteRule ^(.*) - [E=HTTP_AUTHORIZATION:%1]
</IfModule>
```

## JWT Authentication ##

JWT is a simple web token authentication method for WP REST API. To know more about JSON Web Tokens, please visit [https://jwt.io](https://jwt.io).

It's important that you follow the installation and configurations exactly for this method to work. [See instructions](https://github.com/Tmeister/wp-api-jwt-auth#installation--configuration).

### Steps to follow ###

1. [Download and Install JWT Authentication plugin](https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/) from WordPress.org.
2. [Configure the Secret Key](https://github.com/Tmeister/wp-api-jwt-auth#configurate-the-secret-key).
3. [Get your token](https://github.com/Tmeister/wp-api-jwt-auth#usage).

<aside class="notice">
  Once you get the token, you must store it somewhere in your application, e.g. in a cookie or using localstorage. From this point, you should pass this token to every CoCart API call.
</aside>

```javascript--jquery
$.ajax({
  url: "https://example.com/wp-json/cocart/v1/add-item",
  headers: {
      "Authorization": "Bearer " + token,
  },
  method: "POST",
  data: JSON.stringify({
    "product_id" : 32,
    "quantity" : 1
  }),
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

$args = json_encode( array(
  'product_id' => 32,
  'quantity' => 1
) );

$headers = array(
  'Accept: application/json',
  'User-Agent: CoCart API/v1',
  'Authorization: Bearer ' . $token
);

curl_setopt_array( $curl, array(
  CURLOPT_URL => "https://example.com/wp-json/cocart/v1/add-item",
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => $args,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTPHEADER => $headers
) );

$response = curl_exec($curl);

curl_close($curl);

echo $response;
```

```php--wp-http-api
<?php
$args = array(
  'headers' => array(
    'Authorization' => 'Bearer ' . $token,
    'Content-Type' => 'application/json; charset=utf-8',
  ),
  'body' => wp_json_encode( [
    'product_id' => "32",
    'quantity' => 1
  ] ),
  'timeout' => 30
);

$response = wp_remote_post( 'https://example.com/wp-json/cocart/v1/add-item', $args );
$body = wp_remote_retrieve_body( $response );
```

## WooCommerce API Keys ##

Though this method is designed for the backend with [WooCommerce REST API](https://woocommerce.github.io/woocommerce-rest-api-docs/#authentication), with some custom coding you can make it work for the frontend with CoCart. Checkout my guide on [how to authenticate with WooCommerce](https://cocart.xyz/authenticating-with-woocommerce-heres-how-you-can-do-it/).
