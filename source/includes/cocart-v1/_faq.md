# F.A.Q. #

## Where can I find a cart item key? ##

Each item added to the cart has it's on cart item key and you will find it under the property labelled "key". Use it to update, remove or restore an item in/from the cart.

> When viewing the cart you will find the key.

```json
{
  "19ca14e7ea6328a42e0eb13d585e4c22":{
    "key":"19ca14e7ea6328a42e0eb13d585e4c22", // This is the key.
    "product_id":36,
    "variation_id":0,
    ...
}
```

## Where can I find the cart key? ##

The cart key (if not manually set), can be found via a few methods. [See cart key section](#cart-key) for more details.

## Why are cart items merged? ##

If you mean between two or more customers. This is most likely because you tested the API with one of the [tools](#tools) available and did not reset before testing as another customer.

For example, you started customer "A" as a guest adding an item to the cart. You then added another item while authenticating (logging in) as customer "B" without clearing the session cookie.

When you do this, WooCommerce thinks you are still the same customer so it merges the cart items together for customer "B" while customer "A" is removed from session as it is no longer a guest customer.
