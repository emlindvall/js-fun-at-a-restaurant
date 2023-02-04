function createRestaurant(name) {
  var pizzaRestaurant = {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    },
  }
  return pizzaRestaurant;
}

function addMenuItem(pizzaRestaurant, menuItem)  {
  if (menuItem.type === "breakfast" && !pizzaRestaurant.menus.breakfast.includes(menuItem))  {
    pizzaRestaurant.menus.breakfast.push(menuItem);
  } if (menuItem.type === "lunch" && !pizzaRestaurant.menus.lunch.includes(menuItem))  {
    pizzaRestaurant.menus.lunch.push(menuItem);
  } else if (menuItem.type === "dinner" && !pizzaRestaurant.menus.dinner.includes(menuItem)){
    pizzaRestaurant.menus.dinner.push(menuItem);
  }
  return pizzaRestaurant;
}

// This is about to be sooooo gnarly. Brace yourself.

function removeMenuItem(pizzaRestaurant, menuItem, itemType) {
  if (itemType === "breakfast" && pizzaRestaurant.menus.breakfast.length > 0) {
    for (var i = 0; i <= pizzaRestaurant.menus.breakfast.length; i++) {
      if (pizzaRestaurant.menus.breakfast[i].name === menuItem) {
        pizzaRestaurant.menus.breakfast.splice(i, 1);
        var nobodyEating = (`No one is eating our ${menuItem} - it has been removed from the ${itemType} menu!`);
        return nobodyEating
       }
      }
  } else if (itemType === "lunch" && pizzaRestaurant.menus.lunch.length > 0) {
      for (var i = 0; i <= pizzaRestaurant.menus.lunch.length; i++) {
        if (pizzaRestaurant.menus.lunch[i].name === menuItem) {
          pizzaRestaurant.menus.lunch.splice(i, 1);
          var nobodyEating = (`No one is eating our ${menuItem} - it has been removed from the ${itemType} menu!`);
          return nobodyEating
        }
      }
  } else if (itemType === "dinner" && pizzaRestaurant.menus.dinner.length > 0) {
      for (var i = 0; i <= pizzaRestaurant.menus.dinner.length; i++) {
        if (pizzaRestaurant.menus.dinner[i].name === menuItem) {
          pizzaRestaurant.menus.dinner.splice(i, 1);
          var nobodyEating = (`No one is eating our ${menuItem} - it has been removed from the ${itemType} menu!`);
          return nobodyEating
        }
      }
  }
  var weDontSellIt = (`Sorry, we don't sell ${menuItem}, try adding a new recipe!`);
  return weDontSellIt;
}

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem
}