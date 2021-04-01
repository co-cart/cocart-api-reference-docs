# Cart #

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [Edit on GitHub](https://github.com/co-cart/co-cart-docs/blob/master/source/includes/cocart-v2/_cart.md)

The cart API is powerful and allows you to view the customers cart in full detail ready to use the data made available to build and display the cart you want.

Most individual endpoints will return the cart response by default so you always have the updated cart once the request has been made.

 * [Get Cart](#cart-get-cart)
 * [Get Cart using Cart Key](#cart-get-cart-using-cart-key)
 * [Clear Cart](#cart-clear-cart)

## Get Cart ##

This API returns the customers cart contents and much more.

### Properties ###

| Property   | Type   | Description                                                                                                                 |
| ---------- | ------ | --------------------------------------------------------------------------------------------------------------------------- |
| `cart_key` | string | Unique identifier for the cart. <a class="label label-info" href="#cart-key">?</a> <i class="label label-info">optional</i> |
| `thumb`    | bool   | Set as false to remove the product thumbnail for each item. <i class="label label-info">optional, default is true</i>       |

### HTTP request ###

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-get">GET</i>
    <h6>/wp-json/cocart/v2/cart</h6>
  </div>
</div>

```shell
curl -X GET https://example.com/wp-json/cocart/v2/cart \
  -H "Content-Type: application/json"
```

```javascript--node
CoCart.get("cart")
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
  "url": "https://example.com/wp-json/cocart/v2/cart",
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
  CURLOPT_URL => "https://example.com/wp-json/cocart/v2/cart",
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTPHEADER => array(
    'Accept: application/json',
    'User-Agent: CoCart API/v2',
  )
) );

$response = curl_exec($curl);

curl_close($curl);

echo $response;
```

```php--wp-http-api
<?php
$response = wp_remote_get( 'https://example.com/wp-json/cocart/v2/cart' );
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

## Get Cart using Cart Key ##

This method allows you to set the cart key yourself via the `cart_key` parameter. This sets the cart key in session allowing to create/fetch the cart before changes are made. [See the "Cart Key" section for more information](#cart-key).

<aside class="warning">
    The <code>cart_key</code> parameter is a global parameter so it must be queried rather than being added as part of the data you send with the API request you make. Otherwise it will not update the cart.
</aside>

> Example of getting the cart with cart key.

```shell
curl -X GET https://example.com/wp-json/cocart/v2/cart?cart_key=9e18904482b4faf8762361836a83b93d \
  -H "Content-Type: application/json"
```

```javascript--node
CoCart.get("cart?cart_key=9e18904482b4faf8762361836a83b93d")
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
  "url": "https://example.com/wp-json/cocart/v2/cart?cart_key=9e18904482b4faf8762361836a83b93d",
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
  CURLOPT_URL => "https://example.com/wp-json/cocart/v2/cart?cart_key=9e18904482b4faf8762361836a83b93d",
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTPHEADER => array(
    'Accept: application/json',
    'User-Agent: CoCart API/v2',
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

$response = wp_remote_get( 'https://example.com/wp-json/cocart/v2/cart?cart_key=9e18904482b4faf8762361836a83b93d', $args );
$body = wp_remote_retrieve_body( $response );
```

> JSON response is the same as the example above.
