myApp.factory('MarketService', ['$interval', function($interval){
  console.log('Factory sourced');
  inventoryArray = [];

  for (item of INVENTORY) {
    let price = Utilities.startingNumber(MIN_PRICE, MAX_PRICE);
    switch (item.type){
      case 'smallElectronics':
      let smallElectronics = new ElectronicItem(item.name, item.image, price, item.type);
      inventoryArray.push(smallElectronics);
      break;
      case 'fruit':
      let fruit = new FruitItem(item.name, item.image, price, item.type);
      inventoryArray.push(fruit);
      break;
      case 'collectables':
      let collectables = new CollectableItem(item.name, item.image, price, item.type);
      inventoryArray.push(collectables);
      break;
      default:
      let newItem = new MarketItem (item.name, item.image, price, item.type);
      inventoryArray.push(newItem);
    }
  }


  let player1 = new Player ('Player 1', inventoryArray);

  //applies the setInterval function in angular.  cycles through the inventoryArray and
  //generates a new random number based on the swing.  if the number goes above or below
  //a new number is generated.
  let updateNumber = $interval(() => {
    for (item of inventoryArray){
      item.newPrice();
      //makes sure the price does not go above or below the max and min prices
      item.priceConstraint();
    }
  }, PRICE_CHANGE_TIME);

  console.log(player1);
  return {
    updateNumber,
    inventoryArray,
    player1,
  }
}]);
