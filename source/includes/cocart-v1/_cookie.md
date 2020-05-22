# Cookie #

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [Edit on GitHub](https://github.com/co-cart/co-cart-docs/blob/master/source/includes/cocart-v1/_cookie.md)

CoCart only creates and uses one cookie per session/customer/device. The cookie name starts with `wp_cocart_session_` followed by the WordPress **COOKIEHASH**. The cookie name can be changed using [this filter](#change-cart-session-cookie-name).

If left [enabled](#cookie-supported), this cookie will be used to identity the customers cart if they are not logged in. The cookie is read on the server and returns the cart stored in the cookie.

The cookie stores **4** key values.

* Cart Key/Customer ID
* Cart expiring timestamp.
* Cart expiration timestamp.
* Cart hash (Customer ID and Cart Expiration Timestamp encrypted).

If the framework your using is not able to read the cookie, then there are a few things you can do.

1. Look for a cookie support add-on for your framework. React for example has one called [react-cookies](https://www.npmjs.com/package/react-cookies).
2. Read the cookie value yourself and explode it by `||` and get the first key value. Once you have that value you can use it to set the `cart_key` parameter on all API requests. This will use the [Set Cart ID Method](#set-cart-id-method).
