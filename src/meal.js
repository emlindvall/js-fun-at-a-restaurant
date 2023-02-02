function nameMenuItem(name) {
  var deliciousName = (`Delicious ${name}`);
  console.log(deliciousName);
  return deliciousName;
}

function createMenuItem(menuItemName, price, type) {
  var menuItem = {
      name: menuItemName,
      price: price,
      type: type,
      }
  console.log(menuItem.name);
  return menuItem;
}

function addIngredients(cheese, ingredients)  {
 if (!ingredients.includes(cheese)) {
 ingredients.push(cheese);
 }
}

function formatPrice(price)  {
  var formattedPrice = (`$${price}`);
  return formattedPrice;
}

function decreasePrice(price) {
  var decreasedPrice = (price - (price * 0.10));
  return decreasedPrice;
}

function createRecipe(deliciousName, addIngredients, type) {
  var recipe = {
    title: deliciousName,
    ingredients: addIngredients,
    type: type,
  }
  return recipe;
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


