# WooCommerce Extensions #

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [Edit on GitHub](https://github.com/co-cart/co-cart-docs/blob/master/source/includes/cocart-v2/_woocommerce-extensions.md)

[These extensions](https://cocart.xyz/woocommerce-extensions/?utm_medium=docs.cocart.xyz&utm_source=docs&utm_content=cocart-docs) either support CoCart or is supported in [CoCart Pro](#cocart-add-ons-cocart-pro).

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

> Example of adding a Mix and Match Product

```javascript--node
CoCart.post("cart/add-item", {
  "id": "1102",
  "quantity": "5",
  "item_data": {
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
  },
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

```shell
curl -X POST https://example.com/wp-json/cocart/v2/cart/add-item \
  -H "Content-Type: application/json" \
  -d '{
    "id": "1102",
    "quantity": "2",
    "item_data": {
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
$.ajax({
  url: "https://example.com/wp-json/cocart/v2/cart/add-item",
  method: "POST",
  data: JSON.stringify({
    "id": "1102",
    "quantity": "5",
    "item_data": {
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
    },
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
  'id' => '1102',
  'quantity' => '5',
  'item_data' => array(
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
  CURLOPT_URL => "https://example.com/wp-json/cocart/v2/cart/add-item",
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
    'id' => '1102',
    'quantity' => '5',
    'item_data' => array(
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
$response = wp_remote_post( 'https://example.com/wp-json/cocart/v2/cart/add-item', $args );
$body = wp_remote_retrieve_body( $response );
```

```json
{
    "6563b32f054b00c7ed83ce4c9bb9eedd": {
        "mnm_config": {
            "987": {
                "product_id": 987,
                "quantity": 1
            },
            "1001": {
                "product_id": 1001,
                "quantity": 2
            },
            "1003": {
                "product_id": 1003,
                "quantity": 3
            }
        },
        "mnm_contents": [
            "8e9868e336b9bafe4722c31ade00a8f6",
            "a29fe85f04188ccc5a7106dec6f5ca89",
            "4531239fed8c9875e0cce609b86be85a"
        ],
        "key": "6563b32f054b00c7ed83ce4c9bb9eedd",
        "product_id": 1102,
        "variation_id": 0,
        "variation": [],
        "quantity": 1,
        "data_hash": "d88f7e7e5dfa45731252a34e3e64325c",
        "line_tax_data": {
            "subtotal": [],
            "total": []
        },
        "line_subtotal": 9.7013,
        "line_subtotal_tax": 0,
        "line_total": 9.7013,
        "line_tax": 0,
        "data": {
            "product_type": "mix-and-match",
            "is_nyp": false
        },
        "product_name": "Mix and Match Products",
        "product_title": "Mix and Match Products",
        "product_price": "£2.00"
    },
    "8e9868e336b9bafe4722c31ade00a8f6": {
        "mnm_container": "6563b32f054b00c7ed83ce4c9bb9eedd",
        "mnm_child_id": 1102,
        "product_id": 987,
        "variation_id": 0,
        "variation": [],
        "quantity": 1,
        "line_tax_data": {
            "subtotal": [],
            "total": []
        },
        "line_subtotal": 1.28355,
        "line_subtotal_tax": 0,
        "line_total": 1.28355,
        "line_tax": 0,
        "data": {},
        "product_name": "Cupcake",
        "product_title": "Cupcake",
        "product_price": "£1.28"
    },
    "a29fe85f04188ccc5a7106dec6f5ca89": {
        "mnm_container": "6563b32f054b00c7ed83ce4c9bb9eedd",
        "mnm_child_id": 1102,
        "product_id": 1001,
        "variation_id": 0,
        "variation": [],
        "quantity": 2,
        "line_tax_data": {
            "subtotal": [],
            "total": []
        },
        "line_subtotal": 2.5671,
        "line_subtotal_tax": 0,
        "line_total": 1.28355,
        "line_tax": 0,
        "data": {},
        "product_name": "Turquoise Cupcake",
        "product_title": "Turquoise Cupcake",
        "product_price": "£1.28"
    },
    "4531239fed8c9875e0cce609b86be85a": {
        "mnm_container": "6563b32f054b00c7ed83ce4c9bb9eedd",
        "mnm_child_id": 1102,
        "product_id": 1003,
        "variation_id": 0,
        "variation": [],
        "quantity": 3,
        "line_tax_data": {
            "subtotal": [],
            "total": []
        },
        "line_subtotal": 3.85065,
        "line_subtotal_tax": 0,
        "line_total": 1.28355,
        "line_tax": 0,
        "data": {},
        "product_name": "Buttercup and Bumblebee Cupcakes",
        "product_title": "Buttercup and Bumblebee Cupcakes",
        "product_price": "£1.28"
    }
}
```

### Retrieve a product ###

If you are using [CoCart Products](products.html) API, any Mix and Match Product will return additional product data under a new array variable `mnm_data`. [View example](products.html#woocommerce-extensions-mix-and-match-products).

## Name Your Price ##

The [Name Your Price](https://woocommerce.com/products/name-your-price/) plugin extension lets you be flexible in what price you are willing to accept for selected products. You can use this plugin to accept donations or to take a new approach to selling products. You can suggest a price to your customers and optionally enforce a minimum acceptable price, or leave it entirely in the hands of the customer.

<aside class="notice">
  Name Your Price supports CoCart since <strong>v3.1.0</strong>.
</aside>

### Add item to Cart ###

Once you have setup "[Name Your Price](https://woocommerce.com/products/name-your-price/)" for your particular products. Here is how you can apply the customers requested price for the product when adding to cart.

> Example of adding an item with a custom price.

```javascript--node
CoCart.post("cart/add-item", {
  "id": "1102",
  "quantity": "5",
  "item_data": {
      "nyp": 24
  }
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

```shell
curl -X POST https://example.com/wp-json/cocart/v2/cart/add-item \
  -H "Content-Type: application/json" \
  -d '{
    "id": "129",
    "quantity": "1",
    "item_data": {
      "nyp": 24
    }
  }'
```

```javascript--jquery
$.ajax({
  url: "https://example.com/wp-json/cocart/v2/cart/add-item",
  method: "POST",
  data: JSON.stringify({
    "id": "129",
    "quantity": "1",
    "item_data": {
      "nyp": 24
    }
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
  'id' => '129',
  'quantity' => '1',
  'item_data' => array(
    'nyp' => 24
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
    'id' => '129',
    'quantity' => '1',
    'item_data' => array(
      'nyp' => 24
    )
  ] ),
  'timeout' => 30
);
$response = wp_remote_post( 'https://example.com/wp-json/cocart/v2/cart/add-item', $args );
$body = wp_remote_retrieve_body( $response );
```

```json
{
    "nyp": "24",
    "key": "1dc5e4af26b22d63451acb95d2b9deba",
    "product_id": 129,
    "variation_id": 0,
    "variation": [],
    "quantity": 1,
    "data": {},
    "data_hash": "b5c1d5ca8bae6d4896cf1807cdf763f0",
    "line_tax_data": {
        "subtotal": [],
        "total": []
    },
    "line_subtotal": 24,
    "line_subtotal_tax": 0,
    "line_total": 24,
    "line_tax": 0,
    "product_name": "Name your price",
    "product_title": "Name your price",
    "product_price": "£24.00"
}
```
