function showAllProducts(products) {
  products.forEach((element) => newProductCard(element));
}

function getFilteredProducts(productNames, query) {
  let lowerCaseQuery = query.toLowerCase();
  // includes: Checks if query string contains any part of the product name
  let matches = productNames.filter(productName => productName.toLowerCase().includes(lowerCaseQuery));
  return matches;
}


function getConvertedPrices(productPrices, currency) {
  let conversionRate;
  
  if (currency == "gbp") {
    conversionRate = 0.77; //USD to GBP
  } else if (currency == "jpy") {
     conversionRate = 157.50; //USD to JPY
  } else {
    conversionRate = 1;
  }
  
  let convertedPrices = productPrices.map(productPrice => productPrice*conversionRate);
  
  return convertedPrices;
}

function getCartTotal(cartPrices) {
  const initialValue = 0;
  let total = cartPrices.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  return total;
}

showAllProducts(PRODUCTS);
