# Changelog

Below is the changelog for "CoCart Lite" documentation that matches with the version of the plugin release.

## Doc Version v2.9.8

* Added: Products section to help identify the CoCart Products add-on up top. Can still be found under "CoCart Add-ons" section.
* Updated: All links pointing to cocart.xyz are now tagged for referral identification.
* Updated: Knowledge Base content. Improved questions and linked new guide for creating a cart.

### Doc Version v2.9.7

* Added: Explanation to merge carts together.
* Updated: Knowledge Base content.
* Updated: Accessing the Cart Key content.

### Doc Version v2.9.6

* Improved: Confusion of parameters and attributes. If both exist for the API they are split into two seperate tables.

### Doc Version v2.9.5

* Updated: jQuery request examples.

### Doc Version v2.9.4

* Improved: Getting Started content.
* Added: Node JS example for demo section.
* Tweaked: Made sure action and filter examples for `wp-config.php` section are shown no matter the language selected.
* Renamed: Hooks to Actions

### Doc Version v2.9.3 - Plugin Version v2.9.1

* Introduced `cocart_cookie_samesite` filter.
* Updated: Introduction content.
* Updated: Knowledge Base content.

### Doc Version v2.9.2

* Improved: Authentication content.
* Improved: Knowledge Base content.
* Tweaked: Load Cart from Session content.
* Dev: Updated Slate to v2.9.1

### Doc Version v2.9.1

* Corrected: Label for JS library.
* Improved: Cookie section.
* Renamed: FAQ to Knowledge Base.
* Improved: Knowledge Base content.
* Improved: Styling of the code examples.
* Improved: Cart key content.
* Improved: Load cart for the web content.
* Improved: Extending CoCart examples now always show no matter the set language.

### Doc Version v2.9

* NEW: Added **Libraries** section.
* NEW: Node.js examples added for our official library.

### Doc Version v2.8.4

* Removed `'Content-Type: application/json'` from cURL examples.

### Doc Version v2.8.3 - Plugin Release v2.8.2

* Corrected: Examples for use of the cart key global parameter.
* Improved: Explaining the use of the cart key global parameter.
* Dev: Added filter `cocart_load_cart_query_name` to allow developers add more white labelling when loading the cart via the web. [See example](?php#wp-config-php-white-labelling-load-cart-for-the-web)

### Doc Version v2.8.2

* Added warning notice for load for the web feature.
* Updated FAQ.

### Doc Version v2.8 - Plugin Release v2.6 to v2.7

<aside class="success">
    The whole of the documentation has been re-organized and content has been improved for those who are new to developing with an API. That also includes documentation for CoCart Pro.
</aside>

### Doc Version v2.7 - Plugin Release v2.5.1

* Dev: Added filter `cocart_allow_origin` to set the origin header for added layer of security when you go into production.

### Doc Version v2.6 - Plugin Release v2.5

* Improved: Information about adding a variation to the cart.

### Doc Version v2.5

* Added: More detail for setting a cart key.
* Added: More JSON response examples that were missing.
* Corrected: Same product ID used for all product type examples.
* Improved: Add variable item to cart examples.
* Improved: Table layouts in the Markdown source files.
* Removed: Context that is no longer valid with current version of CoCart.
* Updated: API versions table and Requirements.

### Doc Version v2.4

* **NEW**: WooCommerce Extensions section added with Mix and Match Products and Name Your Price being the first.
* Updated: Cookies section.

### Doc Version v2.3

* Added: New error responses.
* Fixed: Corrected typos.
* Tweaked: Improved code highlight theme for accessibility.
* Tweaked: Links are now unique. Fixes issue with similar links generated.
* Tweaked: Menu now has more padding.
* Updated: Plugin requirements for CoCart.
* Updated: Slate script to v2.7.0 which introduces the ability to copy code to clipboard.

### Doc Version v2.2 - Plugin Release v2.2

* Dev: Added `cocart_disable_all_cors` filter to enable all cross origin headers.
* Dev: Added filters to override the product name `cocart_item_added_product_name` and product title `cocart_item_added_product_title` when adding item to cart.
* Dev: Added `cocart_item_added` filter to allow additional data to be returned when item is added to cart.

### Doc Version v2.1 - Plugin Release v2.1.3

* **NEW**: Added example for adding product with [Name Your Price](https://woocommerce.com/products/name-your-price/) WooCommerce extension.

### Doc Version v2.0 - Plugin Release v2.1.2

* Tweaked: WP API examples.
* Removed: Warning notice in the introduction section.

### Doc Version v1.9

* **NEW**: Added Cookie section.
* **NEW**: Added link to Postman collections.
* Tweaked: Certain features or API's are tagged to identify that they are only available in v2.1
* Removed: Persistent Cart documentation.

### Doc Version v1.8 - Plugin Release v2.1

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

### Doc Version v1.7

* **NEW**: Added links to edit documentation at the top of each section.
* **NEW**: Added Getting Started section for those new to WordPress.
* Corrected: Typos.
* Tweaked: Menu
* Tweaked: Brand colours and updated favicons.

### Doc Version v1.6 - Plugin Release v2.0.13

* **NEW**: Added `cocart_return_empty_cart` filter and example.
* **NEW**: Added `cocart_add_to_cart_sold_individually_quantity`and example.
* Changed: Quantity parameter type to `float`.
* Tweaked: Authentication notice moved to the top of it's sections content.
* Tweaked: Menu, content and added helpful links.
* Tweaked: Filter examples to be code highlighted correctly.

### Doc Version v1.5 - Plugin Release v2.0.7

* **NEW**: Added link to products add-on documentation under CoCart Pro.
* **NEW**: Added a little section explaining the body types when making a request.
* **NEW**: Added example to add item with custom cart item data.
* **NEW**: Added Demo section.
* Improved: Authentication section.

### Doc Version v1.4

* **NEW**: Added live chat so users can ask questions.
* Made it clearer to understand about retrieving specific customers cart.
* Improved the introduction a little.

### Doc Version v1.3

* Added languages for jQuery, PHP and WP API.

### Doc Version v1.2

* Added Work in Progress section.
* Added Authentication section.

### Doc Version v1.1

* Added Index API.
* Linked logo to documentation homepage.

### Doc Version v1 - Plugin Release v2

* Updated for CoCart v2

### Doc Version v0.5

* Added attribute table for view cart.
* Added missing examples for count items and get cart totals.

### Doc Version v0.4 - Plugin Release v1.0.5

* Project renamed to CoCart.
* Changed support to contribution.
* Updated links.
* Added Insomnia as another tool you can use to access the API with.
* Removed all languages except for cURL showing examples on how to use with official library wrappers due to authentication required whic CoCart does not.

### Doc Version v0.3 - Plugin Release v1.0.4

* Official libraries are not supported as they require authentication which this API does not.
* Removed installation instruction for official libraries.
* Replaced logo to prevent confusion with the official REST API documentation.

### Doc Version v0.2 - Plugin Release v1.0.1

* Updated endpoint for updating, restoring and removing items.

### Doc Version v0.1 - Plugin Release v1.0.0

* Initial Commit
