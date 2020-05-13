## Restore Item to Cart ##

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [Edit on GitHub](https://github.com/co-cart/co-cart-docs/blob/master/source/includes/cocart-v1/_restore-item-to-cart.md)

This API helps you to restore an item to the cart. You can also request to return the whole cart once item is restored to reduce API requests and use the [Get Cart Content](#get-cart-contents) properties. 

### Properties ###

| Property        | Type   | Description                                                                                               |
| --------------- | ------ | --------------------------------------------------------------------------------------------------------- |
| `id`            | string | Unique identifier for the cart. <i class="label label-info">optional</i>                                  |
| `cart_item_key` | string | The cart item key of the product that was in the cart recently. <i class="label label-info">mandatory</i> |
| `return_cart`   | bool   | Set as true to return the whole cart once item is restored. <i class="label label-info">optional</i>      |

### HTTP request ###

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-get">GET</i>
    <h6>/wp-json/cocart/v1/item</h6>
    </div>
</div>

```shell
curl -X GET https://example.com/wp-json/cocart/v1/item \
  -H "Content-Type: application/json" \
  -d '{
    "cart_item_key": 404dcc91b2aeaa7caa47487d1483e48a
  }'
```

```javascript--jquery
var settings = {
  "url": "https://example.com/wp-json/cocart/v1/item",
  "method": "GET",
  "data": {
    "cart_item_key" : "404dcc91b2aeaa7caa47487d1483e48a"
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
  'cart_item_key' => '404dcc91b2aeaa7caa47487d1483e48a'
);

curl_setopt_array( $curl, array(
  CURLOPT_URL => "https://example.com/wp-json/cocart/v1/item",
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
  'cart_item_key' => '404dcc91b2aeaa7caa47487d1483e48a'
);
$response = wp_remote_get( 'https://example.com/wp-json/cocart/v1/item', $args );
$body = wp_remote_retrieve_body( $response );
```

> JSON response example

```json
"Item has been restored to the cart.""
```
