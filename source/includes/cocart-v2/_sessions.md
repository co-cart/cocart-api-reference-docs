# Sessions #

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [Edit on GitHub](https://github.com/co-cart/co-cart-docs/blob/master/source/includes/cocart-v2/_sessions.md)

<aside class="warning">
  These API's are for administrators/shop managers <strong>ONLY</strong>!
</aside>

 * [Get Sessions](#sessions-get-sessions)
 * [View Cart in Session](#sessions-view-cart-in-session)
 * [View Cart Items in Session](#sessions-view-cart-items-in-session)
 * [Delete Cart in Session](#sessions-delete-cart-in-session)

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
{
  "cart_hash": "475c7af8e8881aaa1302fdbae3bc93e0",
  "cart_key": "1",
  "currency": {
    "currency_code": "GBP",
    "currency_symbol": "£",
    "currency_minor_unit": 2,
    "currency_decimal_separator": ".",
    "currency_thousand_separator": ",",
    "currency_prefix": "£",
    "currency_suffix": ""
  },
  "customer": {
    "billing_address": {
      "billing_first_name": "Sebastien Dumont",
      "billing_last_name": "Dumont",
      "billing_company": "",
      "billing_country": "FR",
      "billing_address_1": "1",
      "billing_address_2": "",
      "billing_postcode": "12345",
      "billing_city": "Town",
      "billing_state": "",
      "billing_phone": "15103267814",
      "billing_email": "mailme@sebastiendumont.com"
    },
    "shipping_address": {
      "shipping_first_name": "Sebastien Dumont",
      "shipping_last_name": "Dumont",
      "shipping_company": "",
      "shipping_country": "FR",
      "shipping_address_1": "1",
      "shipping_address_2": "",
      "shipping_postcode": "12345",
      "shipping_city": "Town",
      "shipping_state": ""
    }
  },
  "items": [
    {
      "item_key": "f88f1e366aab64913744154e427ade89",
      "id": 1050,
      "name": "Virtual Product",
      "title": "Virtual Product",
      "price": "1.00",
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
        "subtotal": 1,
        "subtotal_tax": 0,
        "total": 1,
        "tax": 0
      },
      "slug": "virtual-product",
      "meta": {
        "product_type": "simple",
        "sku": "smile",
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
      "featured_image": "https://example.com/wp-content/uploads/2021/04/smile-324x172.png"
    },
    {
      "item_key": "47686bc78b514a82756f71ddb661ea02",
      "id": 1015,
      "name": "T-shirt with logo",
      "title": "T-shirt with logo",
      "price": "12.00",
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
        "subtotal": 12,
        "subtotal_tax": 0,
        "total": 12,
        "tax": 0
      },
      "slug": "t-shirt-with-logo",
      "meta": {
        "product_type": "simple",
        "sku": "Woo-tshirt-logo",
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
      "featured_image": "https://example.com/wp-content/uploads/2021/02/t-shirt-with-logo-1-324x324.jpg"
    },
    {
      "item_key": "f28cd9f0560070670a861d86462b8f14",
      "id": 90,
      "name": "Beanie with Logo",
      "title": "Beanie with Logo",
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
      "slug": "beanie-with-logo",
      "meta": {
        "product_type": "simple",
        "sku": "Woo-beanie-logo",
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
      "featured_image": "https://example.com/wp-content/uploads/2021/02/beanie-with-logo-1-324x324.jpg"
    },
    {
      "item_key": "80f119e2ee66d2d8a0b601f695c305d8",
      "id": 82,
      "name": "Single",
      "title": "Single",
      "price": "2.00",
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
        "subtotal": 2,
        "subtotal_tax": 0,
        "total": 2,
        "tax": 0
      },
      "slug": "single",
      "meta": {
        "product_type": "simple",
        "sku": "woo-single",
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
      "featured_image": "https://example.com/wp-content/uploads/2021/02/single-1-324x324.jpg"
    }
  ],
  "item_count": 6,
  "items_weight": 0,
  "coupons": [
    {
      "coupon": "testcoupon",
      "label": "Coupon: testcoupon",
      "saving": "-500",
      "saving_html": "-£5.00"
    }
  ],
  "needs_payment": true,
  "needs_shipping": true,
  "shipping": {
    "total_packages": 1,
    "show_package_details": false,
    "has_calculated_shipping": true,
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
        "formatted_destination": "1, 12345 TOWN"
      }
    }
  },
  "fees": [],
  "taxes": [],
  "totals": {
    "subtotal": "19200",
    "subtotal_tax": "0",
    "fee_total": "0",
    "fee_tax": "0",
    "discount_total": "500",
    "discount_tax": "0",
    "shipping_total": "2000",
    "shipping_tax": "0",
    "total": "20700",
    "total_tax": "0"
  },
  "removed_items": [],
  "cross_sells": [],
  "notices": []
}
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
{
  "f88f1e366aab64913744154e427ade89": {
    "item_key": "f88f1e366aab64913744154e427ade89",
    "id": 1050,
    "name": "Virtual Product",
    "title": "Virtual Product",
    "price": "1.00",
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
      "subtotal": 1,
      "subtotal_tax": 0,
      "total": 1,
      "tax": 0
    },
    "slug": "virtual-product",
    "meta": {
      "product_type": "simple",
      "sku": "smile",
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
    "featured_image": "https://example.com/wp-content/uploads/2021/04/smile-324x172.png"
  },
  "47686bc78b514a82756f71ddb661ea02": {
    "item_key": "47686bc78b514a82756f71ddb661ea02",
    "id": 1015,
    "name": "T-shirt with logo",
    "title": "T-shirt with logo",
    "price": "12.00",
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
      "subtotal": 12,
      "subtotal_tax": 0,
      "total": 12,
      "tax": 0
    },
    "slug": "t-shirt-with-logo",
    "meta": {
      "product_type": "simple",
      "sku": "Woo-tshirt-logo",
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
    "featured_image": "https://example.com/wp-content/uploads/2021/02/t-shirt-with-logo-1-324x324.jpg"
  },
  "f28cd9f0560070670a861d86462b8f14": {
    "item_key": "f28cd9f0560070670a861d86462b8f14",
    "id": 90,
    "name": "Beanie with Logo",
    "title": "Beanie with Logo",
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
    "slug": "beanie-with-logo",
    "meta": {
      "product_type": "simple",
      "sku": "Woo-beanie-logo",
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
    "featured_image": "https://example.com/wp-content/uploads/2021/02/beanie-with-logo-1-324x324.jpg"
  },
  "80f119e2ee66d2d8a0b601f695c305d8": {
    "item_key": "80f119e2ee66d2d8a0b601f695c305d8",
    "id": 82,
    "name": "Single",
    "title": "Single",
    "price": "2.00",
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
      "subtotal": 2,
      "subtotal_tax": 0,
      "total": 2,
      "tax": 0
    },
    "slug": "single",
    "meta": {
      "product_type": "simple",
      "sku": "woo-single",
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
    "featured_image": "https://example.com/wp-content/uploads/2021/02/single-1-324x324.jpg"
  }
}
```

## Delete Cart in Session ##

This API helps you delete a specified session.

### HTTP request ###

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-delete">DELETE</i>
    <h6>/wp-json/cocart/v2/session/&lt;cart_key&gt;</h6>
  </div>
</div>

```shell
curl -X DELETE https://example.com/wp-json/cocart/v2/session/<cart_key> \
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

CoCart.delete("session/<cart_key>")
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
  method: "DELETE",
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
  CURLOPT_CUSTOMREQUEST => "DELETE",
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
$args = array(
  'headers' => array(
    'Content-Type' => 'application/json; charset=utf-8',
  ),
  'method' => 'DELETE',
  'timeout' => 30
);

$response = wp_remote_request( 'https://example.com/wp-json/cocart/v2/session/<cart_key>', $args );
$body = wp_remote_retrieve_body( $response );
```

```json
"Cart successfully deleted!"
```
