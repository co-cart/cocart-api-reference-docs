# WooCommerce Extensions #

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [Edit on GitHub](https://github.com/co-cart/co-cart-docs/blob/master/source/includes/cocart-v1/products/_woocommerce-extensions.md)

[These extensions](https://cocart.xyz/woocommerce-extensions/?utm_medium=docs.cocart.xyz&utm_source=docs&utm_content=cocart-docs) either support CoCart Products or is supported in CoCart Products.

## Mix and Match Products ##

Selling cases of wine? A dozen donuts? Fruit baskets? Six-packs of T-shirts? [Mix and Match Products](https://woocommerce.com/products/woocommerce-mix-and-match-products/) is ideal for offering similar products in bulk containers. Perfect for encouraging customers to buy in bulk without forcing them to buy items that don’t interest them.

<aside class="notice">
  Mix and Match Products supports CoCart Products since <strong>v1.10.0</strong>.
</aside>

### Retrieve a product ###

Any Mix and Match Product will return additional product data under a new array variable `mnm_data`.

```json
{
    "id": 1102,
    "name": "Mix and Match Products",
    "slug": "mix-and-match-products",
    "permalink": "https://example.com/product/mix-and-match-products/",
    "date_created": "2019-10-03T21:41:45",
    "date_created_gmt": "2019-10-03T19:41:45",
    "date_modified": "2020-07-15T21:53:43",
    "date_modified_gmt": "2020-07-15T19:53:43",
    "type": "mix-and-match",
    "featured": false,
    "catalog_visibility": "visible",
    "description": "",
    "short_description": "",
    "sku": "",
    "price": "£2.00",
    "regular_price": "£2.00",
    "sale_price": "",
    "date_on_sale_from": null,
    "date_on_sale_from_gmt": null,
    "date_on_sale_to": null,
    "date_on_sale_to_gmt": null,
    "on_sale": true,
    "purchasable": true,
    "total_sales": 6,
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
    "review_count": 0,
    "rating_html": "",
    "reviews": [],
    "related_ids": [
        1122,
        1992,
        1003,
        1957,
        1888
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
    "tags": [],
    "images": [
        {
            "id": 0,
            "date_created": "2020-07-25T20:45:15",
            "date_created_gmt": "2020-07-25T16:45:15",
            "date_modified": "2020-07-25T20:45:15",
            "date_modified_gmt": "2020-07-25T16:45:15",
            "src": {
                "thumbnail": "https://example.com/wp-content/uploads/woocommerce-placeholder-150x150.png",
                "medium": "https://example.com/wp-content/uploads/woocommerce-placeholder-300x300.png",
                "medium_large": "https://example.com/wp-content/uploads/woocommerce-placeholder-768x768.png",
                "large": "https://example.com/wp-content/uploads/woocommerce-placeholder-1024x1024.png",
                "1536x1536": "https://example.com/wp-content/uploads/woocommerce-placeholder.png",
                "2048x2048": "https://example.com/wp-content/uploads/woocommerce-placeholder.png",
                "woocommerce_thumbnail": "https://example.com/wp-content/uploads/woocommerce-placeholder-324x324.png",
                "woocommerce_single": "https://example.com/wp-content/uploads/woocommerce-placeholder-416x416.png",
                "woocommerce_gallery_thumbnail": "https://example.com/wp-content/uploads/woocommerce-placeholder-100x100.png",
                "shop_catalog": "https://example.com/wp-content/uploads/woocommerce-placeholder-324x324.png",
                "shop_single": "https://example.com/wp-content/uploads/woocommerce-placeholder-416x416.png",
                "shop_thumbnail": "https://example.com/wp-content/uploads/woocommerce-placeholder-100x100.png",
                "full": "https://example.com/wp-content/uploads/woocommerce-placeholder.png",
                "custom": "https://example.com/wp-content/uploads/woocommerce-placeholder.png"
            },
            "name": "Placeholder",
            "alt": "Placeholder",
            "position": 0
        }
    ],
    "attributes": [],
    "default_attributes": [],
    "variations": [],
    "grouped_products": [],
    "menu_order": 0,
    "meta_data": [],
    "mnm_data": {
        "base_raw_price": 2,
        "base_raw_regular_price": 2,
        "base_raw_sale_price": "",
        "base_price": "£2.00",
        "base_regular_price": "£2.00",
        "base_sale_price": "£0.00",
        "has_discount": true,
        "min_raw_price": 4.5671,
        "min_raw_regular_price": 4.58,
        "max_raw_price": 9.7013,
        "max_raw_regular_price": 9.74,
        "min_price": "£4.57",
        "min_regular_price": "£4.58",
        "max_price": "£9.70",
        "max_regular_price": "£9.74",
        "min_container_size": 2,
        "max_container_size": 6,
        "products": [
            {
                "child_id": 987,
                "product_id": 987,
                "variation_id": 0,
                "name": "Cupcake",
                "raw_price": "1.28355",
                "raw_regular_price": "1.29",
                "raw_sale_price": "1.28355",
                "price": "£1.28",
                "regular_price": "£1.29",
                "sale_price": "£1.28",
                "on_sale": true
            },
            {
                "child_id": 1001,
                "product_id": 1001,
                "variation_id": 0,
                "name": "Turquoise Cupcake",
                "raw_price": "1.28355",
                "raw_regular_price": "1.29",
                "raw_sale_price": "1.28355",
                "price": "£1.28",
                "regular_price": "£1.29",
                "sale_price": "£1.28",
                "on_sale": true
            },
            {
                "child_id": 1003,
                "product_id": 1003,
                "variation_id": 0,
                "name": "Buttercup and Bumblebee Cupcakes",
                "raw_price": "1.28355",
                "raw_regular_price": "1.29",
                "raw_sale_price": "1.28355",
                "price": "£1.28",
                "regular_price": "£1.29",
                "sale_price": "£1.28",
                "on_sale": true
            }
        ],
        "per_product_pricing": true,
        "per_product_discount": 0.5,
        "per_product_shipping": true
    },
    "_links": {
        "self": [
            {
                "permalink": "https://example.com/product/mix-and-match-products/",
                "href": "https://example.com/wp-json/cocart/v1/products/1102"
            }
        ],
        "collection": [
            {
                "permalink": "https://example.com/shop/",
                "href": "https://example.com/wp-json/cocart/v1/products"
            }
        ]
    }
}
```
