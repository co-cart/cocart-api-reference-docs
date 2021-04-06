# Product attribute terms #

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [Edit on GitHub](https://github.com/co-cart/co-cart-docs/blob/master/source/includes/cocart-v1/products/_product-attribute-terms.md)

The product attribute terms API allows you to view individual attribute terms.

## Product attribute term attributes ##

| Attribute     | Type    | Description                                                            |
| ------------- | ------- | ---------------------------------------------------------------------- |
| `id`          | integer | Unique identifier for the attribute terms.                             |
| `name`        | string  | Term name.                                                             |
| `slug`        | string  | An alphanumeric identifier for the attribute terms unique to its type. |
| `description` | string  | HTML description of the attribute terms.                               |
| `menu_order`  | integer | Menu order, used to custom sort the attribute terms.                   |
| `count`       | integer | Number of published products for the attribute terms.                  |

## Retrieve an attribute term ##

This API lets you retrieve a product attribute term by ID.

<div class="api-endpoint">
	<div class="endpoint-data">
		<i class="label label-get">GET</i>
		<h6>/wp-json/cocart/v1/products/attributes/&lt;attribute_id&gt;/terms/&lt;id&gt;</h6>
	</div>
</div>

```shell
curl -X GET https://example.com/wp-json/cocart/v1/products/attributes/2/terms/23 \
  -H "Content-Type: application/json" \
```

```javascript--node
CoCart.get("products/attributes/2/terms/23")
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
  url: "https://example.com/wp-json/cocart/v1/products/attributes/2/terms/23",
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
  CURLOPT_URL => "https://example.com/wp-json/cocart/v1/products/attributes/2/terms/23",
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
$response = wp_remote_get( 'https://example.com/wp-json/cocart/v1/products/attributes/2/terms/23' );
$body = wp_remote_retrieve_body( $response );
```

```json
{
  "id": 23,
  "name": "XXS",
  "slug": "xxs",
  "description": "",
  "menu_order": 1,
  "count": 1,
  "_links": {
    "self": [
      {
        "href": "https://example.com/wp-json/cocart/v1/products/attributes/2/terms/23"
      }
    ],
    "collection": [
      {
        "href": "https://example.com/wp-json/cocart/v1/products/attributes/2/terms"
      }
    ]
  }
}
```

## List all attribute terms ##

This API lets you retrieve all terms from a product attribute.

<div class="api-endpoint">
	<div class="endpoint-data">
		<i class="label label-get">GET</i>
		<h6>/wp-json/cocart/v1/products/attributes/&lt;attribute_id&gt;/terms</h6>
	</div>
</div>

```shell
curl -X GET https://example.com/wp-json/cocart/v1/products/attributes/2/terms \
  -H "Content-Type: application/json" \
```

```javascript--node
CoCart.get("products/attributes/2/terms")
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
  url: "https://example.com/wp-json/cocart/v1/products/attributes/2/terms",
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
  CURLOPT_URL => "https://example.com/wp-json/cocart/v1/products/attributes/2/terms",
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
$response = wp_remote_get( 'https://example.com/wp-json/cocart/v1/products/attributes/2/terms' );
$body = wp_remote_retrieve_body( $response );
```

```json
[
  {
    "id": 23,
    "name": "XXS",
    "slug": "xxs",
    "description": "",
    "menu_order": 1,
    "count": 1,
    "_links": {
      "self": [
        {
          "href": "https://example.com/wp-json/cocart/v1/products/attributes/2/terms/23"
        }
      ],
      "collection": [
        {
          "href": "https://example.com/wp-json/cocart/v1/products/attributes/2/terms"
        }
      ]
    }
  },
  {
    "id": 22,
    "name": "XS",
    "slug": "xs",
    "description": "",
    "menu_order": 2,
    "count": 1,
    "_links": {
      "self": [
        {
          "href": "https://example.com/wp-json/cocart/v1/products/attributes/2/terms/22"
        }
      ],
      "collection": [
        {
          "href": "https://example.com/wp-json/cocart/v1/products/attributes/2/terms"
        }
      ]
    }
  },
  {
    "id": 17,
    "name": "S",
    "slug": "s",
    "description": "",
    "menu_order": 3,
    "count": 1,
    "_links": {
      "self": [
        {
          "href": "https://example.com/wp-json/cocart/v1/products/attributes/2/terms/17"
        }
      ],
      "collection": [
        {
          "href": "https://example.com/wp-json/cocart/v1/products/attributes/2/terms"
        }
      ]
    }
  },
  {
    "id": 18,
    "name": "M",
    "slug": "m",
    "description": "",
    "menu_order": 4,
    "count": 1,
    "_links": {
      "self": [
        {
          "href": "https://example.com/wp-json/cocart/v1/products/attributes/2/terms/18"
        }
      ],
      "collection": [
        {
          "href": "https://example.com/wp-json/cocart/v1/products/attributes/2/terms"
        }
      ]
    }
  },
  {
    "id": 19,
    "name": "L",
    "slug": "l",
    "description": "",
    "menu_order": 5,
    "count": 1,
    "_links": {
      "self": [
        {
          "href": "https://example.com/wp-json/cocart/v1/products/attributes/2/terms/19"
        }
      ],
      "collection": [
        {
          "href": "https://example.com/wp-json/cocart/v1/products/attributes/2/terms"
        }
      ]
    }
  },
  {
    "id": 20,
    "name": "XL",
    "slug": "xl",
    "description": "",
    "menu_order": 6,
    "count": 1,
    "_links": {
      "self": [
        {
          "href": "https://example.com/wp-json/cocart/v1/products/attributes/2/terms/20"
        }
      ],
      "collection": [
        {
          "href": "https://example.com/wp-json/cocart/v1/products/attributes/2/terms"
        }
      ]
    }
  },
  {
    "id": 21,
    "name": "XXL",
    "slug": "xxl",
    "description": "",
    "menu_order": 7,
    "count": 1,
    "_links": {
      "self": [
        {
          "href": "https://example.com/wp-json/cocart/v1/products/attributes/2/terms/21"
        }
      ],
      "collection": [
        {
          "href": "https://example.com/wp-json/cocart/v1/products/attributes/2/terms"
        }
      ]
    }
  }
]
```

#### Available parameters ####

| Parameter      | Type    | Description                                                                                                                         |
| -------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `page`         | integer | Current page of the collection. Default is `1`.                                                                                     |
| `per_page`     | integer | Maximum number of items to be returned in result set. Default is `10`.                                                              |
| `search`       | string  | Limit results to those matching a string.                                                                                           |
| `exclude`      | array   | Ensure result set excludes specific ids.                                                                                            |
| `include`      | array   | Limit result set to specific ids.                                                                                                   |
| `order`        | string  | Order sort attribute ascending or descending. Options: `asc` and `desc`. Default is `asc`.                                          |
| `orderby`      | string  | Sort collection by attribute. Options: `id`, `include`, `name`, `slug`, `term_group`, `description` and `count`. Default is `name`. |
| `hide_empty`   | boolean | Whether to hide attribute terms not assigned to any products. Default is `false`.                                                   |
| `parent`       | integer | Limit result set to attribute terms assigned to a specific parent.                                                                  |
| `product`      | integer | Limit result set to attribute terms assigned to a specific product.                                                                 |
| `slug`         | string  | Limit result set to attribute terms with a specific slug.                                                                           |
