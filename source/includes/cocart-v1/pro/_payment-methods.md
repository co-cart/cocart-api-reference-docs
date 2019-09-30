# Payment Methods #

This API helps you get the payment methods available.

### HTTP request ###

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-get">GET</i>
    <h6>/wp-json/cocart/v1/payment-methods</h6>
  </div>
</div>

```shell
curl -X GET https://example.com/wp-json/cocart/v1/payment-methods \
  -H "Content-Type: application/json"
```

```javascript--jquery
var settings = {
  "url": "https://example.com/wp-json/cocart/v1/payment-methods",
  "method": "GET"
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
```

```php
<?php
$curl = curl_init();

curl_setopt_array( $curl, array(
  CURLOPT_URL => "https://example.com/wp-json/cocart/v1/payment-methods",
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_RETURNTRANSFER => true
) );

$response = curl_exec($curl);

curl_close($curl);

echo $response;
```

```php--wp-http-api
<?php
$response = wp_remote_get( 'https://example.com/wp-json/cocart/v1/payment-methods' );
$body = wp_remote_retrieve_body( $response );
```

> JSON response example

```json
{
    "bacs": {
        "id": "bacs",
        "method_title": "Direct bank transfer",
        "title": "Direct bank transfer",
        "description": "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.",
        "icon": "",
        "icon_urls": "",
        "has_fields": false,
        "countries": null,
        "availability": null,
        "supports": [
            "products"
        ],
        "order_button_text": null,
        "chosen_gateway": false
    },
    "cheque": {
        "id": "cheque",
        "method_title": "Check payments",
        "title": "Check payments",
        "description": "Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.",
        "icon": "",
        "icon_urls": "",
        "has_fields": false,
        "countries": null,
        "availability": null,
        "supports": [
            "products"
        ],
        "order_button_text": null,
        "chosen_gateway": false
    },
    "cod": {
        "id": "cod",
        "method_title": "Cash on delivery",
        "title": "Cash on delivery",
        "description": "Pay with cash upon delivery.",
        "icon": "",
        "icon_urls": "",
        "has_fields": false,
        "countries": null,
        "availability": null,
        "supports": [
            "products"
        ],
        "order_button_text": null,
        "chosen_gateway": false
    },
    "stripe": {
        "id": "stripe",
        "method_title": "Stripe",
        "title": "Credit Card (Stripe)",
        "description": "Pay with your credit card via Stripe.",
        "icon": "<img src=\"https://yourdomain.xyz/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg\" class=\"stripe-visa-icon stripe-icon\" alt=\"Visa\" /><img src=\"https://yourdomain.xyz/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg\" class=\"stripe-amex-icon stripe-icon\" alt=\"American Express\" /><img src=\"https://yourdomain.xyz/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg\" class=\"stripe-mastercard-icon stripe-icon\" alt=\"Mastercard\" />",
        "icon_urls": [
            "https://yourdomain.xyz/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg",
            "https://yourdomain.xyz/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg",
            "https://yourdomain.xyz/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
        ],
        "has_fields": true,
        "countries": null,
        "availability": null,
        "supports": [
            "products",
            "refunds",
            "tokenization",
            "add_payment_method",
            "subscriptions",
            "subscription_cancellation",
            "subscription_suspension",
            "subscription_reactivation",
            "subscription_amount_changes",
            "subscription_date_changes",
            "subscription_payment_method_change",
            "subscription_payment_method_change_customer",
            "subscription_payment_method_change_admin",
            "multiple_subscriptions",
            "pre-orders"
        ],
        "order_button_text": null,
        "chosen_gateway": false
    }
}
```
