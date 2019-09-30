# Cart #

A new addition to carts is coming in the next release.

## Retrieve Cart Contents Saved ##

This API allows you to retrieve a cart stored in the database that is in session. This is mainly designed for guest customers and for certain frameworks that have trouble with retreiving data in session the normal way.

The properties are the same except the ID property is used to identify the cart key in the database instead and is required in order to use this API.

<aside class="notice">
  If the cart you request does not return then the cart in session either does not exist or has expired. By default, carts are stored in the database for 2 days from the last cart update.
</aside>

### Properties ###

| Attribute | Type    | Description |
| --------- | ------- | ------------ |
| `id`      | integer | Unique identifier for the cart. <i class="label label-info">required</i> |
| `thumb`   | bool    | Set as true to return the product thumbnail for each item. |

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
