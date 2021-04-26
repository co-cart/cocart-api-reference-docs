# Cart #

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [Edit on GitHub](https://github.com/co-cart/co-cart-docs/blob/master/source/includes/cocart-v2/_cart.md)

The cart API is powerful and allows you to view the customers cart in full detail ready to use the data made available to build and display the cart you want.

Most individual endpoints will return the cart response by default so you always have the updated cart once the request has been made.

 * [Get Cart](#cart-get-cart)
 * [Get Cart for Guest Customers](#cart-get-cart-for-guest-customers)
 * [Merge Carts](#cart-merge-carts)
 * [Clear Cart](#cart-clear-cart)

## Get Cart ##

This API returns the customers cart contents and much more.

### Parameters ###

| Parameter  | Type   | Description                                                                                                                 |
| ---------- | ------ | --------------------------------------------------------------------------------------------------------------------------- |
| `cart_key` | string | Unique identifier for the cart. <a class="label label-info" href="#cart-key">?</a> <i class="label label-info">optional</i> |

### Properties ###

| Property  | Type | Description                                                                                                           |
| --------- | ---- | --------------------------------------------------------------------------------------------------------------------- |
| `thumb`   | bool | Set as false to remove the product thumbnail for each item. <i class="label label-info">optional, default is true</i> |
| `default` | bool | Return the default cart data if set to true. <i class="label label-info">optional</i>                                 |

### HTTP request ###

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-get">GET</i>
    <h6>/wp-json/cocart/v2/cart</h6>
  </div>
</div>

> CoCart's cart response, providing everything you need.

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
$.ajax({
  url: "https://example.com/wp-json/cocart/v2/cart",
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
$args = array(
  'headers' => array(
    'Content-Type' => 'application/json; charset=utf-8',
  ),
  'timeout' => 30
);

$response = wp_remote_get( 'https://example.com/wp-json/cocart/v2/cart', $args );
$body = wp_remote_retrieve_body( $response );
```

```json
{
  "cart_hash": "0b95eb807ead335612a3165e2466ac5c",
  "cart_key": "7894",
  "currency": {
    "currency_code": "USD",
    "currency_symbol": "$",
    "currency_minor_unit": 2,
    "currency_decimal_separator": ".",
    "currency_thousand_separator": ",",
    "currency_prefix": "$",
    "currency_suffix": ""
  },
  "customer": {
    "billing_address": {
      "billing_first_name": "Stephanie C",
      "billing_last_name": "Crawford",
      "billing_company": "",
      "billing_country": "US",
      "billing_address_1": "2243 Dogwood Lane",
      "billing_address_2": "",
      "billing_postcode": "85716",
      "billing_city": "Tucson",
      "billing_state": "AZ",
      "billing_phone": "520-784-8063",
      "billing_email": "x3l7r39mmp@temporary-mail.net"
    },
    "shipping_address": {
      "shipping_first_name": "Stephanie C",
      "shipping_last_name": "Crawford",
      "shipping_company": "",
      "shipping_country": "US",
      "shipping_address_1": "2243 Dogwood Lane",
      "shipping_address_2": "",
      "shipping_postcode": "85716",
      "shipping_city": "Tucson",
      "shipping_state": "AZ"
    }
  },
  "items": [
    {
      "item_key": "1ad001efb8a576ded17c71534502f4a5",
      "id": 73,
      "name": "Beanie",
      "title": "Beanie",
      "price": "18.00",
      "quantity": {
        "value": 1,
        "min_purchase": 1,
        "max_purchase": -1
      },
      "tax_data": {
        "subtotal": [],
        "total": []
      },
      "totals": {
        "subtotal": 18,
        "subtotal_tax": 0,
        "total": 18,
        "tax": 0
      },
      "slug": "beanie",
      "meta": {
        "product_type": "simple",
        "sku": "woo-beanie",
        "dimensions": {
          "length": "",
          "width": "",
          "height": "",
          "unit": "cm"
        },
        "weight": 0,
        "variation": []
      },
      "cart_item_data": [],
      "featured_image": "https://example.com/wp-content/uploads/2021/02/beanie-2-324x324.jpg"
    },
  ],
  "item_count": 1,
  "items_weight": 0,
  "coupons": [],
  "needs_payment": true,
  "needs_shipping": true,
  "shipping": {
    "total_packages": 1,
    "show_package_details": false,
    "has_calculated_shipping": false,
    "packages": {
      "default": {
        "package_name": "Shipping",
        "rates": {
          "flat_rate:1": {
            "key": "flat_rate:1",
            "method_id": "flat_rate",
            "instance_id": 1,
            "label": "Flat rate",
            "cost": "20.00",
            "html": "Flat rate: £20.00",
            "taxes": [],
            "chosen_method": true
          }
        },
        "package_details": "",
        "index": 0,
        "chosen_method": "flat_rate:1",
        "formatted_destination": "2243 Dogwood Lane, 85716 Tucson"
      }
    }
  },
  "fees": [],
  "taxes": [],
  "totals": {
    "subtotal": "1800",
    "subtotal_tax": "0",
    "fee_total": "0",
    "fee_tax": "0",
    "discount_total": "0",
    "discount_tax": "0",
    "shipping_total": "2000",
    "shipping_tax": "0",
    "total": "3800",
    "total_tax": "0"
  },
  "removed_items": [],
  "cross_sells": [],
  "notices": []
}
```

> Default cart response, unfiltered and raw data.

```shell
curl -X GET https://example.com/wp-json/cocart/v2/cart \
  -H "Content-Type: application/json" \
  -d '{
    "default": true,
  }'
```

```javascript--node
CoCart.get("cart", {
  default: true
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
$.ajax({
  url: "https://example.com/wp-json/cocart/v2/cart",
  method: "GET",
  data: JSON.stringify({
    default: true
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

$args = array(
  'default' => true,
);

curl_setopt_array( $curl, array(
  CURLOPT_URL => "https://example.com/wp-json/cocart/v2/cart",
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_POSTFIELDS => $args,
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
  ),
  'body' => wp_json_encode( [
    'default' => true,
  ] ),
  'timeout' => 30
);

$response = wp_remote_get( 'https://example.com/wp-json/cocart/v2/cart', $args );
$body = wp_remote_retrieve_body( $response );
```

```json
{
  "7647966b7343c29048673252e490f736": {
    "key": "7647966b7343c29048673252e490f736",
    "product_id": 89,
    "variation_id": 0,
    "variation": [],
    "quantity": 1,
    "data_hash": "b5c1d5ca8bae6d4896cf1807cdf763f0",
    "line_tax_data": {
      "subtotal": [],
      "total": []
    },
    "line_subtotal": 12,
    "line_subtotal_tax": 0,
    "line_total": 12,
    "line_tax": 0,
    "data": {}
  }
}
```

## Get Cart for Guest Customers ##

This method is designed for guest customers only. Using the `cart_key` parameter, you set the guest customers cart in session. [See the "Cart Key" section for more information](#cart-key).

<aside class="warning">
    The <code>cart_key</code> parameter is a global parameter so it must be queried rather than being added as part of the data you send with when making the API request. Otherwise it will not update the cart.
</aside>

### Parameters ###

| Parameter  | Type   | Description                                                                                                                 |
| ---------- | ------ | --------------------------------------------------------------------------------------------------------------------------- |
| `cart_key` | string | Unique identifier for the cart. <a class="label label-info" href="#cart-key">?</a> <i class="label label-info">optional</i> |

### HTTP request ###

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-get">GET</i>
    <h6>/wp-json/cocart/v2/cart?cart_key=&#60;cart_key&#62;</h6>
  </div>
</div>

> How to get a guest customers cart.

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
$.ajax({
  url: "https://example.com/wp-json/cocart/v2/cart?cart_key=9e18904482b4faf8762361836a83b93d",
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
  ),
  'timeout' => 30
);

$response = wp_remote_get( 'https://example.com/wp-json/cocart/v2/cart?cart_key=9e18904482b4faf8762361836a83b93d', $args );
$body = wp_remote_retrieve_body( $response );
```

> JSON response is the same as the main example above.

## Merge Carts ##

Wish to merge items from a guest customers cart with a registered customers cart? Then when fetching the cart, you must [authenticate](#authentication) as the registered customer and set the guests customers cart key.

<aside class="notice">
  This request can only be done once so remember to remove the cart key when fetching the cart again. Once the guest customers cart has merged with the registered customers cart. The previous cart will be destroyed.
</aside>

### Parameters ###

| Parameter  | Type   | Description                                                                                                                 |
| ---------- | ------ | --------------------------------------------------------------------------------------------------------------------------- |
| `cart_key` | string | Unique identifier for the cart. <a class="label label-info" href="#cart-key">?</a> <i class="label label-info">optional</i> |

### Properties ###

| Attribute | Type | Description                                                                                                           |
| --------- | ---- | --------------------------------------------------------------------------------------------------------------------- |
| `thumb`   | bool | Set as false to remove the product thumbnail for each item. <i class="label label-info">optional, default is true</i> |

### HTTP request ###

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-get">GET</i>
    <h6>/wp-json/cocart/v2/cart?cart_key=&#60;cart_key&#62;</h6>
  </div>
</div>

```shell
curl -X GET https://example.com/wp-json/cocart/v2/cart?cart_key=<cart_key> \
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

CoCart.get("get-cart?cart_key=<cart_key>")
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
  url: "https://example.com/wp-json/cocart/v2/cart?cart_key=<cart_key>",
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
  CURLOPT_URL => "https://example.com/wp-json/cocart/v2/cart?cart_key=<cart_key>",
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTPHEADER => array(
    'Accept: application/json',
    'User-Agent: CoCart API/v1',
    'Authorization: Basic ' . base64_encode($username . ':' . $password)
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
    'Authorization' => 'Basic ' . base64_encode( 'username:password' ),
    'Content-Type' => 'application/json; charset=utf-8',
  ),
  'timeout' => 30
);

$response = wp_remote_get( 'https://example.com/wp-json/cocart/v2/cart?cart_key=<cart_key>', $args );
$body = wp_remote_retrieve_body( $response );
```
