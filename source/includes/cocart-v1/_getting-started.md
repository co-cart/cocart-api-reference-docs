# Getting Started #

<img src="images/github.svg" width="20" height="20" alt="GitHub Mark Logo"> [Edit on GitHub](https://github.com/co-cart/co-cart-docs/blob/master/source/includes/cocart-v1/_getting-started.md)

This section is intended to help you get started with WordPress, WooCommerce and CoCart.

## Setting up WordPress ##

One of the first things you might want to do is to set up a WordPress site on your personal computer.

I hands-down recommend using a tool called [LocalWP](https://localwp.com/). It’s a desktop application that allows you to create new WordPress sites on your computer with the click of a few buttons. It takes care of configuring PHP, MySQL and basic configuration of WordPress to connect to the database. It provides one-click support for enabling XDebug, allows access to your WordPress site using WP-CLI, and more. And, it’s free.

There are some alternatives for quickly spinning up a local environment:

 * [Lando](https://docs.lando.dev/config/wordpress.html)
 * [MAMP](https://codex.wordpress.org/Installing_WordPress_Locally_on_Your_Mac_With_MAMP)
 * [XAMP](https://themeisle.com/blog/install-xampp-and-wordpress-locally/)
 * [Set it all up on your own](https://coolestguidesontheplanet.com/fastest-way-to-install-wordpress-on-osx-10-6/)

When setting up your WordPress environment, please check that you have the server [requirements](#introduction-requirements) for CoCart.

## Setting up WooCommerce ##

Once you have your WordPress environment setup. The next step is to install WooCommerce and setup your store. Add products, configure shipping, taxes payment gateway etc.

A more detailed guide for setting up WooCommerce can be found at [WooCommerce.com documentation](https://docs.woocommerce.com/documentation/plugins/woocommerce/getting-started/).

### Automatic installation ###

Automatic installation is the easiest option as WordPress handles the file transfers itself and you don’t need to leave your web browser. To do an automatic install of **WooCommerce**, log in to your WordPress dashboard, navigate to the Plugins menu and click **Add New**.

In the search field type “WooCommerce” and click Search Plugins. Once you’ve found the plugin you can view details about it such as the point release, rating and description. Most importantly of course, you can install it by simply clicking “Install Now”.

## Setting up CoCart ##

Once you have your WooCommerce store setup. The next step is to install CoCart. Once installed you can the use the API.

### Automatic installation ###

Automatic installation is the easiest option as WordPress handles the file transfers itself and you don’t need to leave your web browser. To do an automatic install of **CoCart**, log in to your WordPress dashboard, navigate to the Plugins menu and click **Add New**.

In the search field type “CoCart” and click Search Plugins. Once you’ve found the plugin you can view details about it such as the point release, rating and description. Most importantly of course, you can install it by simply clicking “Install Now”.

### Recommended Version ###

For the most stable and performance experience, it’s recommended that you use the most recent version of the plugin. You can get the [latest releases here](https://wordpress.org/plugins/cart-rest-api-for-woocommerce/).

Of course, as new features are in development, feel free to check out the latest develop branch or check out any [other release](https://github.com/co-cart/co-cart/releases).

### GitHub - Download / Clone Plugin ###

CoCart is available on GitHub: <https://github.com/co-cart/co-cart>

You can [download the latest release](https://github.com/co-cart/co-cart/releases/latest) or clone the plugin from GitHub.

Add the downloaded/cloned plugin to your WordPress plugin directory. On a typical WordPress install, this is located at `/wp-content/plugins`.

<aside class="notice">
    <strong>Install Directory</strong><br/><br/>To minimize risk of unintended behaviour, it’s best for your plugin directory to be "cart-rest-api-for-woocommerce" and not something else, like "cart-rest-api-for-woocommerce-master" or "cart-rest-api-for-woocommerce-develop".
</aside>

## Recommended Plugins ##

This section will list recommended plugins that will help with your development in creating a headless store.

* [REST API Toolbox](https://wordpress.org/plugins/rest-api-toolbox/)
* [WP-REST-API V2 Menus](https://wordpress.org/plugins/wp-rest-api-v2-menus/)