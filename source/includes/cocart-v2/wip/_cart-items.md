# Items in Cart #

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [Edit on GitHub](https://github.com/co-cart/co-cart-docs/blob/master/source/includes/cocart-v2/wip/_cart-items.md)

Once items are in the cart, customers always make decisions on which items they want to buy now, change the quantities of a particular item and which items they should remove.

The following API's help with all of that.

 * [Items](#items-in-cart-items)
 * [View a Single Item](#items-in-cart-view-a-single-item)
 * [Count Items](#items-in-cart-count-items)
 * [Update Item in Cart](#items-in-cart-update-item-in-cart)
 * [Remove Item from Cart](#items-in-cart-remove-item-from-cart)
 * [Restore Item to Cart](#items-in-cart-restore-item-to-cart)

### Properties ###

| Property   | Type   | Description                                                                                                                 |
| ---------- | ------ | --------------------------------------------------------------------------------------------------------------------------- |
| `cart_key` | string | Unique identifier for the cart. <a class="label label-info" href="#cart-key">?</a> <i class="label label-info">optional</i> |

## Items ##

This API help you view just the items added in the cart.

### HTTP request ###

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-get">GET</i>
    <h6>/wp-json/cocart/v2/cart/items</h6>
  </div>
</div>

```shell
curl -X GET https://example.com/wp-json/cocart/v2/cart/items \
 -H "Content-Type: application/json"
```

```javascript--node
CoCart.get("cart/items")
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
  url: "https://example.com/wp-json/cocart/v2/cart/items",
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
  CURLOPT_URL => "https://example.com/wp-json/cocart/v2/cart/items",
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
$response = wp_remote_get( 'https://example.com/wp-json/cocart/v2/cart/items' );
$body = wp_remote_retrieve_body( $response );
```

```json
{
	"f28cd9f0560070670a861d86462b8f14": {
		"item_key": "f28cd9f0560070670a861d86462b8f14",
		"id": 90,
		"name": "Beanie with Logo",
		"title": "Beanie with Logo",
		"price": "18.00",
		"quantity": {
			"value": 2,
			"min_purchase": 1,
			"max_purchase": -1
		},
		"tax_data": {
			"subtotal": [],
			"total": []
		},
		"totals": {
			"subtotal": 36,
			"subtotal_tax": 0,
			"total": 36,
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
		"featured_image": "http://cocart-dev.local/wp-content/uploads/2021/02/beanie-with-logo-1-324x324.jpg"
	},
	"af69a8dc2ae2de6cac18bc4a6a75afa3": {
		"item_key": "af69a8dc2ae2de6cac18bc4a6a75afa3",
		"id": 85,
		"name": "V-Neck T-Shirt - Blue",
		"title": "V-Neck T-Shirt",
		"price": "15.00",
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
			"subtotal": 15,
			"subtotal_tax": 0,
			"total": 15,
			"tax": 0
		},
		"slug": "v-neck-t-shirt",
		"meta": {
			"product_type": "variation",
			"sku": "woo-vneck-tee-blue",
			"dimensions": {
				"length": "",
				"width": "",
				"height": "",
				"unit": "cm"
			},
			"weight": 0,
			"variation": {
				"Color": "Blue",
				"Size": "Large"
			}
		},
		"cart_item_data": [],
		"featured_image": "http://cocart-dev.local/wp-content/uploads/2021/02/vnech-tee-blue-1-324x324.jpg"
	}
}
```

## View a Single Item ##

This API help you view just a single item added in the cart.

### Properties ###

| Property   | Type   | Description                                                                                                                 |
| ---------- | ------ | --------------------------------------------------------------------------------------------------------------------------- |
| `cart_key` | string | Unique identifier for the cart. <a class="label label-info" href="#cart-key">?</a> <i class="label label-info">optional</i> |
| `item_key` | string | Unique identifier for the item in the cart. <i class="label label-info">mandatory</i>                                       |

### HTTP request ###

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-get">GET</i>
    <h6>/wp-json/cocart/v2/cart/item/{item_key}</h6>
  </div>
</div>

```shell
curl -X GET https://example.com/wp-json/cocart/v2/cart/item/{item_key} \
 -H "Content-Type: application/json"
```

```javascript--node
CoCart.get("cart/item/{item_key}")
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
  url: "https://example.com/wp-json/cocart/v2/cart/item/{item_key}",
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
  CURLOPT_URL => "https://example.com/wp-json/cocart/v2/cart/item/{item_key}",
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
$response = wp_remote_get( 'https://example.com/wp-json/cocart/v2/cart/item/{item_key}' );
$body = wp_remote_retrieve_body( $response );
```

```json
{
	"item_key": "af69a8dc2ae2de6cac18bc4a6a75afa3",
	"id": 85,
	"name": "V-Neck T-Shirt - Blue",
	"title": "V-Neck T-Shirt",
	"price": "15.00",
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
		"subtotal": 15,
		"subtotal_tax": 0,
		"total": 15,
		"tax": 0
	},
	"slug": "v-neck-t-shirt",
	"meta": {
		"product_type": "variation",
		"sku": "woo-vneck-tee-blue",
		"dimensions": {
			"length": "",
			"width": "",
			"height": "",
			"unit": "cm"
		},
		"weight": 0,
		"variation": {
			"Color": "Blue",
			"Size": "Large"
		}
	},
	"cart_item_data": [],
	"featured_image": "http://cocart-dev.local/wp-content/uploads/2021/02/vnech-tee-blue-1-324x324.jpg"
}
```

## Count Items ##

This API helps you count the items in the cart.

### Properties ###

| Property        | Type   | Description                                                                                                                 |
| --------------- | ------ | --------------------------------------------------------------------------------------------------------------------------- |
| `cart_key`      | string | Unique identifier for the cart. <a class="label label-info" href="#cart-key">?</a> <i class="label label-info">optional</i> |
| `removed_items` | bool | Set as true to count items removed from the cart. <i class="label label-info">optional</i>                                    |

### HTTP request ###

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-get">GET</i>
    <h6>/wp-json/cocart/v2/cart/items/count</h6>
  </div>
</div>

```shell
curl -X GET https://example.com/wp-json/cocart/v2/cart/items/count \
 -H "Content-Type: application/json"
```

```javascript--node
CoCart.get("cart/items/count")
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
  url: "https://example.com/wp-json/cocart/v2/cart/items/count",
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
  CURLOPT_URL => "https://example.com/wp-json/cocart/v2/cart/items/count",
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
$response = wp_remote_get( 'https://example.com/wp-json/cocart/v2/cart/items/count' );
$body = wp_remote_retrieve_body( $response );
```

```json
3
```