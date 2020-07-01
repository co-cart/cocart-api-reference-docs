# WooCommerce Extensions #

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [Edit on GitHub](https://github.com/co-cart/co-cart-docs/blob/master/source/includes/_woocommerce-extensions.md)

[These extensions](https://cocart.xyz/woocommerce-extensions/) support CoCart or are supported in [CoCart Pro](#cocart-add-ons-cocart-pro).

<aside class="notice">
  Extensions are documented with examples only if they have there own configuration.
</aside>

## Mix and Match Products ##

### Add item to Cart ###

If you have setup "[Mix and Match Products](https://woocommerce.com/products/woocommerce-mix-and-match-products/)" WooCommerce extension. Here is how you can add a container with the customers selected products and quantity.

<aside class="notice">
  You must be using <strong>Mix and Match Products v1.10.0</strong> or above.
</aside>

```shell
curl -X POST https://example.com/wp-json/cocart/v1/add-item \
  -H "Content-Type: application/json" \
  -d '{
    "product_id": 1102,
    "quantity": 5,
    "cart_item_data": {
        "mnm_config": [
            {
                "product_id": 987,
                "quantity": 1
            },
            {
                "product_id": 1001,
                "quantity": 2
            },
            {
                "product_id": 1003,
                "quantity": 3
            }
        ]
    }
}'
```

```javascript--jquery
var settings = {
  "url": "https://example.com/wp-json/cocart/v1/add-item",
  "method": "POST",
  "data": {
    "product_id": 1102,
    "quantity": 5,
    "cart_item_data": {
        "mnm_config": [
            {
                "product_id": 987,
                "quantity": 1
            },
            {
                "product_id": 1001,
                "quantity": 2
            },
            {
                "product_id": 1003,
                "quantity": 3
            }
        ]
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
  'product_id' => 1102,
  'quantity' => 5,
  'cart_item_data' => array(
      'mnm_config' => array(
          array(
              'product_id' => 987,
              'quantity' => 1
          ),
          array(
              'product_id' => 1001,
              'quantity' => 2
          ),
          array(
              'product_id' => 1003,
              'quantity' => 3
          )
      )
  )
);

curl_setopt_array( $curl, array(
  CURLOPT_URL => "https://example.com/wp-json/cocart/v1/add-item",
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => $args,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTPHEADER => array(
    'Accept: application/json',
    'Content-Type: application/json',
    'User-Agent: CoCart API/v1',
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
    'product_id' => 1102,
    'quantity' => 5,
    'cart_item_data' => array(
        'mnm_config' => array(
            array(
                'product_id' => 987,
                'quantity' => 1
            ),
            array(
                'product_id' => 1001,
                'quantity' => 2
            ),
            array(
                'product_id' => 1003,
                'quantity' => 3
            )
        )
    )
  ] ),
  'timeout' => 30
);
$response = wp_remote_post( 'https://example.com/wp-json/cocart/v1/add-item', $args );
$body = wp_remote_retrieve_body( $response );
```
