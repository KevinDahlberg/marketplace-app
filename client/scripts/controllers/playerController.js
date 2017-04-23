myApp.controller('PlayerController', ['MarketService', function(MarketService){
  let player = this;
  player.player1 = MarketService.player1;
  player.cartArray = MarketService.cartArray;

}]);
