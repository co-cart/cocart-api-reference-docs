# Products #

Being able to fetch the products without authentication is important.

You can not add items to the cart without knowing some information about the products.

The products API allows you to get products or and individual product in read-only. If you want to add or alter products then view [WooCommerce's REST API Docs](http://woocommerce.github.io/woocommerce-rest-api-docs/?php#products) under products for that.

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
| `tax_status`            | string    | Tax status.                                                                                                          |
| `tax_class`             | string    | Tax class.                                                                                                           |
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
    "tax_status": "taxable",
    "tax_class": "",
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

This API helps you to view all the products.

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

> JSON response example:

```json
{
  "products": [
    {
      "title": "Premium Quality",
      "id": 546,
      "created_at": "2015-01-22T19:46:16Z",
      "updated_at": "2015-01-22T19:46:16Z",
      "type": "simple",
      "downloadable": false,
      "virtual": false,
      "sku": "",
      "price": "21.99",
      "regular_price": "21.99",
      "sale_price": null,
      "price_html": "<span class=\"amount\">&#36;&nbsp;21.99</span>",
      "taxable": true,
      "tax_status": "taxable",
      "tax_class": "",
      "managing_stock": false,
      "stock_quantity": 0,
      "in_stock": true,
      "backorders_allowed": false,
      "backordered": false,
      "sold_individually": false,
      "purchaseable": true,
      "featured": false,
      "visible": true,
      "catalog_visibility": "visible",
      "on_sale": false,
      "weight": null,
      "dimensions": {
        "length": "",
        "width": "",
        "height": "",
        "unit": "cm"
      },
      "shipping_required": true,
      "description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
      "short_description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>\n",
      "reviews_allowed": true,
      "average_rating": "0.00",
      "rating_count": 0,
      "related_ids": [
        37,
        47,
        31,
        19,
        22
      ],
      "upsell_ids": [],
      "cross_sell_ids": [],
      "parent_id": 0,
      "categories": [
        "Clothing",
        "T-shirts"
      ],
      "tags": [],
      "images": [
        {
          "id": 547,
          "created_at": "2015-01-22T19:46:16Z",
          "updated_at": "2015-01-22T19:46:16Z",
          "src": "http://example.com/wp-content/uploads/2015/01/premium-quality-front.jpg",
          "title": "",
          "alt": "",
          "position": 0
        },
        {
          "id": 548,
          "created_at": "2015-01-22T19:46:17Z",
          "updated_at": "2015-01-22T19:46:17Z",
          "src": "http://example.com/wp-content/uploads/2015/01/premium-quality-back.jpg",
          "title": "",
          "alt": "",
          "position": 1
        }
      ],
      "featured_src": "http://example.com/wp-content/uploads/2015/01/premium-quality-front.jpg",
      "attributes": [],
      "total_sales": 0,
      "variations": [],
      "parent": [],
      "grouped_products": [],
      "menu_order": 0
    },
    {
      "title": "Ship Your Idea",
      "id": 604,
      "created_at": "2015-01-22T20:37:14Z",
      "updated_at": "2015-01-22T20:37:14Z",
      "type": "variable",
      "downloadable": false,
      "virtual": false,
      "sku": "",
      "price": "19.99",
      "regular_price": "0.00",
      "sale_price": null,
      "price_html": "<span class=\"amount\">&#36;&nbsp;19.99</span>",
      "taxable": true,
      "tax_status": "taxable",
      "tax_class": "",
      "managing_stock": false,
      "stock_quantity": 0,
      "in_stock": true,
      "backorders_allowed": false,
      "backordered": false,
      "sold_individually": false,
      "purchaseable": true,
      "featured": false,
      "visible": true,
      "catalog_visibility": "visible",
      "on_sale": false,
      "weight": null,
      "dimensions": {
        "length": "",
        "width": "",
        "height": "",
        "unit": "cm"
      },
      "shipping_required": true,
      "description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
      "short_description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>\n",
      "reviews_allowed": true,
      "average_rating": "0.00",
      "rating_count": 0,
      "related_ids": [
        40,
        37,
        47,
        577,
        34
      ],
      "upsell_ids": [],
      "cross_sell_ids": [],
      "parent_id": 0,
      "categories": [
        "Clothing",
        "T-shirts"
      ],
      "tags": [],
      "images": [
        {
          "id": 605,
          "created_at": "2015-01-22T20:37:14Z",
          "updated_at": "2015-01-22T20:37:14Z",
          "src": "http://example/wp-content/uploads/2015/01/ship-your-idea-black-front.jpg",
          "title": "",
          "alt": "",
          "position": 0
        },
        {
          "id": 606,
          "created_at": "2015-01-22T20:37:15Z",
          "updated_at": "2015-01-22T20:37:15Z",
          "src": "http://example/wp-content/uploads/2015/01/ship-your-idea-black-back.jpg",
          "title": "",
          "alt": "",
          "position": 1
        },
        {
          "id": 607,
          "created_at": "2015-01-22T20:37:15Z",
          "updated_at": "2015-01-22T20:37:15Z",
          "src": "http://example/wp-content/uploads/2015/01/ship-your-idea-green-front.jpg",
          "title": "",
          "alt": "",
          "position": 2
        },
        {
          "id": 608,
          "created_at": "2015-01-22T20:37:16Z",
          "updated_at": "2015-01-22T20:37:16Z",
          "src": "http://example/wp-content/uploads/2015/01/ship-your-idea-green-back.jpg",
          "title": "",
          "alt": "",
          "position": 3
        }
      ],
      "featured_src": "http://example/wp-content/uploads/2015/01/ship-your-idea-black-front.jpg",
      "attributes": [
        {
          "name": "Color",
          "slug": "color",
          "position": 0,
          "visible": false,
          "variation": true,
          "options": [
            "Black",
            "Green"
          ]
        }
      ],
      "total_sales": 0,
      "variations": [
        {
          "id": 609,
          "created_at": "2015-01-22T20:37:14Z",
          "updated_at": "2015-01-22T20:37:14Z",
          "downloadable": false,
          "virtual": false,
          "permalink": "https://example/product/ship-your-idea-10/?attribute_pa_color=black",
          "sku": "",
          "price": "19.99",
          "regular_price": "19.99",
          "sale_price": null,
          "taxable": true,
          "tax_status": "taxable",
          "tax_class": "",
          "managing_stock": false,
          "stock_quantity": 0,
          "in_stock": true,
          "backordered": false,
          "purchaseable": true,
          "visible": true,
          "on_sale": false,
          "weight": null,
          "dimensions": {
            "length": "",
            "width": "",
            "height": "",
            "unit": "cm"
          },
          "image": [
            {
              "id": 610,
              "created_at": "2015-01-22T20:37:18Z",
              "updated_at": "2015-01-22T20:37:18Z",
              "src": "http://example/wp-content/uploads/2015/01/ship-your-idea-black-front.jpg",
              "title": "",
              "alt": "",
              "position": 0
            }
          ],
          "attributes": [
            {
              "name": "Color",
              "slug": "color",
              "option": "black"
            }
          ],
        },
        {
          "id": 611,
          "created_at": "2015-01-22T20:37:14Z",
          "updated_at": "2015-01-22T20:37:14Z",
          "downloadable": false,
          "virtual": false,
          "permalink": "https://example/product/ship-your-idea-10/?attribute_pa_color=green",
          "sku": "",
          "price": "19.99",
          "regular_price": "19.99",
          "sale_price": null,
          "taxable": true,
          "tax_status": "taxable",
          "tax_class": "",
          "managing_stock": false,
          "stock_quantity": 0,
          "in_stock": true,
          "backordered": false,
          "purchaseable": true,
          "visible": true,
          "on_sale": false,
          "weight": null,
          "dimensions": {
            "length": "",
            "width": "",
            "height": "",
            "unit": "cm"
          },
          "image": [
            {
              "id": 612,
              "created_at": "2015-01-22T20:37:19Z",
              "updated_at": "2015-01-22T20:37:19Z",
              "src": "http://example/wp-content/uploads/2015/01/ship-your-idea-green-front.jpg",
              "title": "",
              "alt": "",
              "position": 0
            }
          ],
          "attributes": [
            {
              "name": "Color",
              "slug": "color",
              "option": "green"
            }
          ],
        }
      ],
      "parent": [],
      "grouped_products": [],
      "menu_order": 0
    }
  ]
}
```

#### Available Filters ####

|      Filter      |  Type  |                     Description                      |
| ---------------- | ------ | ---------------------------------------------------- |
| `type`           | string | Products by type. eg: `simple` or `variable`.        |
| `category`       | string | Products by category.                                |
| `tag`            | string | Products by tag.                                     |
| `pa_*`           | string | Products by attributes. eg: `filter[pa_color]=black` |
| `sku`            | string | Filter a product by SKU.                             |
