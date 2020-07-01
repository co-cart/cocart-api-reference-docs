# Cookie #

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [Edit on GitHub](https://github.com/co-cart/co-cart-docs/blob/master/source/includes/cocart-v1/_cookie.md)

CoCart only creates and uses one cookie per session/customer/device. The cookie name starts with `wp_cocart_session_` followed by the WordPress **COOKIEHASH**. The cookie name can be changed using [this filter](#extending-cocart-filters-change-cart-session-cookie-name).

If left [enabled](#extending-cocart-filters-cookie-supported), this cookie will be used to identity the customers cart if they are not logged in. The cookie is read on the server and returns the cart stored in the cookie.

The cookie stores **4** key values.

* Cart Key/Customer ID
* Cart expiring timestamp.
* Cart expiration timestamp.
* Cart hash (Customer ID and Cart Expiration Timestamp encrypted).

If the framework your using is not able to read the cookie, then there are a few things you can do.

1. Look for a cookie support add-on for your framework. React for example has one called [react-cookies](https://www.npmjs.com/package/react-cookies).
2. Read the cookie value yourself and explode it by `||` and get the first key value. Once you have that value you can use it to set the `cart_key` parameter on all API requests. This will use the [Set Cart ID Method](#cart-guest-customers-set-cart-id-method).

## Note about response Set-Cookie-headers ##

The cookie for CoCart and therefore the cart key is supplied through response headers, so called [Set-Cookie-headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie).

Cookies received via Set-Cookie-headers is stored in the browser for the domain upon which holds the API, meaning you can encounter problems reading the cookie values from your frontend.

If using a package like [axios](https://github.com/axios/axios), make sure to supply the correct config parameters that enables cookies in requests to the server. As an example, axios has a config parameter called `withAuthorization`. With the flag set to true, cookies previous set will be sent in the request.

### Cart key in the response payload ###

Sometimes you need to avoid cookies. It's possible to return the cart key when using the `wp-json/cocart/v1/get-cart` endpoint. Simply download and activate the [Get Cart Enhanced add-on plugin](https://wordpress.org/plugins/cocart-get-cart-enhanced/) and you're good-to-go.
