class Utilities {
  constructor () {}

  static startingNumber (min, max){
    return Math.floor((Math.random() * (max - min)) + min)/100;
  }

  static randomNumber (min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
  }
}
