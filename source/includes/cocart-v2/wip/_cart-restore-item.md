## Restore Item to Cart ##

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [Edit on GitHub](https://github.com/co-cart/co-cart-docs/blob/master/source/includes/cocart-v2/_cart-restore-item.md)

This API helps you to restore an item to the cart.

### Properties ###

| Property      | Type   | Description                                                                                                                 |
| ------------- | ------ | --------------------------------------------------------------------------------------------------------------------------- |
| `cart_key`    | string | Unique identifier for the cart. <a class="label label-info" href="#cart-key">?</a> <i class="label label-info">optional</i> |
| `item_key`    | string | Unique identifier for the item in the cart. <i class="label label-info">mandatory</i>                                       |
| `return_item` | bool   | Set as true to return the item details once restored back to the cart. <i class="label label-info">optional</i>             |

### HTTP request ###

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-get">GET</i>
    <h6>/wp-json/cocart/v2/cart/item</h6>
    </div>
</div>

```shell
curl -X GET https://example.com/wp-json/cocart/v2/cart/item \
  -H "Content-Type: application/json" \
  -d '{
    "item_key": 404dcc91b2aeaa7caa47487d1483e48a
  }'
```

```javascript--node
var data = {
  "item_key": 404dcc91b2aeaa7caa47487d1483e48a
};

CoCart.get("item", data)
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
  url: "https://example.com/wp-json/cocart/v2/cart/item",
  method: "GET",
  data: JSON.stringify({
    "item_key" : "404dcc91b2aeaa7caa47487d1483e48a"
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
  'item_key' => '404dcc91b2aeaa7caa47487d1483e48a'
);

curl_setopt_array( $curl, array(
  CURLOPT_URL => "https://example.com/wp-json/cocart/v2/cart/item",
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
  'headers' => array(
    'Content-Type' => 'application/json; charset=utf-8',
  ),
  'body' => wp_json_encode( [
    'item_key' => '404dcc91b2aeaa7caa47487d1483e48a'
  ] )
);

$response = wp_remote_get( 'https://example.com/wp-json/cocart/v2/cart/item', $args );
$body = wp_remote_retrieve_body( $response );
```
