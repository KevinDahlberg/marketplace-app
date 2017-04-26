class Player {
  constructor(name, items, cart, cash = STARTING_CASH/100){
    this.name = name;
    this.items = items;
    this.cart = [];
    this.createCart(items);
    this.cash = cash;
  }

  createCart(items){
    for (let item of items){
      console.log(item);
      item = {
        name : item.name,
        quantity : [],
        image : item.image,
        type: item.type,
        age: item.age
      };
      this.cart.push(item);
    }
    console.log(this.cart);
  }

  buyItem (object){
    if (this.cash >= object.price){
      for (item of this.cart){
        if (object.name===item.name){
          item.quantity.push(object.price);
        }
        this.figureAvg (item.quantity);
      }
      this.cash = this.cash - object.price;
    }
  }

  sellItem (object, array = this.items){
    let { name , quantity } = object;
    let price;
    if (quantity.length===0){
      console.log('no value');
    } else {
      for (item of this.cart){
        if (name===item.name){
          item.quantity.pop();
        }
      }
      for (item of array){
        if (name === item.name){
          price = item.price;
        }
      }
      this.cash = this.cash + price;
    }
  }

  figureAvg (array) {
    let num = array.length;
    let num2 = 0;
    for (let item of array){
      num2 = parseFloat(item) + num2;
    }
    let average = num2/num;
    array.fill(average);
  }


}
