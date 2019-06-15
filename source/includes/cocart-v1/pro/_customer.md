# Cart Owner #

This API helps you get the cart owner's details of the customer.

### HTTP request ###

<div class="api-endpoint">
	<div class="endpoint-data">
		<i class="label label-get">GET</i>
		<h6>/wp-json/cocart/v1/customer</h6>
	</div>
</div>

```shell
curl -X GET https://example.com/wp-json/cocart/v1/customer \
	-H "Content-Type: application/json"
```

> JSON response example

```json
{
  "user": {
    "ID": 1,
    "first_name": "John",
    "last_name": "Doe"
  },
  "billing": {
    "first_name": "John",
    "last_name": "Doe",
    "company": "Company Name LTD",
    "email": "3naxbgjjttb@thrubay.com",
    "phone": "070 4502 9873",
    "country": "GB",
    "state": "",
    "postcode": "L23 6ST",
    "city": "LITTLE CROSBY",
    "address": "48 Victoria Road",
    "address_1": "48 Victoria Road",
    "address_2": ""
  },
  "shipping": {
    "first_name": "John",
    "last_name": "Doe",
    "company": "Company Name LTD",
    "country": "GB",
    "state": "",
    "postcode": "L23 6ST",
    "city": "LITTLE CROSBY",
    "address": "48 Victoria Road",
    "address_1": "48 Victoria Road",
    "address_2": ""
  }
}
```
