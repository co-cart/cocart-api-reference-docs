<h1 align="center">CoCart Documentation</h1>

<p align="center"><img src="https://cocart.xyz/wp-content/uploads/2021/11/cocart-home-default.png.webp" alt="CoCart Logo" /></p>

[![WordPress Plugin Page](https://img.shields.io/badge/WordPress-%E2%86%92-lightgrey.svg?style=flat-square)](https://wordpress.org/plugins/cart-rest-api-for-woocommerce/)
[![WordPress Plugin Version](https://img.shields.io/wordpress/plugin/v/cart-rest-api-for-woocommerce.svg?style=flat)](https://wordpress.org/plugins/cart-rest-api-for-woocommerce/)
[![WordPress Plugin Downloads](https://img.shields.io/wordpress/plugin/dt/cart-rest-api-for-woocommerce.svg)](https://wordpress.org/plugins/cart-rest-api-for-woocommerce/)

This repository manages the documentation for CoCart.

If you would like to contribute to the documentation to either correct a mistake, maybe add another language or something else. Then please follow these [contribution guidelines](https://github.com/co-cart/co-cart-docs/blob/master/CONTRIBUTING.md).

## Getting Started

### Requirements

You're going to need:

 - **Linux or macOS** — Windows may work, but is unsupported.
 - **[Ruby, version 2.5 or newer](https://www.ruby-lang.org/en/)**
 - **[Bundler](https://bundler.io/)** — If Ruby is already installed, but the `bundle` command doesn't work, just run `gem install bundler` in a terminal.
 - **[NodeJS](https://nodejs.org/en/)**

### Getting Set Up

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

## CoCart Channels

We have different channels at your disposal where you can find information about the CoCart project, discuss it and get involved:

[![Twitter: cocartapi](https://img.shields.io/twitter/follow/cocartapi?style=social)](https://twitter.com/cocartapi) [![CoCart JS Lib Github Stars](https://img.shields.io/github/stars/co-cart/co-cart-docs?style=social)](https://github.com/co-cart/co-cart-docs)

<ul>
  <li>📖 <strong>Docs</strong>: this is the place to learn how to use CoCart API. <a href="https://docs.cocart.xyz/#getting-started">Get started!</a></li>
  <li>🧰 <strong>Resources</strong>: this is the hub of all CoCart resources to help you build a headless store. <a href="https://cocart.dev/?utm_medium=gh&utm_source=github&utm_campaign=readme&utm_content=cocart">Get resources!</a></li>
  <li>👪 <strong>Community</strong>: use our Slack chat room to share any doubts, feedback and meet great people. This is your place too to share <a href="https://cocart.xyz/community/?utm_medium=gh&utm_source=github&utm_campaign=readme&utm_content=cocart">how are you planning to use CoCart!</a></li>
  <li>🐞 <strong>GitHub</strong>: we use GitHub for bugs and pull requests, doubts are solved with the community.</li>
  <li>🐦 <strong>Social media</strong>: a more informal place to interact with CoCart users, reach out to us on <a href="https://twitter.com/cocartapi">Twitter.</a></li>
  <li>💌 <strong>Newsletter</strong>: do you want to receive the latest plugin updates and news? Subscribe <a href="https://twitter.com/cocartapi">here.</a></li>
</ul>

> The documentation is powered by [Slate](https://github.com/lord/slate).
