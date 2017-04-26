myApp.controller('MarketController', ['MarketService', function(MarketService){
  console.log('MarketController Sourced');
  let market = this;

  market.inventoryArray = MarketService.inventoryArray;
  market.buyItem = MarketService.buyItem;
  market.player1 = MarketService.player1;

  console.log(this.inventoryArray);
}]);
