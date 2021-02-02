# Logout #

<span class="new">New API since v2.1</span>

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [Edit on GitHub](https://github.com/co-cart/co-cart-docs/blob/master/source/includes/cocart-v1/_logout.md)

This API logs out your customers. This will clear all session cookies for WordPress and CoCart.

<aside class="warning">
  Do <strong>NOT authenticate</strong> as the customer you are logging out for.
</aside>

### HTTP request ###

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-post">POST</i>
    <h6>/wp-json/cocart/v1/logout</h6>
  </div>
</div>

```shell
curl -X POST https://example.com/wp-json/cocart/v1/logout \
  -H "Content-Type: application/json" \
```

```javascript--node
CoCart.post("logout", data)
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
  "url": "https://example.com/wp-json/cocart/v1/logout",
  "method": "POST"
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
```

```php
<?php
$curl = curl_init();

curl_setopt_array( $curl, array(
  CURLOPT_URL => "https://example.com/wp-json/cocart/v1/logout",
  CURLOPT_CUSTOMREQUEST => "POST",
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
$response = wp_remote_post( 'https://example.com/wp-json/cocart/v1/logout' );
$body = wp_remote_retrieve_body( $response );
```

```json
true
```