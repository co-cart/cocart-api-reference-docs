## Remove Item from Cart ##

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [Edit on GitHub](https://github.com/co-cart/co-cart-docs/blob/master/source/includes/cocart-v2/_cart-item-remove.md)

This API helps you to remove an item from the cart. If an item has not already been removed and does exist in the cart then an updated cart response will return.

If an item does not exist in cart or has already been removed, then an error message will return instead as nothing has changed to the cart. Therefore there is no need to return the cart response.

### Parameters ###

| Parameter  | Type   | Description                                                                                                                 |
| ---------- | ------ | --------------------------------------------------------------------------------------------------------------------------- |
| `cart_key` | string | Unique identifier for the cart. <a class="label label-info" href="#cart-key">?</a> <i class="label label-info">optional</i> |

### Properties ###

| Property        | Type   | Description                                                                                             |
| --------------- | ------ | ------------------------------------------------------------------------------------------------------- |
| `item_key`      | string | Unique identifier for the item in the cart. <i class="label label-info">mandatory</i>                   |
| `return_status` | bool   | Set as true to return a message after removing item from cart. <i class="label label-info">optional</i> |

### HTTP request ###

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-delete">DELETE</i>
    <h6>/wp-json/cocart/v2/cart/item/&lt;item_key&gt;</h6>
  </div>
</div>

```shell
curl -X DELETE https://example.com/wp-json/cocart/v2/cart/item/<item_key> \
  -H "Content-Type: application/json"
```

```javascript--node
CoCart.delete("cart/item/<item_key>")
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
  url: "https://example.com/wp-json/cocart/v2/cart/item/<item_key>",
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
  CURLOPT_URL => "https://example.com/wp-json/cocart/v2/cart/item/<item_key>",
  CURLOPT_CUSTOMREQUEST => "DELETE",
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
  'method' => 'DELETE',
  'timeout' => 30
);

$response = wp_remote_request( 'https://example.com/wp-json/cocart/v2/cart/item/<item_key>', $args );
$body = wp_remote_retrieve_body( $response );
```

```json
// Returned response if item is removed with `return_status` set to `true`.
"\"Beanie\" has been removed from cart."
```