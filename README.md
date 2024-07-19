# Dev Threadz Website

Welcome to the GitHub repository for the Dev Threadz website. In this project, I enhanced the functionality of the Dev Threadz website by implementing several JavaScript methods to render products, enable product search, convert product prices to different currencies, and calculate the shopping cart total.

## Contents

- [Introduction](#introduction)
- [Helper Function](#helper-function)
- [Tasks Completed](#tasks-completed)
  - [1. Render All Products on the Page](#1-render-all-products-on-the-page)
  - [2. Search by Product Name](#2-search-by-product-name)
  - [3. Convert Product Prices to Different Currencies](#3-convert-product-prices-to-different-currencies)
  - [4. Calculate the Shopping Cart Total](#4-calculate-the-shopping-cart-total)
- [Technologies Used](#technologies-used)

## Introduction

In this project, I used JavaScript's `forEach`, `filter`, `map`, and `reduce` methods to implement features that enhance the Dev Threadz website. The code I wrote is in the four functions defined in `script.js`, which are connected to the existing logic written by the rest of the team.

## Helper Function

### newProductCard(productData)

This helper function accepts a single product's data as an argument. It uses the data to create a new product card and append it to the page. I used this function to complete the first task.

## Tasks Completed

### 1. Render All Products on the Page

**Function: `showAllProducts(products)`**

- **Parameter:** `products` - An array of product objects (e.g., `[product1, product2, ...]`).
- **Implementation:** I used the `forEach` method to iterate through the products array. On each iteration, I called `newProductCard` and passed in the current product as an argument. This rendered all six products on the page.

### 2. Search by Product Name

**Function: `getFilteredProducts(productNames, query)`**

- **Parameters:**
  - `productNames` - An array of product names (e.g., `["Bootstrap Shirt", "CSS Shirt", ...]`).
  - `query` - A string representing the search query (e.g., `"html shirt"`).
- **Implementation:** I used the `filter` method to return an array of product names that match the specified query string, ignoring case sensitivity. I tested this feature by using the search bar on the page to search for a product by name.

### 3. Convert Product Prices to Different Currencies

**Function: `getConvertedPrices(productPrices, currency)`**

- **Parameters:**
  - `productPrices` - An array of product prices in USD (e.g., `[24.99, 29.99, ...]`).
  - `currency` - A string representing the target currency (`"usd"`, `"gbp"`, or `"jpy"`).
- **Implementation:** I used the `map` method to return an array with each price converted to the specified currency. I looked up the conversion rates for British Pounds and Japanese Yen. I tested this feature by selecting different currencies from the dropdown in the navbar.

### 4. Calculate the Shopping Cart Total

**Function: `getCartTotal(cartPrices)`**

- **Parameter:** `cartPrices` - An array of product prices in the cart (e.g., `[24.99, 29.99, ...]`).
- **Implementation:** I used the `reduce` method to return the sum of all prices in the `cartPrices` array. I tested this feature by adding a few products to the cart and checking the total.

## Technologies Used

- **HTML5 & CSS3:** For structuring and styling the web pages.
- **JavaScript:** For adding interactivity and implementing the specified features.

