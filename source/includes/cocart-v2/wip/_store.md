# Store #

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [Edit on GitHub](https://github.com/co-cart/co-cart-docs/blob/master/source/includes/cocart-v2/wip/_store.md)

This API helps you get the store details.

### HTTP request ###

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-get">GET</i>
    <h6>/wp-json/cocart/v2/store</h6>
  </div>
</div>

```shell
curl -X GET https://example.com/wp-json/cocart/v2/store \
  -H "Content-Type: application/json"
```

```javascript--node
CoCart.get("store")
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
  url: "https://example.com/wp-json/cocart/v2/store",
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
  CURLOPT_URL => "https://example.com/wp-json/cocart/v2/store",
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
$response = wp_remote_get( 'https://example.com/wp-json/cocart/v2/store' );
$body = wp_remote_retrieve_body( $response );
```

```json
{
	"version": "https://example.com/wp-json/cocart/v2/",
	"title": "My Awesome Swag Store",
	"description": "Collect my new swag for 2021. Forget about 2020.",
	"home_url": "https://example.com",
	"language": "en-US",
	"gmt_offset": 2,
	"timezone_string": "Europe/Paris",
	"store_address": {
		"address": "Somewhere",
		"address_2": "warm",
		"city": "TimeCity",
		"country": "FR",
		"postcode": "11400"
	},
	"routes": {
		"cart": "https://example.com/wp-json/cocart/v2/cart",
		"cart-add-item": "https://example.com/wp-json/cocart/v2/cart/add-item",
		"cart-add-items": "https://example.com/wp-json/cocart/v2/cart/add-items",
		"cart-item": "https://example.com/wp-json/cocart/v2/cart/item",
		"cart-items": "https://example.com/wp-json/cocart/v2/cart/items",
		"cart-items-count": "https://example.com/wp-json/cocart/v2/cart/items/count",
		"cart-calculate": "https://example.com/wp-json/cocart/v2/cart/calculate",
		"cart-clear": "https://example.com/wp-json/cocart/v2/cart/clear",
		"cart-totals": "https://example.com/wp-json/cocart/v2/cart/totals",
		"login": "https://example.com/wp-json/cocart/v2/login",
		"logout": "https://example.com/wp-json/cocart/v2/logout"
	},
	"_links": {
		"help": [
			{
				"href": "https://docs.cocart.xyz/"
			}
		]
	}
}
```
