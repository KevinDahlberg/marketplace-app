# Blog of Marketplace App Process

## 4/22/2017

Started at 8:00 PM

* created file structure
* set up git and npm
* set up grunt
* created project readme with project overview and tasks to complete

- Next task is to spin up the server
* Server is spun up

- Need to set up Index.html and Create .js with inventory
* inventory.js created with inventory in it.
* set up index.html and sourced the inventory, client js, style.css and the other relevant items.
* set up client.js and angular (myApp).  Also set up angular-routes.
  * I'm not sure if I am going to need/use angular-routes for this project.  It's
    there and set up just in case I spose.

- Need to set up DOM so that it shows the starting inventory
* inventory items are showing up in DOM
  * it's pretty cool that I can create the array of objects in one spot and have them appear in a different spot.

- create player class and figure out how scott organized and accessed things in his example of OOP

I need to create the player class that ends up with the inventory in it as well as
the starting cash.  Player 1 eventually needs functions that reduce the amount of cash and
figures out the average of purchases

Scott also created a Game class and a utilities class.  The game class created the instance of player
and the market by running the inventory array through it.  The utilities class contained all of the
math stuff that needed to be a constant - basically it was all of the functions that he wanted Global

moving forward - I have already created the start of the player class.  I can create a new player in
my factory, and then if I choose to I can abstract it out into a different class.

had a problem with grunt not seeing changes to all of my files.  I had to add another condition to
the grunt watch.  Grunt is pretty frustrating, but it's one of those things that I know I need
practice on before ending up in the real world.

* Player class is created, player 1 generated in the factory.  Displays on the DOM.

- create market class and put market into their respective classes (based on type)
- I will eventually have to put images in the inventory.js file as a third property

MarketItem class is created.  I need to be able to pass an array (when I create the instance of it,
  it will be INVENTORY) into it.  So just like player1, market1 will be an instance of a Market Item.

stuff to think about:
- I need to get the initial price figured out and displayed (i think it would be cool for it to be
  a random number between the swing)
- I need to get the price on each item to swing on the interval.
- I need to create all of my new item objects in the factory and push them to the array.

** Break for Supper at 10:55 **

** 11:58 back at it **

Created a utilities class that has 2 static methods - 1 for the starting number, the other for the random number.

* created for loop in the factory that creates an array of items with a random starting number between the starting min and max

next up is creating using the $interval utility to have a 15 second timer

got the interval to work, with an if statement in there just in case the number ever goes above or below the constraints

moved the price change functionality from the factory to the market class.

- next up is setting up buying items, reducing the cash when bought, and figuring out average cost

items are now getting added to a "cart".  I need to put a version of the inventory on the player side as well.
Then make it so when an object is clicked, it gets added to an array of that object.

set it up so that each item on the Player side has a quantity array in it.  when
an item is clicked, the quantity array for the corresponding item in the player array
gets an item of that price added to it.  

changed "quantity" so that it only counts the length of the array, not the actual items in it on the DOM

** 2:11 taking a break **

** 2:30 back at it **

trying to figure out where I end up with crazy decimals.
