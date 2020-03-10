# Introduction #

CoCart allows the cart to be created, read, updated, and deleted using requests in JSON format and using WordPress REST API Authentication methods and standard HTTP verbs which are understood by most HTTP clients.

CoCart is designed in mind for those who want to create a headless WordPress site. Read [what does headless mean?](https://cocart.xyz/what-does-headless-mean/)

The current WordPress REST API integration for CoCart is version `v1` which takes a first-order position in endpoints.

The following table shows API versions present in each major version of CoCart:

| API Version | CoCart Version | WC Version      | WP Version   |
| ----------- | -------------- | --------------- | ------------ |
| `v1`        | 2.0.x or later | 3.6.x or later  | 4.4 or later |

Prior to WooCommerce v3.6, CoCart shared WooCommerce's REST API. You can find the documentation about cart support for `/wc-api-v2` API separately.

| API Version  | WC Version     | WP Version   | Documentation                    |
| ------------ | -------------- | ------------ | -------------------------------- |
| `wc-api-v2`  | 3.0.x or later | 4.4 or later | [wc-api-v2 docs](wc-api-v2.html) |

## CoCart Pro ##

If you have purchased CoCart Pro then documentation for it is found here.

| API Version | CoCart Pro Version | WC Version      | WP Version   | Documentation        |
| ----------- | ------------------ | --------------- | ------------ | -------------------- |
| `v1`        | 1.0.x or later     | 3.6.x or later  | 4.4 or later | [cocart pro docs](pro.html) |

### CoCart Pro Add-ons ###

Documentation for CoCart Pro add-ons are found here.

| API Version | CoCart Pro Version | WC Version      | WP Version   | Documentation         |
| ----------- | ------------------ | --------------- | ------------ | --------------------- |
| `v1`        | 1.0.x or later     | 3.6.x or later  | 4.4 or later | [cocart products docs](products.html) |

## CoCart - Work in Progress ##

[This section provides documentation on future features](wip.html) that are in the works. Only view this section if you are testing the latest beta release and not using it on production sites.

## Requirements ##

To use the latest version of the CoCart you must be using:

* WordPress 4.4 or later.
* WooCommerce 3.6.x or later.
* Pretty permalinks in `Settings > Permalinks` so that the custom endpoints are supported. **Default permalinks will not work.**
* You may make requests over either HTTP or HTTPS, but HTTPS is recommended where possible.

<aside class="notice">
  Please note that you are <strong>not</strong> required to install the <a href="https://wordpress.org/plugins/rest-api/">WP REST API (WP API)</a> plugin.
</aside>

## Request/Response Format ##

The default response format is JSON. Requests with a message-body use plain JSON to set or update resource attributes. Successful requests will return a `200 OK` HTTP status.

Some general information about response:

* Resource IDs are returned as integers.
* Other amounts, such as item counts, are returned as integers.
* Blank fields are generally included as `null` instead of being returned as blank strings or omitted.

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

## Tools ##

Some useful tools you can use to access the API include:

* [Postman](https://www.getpostman.com/) - A multi platform REST API GUI client (using Google Chrome or installing the app on Mac OS X or Windows).
* [Insomnia](https://insomnia.rest/) - Similar to Postman using an app on Mac OS X, Windows or Ubuntu.
* [CocoaRestClient](http://mmattozzi.github.io/cocoa-rest-client/) - A Mac OS X GUI client for interacting with the API.
* [Paw HTTP Client](https://itunes.apple.com/us/app/paw-http-client/id584653203?mt=12) - Another HTTP client for Mac OS X.
* [RESTClient, a debugger for RESTful web services](https://addons.mozilla.org/en-US/firefox/addon/restclient/) - Free Firefox add-on.
* [Advanced REST client](https://chrome.google.com/webstore/detail/advanced-rest-client/hgmloofddffdnphfgcellkdfbfbjeloo) - Free Google Chrome extension.
* [Hookbin](https://hookbin.com/) - Another tool to test web hooks.

## Learn more ##

Learn more about the REST API checking the <a href="https://developer.wordpress.org/rest-api/" target="_blank">official WordPress REST API documentation</a>.
