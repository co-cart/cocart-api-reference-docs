# Checkout #

The following allows you to checkout the cart data, convert it into an order and allow the customer to proceed to payment.


## Get Checkout Data ##

This API helps get information about the checkout setup and the fields.


#### HTTP request ####

<div class="api-endpoint">
  <div class="endpoint-data">
    <i class="label label-get">GET</i>
    <h6>/wp-json/cocart/v1/checkout</h6>
  </div>
</div>

```shell
curl -X GET https://example.com/wp-json/cocart/v1/checkout \
  -H "Content-Type: application/json"
```

> JSON response example

```json
{
  "is_registration_required": true,
  "is_registration_enabled": true,
  "checkout_fields": {
    "billing": {
      "billing_first_name": {
        "label": "First name",
        "required": true,
        "class": [
          "form-row-first"
        ],
        "autocomplete": "given-name",
        "priority": 10
      },
      "billing_last_name": {
        "label": "Last name",
        "required": true,
        "class": [
          "form-row-last"
        ],
        "autocomplete": "family-name",
        "priority": 20
      },
      "billing_company": {
        "label": "Company name",
        "class": [
          "form-row-wide"
        ],
        "autocomplete": "organization",
        "priority": 30,
        "required": false
      },
      "billing_country": {
        "type": "country",
        "label": "Country",
        "required": true,
        "class": [
          "form-row-wide",
          "address-field",
          "update_totals_on_change"
        ],
        "autocomplete": "country",
        "priority": 40
      },
      "billing_address_1": {
        "label": "Street address",
        "placeholder": "House number and street name",
        "required": true,
        "class": [
          "form-row-wide",
          "address-field"
        ],
        "autocomplete": "address-line1",
        "priority": 50
      },
      "billing_address_2": {
        "placeholder": "Apartment, suite, unit etc. (optional)",
        "class": [
          "form-row-wide",
          "address-field"
        ],
        "autocomplete": "address-line2",
        "priority": 60,
        "required": false,
        "label": "Apartment, suite, unit etc. (optional)",
        "label_class": "screen-reader-text"
      },
      "billing_city": {
        "label": "Town / City",
        "required": true,
        "class": [
          "form-row-wide",
          "address-field"
        ],
        "autocomplete": "address-level2",
        "priority": 70
      },
      "billing_state": {
        "type": "state",
        "label": "County",
        "required": false,
        "class": [
          "form-row-wide",
          "address-field"
        ],
        "validate": [
          "state"
        ],
        "autocomplete": "address-level1",
        "priority": 80,
        "country_field": "billing_country",
        "country": "GB"
      },
      "billing_postcode": {
        "label": "Postcode",
        "required": true,
        "class": [
          "form-row-wide",
          "address-field"
        ],
        "validate": [
          "postcode"
        ],
        "autocomplete": "postal-code",
        "priority": 90
      },
      "billing_phone": {
        "label": "Phone",
        "required": true,
        "type": "tel",
        "class": [
          "form-row-wide"
        ],
        "validate": [
          "phone"
        ],
        "autocomplete": "tel",
        "priority": 100
      },
      "billing_email": {
        "label": "Email address",
        "required": true,
        "type": "email",
        "class": [
          "form-row-wide"
        ],
        "validate": [
          "email"
        ],
        "autocomplete": "email",
        "priority": 110
      }
    },
    "shipping": {
      "shipping_first_name": {
        "label": "First name",
        "required": true,
        "class": [
          "form-row-first"
        ],
        "autocomplete": "given-name",
        "priority": 10
      },
      "shipping_last_name": {
        "label": "Last name",
        "required": true,
        "class": [
          "form-row-last"
        ],
        "autocomplete": "family-name",
        "priority": 20
      },
      "shipping_company": {
        "label": "Company name",
        "class": [
          "form-row-wide"
        ],
        "autocomplete": "organization",
        "priority": 30,
        "required": false
      },
      "shipping_country": {
        "type": "country",
        "label": "Country",
        "required": true,
        "class": [
          "form-row-wide",
          "address-field",
          "update_totals_on_change"
        ],
        "autocomplete": "country",
        "priority": 40
      },
      "shipping_address_1": {
        "label": "Street address",
        "placeholder": "House number and street name",
        "required": true,
        "class": [
          "form-row-wide",
          "address-field"
        ],
        "autocomplete": "address-line1",
        "priority": 50
      },
      "shipping_address_2": {
        "placeholder": "Apartment, suite, unit etc. (optional)",
        "class": [
          "form-row-wide",
          "address-field"
        ],
        "autocomplete": "address-line2",
        "priority": 60,
        "required": false,
        "label": "Apartment, suite, unit etc. (optional)",
        "label_class": "screen-reader-text"
      },
      "shipping_city": {
        "label": "Town / City",
        "required": true,
        "class": [
          "form-row-wide",
          "address-field"
        ],
        "autocomplete": "address-level2",
        "priority": 70
      },
      "shipping_state": {
        "type": "state",
        "label": "County",
        "required": false,
        "class": [
          "form-row-wide",
          "address-field"
        ],
        "validate": [
          "state"
        ],
        "autocomplete": "address-level1",
        "priority": 80,
        "country_field": "shipping_country",
        "country": "GB"
      },
      "shipping_postcode": {
        "label": "Postcode",
        "required": true,
        "class": [
          "form-row-wide",
          "address-field"
        ],
        "validate": [
          "postcode"
        ],
        "autocomplete": "postal-code",
        "priority": 90
      }
    },
    "account": {
      "account_username": {
        "type": "text",
        "label": "Account username",
        "required": true,
        "placeholder": "Username"
      },
      "account_password": {
        "type": "password",
        "label": "Create account password",
        "required": true,
        "placeholder": "Password"
      }
    },
    "order": {
      "order_comments": {
        "type": "textarea",
        "class": [
          "notes"
        ],
        "label": "Order notes",
        "placeholder": "Notes about your order, e.g. special notes for delivery."
      }
    }
  }
}
```
