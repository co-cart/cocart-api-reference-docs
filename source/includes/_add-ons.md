# CoCart Add-ons #

CoCart Lite is just the tip of the iceberg. These add-ons take your headless build to the next level.

 * [Get Cart Enhanced](#cocart-add-ons-get-cart-enhanced)
 * [CoCart Pro](#cocart-add-ons-cocart-pro)
 * [CoCart Products](#cocart-add-ons-cocart-products)

## Get Cart Enhanced ##

This free add-on for CoCart enhances the data returned for the cart and the items added to it.

You can [download it from WordPress.org](https://wordpress.org/plugins/cocart-get-cart-enhanced/)

> Example of an empty cart with the add-on enabled.

```json
{
  "currency": "GBP",
  "cart_key": "0", // Zero means no cart created yet.
  "cart_hash": "",
  "items": [],
  "item_count": 0,
  "needs_shipping": false,
  "needs_payment": false,
  "coupons": [],
  "totals": {
    "subtotal": "£0.00",
    "subtotal_tax": "£0.00",
    "shipping_total": "£0.00",
    "shipping_tax": "£0.00",
    "shipping_taxes": [],
    "discount_total": "£0.00",
    "discount_tax": "£0.00",
    "cart_contents_total": "£0.00",
    "cart_contents_tax": "£0.00",
    "cart_contents_taxes": [],
    "fee_total": "£0.00",
    "fee_tax": "£0.00",
    "fee_taxes": [],
    "total": "£0.00",
    "total_tax": "£0.00"
  },
  "total_weight": {
    "total": 0,
    "weight_unit": "kg"
  },
  "extras": {
    "removed_items": [],
    "cross_sells": []
  }
}
```
