# Product tags #

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [Edit on GitHub](https://github.com/co-cart/co-cart-docs/blob/master/source/includes/cocart-v1/products/_product-tags.md)

The product tags API allows you to view all or individual product tags.

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
