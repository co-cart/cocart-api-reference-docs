# Product variations #

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [Edit on GitHub](https://github.com/co-cart/co-cart-docs/blob/master/source/includes/cocart-v1/products/_product-variations.md)

The product variations API allows you to view individual or a batch of product variations.

 * [List all product variations](#product-variations-list-all-product-variations)
 * [Retrieve a product variation](#product-variations-retrieve-a-product-variation)

## Product variation attributes ##

| Attribute               | Type      | Description                                                                                                     |
|-------------------------|-----------|-----------------------------------------------------------------------------------------------------------------|
| `id`                    | integer   | Unique identifier for the variation.                                                                            |
| `date_created`          | date-time | The date the variation was created, in the site's timezone.                                                     |
| `date_created_gmt`      | date-time | The date the variation was created, as GMT.                                                                     |
| `date_modified`         | date-time | The date the variation was last modified, in the site's timezone.                                               |
| `date_modified_gmt`     | date-time | The date the variation was last modified, as GMT.                                                               |
| `description`           | string    | Variation description.                                                                                          |
| `permalink`             | string    | Variation URL.                                                                                                  |
| `sku`                   | string    | Unique identifier.                                                                                              |
| `price`                 | string    | Current variation price.                                                                                        |
| `regular_price`         | string    | Variation regular price.                                                                                        |
| `sale_price`            | string    | Variation sale price.                                                                                           |
| `date_on_sale_from`     | date-time | Start date of sale price, in the site's timezone.                                                               |
| `date_on_sale_from_gmt` | date-time | Start date of sale price, as GMT.                                                                               |
| `date_on_sale_to`       | date-time | End date of sale price, in the site's timezone.                                                                 |
| `date_on_sale_to_gmt`   | date-time | End date of sale price, as GMT.                                                                                 |
| `on_sale`               | boolean   | Identifies if the variation is on sale.                                                                         |
| `status`                | string    | Variation status.                                                                                               |
| `purchasable`           | boolean   | Identifies if the product can be bought.                                                                        |
| `virtual`               | boolean   | Identifies if the variation is a virtual product.                                                               |
| `downloadable`          | boolean   | Identifies if the variation is a downloadable product.                                                          |
| `manage_stock`          | boolean   | Identifies the stock management at product level.                                                               |
| `stock_quantity`        | integer   | Stock quantity.                                                                                                 |
| `stock_status`          | string    | Controls the stock status of the product.                                                                       |
| `backorders`            | string    | Returns the backorder status.                                                                                   |
| `backorders_allowed`    | boolean   | Identifies if backorders are allowed.                                                                           |
| `backordered`           | boolean   | Identifies if the product is on backordered.                                                                    |
| `weight`                | string    | Variation weight.                                                                                               |
| `dimensions`            | object    | Variation dimensions. See [Product variation - Dimensions properties](#product-variation-dimensions-properties) |
| `image`                 | object    | Variation image data. See [Product variation - Image properties](#product-variation-image-properties)           |
| `attributes`            | array     | List of attributes. See [Product variation - Attributes properties](#product-variation-attributes-properties)   |
| `menu_order`            | integer   | Menu order, used to custom sort products.                                                                       |
| `meta_data`             | array     | Meta data. See [Product variation - Meta data properties](#product-variation-meta-data-properties)              |

### Product variation - Dimensions properties ###

| Attribute | Type   | Description       |
|-----------|--------|-------------------|
| `length`  | string | Variation length. |
| `width`   | string | Variation width.  |
| `height`  | string | Variation height. |

### Product variation - Image properties ###

| Attribute           | Type      | Description                                                   |
|---------------------|-----------|---------------------------------------------------------------|
| `id`                | integer   | Image ID.                                                     |
| `date_created`      | date-time | The date the image was created, in the site's timezone.       |
| `date_created_gmt`  | date-time | The date the image was created, as GMT.                       |
| `date_modified`     | date-time | The date the image was last modified, in the site's timezone. |
| `date_modified_gmt` | date-time | The date the image was last modified, as GMT.                 |
| `src`               | array     | All registered image sizes for the image are returned.        |
| `name`              | string    | Image name.                                                   |
| `alt`               | string    | Image alternative text.                                       |

### Product variation - Attributes properties ###

| Attribute | Type    | Description                   |
|-----------|---------|-------------------------------|
| `id`      | integer | Attribute ID.                 |
| `name`    | string  | Attribute name.               |
| `option`  | string  | Selected attribute term name. |

### Product variation - Meta data properties ###

| Attribute | Type    | Description |
|-----------|---------|------------ |
| `id`      | integer | Meta ID.    |
| `key`     | string  | Meta key.   |
| `value`   | string  | Meta value. |

## Retrieve a product variation ##

This API lets you retrieve and view a specific product variation by ID.

### HTTP request ###

<div class="api-endpoint">
	<div class="endpoint-data">
		<i class="label label-get">GET</i>
		<h6>/wp-json/cocart/v1/products/&lt;product_id&gt;/variations/&lt;id&gt;</h6>
	</div>
</div>

```shell
curl -X GET https://example.com/wp-json/cocart/v1/products/162/variations/176 \
  -H "Content-Type: application/json" \
```

```javascript--node
CoCart.get("products/162/variations/176")
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
  "url": "https://example.com/wp-json/cocart/v1/products/162/variations/176",
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
  CURLOPT_URL => "https://example.com/wp-json/cocart/v1/products/162/variations/176",
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
$response = wp_remote_get( 'https://example.com/wp-json/cocart/v1/products/162/variations/176' );
$body = wp_remote_retrieve_body( $response );
```

> JSON response example:

```json
{
  "id": 176,
  "date_created": "2020-01-24T14:55:54",
  "date_created_gmt": "2020-01-24T13:55:54",
  "date_modified": "2020-01-24T14:56:30",
  "date_modified_gmt": "2020-01-24T13:56:30",
  "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis orci ac odio dictum tincidunt. Donec ut metus leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed luctus, dui eu sagittis sodales, nulla nibh sagittis augue, vel porttitor diam enim non metus. Vestibulum aliquam augue neque. Phasellus tincidunt odio eget ullamcorper efficitur. Cras placerat ut turpis pellentesque vulputate. Nam sed consequat tortor. Curabitur finibus sapien dolor. Ut eleifend tellus nec erat pulvinar dignissim. Nam non arcu purus. Vivamus et massa massa.</p>\n",
  "permalink": "https://example.com/product/v-neck-t-shirt/?attribute_pa_color=red",
  "sku": "woo-vneck-tee-red",
  "price": "20",
  "regular_price": "20",
  "sale_price": "",
  "date_on_sale_from": null,
  "date_on_sale_from_gmt": null,
  "date_on_sale_to": null,
  "date_on_sale_to_gmt": null,
  "on_sale": false,
  "purchasable": true,
  "virtual": false,
  "downloadable": false,
  "manage_stock": false,
  "stock_quantity": null,
  "stock_status": "instock",
  "backorders": "no",
  "backorders_allowed": false,
  "backordered": false,
  "weight": "",
  "dimensions": {
    "length": "",
    "width": "",
    "height": ""
  },
  "image": {
    "id": 187,
    "date_created": "2020-01-24T15:55:58",
    "date_created_gmt": "2020-01-24T13:55:58",
    "date_modified": "2020-01-24T15:55:58",
    "date_modified_gmt": "2020-01-24T13:55:58",
    "src": {
      "thumbnail": "https://example.com/wp-content/uploads/2020/01/vneck-tee-2-150x150.jpg",
      "medium": "https://example.com/wp-content/uploads/2020/01/vneck-tee-2-300x300.jpg",
      "medium_large": "https://example.com/wp-content/uploads/2020/01/vneck-tee-2-768x767.jpg",
      "large": "https://example.com/wp-content/uploads/2020/01/vneck-tee-2.jpg",
      "1536x1536": "https://example.com/wp-content/uploads/2020/01/vneck-tee-2.jpg",
      "2048x2048": "https://example.com/wp-content/uploads/2020/01/vneck-tee-2.jpg",
      "woocommerce_thumbnail": "https://example.com/wp-content/uploads/2020/01/vneck-tee-2-324x324.jpg",
      "woocommerce_single": "https://example.com/wp-content/uploads/2020/01/vneck-tee-2-416x415.jpg",
      "woocommerce_gallery_thumbnail": "https://example.com/wp-content/uploads/2020/01/vneck-tee-2-100x100.jpg",
      "shop_catalog": "https://example.com/wp-content/uploads/2020/01/vneck-tee-2-324x324.jpg",
      "shop_single": "https://example.com/wp-content/uploads/2020/01/vneck-tee-2-416x415.jpg",
      "shop_thumbnail": "https://example.com/wp-content/uploads/2020/01/vneck-tee-2-100x100.jpg",
      "full": "https://example.com/wp-content/uploads/2020/01/vneck-tee-2.jpg",
      "custom": "https://example.com/wp-content/uploads/2020/01/vneck-tee-2.jpg"
    },
    "name": "vneck-tee-2.jpg",
    "alt": ""
  },
  "attributes": {
    "attribute_pa_color": {
      "id": 1,
      "name": "Color",
      "option": "Red"
    }
  },
  "menu_order": 0,
  "meta_data": [],
  "_links": {
    "self": [
      {
        "href": "https://example.com/wp-json/cocart/v1/products/162/variations/176"
      }
    ],
    "collection": [
      {
        "href": "https://example.com/wp-json/cocart/v1/products/162/variations"
      }
    ],
    "parent_product": [
      {
        "permalink": "https://example.com/product/v-neck-t-shirt/",
        "href": "https://example.com/wp-json/cocart/v1/products/162"
      }
    ]
  }
}
```

## List all product variations ##

This API helps you to view all the product variations.

### HTTP request ###

<div class="api-endpoint">
	<div class="endpoint-data">
		<i class="label label-get">GET</i>
		<h6>/wp-json/cocart/v1/products/&lt;product_id&gt;/variations</h6>
	</div>
</div>

```shell
curl -X GET https://example.com/wp-json/cocart/v1/products/22/variations \
  -H "Content-Type: application/json" \
```

```javascript--node
CoCart.get("products/22/variations")
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
  "url": "https://example.com/wp-json/cocart/v1/products/22/variations",
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
  CURLOPT_URL => "https://example.com/wp-json/cocart/v1/products/22/variations",
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
$response = wp_remote_get( 'https://example.com/wp-json/cocart/v1/products/22/variations' );
$body = wp_remote_retrieve_body( $response );
```

> JSON response example:

```json
[
  {
    "id": 176,
    "date_created": "2020-01-24T14:55:54",
    "date_created_gmt": "2020-01-24T13:55:54",
    "date_modified": "2020-01-24T14:56:30",
    "date_modified_gmt": "2020-01-24T13:56:30",
    "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis orci ac odio dictum tincidunt. Donec ut metus leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed luctus, dui eu sagittis sodales, nulla nibh sagittis augue, vel porttitor diam enim non metus. Vestibulum aliquam augue neque. Phasellus tincidunt odio eget ullamcorper efficitur. Cras placerat ut turpis pellentesque vulputate. Nam sed consequat tortor. Curabitur finibus sapien dolor. Ut eleifend tellus nec erat pulvinar dignissim. Nam non arcu purus. Vivamus et massa massa.</p>\n",
    "permalink": "https://example.com/product/v-neck-t-shirt/?attribute_pa_color=red",
    "sku": "woo-vneck-tee-red",
    "price": "20",
    "regular_price": "20",
    "sale_price": "",
    "date_on_sale_from": null,
    "date_on_sale_from_gmt": null,
    "date_on_sale_to": null,
    "date_on_sale_to_gmt": null,
    "on_sale": false,
    "purchasable": true,
    "virtual": false,
    "downloadable": false,
    "manage_stock": false,
    "stock_quantity": null,
    "stock_status": "instock",
    "backorders": "no",
    "backorders_allowed": false,
    "backordered": false,
    "weight": "",
    "dimensions": {
      "length": "",
      "width": "",
      "height": ""
    },
    "image": {
      "id": 187,
      "date_created": "2020-01-24T15:55:58",
      "date_created_gmt": "2020-01-24T13:55:58",
      "date_modified": "2020-01-24T15:55:58",
      "date_modified_gmt": "2020-01-24T13:55:58",
      "src": {
        "thumbnail": "https://example.com/wp-content/uploads/2020/01/vneck-tee-2-150x150.jpg",
        "medium": "https://example.com/wp-content/uploads/2020/01/vneck-tee-2-300x300.jpg",
        "medium_large": "https://example.com/wp-content/uploads/2020/01/vneck-tee-2-768x767.jpg",
        "large": "https://example.com/wp-content/uploads/2020/01/vneck-tee-2.jpg",
        "1536x1536": "https://example.com/wp-content/uploads/2020/01/vneck-tee-2.jpg",
        "2048x2048": "https://example.com/wp-content/uploads/2020/01/vneck-tee-2.jpg",
        "woocommerce_thumbnail": "https://example.com/wp-content/uploads/2020/01/vneck-tee-2-324x324.jpg",
        "woocommerce_single": "https://example.com/wp-content/uploads/2020/01/vneck-tee-2-416x415.jpg",
        "woocommerce_gallery_thumbnail": "https://example.com/wp-content/uploads/2020/01/vneck-tee-2-100x100.jpg",
        "shop_catalog": "https://example.com/wp-content/uploads/2020/01/vneck-tee-2-324x324.jpg",
        "shop_single": "https://example.com/wp-content/uploads/2020/01/vneck-tee-2-416x415.jpg",
        "shop_thumbnail": "https://example.com/wp-content/uploads/2020/01/vneck-tee-2-100x100.jpg",
        "full": "https://example.com/wp-content/uploads/2020/01/vneck-tee-2.jpg",
        "custom": "https://example.com/wp-content/uploads/2020/01/vneck-tee-2.jpg"
      },
      "name": "vneck-tee-2.jpg",
      "alt": ""
    },
    "attributes": {
      "attribute_pa_color": {
        "id": 1,
        "name": "Color",
        "option": "Red"
      }
    },
    "menu_order": 0,
    "meta_data": [],
    "_links": {
      "self": [
        {
          "href": "https://example.com/wp-json/cocart/v1/products/162/variations/176"
        }
      ],
      "collection": [
        {
          "href": "https://example.com/wp-json/cocart/v1/products/162/variations"
        }
      ],
      "parent_product": [
        {
          "permalink": "https://example.com/product/v-neck-t-shirt/",
          "href": "https://example.com/wp-json/cocart/v1/products/162"
        }
      ]
    }
  },
  {
    "id": 177,
    "date_created": "2020-01-24T14:55:54",
    "date_created_gmt": "2020-01-24T13:55:54",
    "date_modified": "2020-01-24T14:56:31",
    "date_modified_gmt": "2020-01-24T13:56:31",
    "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis orci ac odio dictum tincidunt. Donec ut metus leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed luctus, dui eu sagittis sodales, nulla nibh sagittis augue, vel porttitor diam enim non metus. Vestibulum aliquam augue neque. Phasellus tincidunt odio eget ullamcorper efficitur. Cras placerat ut turpis pellentesque vulputate. Nam sed consequat tortor. Curabitur finibus sapien dolor. Ut eleifend tellus nec erat pulvinar dignissim. Nam non arcu purus. Vivamus et massa massa.</p>\n",
    "permalink": "https://example.com/product/v-neck-t-shirt/?attribute_pa_color=green",
    "sku": "woo-vneck-tee-green",
    "price": "20",
    "regular_price": "20",
    "sale_price": "",
    "date_on_sale_from": null,
    "date_on_sale_from_gmt": null,
    "date_on_sale_to": null,
    "date_on_sale_to_gmt": null,
    "on_sale": false,
    "purchasable": true,
    "virtual": false,
    "downloadable": false,
    "manage_stock": false,
    "stock_quantity": null,
    "stock_status": "instock",
    "backorders": "no",
    "backorders_allowed": false,
    "backordered": false,
    "weight": "",
    "dimensions": {
      "length": "",
      "width": "",
      "height": ""
    },
    "image": {
      "id": 188,
      "date_created": "2020-01-24T15:55:59",
      "date_created_gmt": "2020-01-24T13:55:59",
      "date_modified": "2020-01-24T15:55:59",
      "date_modified_gmt": "2020-01-24T13:55:59",
      "src": {
        "thumbnail": "https://example.com/wp-content/uploads/2020/01/vnech-tee-green-1-150x150.jpg",
        "medium": "https://example.com/wp-content/uploads/2020/01/vnech-tee-green-1-300x300.jpg",
        "medium_large": "https://example.com/wp-content/uploads/2020/01/vnech-tee-green-1-768x768.jpg",
        "large": "https://example.com/wp-content/uploads/2020/01/vnech-tee-green-1.jpg",
        "1536x1536": "https://example.com/wp-content/uploads/2020/01/vnech-tee-green-1.jpg",
        "2048x2048": "https://example.com/wp-content/uploads/2020/01/vnech-tee-green-1.jpg",
        "woocommerce_thumbnail": "https://example.com/wp-content/uploads/2020/01/vnech-tee-green-1-324x324.jpg",
        "woocommerce_single": "https://example.com/wp-content/uploads/2020/01/vnech-tee-green-1-416x416.jpg",
        "woocommerce_gallery_thumbnail": "https://example.com/wp-content/uploads/2020/01/vnech-tee-green-1-100x100.jpg",
        "shop_catalog": "https://example.com/wp-content/uploads/2020/01/vnech-tee-green-1-324x324.jpg",
        "shop_single": "https://example.com/wp-content/uploads/2020/01/vnech-tee-green-1-416x416.jpg",
        "shop_thumbnail": "https://example.com/wp-content/uploads/2020/01/vnech-tee-green-1-100x100.jpg",
        "full": "https://example.com/wp-content/uploads/2020/01/vnech-tee-green-1.jpg",
        "custom": "https://example.com/wp-content/uploads/2020/01/vnech-tee-green-1.jpg"
      },
      "name": "vnech-tee-green-1.jpg",
      "alt": ""
    },
    "attributes": {
      "attribute_pa_color": {
        "id": 1,
        "name": "Color",
        "option": "Green"
      }
    },
    "menu_order": 0,
    "meta_data": [],
    "_links": {
      "self": [
        {
          "href": "https://example.com/wp-json/cocart/v1/products/162/variations/177"
        }
      ],
      "collection": [
        {
          "href": "https://example.com/wp-json/cocart/v1/products/162/variations"
        }
      ],
      "parent_product": [
        {
          "permalink": "https://example.com/product/v-neck-t-shirt/",
          "href": "https://example.com/wp-json/cocart/v1/products/162"
        }
      ]
    }
  },
  {
    "id": 178,
    "date_created": "2020-01-24T14:55:54",
    "date_created_gmt": "2020-01-24T13:55:54",
    "date_modified": "2020-01-24T14:56:32",
    "date_modified_gmt": "2020-01-24T13:56:32",
    "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis orci ac odio dictum tincidunt. Donec ut metus leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed luctus, dui eu sagittis sodales, nulla nibh sagittis augue, vel porttitor diam enim non metus. Vestibulum aliquam augue neque. Phasellus tincidunt odio eget ullamcorper efficitur. Cras placerat ut turpis pellentesque vulputate. Nam sed consequat tortor. Curabitur finibus sapien dolor. Ut eleifend tellus nec erat pulvinar dignissim. Nam non arcu purus. Vivamus et massa massa.</p>\n",
    "permalink": "https://example.com/product/v-neck-t-shirt/?attribute_pa_color=blue",
    "sku": "woo-vneck-tee-blue",
    "price": "15",
    "regular_price": "15",
    "sale_price": "",
    "date_on_sale_from": null,
    "date_on_sale_from_gmt": null,
    "date_on_sale_to": null,
    "date_on_sale_to_gmt": null,
    "on_sale": false,
    "purchasable": true,
    "virtual": false,
    "downloadable": false,
    "manage_stock": false,
    "stock_quantity": null,
    "stock_status": "instock",
    "backorders": "no",
    "backorders_allowed": false,
    "backordered": false,
    "weight": "",
    "dimensions": {
      "length": "",
      "width": "",
      "height": ""
    },
    "image": {
      "id": 189,
      "date_created": "2020-01-24T15:56:00",
      "date_created_gmt": "2020-01-24T13:56:00",
      "date_modified": "2020-01-24T15:56:00",
      "date_modified_gmt": "2020-01-24T13:56:00",
      "src": {
        "thumbnail": "https://example.com/wp-content/uploads/2020/01/vnech-tee-blue-1-150x150.jpg",
        "medium": "https://example.com/wp-content/uploads/2020/01/vnech-tee-blue-1-300x300.jpg",
        "medium_large": "https://example.com/wp-content/uploads/2020/01/vnech-tee-blue-1-768x768.jpg",
        "large": "https://example.com/wp-content/uploads/2020/01/vnech-tee-blue-1.jpg",
        "1536x1536": "https://example.com/wp-content/uploads/2020/01/vnech-tee-blue-1.jpg",
        "2048x2048": "https://example.com/wp-content/uploads/2020/01/vnech-tee-blue-1.jpg",
        "woocommerce_thumbnail": "https://example.com/wp-content/uploads/2020/01/vnech-tee-blue-1-324x324.jpg",
        "woocommerce_single": "https://example.com/wp-content/uploads/2020/01/vnech-tee-blue-1-416x416.jpg",
        "woocommerce_gallery_thumbnail": "https://example.com/wp-content/uploads/2020/01/vnech-tee-blue-1-100x100.jpg",
        "shop_catalog": "https://example.com/wp-content/uploads/2020/01/vnech-tee-blue-1-324x324.jpg",
        "shop_single": "https://example.com/wp-content/uploads/2020/01/vnech-tee-blue-1-416x416.jpg",
        "shop_thumbnail": "https://example.com/wp-content/uploads/2020/01/vnech-tee-blue-1-100x100.jpg",
        "full": "https://example.com/wp-content/uploads/2020/01/vnech-tee-blue-1.jpg",
        "custom": "https://example.com/wp-content/uploads/2020/01/vnech-tee-blue-1.jpg"
      },
      "name": "vnech-tee-blue-1.jpg",
      "alt": ""
    },
    "attributes": {
      "attribute_pa_color": {
        "id": 1,
        "name": "Color",
        "option": "Blue"
      }
    },
    "menu_order": 0,
    "meta_data": [],
    "_links": {
      "self": [
        {
          "href": "https://example.com/wp-json/cocart/v1/products/162/variations/178"
        }
      ],
      "collection": [
        {
          "href": "https://example.com/wp-json/cocart/v1/products/162/variations"
        }
      ],
      "parent_product": [
        {
          "permalink": "https://example.com/product/v-neck-t-shirt/",
          "href": "https://example.com/wp-json/cocart/v1/products/162"
        }
      ]
    }
  }
]
```

#### Available parameters ####

| Parameter        | Type    | Description                                                                                                                                       |
|------------------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| `page`           | integer | Current page of the collection. Default is `1`.                                                                                                   |
| `per_page`       | integer | Maximum number of items to be returned in result set. Default is `10`.                                                                            |
| `search`         | string  | Limit results to those matching a string.                                                                                                         |
| `after`          | string  | Limit response to resources published after a given ISO8601 compliant date.                                                                       |
| `before`         | string  | Limit response to resources published before a given ISO8601 compliant date.                                                                      |
| `exclude`        | array   | Ensure result set excludes specific IDs.                                                                                                          |
| `include`        | array   | Limit result set to specific ids.                                                                                                                 |
| `offset`         | integer | Offset the result set by a specific number of items.                                                                                              |
| `order`          | string  | Order sort attribute ascending or descending. Options: `asc` and `desc`. Default is `desc`.                                                       |
| `orderby`        | string  | Sort collection by object attribute. Options: `date`, `id`, `include`, `title` and `slug`. Default is your WooCommerce default catalogue setting. |
| `parent`         | array   | Limit result set to those of particular parent IDs.                                                                                               |
| `parent_exclude` | array   | Limit result set to all items except those of a particular parent ID.                                                                             |
| `slug`           | string  | Limit result set to products with a specific slug.                                                                                                |
| `sku`            | string  | Limit result set to products with a specific SKU.                                                                                                 |
| `on_sale`        | boolean | Limit result set to products on sale.                                                                                                             |
| `min_price`      | string  | Limit result set to products based on a minimum price.                                                                                            |
| `max_price`      | string  | Limit result set to products based on a maximum price.                                                                                            |
| `stock_status`   | string  | Limit result set to products with specified stock status. Options: `instock`, `outofstock` and `onbackorder`.                                     |
