# Cart Owner #

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [Edit on GitHub](https://github.com/co-cart/co-cart-docs/blob/master/source/includes/cocart-v1/pro/_customers.md)

This API helps you get the cart owner's details of the customer.

## Properties ##

| Property   | Type   | Description                                                                                                                           |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| `cart_key` | string | Unique identifier for the cart. <a class="label label-info" href="index.html#cart-key">?</a> <i class="label label-info">optional</i> |

### HTTP request ###

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-get">GET</i>
    <h6>/wp-json/cocart/v1/customer</h6>
  </div>
</div>

```shell
curl -X GET https://example.com/wp-json/cocart/v1/customer \
  -H "Content-Type: application/json"
```

```javascript--jquery
var settings = {
  "url": "https://example.com/wp-json/cocart/v1/customer",
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
  CURLOPT_URL => "https://example.com/wp-json/cocart/v1/customer",
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
$response = wp_remote_get( 'https://example.com/wp-json/cocart/v1/customer' );
$body = wp_remote_retrieve_body( $response );
```

> JSON response example

```json
{
  "user": {
    "ID": 1,
    "first_name": "John",
    "last_name": "Doe"
  },
  "billing": {
    "first_name": "John",
    "last_name": "Doe",
    "company": "Company Name LTD",
    "email": "3naxbgjjttb@thrubay.com",
    "phone": "070 4502 9873",
    "country": "GB",
    "state": "",
    "postcode": "L23 6ST",
    "city": "LITTLE CROSBY",
    "address": "48 Victoria Road",
    "address_1": "48 Victoria Road",
    "address_2": ""
  },
  "shipping": {
    "first_name": "John",
    "last_name": "Doe",
    "company": "Company Name LTD",
    "country": "GB",
    "state": "",
    "postcode": "L23 6ST",
    "city": "LITTLE CROSBY",
    "address": "48 Victoria Road",
    "address_1": "48 Victoria Road",
    "address_2": ""
  },
  "has_calculated_shipping": true,
  "is_vat_exempt": "no"
}
```
