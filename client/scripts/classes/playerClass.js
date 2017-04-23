class Player {
  constructor(name, items, cart, cash = STARTING_CASH){
    this.name = name;
    this.items = items;
    this.cart = [];
    this.createCart(items);
    this.cash = cash;
  }

  createCart(items){
    for (let item of items){
      item = {
        name : item.name,
        quantity : [],
      };
      this.cart.push(item);
    }

  }
}
