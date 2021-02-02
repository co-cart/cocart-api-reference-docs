# Product tags #

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [Edit on GitHub](https://github.com/co-cart/co-cart-docs/blob/master/source/includes/cocart-v1/products/_product-tags.md)

The product tags API allows you to view all or individual product tags.

 * [List all product tags](#product-tags-list-all-product-tags)
 * [Retrieve a product tag](#product-tags-retrieve-a-product-tag)

## Product tag attributes ##

| Attribute     | Type    | Description                                                     |
| ------------- | ------- | --------------------------------------------------------------- |
| `id`          | integer | Unique identifier for the tag.                                  |
| `name`        | string  | Tag name.                                                       |
| `slug`        | string  | An alphanumeric identifier for the resource unique to its type. |
| `description` | string  | HTML description of the resource.                               |
| `count`       | integer | Number of published products for the tag.                       |

## Retrieve a product tag ##

This API lets you retrieve a product tag by ID.

<div class="api-endpoint">
	<div class="endpoint-data">
		<i class="label label-get">GET</i>
		<h6>/wp-json/cocart/v1/products/tags/&lt;id&gt;</h6>
	</div>
</div>

```shell
curl https://example.com/wp-json/cocart/v1/products/tags/34 \
  -H "Content-Type: application/json" \
```

```javascript--node
CoCart.get("products/tags/34")
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
  "url": "https://example.com/wp-json/cocart/v1/products/tags/34",
  "method": "GET"
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
```

```php
<?php
$curl = curl_init();

curl_setopt_array( $curl, array(
  CURLOPT_URL => "https://example.com/wp-json/cocart/v1/products/tags/34",
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
$response = wp_remote_get( 'https://example.com/wp-json/cocart/v1/products/tags/34' );
$body = wp_remote_retrieve_body( $response );
```

> JSON response example:

```json
{
  "id": 34,
  "name": "Leather Shoes",
  "slug": "leather-shoes",
  "description": "",
  "count": 0,
  "_links": {
    "self": [
      {
        "href": "https://example.com/wp-json/cocart/v1/products/tags/34"
      }
    ],
    "collection": [
      {
        "href": "https://example.com/wp-json/cocart/v1/products/tags"
      }
    ]
  }
}
```

## List all product tags ##

This API lets you retrieve all product tag.

<div class="api-endpoint">
	<div class="endpoint-data">
		<i class="label label-get">GET</i>
		<h6>/wp-json/cocart/v1/products/tags</h6>
	</div>
</div>

```shell
curl https://example.com/wp-json/cocart/v1/products/tags \
  -H "Content-Type: application/json" \
```

```javascript--node
CoCart.get("products/tags")
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
  "url": "https://example.com/wp-json/cocart/v1/products/tags",
  "method": "GET"
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
```

```php
<?php
$curl = curl_init();

curl_setopt_array( $curl, array(
  CURLOPT_URL => "https://example.com/wp-json/cocart/v1/products/tags",
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
$response = wp_remote_get( 'https://example.com/wp-json/cocart/v1/products/tags' );
$body = wp_remote_retrieve_body( $response );
```

> JSON response example:

```json
[
  {
    "id": 34,
    "name": "Leather Shoes",
    "slug": "leather-shoes",
    "description": "",
    "count": 0,
    "_links": {
      "self": [
        {
          "href": "https://example.com/wp-json/cocart/v1/products/tags/34"
        }
      ],
      "collection": [
        {
          "href": "https://example.com/wp-json/cocart/v1/products/tags"
        }
      ]
    }
  },
  {
    "id": 35,
    "name": "Oxford Shoes",
    "slug": "oxford-shoes",
    "description": "",
    "count": 0,
    "_links": {
      "self": [
        {
          "href": "https://example.com/wp-json/cocart/v1/products/tags/35"
        }
      ],
      "collection": [
        {
          "href": "https://example.com/wp-json/cocart/v1/products/tags"
        }
      ]
    }
  }
]
```

#### Available parameters ####

| Parameter    | Type    | Description                                                                                                                                  |
| ------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `page`       | integer | Current page of the collection. Default is `1`.                                                                                              |
| `per_page`   | integer | Maximum number of items to be returned in result set. Default is `10`.                                                                       |
| `search`     | string  | Limit results to those matching a string.                                                                                                    |
| `exclude`    | array   | Ensure result set excludes specific ids.                                                                                                     |
| `include`    | array   | Limit result set to specific ids.                                                                                                            |
| `offset`     | integer | Offset the result set by a specific number of items.                                                                                         |
| `order`      | string  | Order sort attribute ascending or descending. Options: `asc` and `desc`. Default is `asc`.                                                   |
| `orderby`    | string  | Sort collection by tag attribute. Options: `id`, `include`, `name`, `slug`, `term_group`, `description` and `count`. Default is `name`. |
| `hide_empty` | boolean | Whether to hide tags not assigned to any products. Default is `false`.                                                                  |
| `product`    | integer | Limit result set to tags assigned to a specific product.                                                                                |
| `slug`       | string  | Limit result set to tags with a specific slug.                                                                                          |
