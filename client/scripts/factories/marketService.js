myApp.factory('MarketService', function(){
  console.log('Factory sourced');
  inventoryArray = [];

  for (item of INVENTORY) {
    let price = Utilities.startingNumber(MIN_PRICE, MAX_PRICE);
    let newItem = new MarketItem (item.name, item.image, price, item.type);
    inventoryArray.push(newItem);
  }

  let player1 = new Player ('Player 1', inventoryArray);


  console.log(player1);
  return {
    inventoryArray,
    player1
  }
});
