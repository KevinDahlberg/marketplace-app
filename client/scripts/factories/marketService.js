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
    console.log(inventoryArray);
  }


  let player1 = new Player ('Player 1', inventoryArray);

  function buyItem (object){
      for (item of player1.cart){
        if (object.name===item.name){
        item.quantity.push(object.price);
        }
        figureAvg (item.quantity);
      }
    player1.cash = player1.cash - object.price;

    }

  function sellItem (object, array = inventoryArray){
    let { name , quantity } = object;
    let price;
    if (quantity.length===0){
      console.log('no value');
    } else {
      for (item of player1.cart){
        if (name===item.name){
          item.quantity.pop();
        }
      }
      for (item of array){
        if (name === item.name){
          price = item.price;
        }
      }
    player1.cash = player1.cash + price;
  }
}

    function figureAvg (array) {
      let num = array.length;
      let num2 = 0;
      for (let item of array){
        num2 = parseFloat(item) + num2;
      }
      let average = num2/num;
      array.fill(average);
    }

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
    buyItem,
    sellItem
  }
}]);
