# Introduction #

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [Edit on GitHub](https://github.com/co-cart/co-cart-docs/blob/master/source/includes/cocart-v2/wip/_introduction.md)

Welcome to the documentation site for CoCart, the free  open-source WordPress plugin that brings the power of WooCommerce's shopping cart via the REST API. If you haven't already, [checkout the features](https://cocart.xyz/features/?utm_medium=docs.cocart.xyz&utm_source=docs&utm_content=cocart-docs) CoCart support.

CoCart helps you manage shopping carts in any modern framework of your choosing. No local storing required. A powerful RESTful API that offers an integration to build your headless store with ease.

## What is a REST API? ##

REST is an acronym for Representational State Transfer — an almost meaningless description of the most-used web service technology! REST is a way for two computer systems to communicate over HTTP in a similar way to web browsers and servers.

CoCart is a REST API designed in mind for those who want to create a headless e-commerce site powered by WooCommerce. Read [what does headless mean?](https://cocart.xyz/what-does-headless-mean/?utm_medium=docs.cocart.xyz&utm_source=docs&utm_content=cocart-docs)

CoCart allows developers to provide a shopping cart in their app that stores the customers items, coupons applied, shipping methods available and much more. Carts can be created, read, updated, and deleted using the requests available that return a response in JSON format and standard HTTP verbs which are understood by most HTTP clients.

## API Versions ##

The current WordPress REST API integration for CoCart is version `v2`.

The following table shows API versions present in each major version of CoCart:

| API Version | CoCart Version | WC Version     | WP Version   | PHP Version  | Documentation                            |
| ----------- | -------------- | -------------- | ------------ | ------------ | ---------------------------------------- |
| `v1`        | 2.0.x or later | 4.3.x or later | 5.2 or later | 7.0 or later | [cocart-api-v1 docs](cocart-api-v1.html) |
| `v2`        | 3.0.x or later | 4.8.x or later | 5.2 or later | 7.0 or later | **Currently Viewing**                   |

Prior to WooCommerce v3.6, CoCart shared WooCommerce's REST API. You can find the documentation about cart support for `/wc-api-v2` API separately.

| API Version        | WC Version     | WP Version   | Documentation                    |
| ------------------ | -------------- | ------------ | -------------------------------- |
| `Legacy wc-api-v2` | 3.0.x or later | 4.4 or later | [wc-api-v2 docs](wc-api-v2.html) |

## Requirements ##

To use the latest version of the CoCart you must be using:

* WordPress **5.4 or later**.
* WooCommerce **4.8 or later**.
* PHP **7.3 or later**.
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

Using **raw** works best if you are passing an object of data for a `variation` or `cart_item_data`.

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

## Parameters ##

Almost all endpoints accept optional parameters which can be passed as a HTTP query string parameter, e.g. `POST /cocart/v2/item?item_key=270edd69788dce200a3b395a6da6fdb7&quantity=2`. All parameters are documented along each endpoint.
