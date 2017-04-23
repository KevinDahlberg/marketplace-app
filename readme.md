# Marketplace App

* Setup Instructions:
  * run npm install to install dependencies
  * npm start to spin up server
  * access app on localhost:4000

## Project Overview
The original project was a group assignment during my 7th week of in-class work
at Prime Digital Academy.  This is my personal attempt at the project.

### Summary
The project involves creating a Marketplace Game.  The game has multiple market
items that randomly go up or down in price after a 15 second interval.  The player
clicks on each item when they want to "buy" them.  When an item is purchased, it
appears in the player's inventory.  The player can then sell the product after it
is in their inventory

### Technologies Used
* Angular
* ES6
* Bootstrap

##Goals
* Write a full-stack version of the app using Angular, ES6 and Bootstrap
* Explore OOP programming principles
* Apply all of the concepts learned in Tier 2 of Prime

---

### Original Project Description

>The Market Place
For this challenge, you will be working to create an experience that is 'game-like'. Specifically, you will be creating an interface for users to 'buy' from a list of 12 items. The prices for each of the items will be displayed and as the user buys an item, money will be deducted from their account in exchange for one of those items. That item is kept in a player inventory. Additionally, every 15 seconds, the prices of those items will change. The player will also be allowed to 'sell' items from their inventory in exchange for the current price of the item. This will give the player to buy the items at one price, and then sell at another.

>When the application loads, you will need to have information for each of the commodities, specifically the name and the market price of each. This information will need to be displayed in a meaningful way on the DOM.

>Every 15 seconds, the prices should change and with it the listed price on the DOM. Specifically, the market price of each of the items should fluctuate up or down (positive or negative) fifty cents (between 1 cent and 50 cents) with each fifteen-second interval.

>Any given item is not allowed to go below a cost of 50 cents, or above the cost of 9 dollars and 99 cents.

>The information displayed for each of the items should have a button-like functionality where the user can interact with each of the fruit displays.

>Available to the user is a total cash and an inventory display that shows how much of each of the item they have purchased. Also on the user display, should be an average purchased price, which shows, on average, how much money they have spent on a given item in their inventory.

>Meaning that by clicking on the display for each of the items, allows the user to buy one of the items, at market price, which will be deducted from the total cash. The user is not allowed to spend more than they have.

>The user will start with $100.

>Application Example
Here is an example of an application with only the fruits: https://mighty-ravine-10405.herokuapp.com/

>Items to be sold:
Small Electronics - Toaster, Lamp, Clock, BluRay Player

>Fruits - Apples, Oranges, Bananas, and Grapes

>Collectables - Comic Books, Fancy Stuffed Animals, Jewelry, and Wine

>Technology Requirements:
Bootstrap

>Angular - Controllers and Factories (Routes are up to your team)

>ES6 Classes instead of Objects

>Hard Mode
Make it so that fruit can has a swing not of negative fifty cents to positive fifty cents, but rather negative ten cents to positive ninety cents. The trade off is that they can only last for 10 intervals before 'going bad' and being deleted from the player's inventory.

>Pro Mode
Make it so the collectibles only increase in price, but can only increase in intervals between positive ten cents and thirty cents.

---

### Tasks
1. name and market price of each item displays to DOM
2. price fluctuates
  * up or down
  * 50 cents
  * 15 seconds
3. price floor is 50 cents and ceiling is 9 dollars and 99 cents
4. button-like functionality to each fruit display
5. user display
  * total cash
  * inventory of purchases
  * average price spent on purchases
6. user starts with $100
7. Items to be sold:
  * Small Electronics - Toaster, Lamp, Clock, BluRay Player
  * Fruits - Apples, Oranges, Bananas, and Grapes
  * Collectables - Comic Books, Fancy Stuffed Animals, Jewelry, and Wine

---

* DOM
  * Marketplace
    - [ ] display marketplace items
    - [ ] Price fluctuates randomly
  * Person
    - [ ] display person information
  - [ ] items buy on click
  - [ ] items sell on click
  - [ ] Apply Bootstrap and CSS

* Classes
  - [ ] fruit Class
  - [ ] collectables Class
  - [ ] small electronics Class
  - [ ] Person Class
  - [ ] MarketItem Class

* Person
  - [ ] Function Spent Items
  - [ ] function AVG spent
  - [ ] function Add Item to inventory

* Market
  - [ ] Time interval
  - [ ] Random Number Generation
  - [ ] buy item function
  - [ ] Sell Item Function


* Global Constants
  - [ ] Price floor
  - [ ] Price Ceiling
  - [ ] Time interval
  - [ ] Swing interval
  - [ ] Total cash for the player

* MVP - .1
  - [x] Create Array of items
  - [x] Create player
  - [x] Display Array of items and player to DOM

* Version .2
  - [x] Create Classes
  - [x] Random Number function
  - [x] Set interval function

* Version .3
 - [x] Buy items
 - [x] Average Price
 - [x] Sell items

* Version .4
  - [ ] Reduce and Add cash when buying and selling
  - [ ] Apply Bootstrap and css
  - [ ] Images for items

* Version .5
  - [ ] Hard Mode

* Version .6
  - [ ] Pro Mode

* Version 1.0
  - [ ] Deploy Online
