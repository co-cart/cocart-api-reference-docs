# Coupons #

This API helps you get applied coupons, add coupons to cart, remove coupons from cart and check coupons for validation.

### Coupon Properties ###

| Attribute | Type   | Description       |
| --------- | ------ | ----------------- |
| `coupon`  | string | Coupon code is required in order to apply it to or remove it from cart. <i class="label label-info">required</i> |

## Applied Coupons ##

Returns all applied coupons to the cart.

### HTTP request ###

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-get">GET</i>
    <h6>/wp-json/cocart/v1/coupon</h6>
  </div>
</div>

```shell
curl -X GET https://example.com/wp-json/cocart/v1/coupon \
  -H "Content-Type: application/json"
```

> JSON response example for returning already applied coupons.

```json
{
  "summer20"
}
```

## Apply Coupon ##

Apply a coupon to the cart.

### HTTP request ###

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-post">POST</i>
    <h6>/wp-json/cocart/v1/coupon</h6>
  </div>
</div>

```shell
curl -X POST https://example.com/wp-json/cocart/v1/coupon \
  -H "Content-Type: application/json" \
  -d '{
    "coupon": "summer20"
  }'
```

> JSON response example.

```json
true
```

## Remove Coupon ##

Remove a coupon from the cart.

### HTTP request ###

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-delete">DELETE</i>
    <h6>/wp-json/cocart/v1/coupon</h6>
    </div>
</div>

```shell
curl -X DELETE https://example.com/wp-json/cocart/v1/coupon \
  -H "Content-Type: application/json" \
  -d '{
    "coupon": "summer20"
  }'
```

> JSON response example.

```json
true
```

## Check Coupons ##

Checks applied coupons to see if they are still valid or if they have expired or no longer valid.

### HTTP request ###

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-get">GET</i>
    <h6>/wp-json/cocart/v1/check-coupons</h6>
  </div>
</div>

```shell
curl -X GET https://example.com/wp-json/cocart/v1/check-coupons \
  -H "Content-Type: application/json"
```

> JSON response example.

```json
"Coupons applied are still valid!"
```
