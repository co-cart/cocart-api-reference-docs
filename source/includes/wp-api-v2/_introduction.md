# Introduction #

Cart REST API for WooCommerce is an extension to the WooCommerce REST API. This is NOT an official WooCommerce project in anyway but does provide the missing endpoint to enable the ability to add, view, update and delete items from the cart using requests in JSON format. Perfect for building your store app.

The current WC REST API integration version is `v2`. The same for the Cart REST API for WooCommerce. The namespace matches with the current version to keep all endpoints together when [viewing the index](http://woocommerce.github.io/woocommerce-rest-api-docs/#index).

The cart endpoint also registers before WooCommerce endpoints in order for the index of WC REST API to be in alphabetical order.

## Requirements ##

To use the latest version of the Cart REST API you must be using:

* WordPress 4.4 or later.
* WooCommerce 3.0.x or later.
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

> WP REST API error example:

```json
{
  "code": "rest_no_route",
  "message": "No route was found matching the URL and request method",
  "data": {
    "status": 404
  }
}
```
> WooCommerce Cart REST API error example:

```json
{
  "code": "wc_cart_rest_clear_cart_failed",
  "message": "Clearing the cart failed!",
  "data": {
    "status": 500
  }
}
```

Errors return both an appropriate HTTP status code and response object which contains a `code`, `message` and `data` attribute.

## Parameters ##

Almost all endpoints accept optional parameters which can be passed as a HTTP query string parameter, e.g. `POST /cart/?cart_item_key=270edd69788dce200a3b395a6da6fdb7&quantity=2`. All parameters are documented along each endpoint.

## Libraries and Tools ##

### Official libraries ###

- [Node.js](https://www.npmjs.com/package/woocommerce-api) Library
- [PHP](https://packagist.org/packages/automattic/woocommerce) Library
- [Python](https://pypi.python.org/pypi/WooCommerce) Library
- [Ruby](https://rubygems.org/gems/woocommerce_api) Library

```javascript
// Install:
// npm install --save woocommerce-api

// Setup:
var WooCommerceAPI = require('woocommerce-api');

var WooCommerce = new WooCommerceAPI({
  url: 'http://example.com', // Your store URL
  wpAPI: true, // Enable the WP REST API integration
  version: 'wc/v2' // WooCommerce WP REST API version
});
```

```php
<?php
// Install:
// composer require automattic/woocommerce

// Setup:
require __DIR__ . '/vendor/autoload.php';

use Automattic\WooCommerce\Client;

$woocommerce = new Client(
    'http://example.com', // Your store URL
    [
        'wp_api' => true, // Enable the WP REST API integration
        'version' => 'wc/v2' // WooCommerce WP REST API version
    ]
);
?>
```

```python
# Install:
# pip install woocommerce

# Setup:
from woocommerce import API

wcapi = API(
    url="http://example.com", # Your store URL
    wp_api=True, # Enable the WP REST API integration
    version="wc/v2" # WooCommerce WP REST API version
)
```

```ruby
# Install:
# gem install woocommerce_api

# Setup:
require "woocommerce_api"

woocommerce = WooCommerce::API.new(
  "https://example.com", # Your store URL
  {
    wp_api: true, # Enable the WP REST API integration
    version: "wc/v2" # WooCommerce WP REST API version
  }
)
```

<aside class="notice">
	Use the tabs in the top-right corner of this page to see how to install and use each library.
</aside>

### Third party libraries ###

- [Angular](https://github.com/michaeldoye/ng2woo) Library
- [Java](https://github.com/icoderman/wc-api-java) Library
- [.NET](https://github.com/XiaoFaye/WooCommerce.NET) Library
- [Swift](https://github.com/minhcasi/WooCommerceSDK) Library

<aside class="notice">
	Note that I don't offer support for third party libraries, so if you have questions about how use any of this libraries you should contact the respective authors.
</aside>

## Tools ##

Some useful tools you can use to access the API include:

* [Postman](https://www.getpostman.com/) - A multi platform REST API GUI client (using Google Chrome or installing the app on Mac OS X or Windows).
* [CocoaRestClient](http://mmattozzi.github.io/cocoa-rest-client/) - A Mac OS X GUI client for interacting with the API.
* [Paw HTTP Client](https://itunes.apple.com/us/app/paw-http-client/id584653203?mt=12) - Another HTTP client for Mac OS X.
* [RESTClient, a debugger for RESTful web services](https://addons.mozilla.org/en-US/firefox/addon/restclient/) - Free Firefox add-on.
* [Advanced REST client](https://chrome.google.com/webstore/detail/advanced-rest-client/hgmloofddffdnphfgcellkdfbfbjeloo) - Free Google Chrome extension.
* [RequestBin](https://requestb.in/) - Allows you test web hooks.
* [Hookbin](https://hookbin.com/) - Another tool to test web hooks.
