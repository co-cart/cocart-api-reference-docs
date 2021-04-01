# Cookie #

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [Edit on GitHub](https://github.com/co-cart/co-cart-docs/blob/master/source/includes/cocart-v1/_cookie.md)

CoCart **only** creates and uses **only one cookie** per session/customer/device. The cookie name starts with `wp_cocart_session_` followed by the WordPress **COOKIEHASH**. The cookie name can be changed using [this filter](#filters-session-management-change-cookie-name).

If left [enabled](#filters-session-management-cookie-supported), this cookie will be used to identity the customers cart. The cookie is read on the server and returns the cart stored in the cookie.

The cookie stores **4** key values.

* Cart Key/Customer ID
* Cart expiring timestamp.
* Cart expiration timestamp.
* Cart hash (Customer ID and Cart Expiration Timestamp encrypted).

## How the CoCart cookie is created ##

Once a customer has added the first item to the cart, a cookie is generated that stores the cart key (a.k.a the customers ID) and cart expiration.

This cookie is used in order to load the cart again in session for that individual customer. No parameters are required to pass as it is all done in the background.

This is the default behaviour for WooCommerce on the frontend and works fine in any framework that supports the use of creating and reading cookies.

## What to do if I cant use Cookies? ##

If the framework your using is not able to read cookies, then there are a few things you can do.

1. Look for a cookie support add-on for your framework. React for example has one called [react-cookies](https://www.npmjs.com/package/react-cookies).
2. Read the cart key value in the returned header response `X-CoCart-API`. Once you have that value you can use it to set the `cart_key` parameter on all API requests. This will use the [Cart Key method](#get-cart-cart-for-guest-customers).

## Set-Cookie-headers ##

The cookie for CoCart and therefore the cart key is supplied through response headers, so called [Set-Cookie-headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie).

Cookies received via Set-Cookie-headers is stored in the browser for the domain upon which holds the API, meaning you can encounter problems reading the cookie values from your frontend.

If using a package like [axios](https://github.com/axios/axios), make sure to supply the correct config parameters that enables cookies in requests to the server. As an example, axios has a config parameter called `withAuthorization`. With the flag set to true, cookies previous set will be sent in the request.

P.S. Our [official JS library](#libraries) already has this setup for you.

## Can I change the SameSite Attribute? ##

If you need to change the **SameSite attribute** [a filter is available](#filters-api-access-cookie-samesite-attribute) that was introduced in v2.9.1

If you want to know more about **SameSite attribute**. [Checkout this article](https://www.kevel.co/blog/chrome-samesite/).