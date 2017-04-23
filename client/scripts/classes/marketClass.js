class MarketItem {

  constructor (name, image, price, type){
    this.name = name;
    this.image = image;
    this.price = price;
    this.type = type;
  }
  //method that decides whether the new number should swing positive or negative
   newPrice (){
    let posNeg = Math.random()*2;
    if (posNeg > 1) {
      item.price = item.price + (Utilities.randomNumber(MIN_PRICE_SWING, MAX_PRICE_SWING)/100);
    } else if (posNeg < 1) {
      item.price = item.price - (Utilities.randomNumber(MIN_PRICE_SWING, MAX_PRICE_SWING)/100);
    }
  }

  //method that makes sure the price doesn't go too high or too low.
  priceConstraint(){
    if (item.price > (MAX_PRICE/100)) {
      item.price = Utilities.startingNumber(MIN_PRICE, MAX_PRICE);
    } else if (item.price < (MIN_PRICE/100)) {
      item.price = Utilities.startingNumber(MIN_PRICE, MAX_PRICE);
    }
  }


}

class FruitItem extends MarketItem{
  constructor (name, image, price){
    super (name, image, price);
  }
}

class ElectronicItem extends MarketItem{
  constructor (name, image, price){
    super (name, image, price);
  }
}

class CollectableItem extends MarketItem{
  constructor (name, image, price){
    super (name, image, price);
  }
}
