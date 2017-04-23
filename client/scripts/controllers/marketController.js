myApp.controller('MarketController', ['MarketService', function(MarketService){
  console.log('MarketController Sourced');
  let market = this;

  market.inventoryArray = MarketService.inventoryArray;

  console.log(this.inventoryArray);
}]);
