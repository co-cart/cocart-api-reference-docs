# Knowledge Base #

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [Edit on GitHub](https://github.com/co-cart/co-cart-docs/blob/master/source/includes/cocart-v1/_knowledge-base.md)

## Where can I find a cart item key? ##

Each item added to the cart has it's on cart item key and you will find it under the property labelled **"key"**. Use it to update, remove or restore an item in/from the cart.

```json
{
  "19ca14e7ea6328a42e0eb13d585e4c22":{
    "key":"19ca14e7ea6328a42e0eb13d585e4c22", // This is the item key.
    "product_id":36,
    "variation_id":0,
    ...
}
```

## Where can I find the cart key? ##

The cart key (if not manually set), can be found via a few methods. [See cart key section](#cart-key) for more details.

## After adding a product to cart, the cart still returns empty. Why? ##

This happens because the framework your using does not support cookies so it has no way to store the cart key of the cart that was created when you added the product. Without the cart key, the cart cannot be identified to load.

Either add/install cookie support for that framework or use the [cart key](#cart-key) parameter to manually set one yourself.

## Why are cart items merged? ##

If you mean between two or more customers. This is most likely because you tested the API with one of the [tools](#tools) available and did not reset before testing as another customer.

For example, you started customer "A" as a guest adding an item to the cart. You then added another item while authenticating (logging in) as customer "B" without clearing the session cookie.

When you do this, WooCommerce thinks you are still the same customer so it merges the cart items together for customer "B" while customer "A" is removed from session as it is no longer a guest customer.

## Is it possible to use the admin key/secret to create and update a customers cart? ##

Unfortunately, no. This is because when you authenticate as the admin, you are logged in not the customer. Even if you specified the customers user ID as the cart key. It will not take affect.

## How can I view logs recorded ? ##

If you have **WP_DEBUG** set to `true` in your [wp-config.php](#wp-config-php) file then you should be able to view all the logs recorded by CoCart under **WooCommerce -> System Status -> Logs** in your WordPress dashboard.

URL Example: `https://example.com/wp-admin/admin.php?page=wc-status&tab=logs`

You can also [change how the logs are presented](#filters-api-access-cocart-logging).

## Does CoCart work with the Dokan plugin? ##

Yes. The only feature you wont be able to use are coupons. This is because Dokan disables the use of coupons. All other features are compatible.
