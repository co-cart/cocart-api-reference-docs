# Product attributes #

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [Edit on GitHub](https://github.com/co-cart/co-cart-docs/blob/master/source/includes/cocart-v1/products/_product-attributes.md)

The product attributes API allows you to view all or individual product attributes.

 * [List all product attributes](#product-attributes-list-all-product-attributes)
 * [Retrieve a product attribute](#product-attributes-retrieve-a-product-attribute)

## Product attribute attributes ##

| Attribute      | Type    | Description                                                                                      |
| -------------- | ------- | ------------------------------------------------------------------------------------------------ |
| `id`           | integer | Unique identifier for the product attribute.                                                     |
| `name`         | string  | Attribute name.                                                                                  |
| `slug`         | string  | An alphanumeric identifier for the resource unique to its type.                                  |
| `type`         | string  | Type of attribute. By default only `select` is supported.                                        |
| `order_by`     | string  | Default sort order. Options: `menu_order`, `name`, `name_num` and `id`. Default is `menu_order`. |
| `has_archives` | boolean | Enable/Disable attribute archives. Default is `false`.                                           |

## Retrieve a product attribute ##

This API lets you retrieve and view a specific product attribute by ID.

<div class="api-endpoint">
	<div class="endpoint-data">
		<i class="label label-get">GET</i>
		<h6>/wp-json/cocart/v1/products/attributes/&lt;id&gt;</h6>
	</div>
</div>

```shell
curl -X GET https://example.com/wp-json/cocart/v1/products/attributes/1 \
  -H "Content-Type: application/json" \
```

```javascript--node
CoCart.get("products/attributes/1")
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
  url: "https://example.com/wp-json/cocart/v1/products/attributes/1",
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
  CURLOPT_URL => "https://example.com/wp-json/cocart/v1/products/attributes/1",
  CURLOPT_CUSTOMREQUEST => "GET",
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
$response = wp_remote_get( 'https://example.com/wp-json/cocart/v1/products/attributes/1' );
$body = wp_remote_retrieve_body( $response );
```

```json
{
  "id": 1,
  "name": "Color",
  "slug": "pa_color",
  "type": "select",
  "order_by": "menu_order",
  "has_archives": true,
  "_links": {
    "self": [
      {
        "href": "https://example.com/wp-json/cocart/v1/products/attributes/6"
      }
    ],
    "collection": [
      {
        "href": "https://example.com/wp-json/cocart/v1/products/attributes"
      }
    ]
  }
}
```

## List all product attributes ##

This API helps you to view all the product attributes.

### HTTP request ###

<div class="api-endpoint">
	<div class="endpoint-data">
		<i class="label label-get">GET</i>
		<h6>/wp-json/cocart/v1/products/attributes</h6>
	</div>
</div>

```shell
curl -X GET https://example.com/wp-json/cocart/v1/products/attributes \
  -H "Content-Type: application/json" \
```

```javascript--node
CoCart.get("products/attributes")
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
  url: "https://example.com/wp-json/cocart/v1/products/attributes",
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
  CURLOPT_URL => "https://example.com/wp-json/cocart/v1/products/attributes",
  CURLOPT_CUSTOMREQUEST => "GET",
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
$response = wp_remote_get( 'https://example.com/wp-json/cocart/v1/products/attributes' );
$body = wp_remote_retrieve_body( $response );
```

```json
[
  {
    "id": 1,
    "name": "Color",
    "slug": "pa_color",
    "type": "select",
    "order_by": "menu_order",
    "has_archives": true,
    "_links": {
      "self": [
        {
          "href": "https://example.com/wp-json/cocart/v1/products/attributes/6"
        }
      ],
      "collection": [
        {
          "href": "https://example.com/wp-json/cocart/v1/products/attributes"
        }
      ]
    }
  },
  {
    "id": 2,
    "name": "Size",
    "slug": "pa_size",
    "type": "select",
    "order_by": "menu_order",
    "has_archives": false,
    "_links": {
      "self": [
        {
          "href": "https://example.com/wp-json/cocart/v1/products/attributes/2"
        }
      ],
      "collection": [
        {
          "href": "https://example.com/wp-json/cocart/v1/products/attributes"
        }
      ]
    }
  }
]
```
