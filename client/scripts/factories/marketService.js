myApp.factory('MarketService', function(){
  console.log('Factory sourced');
  inventoryArray = [];

  for (item of INVENTORY) {
    inventoryArray.push(item);
  }

  let player1 = new Player ('Player 1', inventoryArray);

  console.log(player1);
  return {
    inventoryArray,
    player1
  }
});
