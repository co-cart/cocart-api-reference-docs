# Product categories #

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [Edit on GitHub](https://github.com/co-cart/co-cart-docs/blob/master/source/includes/cocart-v1/products/_product-categories.md)

The product categories API allows you to view all or individual product categories.

 * [List all product categories](#product-categories-list-all-product-categories)
 * [Retrieve a product category](#product-categories-retrieve-a-product-category)

## Product category attributes ##

| Attribute     | Type    | Description                                                                                                      |
| ------------- | ------- | ---------------------------------------------------------------------------------------------------------------- |
| `id`          | integer | Unique identifier for the category.                                                                              |
| `name`        | string  | Category name.                                                                                                   |
| `slug`        | string  | An alphanumeric identifier for the category unique to its type.                                                  |
| `parent`      | integer | The ID for the parent of the category.                                                                           |
| `description` | string  | HTML description of the category.                                                                                |
| `display`     | string  | Category archive display type. Options: `default`, `products`, `subcategories` and `both`. Default is `default`. |
| `image`       | object  | Image data. See [Product category - Image properties](#product-category-image-properties)                        |
| `menu_order`  | integer | Menu order, used to custom sort the category.                                                                    |
| `count`       | integer | Number of published products for the category.                                                                   |

### Product category - Image attributes ###

| Attribute           | Type      | Description                                                   |
| ------------------- | --------- | ------------------------------------------------------------- |
| `id`                | integer   | Image ID.                                                     |
| `date_created`      | date-time | The date the image was created, in the site's timezone.       |
| `date_created_gmt`  | date-time | The date the image was created, as GMT                        |
| `date_modified`     | date-time | The date the image was last modified, in the site's timezone. |
| `date_modified_gmt` | date-time | The date the image was last modified, as GMT.                 |
| `src`               | string    | Image URL.                                                    |
| `name`              | string    | Image name.                                                   |
| `alt`               | string    | Image alternative text.                                       |

## Retrieve a product category ##

This API lets you retrieve a product category by ID.

<div class="api-endpoint">
	<div class="endpoint-data">
		<i class="label label-get">GET</i>
		<h6>/wp-json/cocart/v1/products/categories/&lt;id&gt;</h6>
	</div>
</div>

```shell
curl https://example.com/wp-json/cocart/v1/products/categories/9 \
  -H "Content-Type: application/json" \
```

```javascript--node
CoCart.get("products/categories/9")
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
  "url": "https://example.com/wp-json/cocart/v1/products/categories/9",
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
  CURLOPT_URL => "https://example.com/wp-json/cocart/v1/products/categories/9",
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
$response = wp_remote_get( 'https://example.com/wp-json/cocart/v1/products/categories/9' );
$body = wp_remote_retrieve_body( $response );
```

> JSON response example:

```json
{
  "id": 9,
  "name": "Clothing",
  "slug": "clothing",
  "parent": 0,
  "description": "",
  "display": "default",
  "image": {
    "id": 730,
    "date_created": "2017-03-23T00:01:07",
    "date_created_gmt": "2017-03-23T03:01:07",
    "date_modified": "2017-03-23T00:01:07",
    "date_modified_gmt": "2017-03-23T03:01:07",
    "src": "https://example.com/wp-content/uploads/2017/03/T_2_front.jpg",
    "name": "",
    "alt": ""
  },
  "menu_order": 0,
  "count": 36,
  "_links": {
    "self": [
      {
        "href": "https://example.com/wp-json/cocart/v1/products/categories/9"
      }
    ],
    "collection": [
      {
        "href": "https://example.com/wp-json/cocart/v1/products/categories"
      }
    ]
  }
}
```

## List all product categories ##

This API lets you retrieve all product categories.

<div class="api-endpoint">
	<div class="endpoint-data">
		<i class="label label-get">GET</i>
		<h6>/wp-json/cocart/v1/products/categories</h6>
	</div>
</div>

```shell
curl https://example.com/wp-json/cocart/v1/products/categories \
  -H "Content-Type: application/json" \
```

```javascript--node
CoCart.get("products/categories")
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
  "url": "https://example.com/wp-json/cocart/v1/products/categories",
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
  CURLOPT_URL => "https://example.com/wp-json/cocart/v1/products/categories",
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
$response = wp_remote_get( 'https://example.com/wp-json/cocart/v1/products/categories' );
$body = wp_remote_retrieve_body( $response );
```

> JSON response example:

```json
[
  {
    "id": 15,
    "name": "Albums",
    "slug": "albums",
    "parent": 11,
    "description": "",
    "display": "default",
    "image": [],
    "menu_order": 0,
    "count": 4,
    "_links": {
      "self": [
        {
          "href": "https://example.com/wp-json/cocart/v1/products/categories/15"
        }
      ],
      "collection": [
        {
          "href": "https://example.com/wp-json/cocart/v1/products/categories"
        }
      ],
      "up": [
        {
          "href": "https://example.com/wp-json/cocart/v1/products/categories/11"
        }
      ]
    }
  },
  {
    "id": 9,
    "name": "Clothing",
    "slug": "clothing",
    "parent": 0,
    "description": "",
    "display": "default",
    "image": {
      "id": 730,
      "date_created": "2017-03-23T00:01:07",
      "date_created_gmt": "2017-03-23T03:01:07",
      "date_modified": "2017-03-23T00:01:07",
      "date_modified_gmt": "2017-03-23T03:01:07",
      "src": "https://example.com/wp-content/uploads/2017/03/T_2_front.jpg",
      "name": "",
      "alt": ""
    },
    "menu_order": 0,
    "count": 36,
    "_links": {
      "self": [
        {
          "href": "https://example/wp-json/cocart/v1/products/categories/9"
        }
      ],
      "collection": [
        {
          "href": "https://example/wp-json/cocart/v1/products/categories"
        }
      ]
    }
  },
  {
    "id": 10,
    "name": "Hoodies",
    "slug": "hoodies",
    "parent": 9,
    "description": "",
    "display": "default",
    "image": [],
    "menu_order": 0,
    "count": 6,
    "_links": {
      "self": [
        {
          "href": "https://example.com/wp-json/cocart/v1/products/categories/10"
        }
      ],
      "collection": [
        {
          "href": "https://example.com/wp-json/cocart/v1/products/categories"
        }
      ],
      "up": [
        {
          "href": "https://example.com/wp-json/cocart/v1/products/categories/9"
        }
      ]
    }
  },
  {
    "id": 11,
    "name": "Music",
    "slug": "music",
    "parent": 0,
    "description": "",
    "display": "default",
    "image": [],
    "menu_order": 0,
    "count": 7,
    "_links": {
      "self": [
        {
          "href": "https://example.com/wp-json/cocart/v1/products/categories/11"
        }
      ],
      "collection": [
        {
          "href": "https://example.com/wp-json/cocart/v1/products/categories"
        }
      ]
    }
  },
  {
    "id": 12,
    "name": "Posters",
    "slug": "posters",
    "parent": 0,
    "description": "",
    "display": "default",
    "image": [],
    "menu_order": 0,
    "count": 5,
    "_links": {
      "self": [
        {
          "href": "https://example.com/wp-json/cocart/v1/products/categories/12"
        }
      ],
      "collection": [
        {
          "href": "https://example.com/wp-json/cocart/v1/products/categories"
        }
      ]
    }
  },
  {
    "id": 13,
    "name": "Singles",
    "slug": "singles",
    "parent": 11,
    "description": "",
    "display": "default",
    "image": [],
    "menu_order": 0,
    "count": 3,
    "_links": {
      "self": [
        {
          "href": "https://example.com/wp-json/cocart/v1/products/categories/13"
        }
      ],
      "collection": [
        {
          "href": "https://example.com/wp-json/cocart/v1/products/categories"
        }
      ],
      "up": [
        {
          "href": "https://example.com/wp-json/cocart/v1/products/categories/11"
        }
      ]
    }
  },
  {
    "id": 14,
    "name": "T-shirts",
    "slug": "t-shirts",
    "parent": 9,
    "description": "",
    "display": "default",
    "image": [],
    "menu_order": 0,
    "count": 6,
    "_links": {
      "self": [
        {
          "href": "https://example.com/wp-json/cocart/v1/products/categories/14"
        }
      ],
      "collection": [
        {
          "href": "https://example.com/wp-json/cocart/v1/products/categories"
        }
      ],
      "up": [
        {
          "href": "https://example.com/wp-json/cocart/v1/products/categories/9"
        }
      ]
    }
  }
]
```

#### Available parameters ####

| Parameter    | Type    | Description                                                                                                                                  |
|--------------|---------|----------------------------------------------------------------------------------------------------------------------------------------------|
| `page`       | integer | Current page of the collection. Default is `1`.                                                                                              |
| `per_page`   | integer | Maximum number of items to be returned in result set. Default is `10`.                                                                       |
| `search`     | string  | Limit results to those matching a string.                                                                                                    |
| `exclude`    | array   | Ensure result set excludes specific ids.                                                                                                     |
| `include`    | array   | Limit result set to specific ids.                                                                                                            |
| `order`      | string  | Order sort attribute ascending or descending. Options: `asc` and `desc`. Default is `asc`.                                                   |
| `orderby`    | string  | Sort collection by category attribute. Options: `id`, `include`, `name`, `slug`, `term_group`, `description` and `count`. Default is `name`. |
| `hide_empty` | boolean | Whether to hide categories not assigned to any products. Default is `false`.                                                                 |
| `parent`     | integer | Limit result set to categories assigned to a specific parent.                                                                                |
| `product`    | integer | Limit result set to categories assigned to a specific product.                                                                               |
| `slug`       | string  | Limit result set to categories with a specific slug.                                                                                         |
