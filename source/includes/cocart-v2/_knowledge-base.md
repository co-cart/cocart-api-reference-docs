# Knowledge Base #

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [Edit on GitHub](https://github.com/co-cart/co-cart-docs/blob/master/source/includes/cocart-v2/_knowledge-base.md)

## Cart returns empty after adding items. Why? ##

As a guest customer, this is normally because the framework your using does not support cookies so it is unable to read the required cookie to load the cart on the next API request.

[Read this guide on how to create a cart](https://cocart.xyz/how-to-create-a-cart/?utm_medium=docs.cocart.xyz&utm_source=docs&utm_content=cocart-docs) and keep using the same one.

## I added several products but only 1 item returns in cart. Why? ##

As a guest customer, this is possibly because you did not store the cart key after the first item was added and set it on future API requests. So all your seeing is the last item added to the cart.

[Read this guide on how to create a cart](https://cocart.xyz/how-to-create-a-cart/?utm_medium=docs.cocart.xyz&utm_source=docs&utm_content=cocart-docs) and keep using the same one.

## Can I create and update a cart without cookies? ##

Yes you can. [Read this guide on how to create a cart](https://cocart.xyz/how-to-create-a-cart/?utm_medium=docs.cocart.xyz&utm_source=docs&utm_content=cocart-docs) and update it without cookies.

## Where can I find the cart key? ##

The cart key (if not manually set), can be found via a few methods. [See cart key section](#cart-key) for more details.

## Why am I not seeing the X-COCART-API header returning? ##

If this header is not returning then you need to enable CORS so that the header is exposed. Either enable CORS support via [the filter](index.html#filters-api-access-cors-allow-all-cross-origin-headers) or simply [install CoCart CORS plugin](https://wordpress.org/plugins/cocart-cors/) for quick activation.

## Where can I find a cart item key? ##

Each item added to the cart has it's on cart item key and you will find it under the property labelled **"key"**. Use it to update, remove or restore an item in/from the cart.

```json
{
  "19ca14e7ea6328a42e0eb13d585e4c22":{
    "key":"19ca14e7ea6328a42e0eb13d585e4c22", // This is the cart item key.
    "product_id":36,
    "variation_id":0,
    ...
}
```

## As admininstator can I create and update a customers cart? ##

Unfortunately, no. This is because when you authenticate as the admin, you are logged in not the customer. Even if you specified the customers user ID as the cart key. It will not take affect.

## How can I view debug logs recorded ? ##

If you have **WP_DEBUG** set to `true` in your [wp-config.php](#wp-config-php) file then you should be able to view all the logs recorded by CoCart under **WooCommerce -> System Status -> Logs** in your WordPress dashboard.

URL Example: `https://example.com/wp-admin/admin.php?page=wc-status&tab=logs`

You can also [change how the logs are presented](#filters-api-access-cocart-logging).

## How can I use CoCart on a multi-site network? ##

Using CoCart on any site on the network is just the same as you would on a single site. The only difference is the domain/sub-domain of the site.

## Does CoCart work with the Dokan plugin? ##

Yes. The only feature you wont be able to use are coupons. This is because Dokan disables the use of coupons. All other features are compatible.
