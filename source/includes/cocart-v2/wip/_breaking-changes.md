# Breaking changes #

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [Edit on GitHub](https://github.com/co-cart/co-cart-docs/blob/master/source/includes/cocart-v2/wip/_breaking-changes.md)

New major versions typically involve some backwards incompatible changes. If you use custom integrations with the API, you should also expect things to change when switching between API versions.

## CoCart 3.0 ##

CoCart 3.0 focuses on bringing a new flow experience to help development for headless ecommerce be better than ever before. There are a few changes.

One of the biggest changes is to return the cart updated in most of the API endpoints available.

* New `/v2/` API version have been added.
* The `/v1/` (maintenance) endpoints will not recieve any further changes.
* Getting a specific cart in session publically will no longer be possible.
* Adding a variation of a variable product no longer requires the need to pass the parent ID via the `product_id` parameter. `product_id` is now `id` and `variation_id` is now deprecated. You now just pass the variation ID via `id`.
* The `quantity` parameter when adding a product must now be passed as a string. This allows for better validation on the server side due to WordPress REST API validation callback limits.