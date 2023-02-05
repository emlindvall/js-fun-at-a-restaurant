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

// Soooooo I could NOT stop thinking about this and I let it bother me until I figured out
// a better way to code both the addMenuItem and the removeMenuItem functions to be a lot 
// cleaner and less horrifying. Enjoy:

function addMenuItem(pizzaRestaurant, menuItem)  {
  var itemType = menuItem.type;
  if (!pizzaRestaurant.menus[itemType].includes(menuItem))  {
    pizzaRestaurant.menus[itemType].push(menuItem);
  return pizzaRestaurant;
  }
}

function removeMenuItem(pizzaRestaurant, menuItem, itemType) {
  if (pizzaRestaurant.menus[itemType].length > 0) {
    for (var i = 0; i <= pizzaRestaurant.menus[itemType].length; i++) {
      if (pizzaRestaurant.menus[itemType][i].name === menuItem) {
        pizzaRestaurant.menus[itemType].splice(i, 1);
        var nobodyEating = (`No one is eating our ${menuItem} - it has been removed from the ${itemType} menu!`);
        return nobodyEating
       }
    }
  } else {
  var weDontSellIt = (`Sorry, we don't sell ${menuItem}, try adding a new recipe!`);
  return weDontSellIt;
  }
}



module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem
}