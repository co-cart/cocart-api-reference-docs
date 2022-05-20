# Introduction #

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [Edit on GitHub](https://github.com/co-cart/co-cart-docs/blob/master/source/includes/cocart-v1/products/_introduction.md)

CoCart Products allows you to view all and access specific products, attributes, categories, tags and product reviews without authentication required. Only details of the products that customers need to know are returned.

## API Versions ##

The current WordPress REST API integration for CoCart Products is version `v1` which takes a first-order position in the endpoints.

The following table shows API versions present in each major version of CoCart Products:

| API Version | CoCart Version | WC Version     | WP Version   | PHP Version  |
| ----------- | -------------- | -------------- | ------------ | ------------ |
| `v1`        | 2.0.x or later | 4.0.x or later | 5.2 or later | 7.0 or later |

## Requirements ##

To use the latest version of the CoCart Products you must be using:

* WordPress **5.2 or later**.
* WooCommerce **4.0 or later**.
* PHP **7.0 or later**.
* CoCart **2.0 or later**
* Pretty permalinks in `Settings > Permalinks` so that the custom endpoints are supported. **Default permalinks will not work.**
* You may make requests over either HTTP or HTTPS, but HTTPS is recommended where possible.

<aside class="notice">
  Please note that you are <strong>not</strong> required to install the <a href="https://wordpress.org/plugins/rest-api/">WP REST API (WP API)</a> plugin.
</aside>

## Request/Response Format ##

The default response format is in JSON. Requests with a message-body use plain JSON to set or update resource attributes. Successful requests will return a `200 OK` HTTP status.

Some general information about response:

* Resource IDs are returned as integers.
* Other amounts, such as item counts, are returned as integers.
* Blank fields are generally included as `null` instead of being returned as blank strings or omitted.

## Body Types ##

There are different types of body types when making a request. Make sure when using either of these body types that you have the correct `Content-Type` for the header.

| Body Type             | Content-Type                      |
| --------------------- | --------------------------------- |
| form-data             | application/json                  |
| raw                   | application/json                  |
| x-www-form-urlencoded | application/x-www-form-urlencoded |

<aside class="notice">
  Body data must be passed correctly for the CoCart REST API to succeed.
</aside>

I personally find using **raw** works best if you are passing an array of data for a `variation` or `cart_item_data`.

## Errors ##

Occasionally you might encounter errors when accessing the REST API. Here are the possible types:

| Error Code                  | Error Type                                                    |
| --------------------------- |-------------------------------------------------------------- |
| `400 Bad Request`           | Invalid request, e.g. using an unsupported HTTP method        |
| `401 Unauthorized`          | Authentication or permission error, e.g. incorrect login      |
| `403 Forbidden`             | Not allowed to process this action or have permission.        |
| `404 Not Found`             | Requests to resources that don't exist or are missing         |
| `405 Method Not Allowed`    | A request method is not supported for the requested resource. |
| `500 Internal Server Error` | Server error                                                  |

> WP REST API error example

```json
{
  "code": "rest_no_route",
  "message": "No route was found matching the URL and request method",
  "data": {
    "status": 404
  }
}
```

> CoCart error example

```json
{
  "code": "cocart_clear_cart_failed",
  "message": "Clearing the cart failed!",
  "data": {
    "status": 500
  }
}
```

Errors return both an appropriate HTTP status code and response object which contains a `code`, `message` and `data` attribute.
