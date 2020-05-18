# Introduction #

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [Edit on GitHub](https://github.com/co-cart/co-cart-docs/blob/master/source/includes/cocart-v1/_introduction.md)

<aside class="warning">
  ⚠️ Stable version reverted to <strong>2.0.13</strong> due to unforeseen issues in version 2.1 so some documentation will be new but everything else still functions the same. If you have any questions or want to clarify something, just contact me via the chat and I will get back to you asap. Thank you.
</aside>

Welcome to the documentation site for CoCart, the free, open-source WordPress plugin that brings the power of WooCommerce's shopping cart via the REST API.

CoCart is designed in mind for those who want to create a headless WordPress site. Read [what does headless mean?](https://cocart.xyz/what-does-headless-mean/)

CoCart allows the cart to be created, read, updated, and deleted using requests in JSON format and standard HTTP verbs which are understood by most HTTP clients.

The current WordPress REST API integration for CoCart is version `v1` which takes a first-order position in endpoints.

The following table shows API versions present in each major version of CoCart:

| API Version | CoCart Version | WC Version      | WP Version   |
| ----------- | -------------- | --------------- | ------------ |
| `v1`        | 2.0.x or later | 3.6.x or later  | 4.4 or later |

Prior to WooCommerce v3.6, CoCart shared WooCommerce's REST API. You can find the documentation about cart support for `/wc-api-v2` API separately.

| API Version  | WC Version     | WP Version   | Documentation                    |
| ------------ | -------------- | ------------ | -------------------------------- |
| `wc-api-v2`  | 3.0.x or later | 4.4 or later | [wc-api-v2 docs](wc-api-v2.html) |

## Requirements ##

To use the latest version of the CoCart you must be using:

* WordPress 5.0 or later.
* WooCommerce 3.6.x or later.
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

Occasionally you might encounter errors when accessing the REST API. There are four possible types:

| Error Code | Error Type |
|------------|------------|
| `400 Bad Request` | Invalid request, e.g. using an unsupported HTTP method |
| `401 Unauthorized` | Authentication or permission error, e.g. incorrect API keys |
| `404 Not Found` | Requests to resources that don't exist or are missing |
| `500 Internal Server Error` | Server error |

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

## Parameters ##

Almost all endpoints accept optional parameters which can be passed as a HTTP query string parameter, e.g. `POST /cocart/v1/item?cart_item_key=270edd69788dce200a3b395a6da6fdb7&quantity=2`. All parameters are documented along each endpoint.
