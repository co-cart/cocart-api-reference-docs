# Demo CoCart #

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [Edit on GitHub](https://github.com/co-cart/co-cart-docs/blob/master/source/includes/cocart-v/_demo.md)

If you don't yet have CoCart installed or a WordPress setup ready, you can test the results in your app using the demo site prepared.

When you do make a request, make sure you use `https://wp-demo.cocart.xyz/` as the domain to use the demo.

[Get Cart Enhanced](https://cocart.xyz/add-ons/get-cart-enhanced/?utm_medium=docs.cocart.xyz&utm_source=docs&utm_content=cocart-docs) add-on is installed so some results may appear different to the example results you see throughout the documentation. It also gives you a look at what is possible using the [filters](#filters) available to customize CoCart to your needs.

## Adding an item ##

Here is an example of adding a item to the cart via the demo.

### HTTP request ###

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-post">POST</i>
    <h6>/wp-json/cocart/v1/add-item</h6>
  </div>
</div>

[View more on add to cart](#add-to-cart-add-item-to-cart)

```shell
curl -X POST https://wp-demo.cocart.xyz/wp-json/cocart/v1/add-item \
  -H "Content-Type: application/json" \
  -d '{
    "product_id": "183",
    "quantity": 1
  }'
```

```javascript--node
CoCart.post("add-item", {
  product_id: "183",
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
$.ajax({
  url: "https://wp-demo.cocart.xyz/wp-json/cocart/v1/add-item",
  method: "POST",
  data: JSON.stringify({
    "product_id" : "183",
    "quantity" : 1
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
  'product_id' => '183',
  'quantity' => 1
);

curl_setopt_array( $curl, array(
  CURLOPT_URL => "https://wp-demo.cocart.xyz/wp-json/cocart/v1/add-item",
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
  'product_id' => '183',
  'quantity' => 1
);
$response = wp_remote_post( 'https://wp-demo.cocart.xyz/wp-json/cocart/v1/add-item', $args );
$body = wp_remote_retrieve_body( $response );
```

## Authenticate Customer ##

Currently on the demo, you can test authentication as a customer via the [basic method](#authentication-basic-authentication).

| Username  | Password                   |
| --------- | -------------------------- |
| `demo`    | `&nm5y7^sf&hm1D5MwKLgrQeC` |

More authentication methods to test with on the demo will come in the future.

## Products ##

Here is a table of products you can use to test with.

| ID    | Variation ID | Name                    | Type                     | Price                                   | Sold Individually | Variation                                                                                         |
| ----- | ------------ | ----------------------- | ------------------------ | --------------------------------------- | ----------------- | ------------------------------------------------------------------------------------------------- |
| `183` | -            | Beanie with Logo        | Simple                   | £18.00                                  | Yes               |                                                                                                   |
| `174` | -            | Album                   | Simple (Virtual)         | £15.00                                  | No                |                                                                                                   |
| `185` | -            | WordPress Pennant       | External                 | £11.05                                  | No                |                                                                                                   |
| `163` | `179`        | Hoodie                  | Variable                 | £42.00                                  | No                | `"attribute_pa_color": "red", "attribute_logo": "No"` <i class="label label-info">mandatory</i>   |
| `163` | `180`        | Hoodie                  | Variable                 | £45.00                                  | No                | `"attribute_pa_color": "green", "attribute_logo": "No"` <i class="label label-info">mandatory</i> |
| `163` | `181`        | Hoodie                  | Variable                 | £45.00                                  | No                | `"attribute_pa_color": "blue", "attribute_logo": "No"` <i class="label label-info">mandatory</i>  |
| `329` | -            | The Last of Us Part 2 - | Simple (Name Your Price) | Suggested: £229                         | No                |                                                                                                   |
|       |              | Ellie Edition           |                          | Minimum: £180                           |                   |                                                                                                   |
| `744` | -            | Netfoobar               | Simple Subscription      | £5.99 / month with a 14-day free trial. | Yes               |                                                                                                   |

## Coupons ##

Here is a table of coupons you can use to test with.

| Code           | Coupon Type         | Coupon Amount | Description                   |
| -------------- | ------------------- | ------------- | ----------------------------- |
| `get10offcart` | Percentage discount | 10            | Takes 10% off the cart total. |
| `£25OFF`       | Fixed cart discount | 25            | Takes £25 off the cart total. |
