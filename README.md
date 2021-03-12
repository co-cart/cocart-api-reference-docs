# CoCart Documentation

[![WordPress Plugin Page](https://img.shields.io/badge/WordPress-%E2%86%92-lightgrey.svg?style=flat-square)](https://wordpress.org/plugins/cart-rest-api-for-woocommerce/)
[![WordPress Plugin Version](https://img.shields.io/wordpress/plugin/v/cart-rest-api-for-woocommerce.svg?style=flat)](https://wordpress.org/plugins/cart-rest-api-for-woocommerce/)
[![WordPress Plugin Downloads](https://img.shields.io/wordpress/plugin/dt/cart-rest-api-for-woocommerce.svg)](https://wordpress.org/plugins/cart-rest-api-for-woocommerce/)

This repository manages the documentation for CoCart.

If you would like to contribute to the documentation to either correct a mistake, maybe add another language or something else. Then please follow these [contribution guidelines](https://github.com/co-cart/co-cart-docs/blob/master/CONTRIBUTING.md).

## Getting Started

#### Requirements

You're going to need:

 - **Linux or macOS** — Windows may work, but is unsupported.
 - **[Ruby, version 2.5 or newer](https://www.ruby-lang.org/en/)**
 - **[Bundler](https://bundler.io/)** — If Ruby is already installed, but the `bundle` command doesn't work, just run `gem install bundler` in a terminal.
 - **[NodeJS](https://nodejs.org/en/)**

#### Getting Set Up

1. Fork this repository on GitHub.
2. Clone *your forked repository* (not this original one) to your hard drive with `git clone https://github.com/YOURUSERNAME/co-cart-docs.git`
3. `cd co-cart-docs`
4. Initialize and start Slate. You can either do this locally, or with Vagrant:

```shell
# either run this to run locally
bundle install
bundle exec middleman server ## Load server process for development.
bundle exec middleman build  ## Just build the files.

# OR run this to run with vagrant
vagrant up
```

You can now see the docs at http://localhost:4567.

> The documentation is powered by [Slate](https://github.com/lord/slate).
