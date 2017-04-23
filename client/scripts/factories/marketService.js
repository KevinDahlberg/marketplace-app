myApp.factory('MarketService', function(){
  console.log('Factory sourced');
  inventoryArray = [];

  for (item of inventory) {
    inventoryArray.push(item);
  }

  return {
    inventoryArray
  }
});
