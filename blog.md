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
