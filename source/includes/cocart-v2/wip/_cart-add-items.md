# Add to Cart #

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [Edit on GitHub](https://github.com/co-cart/co-cart-docs/blob/master/source/includes/cocart-v2/wip/_cart-add-items.md)

The most important part of CoCart is adding items to the cart. This API helps you to add an item or items to the cart.

 * [Add a Simple Product](#add-to-cart-add-a-simple-product)
 * [Add a Variation of a Variable Product](#add-to-cart-add-a-variation-of-a-variable-product)
 * [Add a Grouped Product](#add-to-cart-add-a-grouped-product)
 * [Add an Item with Custom Data](#add-to-cart-add-item-with-custom-data)

### Properties ###

| Property      | Type   | Description                                                                                                                  |
| ------------- | ------ | -----------------------------------------------------------------------------------------------------------------------------|
| `cart_key`    | string | Unique identifier for the cart. <a class="label label-info" href="#cart-key">?</a> <i class="label label-info">optional</i>  |
| `id`          | string | Unique identifier for the product or variation ID. A SKU ID can also be used here. <i class="label label-info">mandatory</i> |
| `quantity`    | string | Set the quantity of the product you want to add to the cart. <i class="label label-info">Default is 1</i>                    |
| `variation`   | object | Attribute values. <i class="label label-info">required, for variable products only</i>                                       |
| `item_data`   | object | Used to apply extra cart item data we want to pass with the item. <i class="label label-info">optional</i>                   |
| `return_item` | bool   | Set as true to return the item details once added. <i class="label label-info">optional</i>                                  |

### HTTP request ###

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-post">POST</i>
    <h6>/wp-json/cocart/v2/cart/add-item</h6>
  </div>
</div>

## Add a Simple Product ##

There are two ways of adding a simple product. Either use the product ID or it's SKU ID.

> Example of adding to the cart via product ID.

```shell
curl -X POST https://example.com/wp-json/cocart/v2/cart/add-item \
  -H "Content-Type: application/json" \
  -d '{
    "id": "32",
    "quantity": 1
  }'
```

```javascript--node
CoCart.post("add-item", {
  id: "32",
  quantity: 1
})
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
  "url": "https://example.com/wp-json/cocart/v2/cart/add-item",
  "method": "POST",
  "data": {
    "id" : "32",
    "quantity" : 1
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
  'id' => "32",
  'quantity' => 1
);

curl_setopt_array( $curl, array(
  CURLOPT_URL => "https://example.com/wp-json/cocart/v2/cart/add-item",
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
    'id' => "32",
    'quantity' => 1
  ] ),
  'timeout' => 30
);

$response = wp_remote_post( 'https://example.com/wp-json/cocart/v2/cart/add-item', $args );
$body = wp_remote_retrieve_body( $response );
```

> Example of adding to the cart via SKU ID.

```shell
curl -X POST https://example.com/wp-json/cocart/v2/cart/add-item \
  -H "Content-Type: application/json" \
  -d '{
    "id": "Red Hoodie",
    "quantity": 1
  }'
```

```javascript--node
CoCart.post("add-item", {
  id: "Red Hoodie",
  quantity: 1
})
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
  "url": "https://example.com/wp-json/cocart/v2/cart/add-item",
  "method": "POST",
  "data": {
    "id" : "Red Hoodie",
    "quantity" : 1
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
  'id' => "Red Hoodie",
  'quantity' => 1
);

curl_setopt_array( $curl, array(
  CURLOPT_URL => "https://example.com/wp-json/cocart/v2/cart/add-item",
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
    'id' => "Red Hoodie",
    'quantity' => 1
  ] ),
  'timeout' => 30
);

$response = wp_remote_post( 'https://example.com/wp-json/cocart/v2/cart/add-item', $args );
$body = wp_remote_retrieve_body( $response );
```

## Add a Variation of a Variable Product ##

Adding a variation of a variable product to the cart is easy. All you need is to identify the attributes and which attribute your customer has selected.

### What are attributes? ###

Attributes are what identify a variation of a variable product from the colour of a t-shirt to the size.

Attributes can be managed in two ways. Globally or via the product if they are custom. It's important to know what attributes are used for the variation of the product.

All attributes start with a prefix `attribute_`. A global attribute extends the prefix like so `attribute_pa_`, while a custom attribute just has the prefix `attribute_`. Both are followed by the attribute slug. See the examples for comparison.

<aside class="notice">
  If any of your attributes are set for "Any" in the backend, your customer will still be required to select the attribute in order to add the variation to the cart.
</aside>

<aside class="warning">
  You can not add a simple product with attributes like a variation! If you wish to pass attribute data for a simple product, use the `item_data` parameter instead.
</aside>

> Example of adding a variation of a product to the cart.

```shell
curl -X POST https://example.com/wp-json/cocart/v2/cart/add-item \
  -H "Content-Type: application/json" \
  -d '{
    "id": "1820",
    "quantity": 1,
    "variation": {
      "attribute_colours": "Red",
      "attribute_pa_size": "2x-large"
    }
  }'
```

```javascript--node
var data = {
  "id": "1820",
  "quantity": 1,
  "variation": {
    "attribute_colours": "Red",
    "attribute_pa_size": "2x-large"
  }
};

CoCart.post("add-item", data)
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
  "url": "https://example.com/wp-json/cocart/v2/cart/add-item",
  "method": "POST",
  "data": {
    "id": "1820",
    "quantity": 1,
    "variation": {
      "attribute_colours": "Red",
      "attribute_pa_size": "2x-large"
    }
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
  'id' => '1820',
  'quantity' => 1,
  'variation' => {
    'attribute_colours': 'Red',
    'attribute_pa_size': '2x-large'
  }
);

curl_setopt_array( $curl, array(
  CURLOPT_URL => "https://example.com/wp-json/cocart/v2/cart/add-item",
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
    'id' => '1820',
    'quantity' => 1
    'variation' => {
      'attribute_colours': 'Red',
      'attribute_pa_size': '2x-large'
    }
  ] ),
  'timeout' => 30
);

$response = wp_remote_post( 'https://example.com/wp-json/cocart/v2/cart/add-item', $args );
$body = wp_remote_retrieve_body( $response );
```

## Add a Grouped Product ##

This API will help you add grouped products to the cart.

<aside class="notice">
  Make sure that you pointing to the correct endpoint when adding grouped products or you will be given a warning.
</aside>

```shell
curl -X POST https://example.com/wp-json/cocart/v2/cart/add-items \
  -H "Content-Type: application/json" \
  -d '{
    "id": "91",
    "quantity": {
      "71": 2,
      "72": 1
    }
  }'
```

```javascript--node
var data = {
  "id": "91",
  "quantity": {
    "71": 2,
    "72": 1
  }
};

CoCart.post("add-item", data)
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
  "url": "https://example.com/wp-json/cocart/v2/cart/add-items",
  "method": "POST",
  "data": {
    "id" : "91",
    "quantity": {
      "71": 2,
      "72": 1
    }
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
  'id' => '91',
  'quantity' => array(
    "71" => 2,
    "72" => 1
  )
);

curl_setopt_array( $curl, array(
  CURLOPT_URL => "https://example.com/wp-json/cocart/v2/cart/add-items",
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
    'id' => '91',
    'quantity' => array(
      "71" => 2,
      "72" => 1
    )
  ] ),
  'timeout' => 30
);
$response = wp_remote_post( 'https://example.com/wp-json/cocart/v2/cart/add-items', $args );
$body = wp_remote_retrieve_body( $response );
```

## Add Item with Custom Data ##

Need to pass custom data? This example will show you how.

> Example of adding a product with custom data to the cart.

```shell
curl -X POST https://example.com/wp-json/cocart/v2/cart/add-item \
  -H "Content-Type: application/json" \
  -d '{
    "id": "3008",
    "quantity": 1,
    "item_data": {
      "engraved_name": "Sébastien Dumont",
      "engraved_size": "Medium"
    }
  }'
```

```javascript--node
var data = {
  "id": "3008",
  "quantity": 1,
  "item_data": {
    "engraved_name": "Sébastien Dumont",
    "engraved_size": "Medium"
  }
};

CoCart.post("add-item", data)
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
  "url": "https://example.com/wp-json/cocart/v2/cart/add-item",
  "method": "POST",
  "data": {
    "id" : "3008",
    "quantity" : 1,
    "item_data" : {
      "engraved_name" : "Sébastien Dumont",
      "engraved_size" : "Medium"
    }
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
  'id' => '3008',
  'quantity' => 1,
  'item_data' => array(
    'engraved_name' => 'Sébastien Dumont',
    'engraved_size' => 'Medium'
  )
);

curl_setopt_array( $curl, array(
  CURLOPT_URL => "https://example.com/wp-json/cocart/v2/cart/add-item",
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
    'id' => '3008',
    'quantity' => 1
    'item_data' => array(
      'engraved_name' => 'Sébastien Dumont',
      'engraved_size' => 'Medium'
    )
  ] ),
  'timeout' => 30
);
$response = wp_remote_post( 'https://example.com/wp-json/cocart/v2/cart/add-item', $args );
$body = wp_remote_retrieve_body( $response );
```
