# Cart #

The cart API is powerful and allows you to view the cart in session, add new items, update the quantity of an item and delete individual items from the cart.

Using the individual endpoints and their properties, you can control what you need and what is returned when the request is finished.

## Get Cart Contents ##

This API returns the contents of the cart from a logged in customer or guest. You can also ask it to return a specific cart of registered customer.

<aside class="notice">
Please note that to return a registered customer, you must have persistent cart left enabled in you WooCommerce store for this to work and will only return if it has not expired or is still in session.
</aside>

### Properties ###

| Attribute | Type | Description |
| ------------ | -------------- | ------------ |
`id` | integer | Unique identifier for the customer.
`thumb` | bool | Returns the product thumbnail for the product.

### HTTP request ###

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-get">GET</i>
    <h6>/wp-json/cocart/v1/get-cart</h6>
  </div>
</div>

```shell
curl -X GET https://example.com/wp-json/cocart/v1/get-cart \
  -H "Content-Type: application/json"
```

> JSON response example

```json
{
  "19ca14e7ea6328a42e0eb13d585e4c22":{
    "key":"19ca14e7ea6328a42e0eb13d585e4c22",
    "product_id":36,
    "variation_id":0,
    "variation":[],
    "quantity":1,
    "data_hash":"b5c1d5ca8bae6d4896cf1807cdf763f0",
    "line_tax_data":{
      "subtotal":[],
      "total":[]
    },
    "line_subtotal":18,
    "line_subtotal_tax":0,
    "line_total":14.4,
    "line_tax":0,
    "data":{},
    "product_name":"Vneck Tshirt",
    "product_title":"Vneck Tshirt"
  }
}
```

```shell
curl -X GET https://example.com/wp-json/cocart/v1/get-cart \
  -H "Content-Type: application/json" \
  -d '{
    "thumb": true
  }'
```

> JSON response example

```json
{
  "19ca14e7ea6328a42e0eb13d585e4c22":{
    "key":"19ca14e7ea6328a42e0eb13d585e4c22",
    "product_id":36,
    "variation_id":0,
    "variation":[],
    "quantity":1,
    "data_hash":"b5c1d5ca8bae6d4896cf1807cdf763f0",
    "line_tax_data":{
      "subtotal":[],
      "total":[]
    },
    "line_subtotal":18,
    "line_subtotal_tax":0,
    "line_total":14.4,
    "line_tax":0,
    "data":{},
    "product_name":"Vneck Tshirt",
    "product_title":"Vneck Tshirt",
    "product_image":"http:\/\/yourdomain.xyz\/wp-content\/uploads\/2019\/06\/vneck-tee.jpg"
  }
}
```

## Get Customers Cart Contents ##

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-get">GET</i>
    <h6>/wp-json/cocart/v1/get-cart/&lt;id&gt;</h6>
  </div>
</div>

```shell
curl -X GET https://example.com/wp-json/cocart/v1/get-cart/123 \
  -u consumer_key:consumer_secret \
  -H "Content-Type: application/json"
```

> JSON returns the same responses as the examples above.