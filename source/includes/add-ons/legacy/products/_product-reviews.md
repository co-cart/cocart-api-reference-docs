# Product reviews #

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [Edit on GitHub](https://github.com/co-cart/co-cart-docs/blob/master/source/includes/cocart-v1/products/_product-reviews.md)

The product reviews API allows you to view product reviews and create a product review.

* [Create a product review](#product-reviews-create-a-product-review)
* [Retrieve a product review](#product-reviews-retrieve-a-product-review)
* [List all product reviews](#product-reviews-list-all-product-reviews)

## Product review attributes ##

| Attribute          | Type    | Description                                                                   |
| ------------------ | ------- | ----------------------------------------------------------------------------- |
| `id`               | integer | Unique identifier for the product review.                                     |
| `date_created`     | string  | The date the review was created, in the site's timezone.                      |
| `date_created_gmt` | string  | The date the review was created, as GMT.                                      |
| `product_id`       | integer | Unique identifier for the product that the review belongs to.                 |
| `status`           | string  | Status of the review. Options: `approved` and `hold`. Defaults to `approved`. |
| `reviewer`         | string  | Reviewer name.                                                                |
| `reviewer_email`   | string  | Reviewer email.                                                               |
| `review`           | string  | The content of the review.                                                    |
| `rating`           | integer | Review rating (0 to 5).                                                       |
| `verified`         | boolean | Shows if the reviewer bought the product or not.                              |

## Create a product review ##

This API helps you to create a new product review. Either submit the review as the customer or as administrator on behalf of the customer. Must use the same email address used on the customers account at the time the product being reviewed was ordered.

### HTTP request ###

<div class="api-endpoint">
	<div class="endpoint-data">
		<i class="label label-post">POST</i>
		<h6>/wp-json/cocart/v1/products/reviews</h6>
	</div>
</div>

> Example of how to create a product review:

```shell
curl -X POST https://example.com/wp-json/cocart/v1/products/reviews \
	-u consumer_key:consumer_secret \
	-H "Content-Type: application/json" \
	-d '{
	"product_id": 22,
	"review": "Nice album!",
	"reviewer": "John Doe",
	"reviewer_email": "john.doe@example.com",
	"rating": 5
}'
```

```javascript--node
CoCart.post("products/reviews", {
  product_id: "22",
  review: "Nice album!",
  reviewer: "John Doe",
  reviewer_email: "john.doe@example.com",
  rating: 5
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
  url: "https://example.com/wp-json/cocart/v1/add-item",
  method: "POST",
  data: JSON.stringify({
    "product_id": "22",
    "review": "Nice album!",
    "reviewer": "John Doe",
    "reviewer_email": "john.doe@example.com",
    "rating": 5
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
  'product_id' => '22',
  'review' => 'Nice album!',
  'reviewer' => 'John Doe',
  'reviewer_email' => 'john.doe@example.com',
  'rating' => 5
);

curl_setopt_array( $curl, array(
  CURLOPT_URL => "https://example.com/wp-json/cocart/v1/add-item",
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => $args,
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
$args = array(
  'headers' => array(
    'Content-Type' => 'application/json; charset=utf-8',
  ),
  'body' => wp_json_encode( [
    'product_id' => '22',
    'review' => 'Nice album!',
    'reviewer' => 'John Doe',
    'reviewer_email' => 'john.doe@example.com',
    'rating' => 5
  ] ),
  'timeout' => 30
);

$response = wp_remote_post( 'https://example.com/wp-json/cocart/v1/add-item', $args );
$body = wp_remote_retrieve_body( $response );
```

```json
{
	"id": 22,
	"date_created": "2018-10-18T17:59:17",
	"date_created_gmt": "2018-10-18T20:59:17",
	"product_id": 22,
	"status": "approved",
	"reviewer": "John Doe",
	"reviewer_email": "john.doe@example.com",
	"review": "Nice album!",
	"rating": 5,
	"verified": false,
	"reviewer_avatar_urls": {
		"24": "https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=24&d=mm&r=g",
		"48": "https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=48&d=mm&r=g",
		"96": "https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=96&d=mm&r=g"
	},
	"_links": {
		"self": [
			{
				"href": "https://example.com/wp-json/cocart/v1/products/reviews/22"
			}
		],
		"collection": [
			{
				"href": "https://example.com/wp-json/cocart/v1/products/reviews"
			}
		],
		"up": [
			{
				"href": "https://example.com/wp-json/cocart/v1/products/22"
			}
		]
	}
}
```

## Retrieve a product review ##

This API lets you retrieve a product review by ID.

<div class="api-endpoint">
	<div class="endpoint-data">
		<i class="label label-get">GET</i>
		<h6>/wp-json/cocart/v1/products/reviews/&lt;id&gt;</h6>
	</div>
</div>

```shell
curl -X GET https://example.com/wp-json/cocart/v1/products/reviews/22 \
  -H "Content-Type: application/json" \
```

```javascript--node
CoCart.get("products/reviews/22")
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
  url: "https://example.com/wp-json/cocart/v1/products/reviews/22",
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
  CURLOPT_URL => "https://example.com/wp-json/cocart/v1/products/reviews/22",
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
$response = wp_remote_get( 'https://example.com/wp-json/cocart/v1/products/reviews/22' );
$body = wp_remote_retrieve_body( $response );
```

```json
{
	"id": 22,
	"date_created": "2018-10-18T17:59:17",
	"date_created_gmt": "2018-10-18T20:59:17",
	"product_id": 22,
	"status": "approved",
	"reviewer": "John Doe",
	"review": "Nice album!",
	"rating": 5,
	"verified": false,
	"reviewer_avatar_urls": {
		"24": "https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=24&d=mm&r=g",
		"48": "https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=48&d=mm&r=g",
		"96": "https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=96&d=mm&r=g"
	},
	"_links": {
		"self": [
			{
				"href": "https://example.com/wp-json/cocart/v1/products/reviews/22"
			}
		],
		"collection": [
			{
				"href": "https://example.com/wp-json/cocart/v1/products/reviews"
			}
		],
		"up": [
			{
				"href": "https://example.com/wp-json/cocart/v1/products/22"
			}
		]
	}
}
```

## List all product reviews ##

This API lets you retrieve all product reviews.

<div class="api-endpoint">
	<div class="endpoint-data">
		<i class="label label-get">GET</i>
		<h6>/wp-json/cocart/v1/products/reviews</h6>
	</div>
</div>

```shell
curl -X GET https://example.com/wp-json/cocart/v1/products/reviews \
  -H "Content-Type: application/json" \
```

```javascript--node
CoCart.get("products/reviews")
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
  url: "https://example.com/wp-json/cocart/v1/products/reviews",
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
  CURLOPT_URL => "https://example.com/wp-json/cocart/v1/products/reviews",
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
$response = wp_remote_get( 'https://example.com/wp-json/cocart/v1/products/reviews' );
$body = wp_remote_retrieve_body( $response );
```

```json
[
	{
		"id": 22,
		"date_created": "2018-10-18T17:59:17",
		"date_created_gmt": "2018-10-18T20:59:17",
		"product_id": 22,
		"status": "approved",
		"reviewer": "John Doe",
		"review": "<p>Nice album!</p>\n",
		"rating": 5,
		"verified": false,
		"reviewer_avatar_urls": {
			"24": "https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=24&d=mm&r=g",
			"48": "https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=48&d=mm&r=g",
			"96": "https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=96&d=mm&r=g"
		},
		"_links": {
			"self": [
				{
					"href": "https://example.com/wp-json/cocart/v1/products/reviews/22"
				}
			],
			"collection": [
				{
					"href": "https://example.com/wp-json/cocart/v1/products/reviews"
				}
			],
			"up": [
				{
					"href": "https://example.com/wp-json/cocart/v1/products/22"
				}
			]
		}
	},
	{
		"id": 20,
		"date_created": "2018-09-08T21:47:19",
		"date_created_gmt": "2018-09-09T00:47:19",
		"product_id": 31,
		"status": "approved",
		"reviewer": "Claudio Sanches",
		"review": "<p>Now works just fine.</p>\n",
		"rating": 1,
		"verified": true,
		"reviewer_avatar_urls": {
			"24": "https://secure.gravatar.com/avatar/908480753c07509e76322dc17d305c8b?s=24&d=mm&r=g",
			"48": "https://secure.gravatar.com/avatar/908480753c07509e76322dc17d305c8b?s=48&d=mm&r=g",
			"96": "https://secure.gravatar.com/avatar/908480753c07509e76322dc17d305c8b?s=96&d=mm&r=g"
		},
		"_links": {
			"self": [
				{
					"href": "https://example.com/wp-json/cocart/v1/products/reviews/20"
				}
			],
			"collection": [
				{
					"href": "https://example.com/wp-json/cocart/v1/products/reviews"
				}
			],
			"up": [
				{
					"href": "https://example.com/wp-json/cocart/v1/products/31"
				}
			],
			"reviewer": [
				{
					"embeddable": true,
					"href": "https://example.com/wp-json/wp/v2/users/1"
				}
			]
		}
	}
]
```

#### Available parameters ####

| Parameter          | Type    | Description                                                                                                                       |
| ------------------ | ------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `context`          | string  | Scope under which the request is made; determines fields present in response. Options: `view` and `edit`. Default is `view`.      |
| `page`             | integer | Current page of the collection. Default is `1`.                                                                                   |
| `per_page`         | integer | Maximum number of items to be returned in result set. Default is `10`.                                                            |
| `search`           | string  | Limit results to those matching a string.                                                                                         |
| `after`            | string  | Limit response to reviews published after a given ISO8601 compliant date.                                                         |
| `before`           | string  | Limit response to reviews published before a given ISO8601 compliant date.                                                        |
| `exclude`          | array   | Ensure result set excludes specific ids.                                                                                          |
| `include`          | array   | Limit result set to specific ids.                                                                                                 |
| `offset`           | integer | Offset the result set by a specific number of items.                                                                              |
| `order`            | string  | Order sort attribute ascending or descending. Options: `asc` and `desc`. Default is `desc`.                                       |
| `orderby`          | string  | Sort collection by resource attribute. Options: `date`, `date_gmt`, `id`, `slug`, `include` and `product`. Default is `date_gmt`. |
| `reviewer`         | array   | Limit result set to reviews assigned to specific user IDs.                                                                        |
| `reviewer_exclude` | array   | Ensure result set excludes reviews assigned to specific user IDs.                                                                 |
| `reviewer_email`   | array   | Limit result set to that from a specific author email.                                                                            |
| `product`          | array   | Limit result set to reviews assigned to specific product IDs.                                                                     |
| `status`           | string  | Limit result set to reviews assigned a specific status. Options: `all`, `hold` and `approved`. Default is `approved`.             |

```json
{
	"id": 20,
	"date_created": "2018-09-08T21:47:19",
	"date_created_gmt": "2018-09-09T00:47:19",
	"product_id": 31,
	"status": "approved",
	"reviewer": "Claudio Sanches",
	"review": "Now works just fine.",
	"rating": 5,
	"verified": true,
	"reviewer_avatar_urls": {
		"24": "https://secure.gravatar.com/avatar/908480753c07509e76322dc17d305c8b?s=24&d=mm&r=g",
		"48": "https://secure.gravatar.com/avatar/908480753c07509e76322dc17d305c8b?s=48&d=mm&r=g",
		"96": "https://secure.gravatar.com/avatar/908480753c07509e76322dc17d305c8b?s=96&d=mm&r=g"
	},
	"_links": {
		"self": [
			{
				"href": "https://example.com/wp-json/cocart/v1/products/reviews/20"
			}
		],
		"collection": [
			{
				"href": "https://example.com/wp-json/cocart/v1/products/reviews"
			}
		],
		"up": [
			{
				"href": "https://example.com/wp-json/cocart/v1/products/31"
			}
		],
		"reviewer": [
			{
				"embeddable": true,
				"href": "https://example.com/wp-json/wp/v2/users/1"
			}
		]
	}
}
```
