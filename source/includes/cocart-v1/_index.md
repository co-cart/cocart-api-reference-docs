# Index #

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [Edit on GitHub](https://github.com/co-cart/co-cart-docs/blob/master/source/includes/cocart-v1/_index.md)

By default, the API provides information about all available endpoints on the site. Authentication is not required to access the API index.

<aside class="notice">
    Some endpoints are only available in CoCart Pro or via add-on.
</aside>

### HTTP request ###

<div class="api-endpoint">
	<div class="endpoint-data">
		<i class="label label-get">GET</i>
		<h6>/wp-json/cocart/v1</h6>
	</div>
</div>

```shell
curl -X GET https://example.com/wp-json/cocart/v1 \
  -H "Content-Type: application/json"
```

```javascript--jquery
var settings = {
  "url": "https://example.com/wp-json/cocart/v1",
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
  CURLOPT_URL => "https://example.com/wp-json/cocart/v1",
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_TIMEOUT => 90,
  CURLOPT_HTTPHEADER => array(
    'Accept: application/json',
    'Content-Type: application/json',
    'User-Agent: CoCart API/v1',
  )
) );

$response = curl_exec($curl);

curl_close($curl);

echo $response;
```

```php--wp-http-api
<?php
$response = wp_remote_get( 'https://example.com/wp-json/cocart/v1' );
$body = wp_remote_retrieve_body( $response );
```

> JSON response example:

```json
{
    "namespace": "cocart/v1",
    "routes": {
        "/cocart/v1": {
            "namespace": "cocart/v1",
            "methods": [
                "GET"
            ],
            "endpoints": [
                {
                    "methods": [
                        "GET"
                    ],
                    "args": {
                        "namespace": {
                            "required": false,
                            "default": "cocart/v1"
                        },
                        "context": {
                            "required": false,
                            "default": "view"
                        }
                    }
                }
            ],
            "_links": {
                "self": "https://example.com/wp-json/cocart/v1"
            }
        },
        "/cocart/v1/add-item": {
            "namespace": "cocart/v1",
            "methods": [
                "POST"
            ],
            "endpoints": [
                {
                    "methods": [
                        "POST"
                    ],
                    "args": {
                        "product_id": {
                            "required": false,
                            "description": "Unique identifier for the product ID.",
                            "type": "integer"
                        },
                        "quantity": {
                            "required": false,
                            "default": 1,
                            "description": "The quantity amount of the item to add to cart.",
                            "type": "integer"
                        },
                        "variation_id": {
                            "required": false,
                            "description": "Unique identifier for the variation ID.",
                            "type": "integer"
                        },
                        "variation": {
                            "required": false
                        },
                        "cart_item_data": {
                            "required": false
                        },
                        "refresh_totals": {
                            "required": false,
                            "default": false,
                            "description": "Re-calculates the totals once item has been added or the quantity of the item has increased.",
                            "type": "boolean"
                        }
                    }
                }
            ],
            "_links": {
                "self": "https://example.com/wp-json/cocart/v1/add-item"
            }
        },
        "/cocart/v1/calculate": {
            "namespace": "cocart/v1",
            "methods": [
                "POST"
            ],
            "endpoints": [
                {
                    "methods": [
                        "POST"
                    ],
                    "args": {
                        "return": {
                            "required": false,
                            "default": false,
                            "description": "Returns the cart totals once calculated.",
                            "type": "bool"
                        }
                    }
                }
            ],
            "_links": {
                "self": "https://example.com/wp-json/cocart/v1/calculate"
            }
        },
        "/cocart/v1/clear": {
            "namespace": "cocart/v1",
            "methods": [
                "POST"
            ],
            "endpoints": [
                {
                    "methods": [
                        "POST"
                    ],
                    "args": []
                }
            ],
            "_links": {
                "self": "https://example.com/wp-json/cocart/v1/clear"
            }
        },
        "/cocart/v1/count-items": {
            "namespace": "cocart/v1",
            "methods": [
                "GET"
            ],
            "endpoints": [
                {
                    "methods": [
                        "GET"
                    ],
                    "args": {
                        "return": {
                            "required": false,
                            "default": "numeric"
                        }
                    }
                }
            ],
            "_links": {
                "self": "https://example.com/wp-json/cocart/v1/count-items"
            }
        },
        "/cocart/v1/get-cart": {
            "namespace": "cocart/v1",
            "methods": [
                "GET"
            ],
            "endpoints": [
                {
                    "methods": [
                        "GET"
                    ],
                    "args": {
                        "thumb": {
                            "required": false,
                            "default": false,
                            "description": "Returns the URL of the product image thumbnail.",
                            "type": "boolean"
                        }
                    }
                }
            ],
            "_links": {
                "self": "https://example.com/wp-json/cocart/v1/get-cart"
            }
        },
        "/cocart/v1/get-cart/(?P<id>[\\d]+)": {
            "namespace": "cocart/v1",
            "methods": [
                "GET"
            ],
            "endpoints": [
                {
                    "methods": [
                        "GET"
                    ],
                    "args": {
                        "id": {
                            "required": true,
                            "description": "Unique identifier for the customer.",
                            "type": "integer"
                        },
                        "thumb": {
                            "required": false,
                            "default": false,
                            "description": "Returns the URL of the product image thumbnail.",
                            "type": "boolean"
                        }
                    }
                }
            ]
        },
        "/cocart/v1/item": {
            "namespace": "cocart/v1",
            "methods": [
                "GET",
                "POST",
                "DELETE"
            ],
            "endpoints": [
                {
                    "methods": [
                        "GET"
                    ],
                    "args": {
                        "cart_item_key": {
                            "required": false,
                            "description": "Unique identifier for the item in the cart.",
                            "type": "string"
                        },
                        "refresh_totals": {
                            "required": false,
                            "default": false,
                            "description": "Re-calculates the totals once item has been updated.",
                            "type": "boolean"
                        },
                        "return_cart": {
                            "required": false,
                            "default": false,
                            "description": "Returns the whole cart to reduce requests.",
                            "type": "boolean"
                        }
                    }
                },
                {
                    "methods": [
                        "POST"
                    ],
                    "args": {
                        "cart_item_key": {
                            "required": false,
                            "description": "Unique identifier for the item in the cart.",
                            "type": "string"
                        },
                        "refresh_totals": {
                            "required": false,
                            "default": false,
                            "description": "Re-calculates the totals once item has been updated.",
                            "type": "boolean"
                        },
                        "return_cart": {
                            "required": false,
                            "default": false,
                            "description": "Returns the whole cart to reduce requests.",
                            "type": "boolean"
                        },
                        "quantity": {
                            "required": false,
                            "default": 1,
                            "type": "integer"
                        }
                    }
                },
                {
                    "methods": [
                        "DELETE"
                    ],
                    "args": {
                        "cart_item_key": {
                            "required": false,
                            "description": "Unique identifier for the item in the cart.",
                            "type": "string"
                        },
                        "refresh_totals": {
                            "required": false,
                            "default": false,
                            "description": "Re-calculates the totals once item has been updated.",
                            "type": "boolean"
                        },
                        "return_cart": {
                            "required": false,
                            "default": false,
                            "description": "Returns the whole cart to reduce requests.",
                            "type": "boolean"
                        }
                    }
                }
            ],
            "_links": {
                "self": "https://example.com/wp-json/cocart/v1/item"
            }
        },
        "/cocart/v1/totals": {
            "namespace": "cocart/v1",
            "methods": [
                "GET"
            ],
            "endpoints": [
                {
                    "methods": [
                        "GET"
                    ],
                    "args": {
                        "html": {
                            "required": false,
                            "default": false
                        }
                    }
                }
            ],
            "_links": {
                "self": "https://example.com/wp-json/cocart/v1/totals"
            }
        },
        "/cocart/v1/calculate/fees": {
            "namespace": "cocart/v1",
            "methods": [
                "POST"
            ],
            "endpoints": [
                {
                    "methods": [
                        "POST"
                    ],
                    "args": {
                        "set_session": {
                            "required": false,
                            "default": false,
                            "description": "Sets the cart fees in session once calculated.",
                            "type": "bool"
                        },
                        "return": {
                            "required": false,
                            "default": false,
                            "description": "Returns the cart fees once calculated.",
                            "type": "bool"
                        }
                    }
                }
            ],
            "_links": {
                "self": "https://example.com/wp-json/cocart/v1/calculate/fees"
            }
        },
        "/cocart/v1/calculate/shipping": {
            "namespace": "cocart/v1",
            "methods": [
                "POST"
            ],
            "endpoints": [
                {
                    "methods": [
                        "POST"
                    ],
                    "args": {
                        "country": {
                            "required": true,
                            "description": "Country is a required minimum to calculate shipping.",
                            "type": "string"
                        },
                        "state": {
                            "required": false,
                            "description": "State is optional but maybe required under some circumstances.",
                            "type": "string"
                        },
                        "city": {
                            "required": false,
                            "description": "Enter City to specify location in country.",
                            "type": "string"
                        },
                        "postcode": {
                            "required": false,
                            "description": "Enter postcode / ZIP to narrow down location for more accurate shipping cost.",
                            "type": "string"
                        },
                        "return_methods": {
                            "required": false,
                            "default": false,
                            "description": "If set to true it will return shipping methods available once shipping is calculated.",
                            "type": "bool"
                        }
                    }
                }
            ],
            "_links": {
                "self": "https://example.com/wp-json/cocart/v1/calculate/shipping"
            }
        },
        "/cocart/v1/customer": {
            "namespace": "cocart/v1",
            "methods": [
                "GET"
            ],
            "endpoints": [
                {
                    "methods": [
                        "GET"
                    ],
                    "args": []
                }
            ],
            "_links": {
                "self": "https://example.com/wp-json/cocart/v1/customer"
            }
        },
        "/cocart/v1/coupon": {
            "namespace": "cocart/v1",
            "methods": [
                "GET",
                "POST",
                "DELETE"
            ],
            "endpoints": [
                {
                    "methods": [
                        "GET"
                    ],
                    "args": []
                },
                {
                    "methods": [
                        "POST"
                    ],
                    "args": {
                        "coupon": {
                            "required": true,
                            "description": "Coupon to apply to the cart.",
                            "type": "string"
                        }
                    }
                },
                {
                    "methods": [
                        "DELETE"
                    ],
                    "args": {
                        "coupon": {
                            "required": true,
                            "description": "Coupon to remove from the cart.",
                            "type": "string"
                        }
                    }
                }
            ],
            "_links": {
                "self": "https://example.com/wp-json/cocart/v1/coupon"
            }
        },
        "/cocart/v1/check-coupons": {
            "namespace": "cocart/v1",
            "methods": [
                "GET"
            ],
            "endpoints": [
                {
                    "methods": [
                        "GET"
                    ],
                    "args": []
                }
            ],
            "_links": {
                "self": "https://example.com/wp-json/cocart/v1/check-coupons"
            }
        },
        "/cocart/v1/cross-sells": {
            "namespace": "cocart/v1",
            "methods": [
                "GET"
            ],
            "endpoints": [
                {
                    "methods": [
                        "GET"
                    ],
                    "args": {
                        "thumb": {
                            "required": false,
                            "default": false,
                            "description": "Returns the URL of the product image thumbnail.",
                            "type": "boolean"
                        }
                    }
                }
            ],
            "_links": {
                "self": "https://example.com/wp-json/cocart/v1/cross-sells"
            }
        },
        "/cocart/v1/fees": {
            "namespace": "cocart/v1",
            "methods": [
                "GET",
                "POST",
                "DELETE"
            ],
            "endpoints": [
                {
                    "methods": [
                        "GET"
                    ],
                    "args": []
                },
                {
                    "methods": [
                        "POST"
                    ],
                    "args": {
                        "name": {
                            "required": true,
                            "description": "Name of the fee.",
                            "type": "string"
                        },
                        "amount": {
                            "required": true,
                            "description": "Amount for the fee.",
                            "type": "string"
                        },
                        "taxable": {
                            "required": false,
                            "default": false,
                            "description": "Determins if the fee is taxable.",
                            "type": "bool"
                        },
                        "tax_class": {
                            "required": false,
                            "description": "The tax class the fee applies to.",
                            "type": "string"
                        }
                    }
                },
                {
                    "methods": [
                        "DELETE"
                    ],
                    "args": []
                }
            ],
            "_links": {
                "self": "https://example.com/wp-json/cocart/v1/fees"
            }
        },
        "/cocart/v1/payment-methods": {
            "namespace": "cocart/v1",
            "methods": [
                "GET",
                "POST"
            ],
            "endpoints": [
                {
                    "methods": [
                        "GET"
                    ],
                    "args": []
                },
                {
                    "methods": [
                        "POST"
                    ],
                    "args": {
                        "gateway_id": {
                            "required": true
                        }
                    }
                }
            ],
            "_links": {
                "self": "https://example.com/wp-json/cocart/v1/payment-methods"
            }
        },
        "/cocart/v1/quantities": {
            "namespace": "cocart/v1",
            "methods": [
                "GET"
            ],
            "endpoints": [
                {
                    "methods": [
                        "GET"
                    ],
                    "args": []
                }
            ],
            "_links": {
                "self": "https://example.com/wp-json/cocart/v1/quantities"
            }
        },
        "/cocart/v1/removed-items": {
            "namespace": "cocart/v1",
            "methods": [
                "GET"
            ],
            "endpoints": [
                {
                    "methods": [
                        "GET"
                    ],
                    "args": []
                }
            ],
            "_links": {
                "self": "https://example.com/wp-json/cocart/v1/removed-items"
            }
        },
        "/cocart/v1/shipping-methods": {
            "namespace": "cocart/v1",
            "methods": [
                "GET",
                "POST"
            ],
            "endpoints": [
                {
                    "methods": [
                        "GET"
                    ],
                    "args": {
                        "recurring_cart_key": {
                            "required": false,
                            "description": "Recurring cart key is required only to get shipping methods for that subscription.",
                            "type": "string"
                        }
                    }
                },
                {
                    "methods": [
                        "POST"
                    ],
                    "args": {
                        "method_id": {
                            "required": true
                        },
                        "instance_id": {
                            "required": true
                        }
                    }
                }
            ],
            "_links": {
                "self": "https://example.com/wp-json/cocart/v1/shipping-methods"
            }
        },
        "/cocart/v1/totals/discount": {
            "namespace": "cocart/v1",
            "methods": [
                "GET"
            ],
            "endpoints": [
                {
                    "methods": [
                        "GET"
                    ],
                    "args": []
                }
            ],
            "_links": {
                "self": "https://example.com/wp-json/cocart/v1/totals/discount"
            }
        },
        "/cocart/v1/totals/discount/coupon-totals": {
            "namespace": "cocart/v1",
            "methods": [
                "GET"
            ],
            "endpoints": [
                {
                    "methods": [
                        "GET"
                    ],
                    "args": []
                }
            ],
            "_links": {
                "self": "https://example.com/wp-json/cocart/v1/totals/discount/coupon-totals"
            }
        },
        "/cocart/v1/totals/discount/coupon-tax": {
            "namespace": "cocart/v1",
            "methods": [
                "GET"
            ],
            "endpoints": [
                {
                    "methods": [
                        "GET"
                    ],
                    "args": []
                }
            ],
            "_links": {
                "self": "https://example.com/wp-json/cocart/v1/totals/discount/coupon-tax"
            }
        },
        "/cocart/v1/totals/fee": {
            "namespace": "cocart/v1",
            "methods": [
                "GET"
            ],
            "endpoints": [
                {
                    "methods": [
                        "GET"
                    ],
                    "args": []
                }
            ],
            "_links": {
                "self": "https://example.com/wp-json/cocart/v1/totals/fee"
            }
        },
        "/cocart/v1/totals/fee/tax": {
            "namespace": "cocart/v1",
            "methods": [
                "GET"
            ],
            "endpoints": [
                {
                    "methods": [
                        "GET"
                    ],
                    "args": []
                }
            ],
            "_links": {
                "self": "https://example.com/wp-json/cocart/v1/totals/fee/tax"
            }
        },
        "/cocart/v1/totals/shipping": {
            "namespace": "cocart/v1",
            "methods": [
                "GET"
            ],
            "endpoints": [
                {
                    "methods": [
                        "GET"
                    ],
                    "args": {
                        "calculate": {
                            "required": false,
                            "default": false
                        }
                    }
                }
            ],
            "_links": {
                "self": "https://example.com/wp-json/cocart/v1/totals/shipping"
            }
        },
        "/cocart/v1/totals/shipping/tax": {
            "namespace": "cocart/v1",
            "methods": [
                "GET"
            ],
            "endpoints": [
                {
                    "methods": [
                        "GET"
                    ],
                    "args": {
                        "calculate": {
                            "required": false,
                            "default": false
                        }
                    }
                }
            ],
            "_links": {
                "self": "https://example.com/wp-json/cocart/v1/totals/shipping/tax"
            }
        },
        "/cocart/v1/totals/subtotal": {
            "namespace": "cocart/v1",
            "methods": [
                "GET"
            ],
            "endpoints": [
                {
                    "methods": [
                        "GET"
                    ],
                    "args": []
                }
            ],
            "_links": {
                "self": "https://example.com/wp-json/cocart/v1/totals/subtotal"
            }
        },
        "/cocart/v1/totals/subtotal/tax": {
            "namespace": "cocart/v1",
            "methods": [
                "GET"
            ],
            "endpoints": [
                {
                    "methods": [
                        "GET"
                    ],
                    "args": []
                }
            ],
            "_links": {
                "self": "https://example.com/wp-json/cocart/v1/totals/subtotal/tax"
            }
        },
        "/cocart/v1/totals/tax": {
            "namespace": "cocart/v1",
            "methods": [
                "GET"
            ],
            "endpoints": [
                {
                    "methods": [
                        "GET"
                    ],
                    "args": []
                }
            ],
            "_links": {
                "self": "https://example.com/wp-json/cocart/v1/totals/tax"
            }
        },
        "/cocart/v1/totals/total": {
            "namespace": "cocart/v1",
            "methods": [
                "GET"
            ],
            "endpoints": [
                {
                    "methods": [
                        "GET"
                    ],
                    "args": []
                }
            ],
            "_links": {
                "self": "https://example.com/wp-json/cocart/v1/totals/total"
            }
        },
        "/cocart/v1/weight": {
            "namespace": "cocart/v1",
            "methods": [
                "GET"
            ],
            "endpoints": [
                {
                    "methods": [
                        "GET"
                    ],
                    "args": []
                }
            ],
            "_links": {
                "self": "https://example.com/wp-json/cocart/v1/weight"
            }
        }
    },
    "_links": {
        "up": [
            {
                "href": "https://example.com/wp-json/"
            }
        ]
    }
}
```
