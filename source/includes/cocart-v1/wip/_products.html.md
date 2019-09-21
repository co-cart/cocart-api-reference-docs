# Products #

Being able to fetch the products without authentication is important. You can not add items to the cart without products.

The products API allows you to get products or and individual product in READ-ONLY. If you want to add or alter products then view [WooCommerce's REST API Docs](http://woocommerce.github.io/woocommerce-rest-api-docs/?php#products) under products for that.

## View a Product ##

This API lets you retrieve products and view a specific product by ID.

### HTTP Request ###

<div class="api-endpoint">
	<div class="endpoint-data">
		<i class="label label-get">GET</i>
		<h6>/cocart/v1/products/&lt;id&gt;</h6>
	</div>
</div>

```shell
curl -X GET https://example.com/wp-json/cocart/v1/products/546 \
  -H "Content-Type: application/json"
```

> JSON response example:

```json
{
  "product": {
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
| `category`       | string | Products by category slug.                           |
| `tag`            | string | Products by tag slug.                                |
| `pa_*`           | string | Products by attributes. eg: `filter[pa_color]=black` |
| `sku`            | string | Filter a product by SKU.                             |
