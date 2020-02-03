## Add Item to Cart ##

This API helps you to add an item to the cart. You can also request to return the whole cart once item is added to reduce API requests and use the [Get Cart Content](#get-cart-contents) properties.

### Properties ###

| Attribute        | Type      | Description       |
| ---------------- | --------- | ----------------- |
| `product_id`     | integer   | The product ID is required in order to add a product to the cart. <i class="label label-info">mandatory</i> |
| `quantity`       | integer   | Set the quantity of the product you want to add to the cart. <i class="label label-info">Default is 1</i> |
| `variation_id`   | integer   | Used to set the variation of the product being added to the cart. <i class="label label-info">optional</i> |
| `variation`      | array     | Attribute values |
| `cart_item_data` | array     | Used to apply extra cart item data we want to pass with the item. <i class="label label-info">optional</i> |
| `refresh_totals` | bool      | Set as true to refresh the cart totals once item is added. <i class="label label-info">optional</i> |
| `return_cart`    | bool      | Set as true to return the whole cart once item added. <i class="label label-info">optional</i> |

<aside class="notice">
  If you wish to add the item for a specific registered customer then you must [#authenticate] as that customer.
</aside>

### HTTP request ###

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-post">POST</i>
    <h6>/wp-json/cocart/v1/add-item</h6>
  </div>
</div>

```shell
curl -X POST https://example.com/wp-json/cocart/v1/add-item \
  -H "Content-Type: application/json" \
  -d '{
    "product_id": 1722,
    "quantity": 1
  }'
```

```javascript--jquery
var settings = {
  "url": "https://example.com/wp-json/cocart/v1/add-item",
  "method": "POST",
  "data": {
    "product_id" : 1722,
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
  'product_id' => 1722,
  'quantity' => 1
);

curl_setopt_array( $curl, array(
  CURLOPT_URL => "https://example.com/wp-json/cocart/v1/add-item",
  CURLOPT_CUSTOMREQUEST => "POST",
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
  'product_id' => 1722,
  'quantity' => 1
);
$response = wp_remote_post( 'https://example.com/wp-json/cocart/v1/add-item', $args );
$body = wp_remote_retrieve_body( $response );
```

> JSON response example

```json
{
  "404dcc91b2aeaa7caa47487d1483e48a":{
    "key":"404dcc91b2aeaa7caa47487d1483e48a",
    "product_id":1722,
    "variation_id":0,
    "variation":[],
    "quantity":1,
    "line_tax_data":{
      "subtotal":[],
      "total":[]
    },
    "line_subtotal":18,
    "line_subtotal_tax":0,
    "line_total":18,
    "line_tax":0,
    "data":{}
  }
}
```
