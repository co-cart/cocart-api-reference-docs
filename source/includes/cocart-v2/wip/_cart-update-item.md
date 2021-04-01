## Update Item in Cart ##

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [Edit on GitHub](https://github.com/co-cart/co-cart-docs/blob/master/source/includes/cocart-v2/wip/_cart-update-item.md)

This API helps you to update an item in the cart.

### Properties ###

| Property        | Type   | Description                                                                                                                 |
| --------------- | ------ | --------------------------------------------------------------------------------------------------------------------------- |
| `cart_key`      | string | Unique identifier for the cart. <a class="label label-info" href="#cart-key">?</a> <i class="label label-info">optional</i> |
| `item_key` | string | The cart item key of the product in the cart you want to update. <i class="label label-info">mandatory</i>                  |
| `quantity`      | float  | Set the quantity of the product you want to update in the cart. <i class="label label-info">Default is 1</i>                |
| `return_cart`   | bool   | Set as true to return the whole cart once item is updated. <i class="label label-info">optional</i>                         |

### HTTP request ###

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-post">POST</i>
    <h6>/wp-json/cocart/v2/cart/item</h6>
  </div>
</div>

```shell
curl -X POST https://example.com/wp-json/cocart/v2/cart/item \
  -H "Content-Type: application/json" \
  -d '{
    "item_key": "404dcc91b2aeaa7caa47487d1483e48a",
    "quantity": 2
  }'
```

```javascript--node
var data = {
  "item_key": 404dcc91b2aeaa7caa47487d1483e48a,
  "quantity": 2
};

CoCart.post("item", data)
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
  "url": "https://example.com/wp-json/cocart/v2/cart/item",
  "method": "POST",
  "data": {
    "item_key" : "404dcc91b2aeaa7caa47487d1483e48a",
    "quantity" : 2
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
  'item_key' => '404dcc91b2aeaa7caa47487d1483e48a',
  'quantity' => 2
);

curl_setopt_array( $curl, array(
  CURLOPT_URL => "https://example.com/wp-json/cocart/v2/cart/item",
  CURLOPT_CUSTOMREQUEST => "POST",
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
    'item_key' => '404dcc91b2aeaa7caa47487d1483e48a',
    'quantity' => 2
  ] ),
  'timeout' => 30
);

$response = wp_remote_post( 'https://example.com/wp-json/cocart/v2/cart/item', $args );
$body = wp_remote_retrieve_body( $response );
```
