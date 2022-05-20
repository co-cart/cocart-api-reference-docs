# Introduction #

Welcome to the API Reference for CoCart.

CoCart’s API is designed for decoupling away from WordPress and lets you build headless ecommerce using your favorite technologies. No Nonces, no cookies.

CoCart is packed full of powerful features that are completely customizable making it possible for businesses to build a complete custom storefront how they want.

No matter the type of store you are running, CoCart helps you grow.

Read [what does headless mean?](https://cocart.xyz/what-does-headless-mean/?utm_medium=docs.cocart.xyz&utm_source=docs&utm_content=cocart-docs)

[Get started by reading this guide](https://cocart.xyz/how-to-create-a-cart/?utm_medium=docs.cocart.xyz&utm_source=docs&utm_content=cocart-docs) on how to create a cart and keep using the same one.

## APi Reference ##

The CoCart API is organized around [REST](http://en.wikipedia.org/wiki/Representational_State_Transfer). Our API has predictable resource-oriented URLs, accepts [form-encoded](https://en.wikipedia.org/wiki/POST_(HTTP)#Use_for_submitting_web_forms) request bodies, returns [JSON-encoded](http://www.json.org/) responses, and uses standard HTTP response codes, authentication, and verbs.

## API Versions ##

The current WordPress REST API integration for CoCart is version `v2`.

The following table shows API versions present in each major version of CoCart:

| API Version | CoCart Version | WC Version     | WP Version   | PHP Version  | Reference                               |
| ----------- | -------------- | -------------- | ------------ | ------------ | --------------------------------------- |
| `v1`        | 2.0.x or later | 4.3.x or later | 5.2 or later | 7.0 or later | [API v1](core/version/v3.0/api-v1.html)            |
| `v2`        | 3.2.x or later | 5.2.x or later | 5.8 or later | 7.4 or later | [API v2](core/version/v3.4/api-v2.html) |

Prior to WooCommerce v3.6, CoCart shared WooCommerce's REST API. You can find the documentation about cart support for `/wc-api-v2` API separately.

| API Version        | WC Version     | WP Version   | Reference                    |
| ------------------ | -------------- | ------------ | ---------------------------- |
| `Legacy wc-api-v2` | 3.0.x or later | 4.4 or later | [Legacy API](wc-api-v2.html) |

## Body Types ##

There are different types of body types when making a request. Make sure when using either of these body types that you have the correct `Content-Type` for the header.

| Body Type             | Content-Type                      |
| --------------------- | --------------------------------- |
| form-data             | application/json                  |
| raw                   | application/json                  |
| x-www-form-urlencoded | application/x-www-form-urlencoded |

<aside class="notice">
  Body data must be passed correctly for the API to succeed.
</aside>

Using **raw** works best if you are passing an object of data for a `variation` or `cart_item_data` when testing the API using [any of the tools available](#tools).

## Errors ##

CoCart uses conventional HTTP response codes to indicate the success or failure of an API request. In general: Codes in the 2xx range indicate success. Codes in the 4xx range indicate an error that failed given the information provided (e.g., a required parameter was omitted, etc.). Codes in the 5xx range indicate an error with your WordPress instance or Server (these are rare).

Here are the possible types:

| Error Code                  | Error Type                                                               |
| --------------------------- |------------------------------------------------------------------------- |
| `400 Bad Request`           | The request was unacceptable, often due to missing a required parameter. |
| `401 Unauthorized`          | Authentication or permission error, e.g. incorrect login                 |
| `403 Forbidden`             | Not allowed to process this action or have permission.                   |
| `404 Not Found`             | Requests to resources that don't exist or are missing.                   |
| `405 Method Not Allowed`    | A request method is not supported for the requested resource.            |
| `500 Internal Server Error` | WordPress or Server error.                                               |

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

[A full list of HTTP status codes can be found here.](https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml)