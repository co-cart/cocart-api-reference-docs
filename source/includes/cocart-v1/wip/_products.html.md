# Products #

Being able to fetch the products without authentication is important. You can not add items to the cart without products.

The products API allows you to get products or and individual product in READ-ONLY. If you want to add or alter products then view [WooCommerce's REST API Docs](https://woocommerce.github.io/woocommerce-rest-api-docs/?php#products) under products for that.

## Product properties ##

| Attribute               | Type      | Description                                                                                                          |
|-------------------------|-----------|----------------------------------------------------------------------------------------------------------------------|
| `id`                    | integer   | The product ID.                                                                                                      |
| `name`                  | string    | Product name.                                                                                                        |
| `slug`                  | string    | Product slug.                                                                                                        |
| `date_created`          | date-time | The date the product was created, in the site's timezone.                                                            |
| `date_created_gmt`      | date-time | The date the product was created, as GMT.                                                                            |
| `date_modified`         | date-time | The date the product was last modified, in the site's timezone.                                                      |
| `date_modified_gmt`     | date-time | The date the product was last modified, as GMT.                                                                      |
| `type`                  | string    | Product type.                                                                                                        |
| `featured`              | boolean   | Featured product.                                                                                                    |
| `catalog_visibility`    | string    | Catalog visibility.                                                                                                  |
| `description`           | string    | Product description.                                                                                                 |
| `short_description`     | string    | Product short description.                                                                                           |
| `sku`                   | string    | Unique identifier.                                                                                                   |
| `price`                 | string    | Current product price.                                                                                               |
| `regular_price`         | string    | Product regular price.                                                                                               |
| `sale_price`            | string    | Product sale price.                                                                                                  |
| `date_on_sale_from`     | date-time | Start date of sale price, in the site's timezone.                                                                    |
| `date_on_sale_from_gmt` | date-time | Start date of sale price, as GMT.                                                                                    |
| `date_on_sale_to`       | date-time | End date of sale price, in the site's timezone.                                                                      |
| `date_on_sale_to_gmt`   | date-time | End date of sale price, as GMT.                                                                                      |
| `on_sale`               | boolean   | Shows if the product is on sale.                                                                                     |
| `purchasable`           | boolean   | Shows if the product can be bought.                                                                                  |
| `total_sales`           | integer   | Amount of sales.                                                                                                     |
| `virtual`               | boolean   | If the product is virtual.                                                                                           |
| `downloadable`          | boolean   | If the product is downloadable.                                                                                      |
| `external_url`          | string    | Product external URL. Only for external products.                                                                    |
| `button_text`           | string    | Product external button text. Only for external products.                                                            |
| `manage_stock`          | boolean   | Stock management at product level.                                                                                   |
| `stock_quantity`        | integer   | Stock quantity.                                                                                                      |
| `stock_status`          | string    | Controls the stock status of the product.                                                                            |
| `backorders`            | string    | Shows if backorders are allowed.                                                                                     |
| `backorders_allowed`    | boolean   | Shows if backorders are allowed.                                                                                     |
| `backordered`           | boolean   | Shows if the product is on backordered.                                                                              |
| `sold_individually`     | boolean   | Allow one item to be bought in a single order.                                                                       |
| `weight`                | string    | Product weight.                                                                                                      |
| `dimensions`            | object    | Product dimensions. See [Product - Dimensions properties](#product-dimensions-properties)                            |
| `shipping_required`     | boolean   | Shows if the product need to be shipped.                                                                             |
| `reviews_allowed`       | boolean   | Shows if reviews are allowed.                                                                                        |
| `average_rating`        | string    | Reviews average rating.                                                                                              |
| `rating_count`          | integer   | Amount of reviews that the product has.                                                                              |
| `related_ids`           | array     | List of related products IDs.                                                                                        |
| `upsell_ids`            | array     | List of up-sell products IDs.                                                                                        |
| `cross_sell_ids`        | array     | List of cross-sell products IDs.                                                                                     |
| `parent_id`             | integer   | Product parent ID.                                                                                                   |
| `categories`            | array     | List of categories. See [Product - Categories properties](#product-categories-properties)                            |
| `tags`                  | array     | List of tags. See [Product - Tags properties](#product-tags-properties)                                              |
| `images`                | array     | List of images. See [Product - Images properties](#product-images-properties)                                        |
| `attributes`            | array     | List of attributes. See [Product - Attributes properties](#product-attributes-properties)                            |
| `default_attributes`    | array     | Defaults variation attributes. See [Product - Default attributes properties](#product-default-attributes-properties) |
| `variations`            | array     | List of variations IDs.                                                                                              |
| `grouped_products`      | array     | List of grouped products ID.                                                                                         |
| `menu_order`            | integer   | Menu order, used to custom sort products.                                                                            |
| `meta_data`             | array     | Meta data. See [Product - Meta data properties](#product-meta-data-properties)                                       |

### Product - Dimensions properties ###

| Attribute | Type   | Description     |
|-----------|--------|-----------------|
| `length`  | string | Product length. |
| `width`   | string | Product width.  |
| `height`  | string | Product height. |

### Product - Categories properties ###

| Attribute | Type    | Description    |
|-----------|---------|----------------|
| `id`      | integer | Category ID.   |
| `name`    | string  | Category name. |
| `slug`    | string  | Category slug. |

### Product - Tags properties ###

| Attribute | Type    | Description |
|-----------|---------|-------------|
| `id`      | integer | Tag ID.     |
| `name`    | string  | Tag name.   |
| `slug`    | string  | Tag slug.   |

### Product - Images properties ###

| Attribute           | Type      | Description                                                   |
|---------------------|-----------|---------------------------------------------------------------|
| `id`                | integer   | Image ID.                                                     |
| `date_created`      | date-time | The date the image was created, in the site's timezone.       |
| `date_created_gmt`  | date-time | The date the image was created, as GMT.                       |
| `date_modified`     | date-time | The date the image was last modified, in the site's timezone. |
| `date_modified_gmt` | date-time | The date the image was last modified, as GMT.                 |
| `src`               | string    | Image URL.                                                    |
| `name`              | string    | Image name.                                                   |
| `alt`               | string    | Image alternative text.                                       |

### Product - Attributes properties ###

| Attribute   | Type    | Description                                                                                  |
|-------------|---------|----------------------------------------------------------------------------------------------|
| `id`        | integer | Attribute ID.                                                                                |
| `name`      | string  | Attribute name.                                                                              |
| `position`  | integer | Attribute position.                                                                          |
| `visible`   | boolean | Shows if the attribute is visible on the "Additional information" tab in the product's page. |
| `variation` | boolean | Shows if the attribute can be used as variation.                                             |
| `options`   | array   | List of available term names of the attribute.                                               |

### Product - Default attributes properties ###

| Attribute | Type    | Description                   |
|-----------|---------|-------------------------------|
| `id`      | integer | Attribute ID.                 |
| `name`    | string  | Attribute name.               |
| `option`  | string  | Selected attribute term name. |

### Product - Meta data properties ###

| Attribute | Type    | Description  |
|-----------|---------|--------------|
| `id`      | integer | Meta ID.     |
| `key`     | string  | Meta key.    |
| `value`   | string  | Meta value.  |

## Retrieve a Product ##

This API lets you retrieve and view a specific product by ID.

### HTTP Request ###

<div class="api-endpoint">
	<div class="endpoint-data">
		<i class="label label-get">GET</i>
		<h6>/cocart/v1/products/&lt;id&gt;</h6>
	</div>
</div>

```shell
curl -X GET https://example.com/wp-json/cocart/v1/products/987 \
  -H "Content-Type: application/json"
```

```javascript--jquery
var settings = {
  "url": "https://example.com/wp-json/cocart/v1/products/987",
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
  CURLOPT_URL => "https://example.com/wp-json/cocart/v1/products/987",
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_RETURNTRANSFER => true
) );

$response = curl_exec($curl);

curl_close($curl);

echo $response;
```

```php--wp-http-api
<?php
$response = wp_remote_get( 'https://example.com/wp-json/cocart/v1/products/987' );
$body = wp_remote_retrieve_body( $response );
```

> JSON response example:

```json
{
    "id": 987,
    "name": "Cupcake",
    "slug": "cupcake",
    "date_created": "2019-09-20T19:01:23",
    "date_created_gmt": "2019-09-20T17:01:23",
    "date_modified": "2019-09-20T19:01:26",
    "date_modified_gmt": "2019-09-20T17:01:26",
    "type": "simple",
    "featured": false,
    "catalog_visibility": "visible",
    "description": "",
    "short_description": "",
    "sku": "",
    "price": "£1.29",
    "regular_price": "£1.29",
    "sale_price": "",
    "date_on_sale_from": null,
    "date_on_sale_from_gmt": null,
    "date_on_sale_to": null,
    "date_on_sale_to_gmt": null,
    "on_sale": false,
    "purchasable": true,
    "total_sales": 0,
    "virtual": false,
    "downloadable": false,
    "external_url": "",
    "button_text": "",
    "manage_stock": false,
    "stock_quantity": null,
    "in_stock": true,
    "stock_status": "instock",
    "backorders": "no",
    "backorders_allowed": false,
    "backordered": false,
    "sold_individually": false,
    "weight": "",
    "dimensions": {
        "length": "",
        "width": "",
        "height": ""
    },
    "shipping_required": true,
    "reviews_allowed": true,
    "average_rating": "0",
    "rating_count": 0,
    "related_ids": [
        1001,
        1003
    ],
    "upsell_ids": [],
    "cross_sell_ids": [],
    "parent_id": 0,
    "categories": [
        {
            "id": 42,
            "name": "Food",
            "slug": "food"
        }
    ],
    "tags": [
        {
            "id": 43,
            "name": "Cupcakes",
            "slug": "cupcakes"
        }
    ],
    "images": [
        {
            "id": 970,
            "date_created": "2019-09-20T20:20:55",
            "date_created_gmt": "2019-09-20T16:20:55",
            "date_modified": "2019-09-20T20:20:55",
            "date_modified_gmt": "2019-09-20T16:20:55",
            "src": "https://example.com/wp-content/uploads/2019/09/jennie-brown-MKBoRZEGeiM-unsplash.jpg",
            "name": "jennie-brown-MKBoRZEGeiM-unsplash",
            "alt": "",
            "position": 0
        }
    ],
    "attributes": [],
    "default_attributes": [],
    "variations": [],
    "grouped_products": [],
    "menu_order": 0,
    "meta_data": [],
    "_links": {
        "self": [
            {
                "href": "https://example.com/wp-json/cocart/v1/products/987"
            }
        ],
        "collection": [
            {
                "href": "https://example.com/wp-json/cocart/v1/products"
            }
        ]
    }
}
```

## List all Products ##

This API helps you to get all the products.

### HTTP Request ###

<div class="api-endpoint">
	<div class="endpoint-data">
		<i class="label label-get">GET</i>
		<h6>/cocart/v1/products</h6>
	</div>
</div>

```shell
curl -X GET https://example.com/wp-json/cocart/v1/products \
  -H "Content-Type: application/json"
```

```javascript--jquery
var settings = {
  "url": "https://example.com/wp-json/cocart/v1/products",
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
  CURLOPT_URL => "https://example.com/wp-json/cocart/v1/products",
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_RETURNTRANSFER => true
) );

$response = curl_exec($curl);

curl_close($curl);

echo $response;
```

```php--wp-http-api
<?php
$response = wp_remote_get( 'https://example.com/wp-json/cocart/v1/products' );
$body = wp_remote_retrieve_body( $response );
```

> JSON response example:

```json
[
    {
        "id": 1003,
        "name": "Buttercup and Bumblebee Cupcakes",
        "slug": "buttercup-and-bumblebee-cupcakes",
        "date_created": "2019-09-21T01:23:57",
        "date_created_gmt": "2019-09-20T23:23:57",
        "date_modified": "2019-09-21T01:50:39",
        "date_modified_gmt": "2019-09-20T23:50:39",
        "type": "simple",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "",
        "short_description": "",
        "sku": "",
        "price": "£1.29",
        "regular_price": "£1.29",
        "sale_price": "",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "on_sale": false,
        "purchasable": true,
        "total_sales": 0,
        "virtual": false,
        "downloadable": false,
        "external_url": "",
        "button_text": "",
        "manage_stock": false,
        "stock_quantity": null,
        "in_stock": true,
        "stock_status": "instock",
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
            "length": "",
            "width": "",
            "height": ""
        },
        "shipping_required": true,
        "reviews_allowed": true,
        "average_rating": "0",
        "rating_count": 0,
        "related_ids": [
            987,
            1001
        ],
        "upsell_ids": [],
        "cross_sell_ids": [],
        "parent_id": 0,
        "categories": [
            {
                "id": 42,
                "name": "Food",
                "slug": "food"
            }
        ],
        "tags": [
            {
                "id": 43,
                "name": "Cupcakes",
                "slug": "cupcakes"
            }
        ],
        "images": [
            {
                "id": 983,
                "date_created": "2019-09-20T20:23:08",
                "date_created_gmt": "2019-09-20T16:23:08",
                "date_modified": "2019-09-20T20:23:08",
                "date_modified_gmt": "2019-09-20T16:23:08",
                "src": "https://example.com/wp-content/uploads/2019/09/carol-santoro-oTrWXkUW8w0-unsplash.jpg",
                "name": "carol-santoro-oTrWXkUW8w0-unsplash",
                "alt": "",
                "position": 0
            }
        ],
        "attributes": [],
        "default_attributes": [],
        "variations": [],
        "grouped_products": [],
        "menu_order": 0,
        "meta_data": [],
        "_links": {
            "self": [
                {
                    "href": "https://example.com/wp-json/cocart/v1/products/1003"
                }
            ],
            "collection": [
                {
                    "href": "https://example.com/wp-json/cocart/v1/products"
                }
            ]
        }
    },
    {
        "id": 1001,
        "name": "Turquoise Cupcake",
        "slug": "cupcake-2",
        "date_created": "2019-09-20T23:57:33",
        "date_created_gmt": "2019-09-20T21:57:33",
        "date_modified": "2019-09-21T01:17:20",
        "date_modified_gmt": "2019-09-20T23:17:20",
        "type": "simple",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "",
        "short_description": "",
        "sku": "",
        "price": "£1.29",
        "regular_price": "£1.29",
        "sale_price": "",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "on_sale": false,
        "purchasable": true,
        "total_sales": 0,
        "virtual": false,
        "downloadable": false,
        "external_url": "",
        "button_text": "",
        "manage_stock": false,
        "stock_quantity": null,
        "in_stock": true,
        "stock_status": "instock",
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
            "length": "",
            "width": "",
            "height": ""
        },
        "shipping_required": true,
        "reviews_allowed": true,
        "average_rating": "0",
        "rating_count": 0,
        "related_ids": [
            987,
            1003
        ],
        "upsell_ids": [],
        "cross_sell_ids": [],
        "parent_id": 0,
        "categories": [
            {
                "id": 42,
                "name": "Food",
                "slug": "food"
            }
        ],
        "tags": [
            {
                "id": 43,
                "name": "Cupcakes",
                "slug": "cupcakes"
            }
        ],
        "images": [
            {
                "id": 982,
                "date_created": "2019-09-20T20:22:57",
                "date_created_gmt": "2019-09-20T16:22:57",
                "date_modified": "2019-09-20T20:22:57",
                "date_modified_gmt": "2019-09-20T16:22:57",
                "src": "https://example.com/wp-content/uploads/2019/09/brooke-lark-pGM4sjt_BdQ-unsplash.jpg",
                "name": "brooke-lark-pGM4sjt_BdQ-unsplash",
                "alt": "",
                "position": 0
            }
        ],
        "attributes": [],
        "default_attributes": [],
        "variations": [],
        "grouped_products": [],
        "menu_order": 0,
        "meta_data": [],
        "_links": {
            "self": [
                {
                    "href": "https://example.com/wp-json/cocart/v1/products/1001"
                }
            ],
            "collection": [
                {
                    "href": "https://example.com/wp-json/cocart/v1/products"
                }
            ]
        }
    },
    {
        "id": 987,
        "name": "Cupcake",
        "slug": "cupcake",
        "date_created": "2019-09-20T19:01:23",
        "date_created_gmt": "2019-09-20T17:01:23",
        "date_modified": "2019-09-20T19:01:26",
        "date_modified_gmt": "2019-09-20T17:01:26",
        "type": "simple",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "",
        "short_description": "",
        "sku": "",
        "price": "£1.29",
        "regular_price": "£1.29",
        "sale_price": "",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "on_sale": false,
        "purchasable": true,
        "total_sales": 0,
        "virtual": false,
        "downloadable": false,
        "external_url": "",
        "button_text": "",
        "manage_stock": false,
        "stock_quantity": null,
        "in_stock": true,
        "stock_status": "instock",
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
            "length": "",
            "width": "",
            "height": ""
        },
        "shipping_required": true,
        "reviews_allowed": true,
        "average_rating": "0",
        "rating_count": 0,
        "related_ids": [
            1001,
            1003
        ],
        "upsell_ids": [],
        "cross_sell_ids": [],
        "parent_id": 0,
        "categories": [
            {
                "id": 42,
                "name": "Food",
                "slug": "food"
            }
        ],
        "tags": [
            {
                "id": 43,
                "name": "Cupcakes",
                "slug": "cupcakes"
            }
        ],
        "images": [
            {
                "id": 970,
                "date_created": "2019-09-20T20:20:55",
                "date_created_gmt": "2019-09-20T16:20:55",
                "date_modified": "2019-09-20T20:20:55",
                "date_modified_gmt": "2019-09-20T16:20:55",
                "src": "https://example.com/wp-content/uploads/2019/09/jennie-brown-MKBoRZEGeiM-unsplash.jpg",
                "name": "jennie-brown-MKBoRZEGeiM-unsplash",
                "alt": "",
                "position": 0
            }
        ],
        "attributes": [],
        "default_attributes": [],
        "variations": [],
        "grouped_products": [],
        "menu_order": 0,
        "meta_data": [],
        "_links": {
            "self": [
                {
                    "href": "https://example.com/wp-json/cocart/v1/products/987"
                }
            ],
            "collection": [
                {
                    "href": "https://example.com/wp-json/cocart/v1/products"
                }
            ]
        }
    },
    {
        "id": 281,
        "name": "Variable Product Test",
        "slug": "variable-product-test",
        "date_created": "2019-06-25T16:57:12",
        "date_created_gmt": "2019-06-25T14:57:12",
        "date_modified": "2019-06-25T17:06:08",
        "date_modified_gmt": "2019-06-25T15:06:08",
        "type": "variable",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "",
        "short_description": "",
        "sku": "variable-test",
        "price": "£8.00",
        "regular_price": "£0.00",
        "sale_price": "",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "on_sale": false,
        "purchasable": true,
        "total_sales": 0,
        "virtual": false,
        "downloadable": false,
        "external_url": "",
        "button_text": "",
        "manage_stock": false,
        "stock_quantity": null,
        "in_stock": true,
        "stock_status": "instock",
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
            "length": "",
            "width": "",
            "height": ""
        },
        "shipping_required": true,
        "reviews_allowed": true,
        "average_rating": "0",
        "rating_count": 0,
        "related_ids": [
            133,
            132,
            131,
            217,
            238
        ],
        "upsell_ids": [],
        "cross_sell_ids": [],
        "parent_id": 0,
        "categories": [
            {
                "id": 29,
                "name": "CoCart Testing",
                "slug": "cocart-testing"
            }
        ],
        "tags": [],
        "images": [
            {
                "id": 0,
                "date_created": "2019-09-22T06:19:09",
                "date_created_gmt": "2019-09-22T02:19:09",
                "date_modified": "2019-09-22T06:19:09",
                "date_modified_gmt": "2019-09-22T02:19:09",
                "src": "https://example.com/wp-content/uploads/woocommerce-placeholder.png",
                "name": "Placeholder",
                "alt": "Placeholder",
                "position": 0
            }
        ],
        "attributes": [
            {
                "id": 0,
                "name": "Colours",
                "position": 0,
                "visible": false,
                "variation": true,
                "options": [
                    "Black",
                    "White",
                    "Red",
                    "Yellow",
                    "Purple"
                ]
            }
        ],
        "default_attributes": [],
        "variations": [
            282,
            283,
            284,
            285,
            286
        ],
        "grouped_products": [],
        "menu_order": 0,
        "meta_data": [
            {
                "id": 1196,
                "key": "_subscription_one_time_shipping",
                "value": "no"
            }
        ],
        "_links": {
            "self": [
                {
                    "href": "https://example.com/wp-json/cocart/v1/products/281"
                }
            ],
            "collection": [
                {
                    "href": "https://example.com/wp-json/cocart/v1/products"
                }
            ]
        }
    },
    {
        "id": 238,
        "name": "Simple Subscription Product",
        "slug": "simple-subscription-product",
        "date_created": "2019-06-20T16:19:11",
        "date_created_gmt": "2019-06-20T14:19:11",
        "date_modified": "2019-06-20T19:40:30",
        "date_modified_gmt": "2019-06-20T17:40:30",
        "type": "subscription",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "",
        "short_description": "",
        "sku": "",
        "price": "£9.99",
        "regular_price": "£9.99",
        "sale_price": "",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "on_sale": false,
        "purchasable": true,
        "total_sales": 0,
        "virtual": false,
        "downloadable": false,
        "external_url": "",
        "button_text": "",
        "manage_stock": false,
        "stock_quantity": null,
        "in_stock": true,
        "stock_status": "instock",
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
            "length": "",
            "width": "",
            "height": ""
        },
        "shipping_required": true,
        "reviews_allowed": true,
        "average_rating": "0",
        "rating_count": 0,
        "related_ids": [
            217,
            129,
            132,
            133,
            131
        ],
        "upsell_ids": [],
        "cross_sell_ids": [],
        "parent_id": 0,
        "categories": [
            {
                "id": 29,
                "name": "CoCart Testing",
                "slug": "cocart-testing"
            }
        ],
        "tags": [],
        "images": [
            {
                "id": 20,
                "date_created": "2018-10-10T01:30:20",
                "date_created_gmt": "2018-10-09T23:30:20",
                "date_modified": "2018-10-10T01:30:20",
                "date_modified_gmt": "2018-10-09T23:30:20",
                "src": "https://example.com/wp-content/uploads/2018/10/hoodies.jpg",
                "name": "Hoodies",
                "alt": "",
                "position": 0
            }
        ],
        "attributes": [],
        "default_attributes": [],
        "variations": [],
        "grouped_products": [],
        "menu_order": 0,
        "meta_data": [
            {
                "id": 1116,
                "key": "_subscription_payment_sync_date",
                "value": "0"
            },
            {
                "id": 1121,
                "key": "_subscription_price",
                "value": "9.99"
            },
            {
                "id": 1125,
                "key": "_subscription_trial_length",
                "value": "0"
            },
            {
                "id": 1126,
                "key": "_subscription_sign_up_fee",
                "value": "19.99"
            },
            {
                "id": 1127,
                "key": "_subscription_period",
                "value": "month"
            },
            {
                "id": 1128,
                "key": "_subscription_period_interval",
                "value": "1"
            },
            {
                "id": 1129,
                "key": "_subscription_length",
                "value": "4"
            },
            {
                "id": 1130,
                "key": "_subscription_trial_period",
                "value": "day"
            },
            {
                "id": 1131,
                "key": "_subscription_limit",
                "value": "active"
            },
            {
                "id": 1132,
                "key": "_subscription_one_time_shipping",
                "value": "no"
            }
        ],
        "_links": {
            "self": [
                {
                    "href": "https://example.com/wp-json/cocart/v1/products/238"
                }
            ],
            "collection": [
                {
                    "href": "https://example.com/wp-json/cocart/v1/products"
                }
            ]
        }
    },
    {
        "id": 217,
        "name": "Accommodation Bookable Product",
        "slug": "accommodation-bookable-product",
        "date_created": "2019-06-18T16:50:14",
        "date_created_gmt": "2019-06-18T14:50:14",
        "date_modified": "2019-06-18T16:53:34",
        "date_modified_gmt": "2019-06-18T14:53:34",
        "type": "simple",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "Test product for Accommodation Booking",
        "short_description": "",
        "sku": "",
        "price": "£99.00",
        "regular_price": "£0.00",
        "sale_price": "",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "on_sale": false,
        "purchasable": true,
        "total_sales": 0,
        "virtual": true,
        "downloadable": false,
        "external_url": "",
        "button_text": "",
        "manage_stock": false,
        "stock_quantity": null,
        "in_stock": true,
        "stock_status": "instock",
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
            "length": "",
            "width": "",
            "height": ""
        },
        "shipping_required": false,
        "reviews_allowed": true,
        "average_rating": "0",
        "rating_count": 0,
        "related_ids": [
            133,
            131,
            132,
            129,
            281
        ],
        "upsell_ids": [],
        "cross_sell_ids": [],
        "parent_id": 0,
        "categories": [
            {
                "id": 29,
                "name": "CoCart Testing",
                "slug": "cocart-testing"
            }
        ],
        "tags": [],
        "images": [
            {
                "id": 44,
                "date_created": "2019-04-18T14:34:06",
                "date_created_gmt": "2019-04-18T12:34:06",
                "date_modified": "2019-04-18T14:34:06",
                "date_modified_gmt": "2019-04-18T12:34:06",
                "src": "https://example.com/wp-content/uploads/woocommerce-placeholder.png",
                "name": "woocommerce-placeholder",
                "alt": "",
                "position": 0
            }
        ],
        "attributes": [],
        "default_attributes": [],
        "variations": [],
        "grouped_products": [],
        "menu_order": 0,
        "meta_data": [
            {
                "id": 1011,
                "key": "_wc_booking_apply_adjacent_buffer",
                "value": ""
            },
            {
                "id": 1012,
                "key": "_wc_booking_availability",
                "value": [
                    {
                        "type": "months",
                        "bookable": "yes",
                        "priority": 10,
                        "from": "6",
                        "to": "9"
                    },
                    {
                        "type": "months",
                        "bookable": "no",
                        "priority": 10,
                        "from": "10",
                        "to": "5"
                    }
                ]
            },
            {
                "id": 1013,
                "key": "_wc_booking_block_cost",
                "value": "50"
            },
            {
                "id": 1014,
                "key": "_wc_booking_buffer_period",
                "value": "0"
            },
            {
                "id": 1015,
                "key": "_wc_booking_calendar_display_mode",
                "value": "always_visible"
            },
            {
                "id": 1016,
                "key": "_wc_booking_cancel_limit_unit",
                "value": "month"
            },
            {
                "id": 1017,
                "key": "_wc_booking_cancel_limit",
                "value": "1"
            },
            {
                "id": 1018,
                "key": "_wc_booking_check_availability_against",
                "value": ""
            },
            {
                "id": 1019,
                "key": "_wc_booking_cost",
                "value": "49"
            },
            {
                "id": 1020,
                "key": "_wc_booking_default_date_availability",
                "value": "available"
            },
            {
                "id": 1021,
                "key": "_wc_booking_duration_type",
                "value": "fixed"
            },
            {
                "id": 1022,
                "key": "_wc_booking_duration_unit",
                "value": "day"
            },
            {
                "id": 1023,
                "key": "_wc_booking_duration",
                "value": "3"
            },
            {
                "id": 1024,
                "key": "_wc_booking_enable_range_picker",
                "value": ""
            },
            {
                "id": 1025,
                "key": "_wc_booking_first_block_time",
                "value": ""
            },
            {
                "id": 1026,
                "key": "_wc_booking_has_person_types",
                "value": ""
            },
            {
                "id": 1027,
                "key": "_wc_booking_has_persons",
                "value": "1"
            },
            {
                "id": 1028,
                "key": "_wc_booking_has_resources",
                "value": ""
            },
            {
                "id": 1029,
                "key": "_wc_booking_has_restricted_days",
                "value": "1"
            },
            {
                "id": 1030,
                "key": "_wc_booking_max_date_unit",
                "value": "month"
            },
            {
                "id": 1031,
                "key": "_wc_booking_max_date",
                "value": "12"
            },
            {
                "id": 1032,
                "key": "_wc_booking_max_duration",
                "value": "1"
            },
            {
                "id": 1033,
                "key": "_wc_booking_max_persons_group",
                "value": "2"
            },
            {
                "id": 1034,
                "key": "_wc_booking_min_date_unit",
                "value": "day"
            },
            {
                "id": 1035,
                "key": "_wc_booking_min_date",
                "value": "1"
            },
            {
                "id": 1036,
                "key": "_wc_booking_min_duration",
                "value": "1"
            },
            {
                "id": 1037,
                "key": "_wc_booking_min_persons_group",
                "value": "1"
            },
            {
                "id": 1038,
                "key": "_wc_booking_person_cost_multiplier",
                "value": ""
            },
            {
                "id": 1039,
                "key": "_wc_booking_person_qty_multiplier",
                "value": ""
            },
            {
                "id": 1040,
                "key": "_wc_booking_pricing",
                "value": []
            },
            {
                "id": 1041,
                "key": "_wc_booking_qty",
                "value": "3"
            },
            {
                "id": 1042,
                "key": "_wc_booking_requires_confirmation",
                "value": "1"
            },
            {
                "id": 1043,
                "key": "_wc_booking_resources_assignment",
                "value": "customer"
            },
            {
                "id": 1044,
                "key": "_wc_booking_restricted_days",
                "value": {
                    "1": "1",
                    "2": "2",
                    "3": "3",
                    "4": "4",
                    "5": "5"
                }
            },
            {
                "id": 1045,
                "key": "_wc_booking_user_can_cancel",
                "value": ""
            },
            {
                "id": 1046,
                "key": "_wc_display_cost",
                "value": "99"
            },
            {
                "id": 1047,
                "key": "wc_booking_resource_label",
                "value": ""
            },
            {
                "id": 1049,
                "key": "_resource_base_costs",
                "value": []
            },
            {
                "id": 1050,
                "key": "_resource_block_costs",
                "value": []
            }
        ],
        "_links": {
            "self": [
                {
                    "href": "https://example.com/wp-json/cocart/v1/products/217"
                }
            ],
            "collection": [
                {
                    "href": "https://example.com/wp-json/cocart/v1/products"
                }
            ]
        }
    },
    {
        "id": 133,
        "name": "Bookable Product",
        "slug": "bookable-product",
        "date_created": "2019-06-06T16:54:03",
        "date_created_gmt": "2019-06-06T14:54:03",
        "date_modified": "2019-06-06T16:58:10",
        "date_modified_gmt": "2019-06-06T14:58:10",
        "type": "simple",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "Test product for Bookings",
        "short_description": "",
        "sku": "",
        "price": "£99.00",
        "regular_price": "£0.00",
        "sale_price": "",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "on_sale": false,
        "purchasable": true,
        "total_sales": 0,
        "virtual": true,
        "downloadable": false,
        "external_url": "",
        "button_text": "",
        "manage_stock": false,
        "stock_quantity": null,
        "in_stock": true,
        "stock_status": "instock",
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
            "length": "",
            "width": "",
            "height": ""
        },
        "shipping_required": false,
        "reviews_allowed": true,
        "average_rating": "0",
        "rating_count": 0,
        "related_ids": [
            129,
            281,
            238,
            132,
            131
        ],
        "upsell_ids": [],
        "cross_sell_ids": [],
        "parent_id": 0,
        "categories": [
            {
                "id": 29,
                "name": "CoCart Testing",
                "slug": "cocart-testing"
            }
        ],
        "tags": [],
        "images": [
            {
                "id": 44,
                "date_created": "2019-04-18T14:34:06",
                "date_created_gmt": "2019-04-18T12:34:06",
                "date_modified": "2019-04-18T14:34:06",
                "date_modified_gmt": "2019-04-18T12:34:06",
                "src": "https://example.com/wp-content/uploads/woocommerce-placeholder.png",
                "name": "woocommerce-placeholder",
                "alt": "",
                "position": 0
            }
        ],
        "attributes": [],
        "default_attributes": [],
        "variations": [],
        "grouped_products": [],
        "menu_order": 0,
        "meta_data": [
            {
                "id": 754,
                "key": "_wc_booking_apply_adjacent_buffer",
                "value": ""
            },
            {
                "id": 755,
                "key": "_wc_booking_availability",
                "value": [
                    {
                        "type": "months",
                        "bookable": "yes",
                        "priority": 10,
                        "from": "6",
                        "to": "9"
                    },
                    {
                        "type": "months",
                        "bookable": "no",
                        "priority": 10,
                        "from": "10",
                        "to": "5"
                    }
                ]
            },
            {
                "id": 756,
                "key": "_wc_booking_block_cost",
                "value": "50"
            },
            {
                "id": 757,
                "key": "_wc_booking_buffer_period",
                "value": "0"
            },
            {
                "id": 758,
                "key": "_wc_booking_calendar_display_mode",
                "value": "always_visible"
            },
            {
                "id": 759,
                "key": "_wc_booking_cancel_limit_unit",
                "value": "month"
            },
            {
                "id": 760,
                "key": "_wc_booking_cancel_limit",
                "value": "1"
            },
            {
                "id": 761,
                "key": "_wc_booking_check_availability_against",
                "value": ""
            },
            {
                "id": 762,
                "key": "_wc_booking_cost",
                "value": "49"
            },
            {
                "id": 763,
                "key": "_wc_booking_default_date_availability",
                "value": "available"
            },
            {
                "id": 764,
                "key": "_wc_booking_duration_type",
                "value": "fixed"
            },
            {
                "id": 765,
                "key": "_wc_booking_duration_unit",
                "value": "day"
            },
            {
                "id": 766,
                "key": "_wc_booking_duration",
                "value": "3"
            },
            {
                "id": 767,
                "key": "_wc_booking_enable_range_picker",
                "value": ""
            },
            {
                "id": 768,
                "key": "_wc_booking_first_block_time",
                "value": ""
            },
            {
                "id": 769,
                "key": "_wc_booking_has_person_types",
                "value": ""
            },
            {
                "id": 770,
                "key": "_wc_booking_has_persons",
                "value": "1"
            },
            {
                "id": 771,
                "key": "_wc_booking_has_resources",
                "value": ""
            },
            {
                "id": 772,
                "key": "_wc_booking_has_restricted_days",
                "value": "1"
            },
            {
                "id": 773,
                "key": "_wc_booking_max_date_unit",
                "value": "month"
            },
            {
                "id": 774,
                "key": "_wc_booking_max_date",
                "value": "12"
            },
            {
                "id": 775,
                "key": "_wc_booking_max_duration",
                "value": "1"
            },
            {
                "id": 776,
                "key": "_wc_booking_max_persons_group",
                "value": "2"
            },
            {
                "id": 777,
                "key": "_wc_booking_min_date_unit",
                "value": "day"
            },
            {
                "id": 778,
                "key": "_wc_booking_min_date",
                "value": "1"
            },
            {
                "id": 779,
                "key": "_wc_booking_min_duration",
                "value": "1"
            },
            {
                "id": 780,
                "key": "_wc_booking_min_persons_group",
                "value": "1"
            },
            {
                "id": 781,
                "key": "_wc_booking_person_cost_multiplier",
                "value": ""
            },
            {
                "id": 782,
                "key": "_wc_booking_person_qty_multiplier",
                "value": ""
            },
            {
                "id": 783,
                "key": "_wc_booking_pricing",
                "value": []
            },
            {
                "id": 784,
                "key": "_wc_booking_qty",
                "value": "3"
            },
            {
                "id": 785,
                "key": "_wc_booking_requires_confirmation",
                "value": "1"
            },
            {
                "id": 786,
                "key": "_wc_booking_resources_assignment",
                "value": "customer"
            },
            {
                "id": 787,
                "key": "_wc_booking_restricted_days",
                "value": {
                    "1": "1",
                    "2": "2",
                    "3": "3",
                    "4": "4",
                    "5": "5"
                }
            },
            {
                "id": 788,
                "key": "_wc_booking_user_can_cancel",
                "value": ""
            },
            {
                "id": 789,
                "key": "_wc_display_cost",
                "value": "99"
            },
            {
                "id": 790,
                "key": "wc_booking_resource_label",
                "value": ""
            },
            {
                "id": 792,
                "key": "_resource_base_costs",
                "value": []
            },
            {
                "id": 793,
                "key": "_resource_block_costs",
                "value": []
            }
        ],
        "_links": {
            "self": [
                {
                    "href": "https://example.com/wp-json/cocart/v1/products/133"
                }
            ],
            "collection": [
                {
                    "href": "https://example.com/wp-json/cocart/v1/products"
                }
            ]
        }
    },
    {
        "id": 132,
        "name": "Pre-Order",
        "slug": "pre-order",
        "date_created": "2019-06-06T16:47:45",
        "date_created_gmt": "2019-06-06T14:47:45",
        "date_modified": "2019-06-06T16:47:49",
        "date_modified_gmt": "2019-06-06T14:47:49",
        "type": "simple",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "Test product for Pre-Order",
        "short_description": "",
        "sku": "",
        "price": "£89.00",
        "regular_price": "£89.00",
        "sale_price": "",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "on_sale": false,
        "purchasable": true,
        "total_sales": 0,
        "virtual": true,
        "downloadable": false,
        "external_url": "",
        "button_text": "",
        "manage_stock": false,
        "stock_quantity": null,
        "in_stock": true,
        "stock_status": "instock",
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
            "length": "",
            "width": "",
            "height": ""
        },
        "shipping_required": false,
        "reviews_allowed": true,
        "average_rating": "0",
        "rating_count": 0,
        "related_ids": [
            238,
            131,
            133,
            281,
            129
        ],
        "upsell_ids": [],
        "cross_sell_ids": [],
        "parent_id": 0,
        "categories": [
            {
                "id": 29,
                "name": "CoCart Testing",
                "slug": "cocart-testing"
            }
        ],
        "tags": [],
        "images": [
            {
                "id": 44,
                "date_created": "2019-04-18T14:34:06",
                "date_created_gmt": "2019-04-18T12:34:06",
                "date_modified": "2019-04-18T14:34:06",
                "date_modified_gmt": "2019-04-18T12:34:06",
                "src": "https://example.com/wp-content/uploads/woocommerce-placeholder.png",
                "name": "woocommerce-placeholder",
                "alt": "",
                "position": 0
            }
        ],
        "attributes": [],
        "default_attributes": [],
        "variations": [],
        "grouped_products": [],
        "menu_order": 0,
        "meta_data": [
            {
                "id": 723,
                "key": "_wc_pre_orders_enabled",
                "value": "yes"
            },
            {
                "id": 724,
                "key": "_wc_pre_orders_availability_datetime",
                "value": "1560675600"
            },
            {
                "id": 725,
                "key": "_wc_pre_orders_fee",
                "value": ""
            },
            {
                "id": 726,
                "key": "_wc_pre_orders_when_to_charge",
                "value": "upfront"
            }
        ],
        "_links": {
            "self": [
                {
                    "href": "https://example.com/wp-json/cocart/v1/products/132"
                }
            ],
            "collection": [
                {
                    "href": "https://example.com/wp-json/cocart/v1/products"
                }
            ]
        }
    }
]
```

#### Available Filters ####

|      Filter      |  Type  |                     Description                      |
| ---------------- | ------ | ---------------------------------------------------- |
| `type`           | string | Products by type. eg: `simple` or `variable`.        |
| `category`       | string | Products by category slug.                           |
| `tag`            | string | Products by tag slug.                                |
| `pa_*`           | string | Products by attributes. eg: `filter[pa_color]=black` |
| `sku`            | string | Filter a product by SKU.                             |
