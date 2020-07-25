# WooCommerce Extensions #

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [Edit on GitHub](https://github.com/co-cart/co-cart-docs/blob/master/source/includes/_woocommerce-extensions.md)

[These extensions](https://cocart.xyz/woocommerce-extensions/) either support CoCart or is supported in [CoCart Pro](#cocart-add-ons-cocart-pro).

<aside class="notice">
  Extensions are documented with examples only if they have there own configuration.
</aside>

## Mix and Match Products ##

Selling cases of wine? A dozen donuts? Fruit baskets? Six-packs of T-shirts? [Mix and Match Products](https://woocommerce.com/products/woocommerce-mix-and-match-products/) is ideal for offering similar products in bulk containers. Perfect for encouraging customers to buy in bulk without forcing them to buy items that don’t interest them.

<aside class="notice">
  Mix and Match Products supports CoCart since <strong>v1.10.0</strong>.
</aside>

### Add item to Cart ###

Once you have setup "[Mix and Match Products](https://woocommerce.com/products/woocommerce-mix-and-match-products/)" WooCommerce extension. Here is how you can add a container with the customers selected items and quantity.

```shell
curl -X POST https://example.com/wp-json/cocart/v1/add-item \
  -H "Content-Type: application/json" \
  -d '{
    "product_id": 1102,
    "quantity": 2,
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

### Retrieve a product ###

If you are using [CoCart Products](https://docs.cocart.xyz/products.html) API, any Mix and Match Product will return additional product data under a new variable.

## Name Your Price ##

The [Name Your Price](https://woocommerce.com/products/name-your-price/) plugin extension lets you be flexible in what price you are willing to accept for selected products. You can use this plugin to accept donations or to take a new approach to selling products. You can suggest a price to your customers and optionally enforce a minimum acceptable price, or leave it entirely in the hands of the customer.

<aside class="notice">
  Name Your Price supports CoCart since <strong>v3.1.0</strong>.
</aside>

### Add item to Cart ###

Once you have setup "[Name Your Price](https://woocommerce.com/products/name-your-price/)" for your particular products. Here is how you can apply the customers requested price for the product when adding to cart.

```shell
curl -X POST https://example.com/wp-json/cocart/v1/add-item \
  -H "Content-Type: application/json" \
  -d '{
    "product_id": 129,
    "quantity": 1,
    "cart_item_data": {
      "nyp": 24
    }
  }'
```

```javascript--jquery
var settings = {
  "url": "https://example.com/wp-json/cocart/v1/add-item",
  "method": "POST",
  "data": {
    "product_id": 129,
    "quantity": 1,
    "cart_item_data": {
      "nyp": 24
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
  'product_id' => 129,
  'quantity' => 1,
  'cart_item_data' => array(
    'nyp' => 24
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
    'product_id' => 129,
    'quantity' => 1,
    'cart_item_data' => array(
      'nyp' => 24
    )
  ] ),
  'timeout' => 30
);
$response = wp_remote_post( 'https://example.com/wp-json/cocart/v1/add-item', $args );
$body = wp_remote_retrieve_body( $response );
```
