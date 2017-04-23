class MarketItem {

  constructor (name, image, price, type){
    this.name = name;
    this.image = image;
    this.price = price;
    this.type = type;

  
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
