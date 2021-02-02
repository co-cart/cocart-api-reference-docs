# Items in Cart #

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [Edit on GitHub](https://github.com/co-cart/co-cart-docs/blob/master/source/includes/cocart-v2/_items.md)

Once items are in the cart, customers always make decisions on which items they want to buy now, change the quantities of a particular item and which items they should remove.

The following API's help with all of that.

 * [Count Items](#items-in-cart-count-items)
 * [Remove Item from Cart](#items-in-cart-remove-item-from-cart)
 * [Restore Item to Cart](#items-in-cart-restore-item-to-cart)
 * [Update Item in Cart](#items-in-cart-update-item-in-cart)

## Count Items ##

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [Edit on GitHub](https://github.com/co-cart/co-cart-docs/blob/master/source/includes/cocart-v2/_count-items.md)

This API helps you count the items in the cart.

### Properties ###

| Property   | Type   | Description                                                                                                                 |
| ---------- | ------ | --------------------------------------------------------------------------------------------------------------------------- |
| `cart_key` | string | Unique identifier for the cart. <a class="label label-info" href="#cart-key">?</a> <i class="label label-info">optional</i> |

### HTTP request ###

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-get">GET</i>
    <h6>/wp-json/cocart/v2/count-items</h6>
  </div>
</div>

```shell
curl -X GET https://example.com/wp-json/cocart/v2/count-items \
 -H "Content-Type: application/json"
```

```javascript--node
CoCart.get("count-items", data)
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
  "url": "https://example.com/wp-json/cocart/v2/count-items",
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
  CURLOPT_URL => "https://example.com/wp-json/cocart/v2/count-items",
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
$response = wp_remote_get( 'https://example.com/wp-json/cocart/v2/count-items' );
$body = wp_remote_retrieve_body( $response );
```

> JSON response example

```json
1
```
