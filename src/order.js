function takeOrder(orderNumber, deliveryOrders)  {
  if (deliveryOrders.length <= 2) {
  deliveryOrders.push(orderNumber);
  }
  return deliveryOrders;
}

function refundOrder(orderNumber, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber === orderNumber) {
      deliveryOrders.splice(i, 1);
    }
  }
  return deliveryOrders;
}

function listItems(deliveryOrders)  {
  var itemsList = "";
for (var i = 0; i < (deliveryOrders.length); i++)  {
   if (i < (deliveryOrders.length -1)) {
    itemsList += (`${deliveryOrders[i].item},` + ` `);
   } else {
    itemsList += `${deliveryOrders[i].item}`;
    }
  } 
  return itemsList;
}

function searchOrder(itemsList, item) {
  var inOrder = false;
  for (var i = 0; i < itemsList.length; i++) {
     if (itemsList[i].item === item) {
      inOrder = true;
    }
  }
  return inOrder;
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}