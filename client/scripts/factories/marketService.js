myApp.factory('MarketService', ['$interval', function($interval){
  console.log('Factory sourced');
  inventoryArray = [];

  for (item of INVENTORY) {
    let price = Utilities.startingNumber(MIN_PRICE, MAX_PRICE);
    let newItem = new MarketItem (item.name, item.image, price, item.type);
    inventoryArray.push(newItem);
  }

  let player1 = new Player ('Player 1', inventoryArray);

  //applies the setInterval function in angular.  cycles through the inventoryArray and
  //generates a new random number based on the swing.  if the number goes above or below
  //a new number is generated.
  let updateNumber = $interval(function(){
    for (item of inventoryArray){
      let posNeg = Math.random()*2;
      if (posNeg > 1) {
        item.price = item.price + (Utilities.randomNumber(MIN_PRICE_SWING, MAX_PRICE_SWING)/100);
      } else if (posNeg < 1) {
        item.price = item.price - (Utilities.randomNumber(MIN_PRICE_SWING, MAX_PRICE_SWING)/100);
      }

      //makes sure the price does not go above or below the max and min prices
      if (item.price > (MAX_PRICE/100)) {
        item.price = Utilities.startingNumber(MIN_PRICE, MAX_PRICE);
      } else if (item.price < (MIN_PRICE/100)) {
        item.price = Utilities.startingNumber(MIN_PRICE, MAX_PRICE);
      }

    }
  }, PRICE_CHANGE_TIME);

  console.log(player1);
  return {
    updateNumber,
    inventoryArray,
    player1
  }
}]);
