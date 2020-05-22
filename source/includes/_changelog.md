# Changelog #

Below is the changelog for "CoCart" documentation that matches with the version of the plugin release.

## Doc Version 1.9 ##

* **NEW**: Cookie section.

## Doc Version 1.8 - Plugin Release v2.1 ##

* **NEW**: Added support for guest carts with a new endpoint to retrieve those carts.
* **NEW**: Added ability to load a cart from session.
* **NEW**: Can now add items to cart using a products SKU ID.
* **NEW**: When an item is updated, removed or restored... the cart totals are re-calculated.
* Dev: Added filter `cocart_add_to_cart_validation` to allow plugin developers to pass their own validation before item is added to the cart.
* Dev: Added filters to override the product name `cocart_product_name` and product title `cocart_product_title` when getting the cart contents.
* Dev: Added filter `cocart_item_thumbnail_src` to override the source URL of the product thumbnail when getting the cart contents.
* Dev: Added filter `cocart_add_to_cart_quantity` to override the quantity when adding an item.
* Dev: Added filter `cocart_add_cart_item_data` so other plugins can pass cart item data when adding an item.
* Dev: Added hook `cocart_user_switched` to allow something to happen if a user has switched.
* Dev: Added hook `cocart_load_cart` to manipulate the merged cart before it set in session.
* Dev: Added hook `cocart_load_cart_override` to manipulate the overriding cart before it set in session.
* Dev: Added hook `cocart_item_added_updated_in_cart` for when an item was added again but updated in cart.
* Dev: Added filter `cocart_cookie_supported` to allow developers to disable cookie session support if they don't/can't support cookies within their app.

### Doc Version 1.7 ###

* **NEW**: Added links to edit documentation at the top of each section.
* **NEW**: Added Getting Started section for those new to WordPress.
* Corrected: Typos.
* Tweaked: Menu
* Tweaked: Brand colours and updated favicons.

### Doc Version 1.6 - Plugin Release v2.0.13 ###

* **NEW**: Added `cocart_return_empty_cart` filter and example.
* **NEW**: Added `cocart_add_to_cart_sold_individually_quantity`and example.
* Changed: Quantity parameter type to `float`.
* Tweaked: Authentication notice moved to the top of it's sections content.
* Tweaked: Menu, content and added helpful links.
* Tweaked: Filter examples to be code highlighted correctly.

### Doc Version 1.5 - Plugin Release v2.0.7 ###

* **NEW**: Added link to products add-on documentation under CoCart Pro.
* **NEW**: Added a little section explaining the body types when making a request.
* **NEW**: Added example to add item with custom cart item data.
* **NEW**: Added Demo section.
* Improved: Authentication section.

### Doc Version 1.4 ###

* **NEW**: Added live chat so users can ask questions.
* Made it clearer to understand about retrieving specific customers cart.
* Improved the introduction a little.

### Doc Version 1.3 ###

* Added languages for jQuery, PHP and WP API.

### Doc Version 1.2 ###

* Added Work in Progress section.
* Added Authentication section.

### Doc Version 1.1 ###

* Added Index API.
* Linked logo to documentation homepage.

### Doc Version 1 - Plugin Release v2 ###

* Updated for CoCart v2

### Doc Version 0.5 ###

* Added attribute table for view cart.
* Added missing examples for count items and get cart totals.

### Doc Version 0.4 - Plugin Release 1.0.5 ###

* Project renamed to CoCart.
* Changed support to contribution.
* Updated links.
* Added Insomnia as another tool you can use to access the API with.
* Removed all languages except for cURL showing examples on how to use with official library wrappers due to authentication required whic CoCart does not.

### Doc Version 0.3 - Plugin Release 1.0.4 ###

* Official libraries are not supported as they require authentication which this API does not.
* Removed installation instruction for official libraries.
* Replaced logo to prevent confusion with the official REST API documentation.

### Doc Version 0.2 - Plugin Release 1.0.1 ###

* Updated endpoint for updating, restoring and removing items.

### Doc Version 0.1 - Plugin Release 1.0.0 ###

* Initial Commit
