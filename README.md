Hang In There
-----------------

_Hang in There_ is a full-stack application of the traditional hangman game


Installation
-----------------

* First install [MongoDB](https://www.mongodb.com/download-center)
    
######Windows

* Create the following directory `C:\data\db`, this is so mongod.exe will work.
* Open 2 command prompts (no git bash or Node.JS), and navigate to: `cd c:/"Program Files"/MongoDB/Server/<version number>/bin/` on both of them
* On terminal 1 now type mongod.exe first, on terminal 2 type mongo.exe and leave those 2 running while you use the app

######Mac

* For Mac: On command line run `brew install Mongodb` 
* Make a folder to store the data. Open a command terminal and type the following: `cd / ` then `mkdir data`then `cd data ` then `mkdir db`
* On your commandline type `mongod`, if that doesn't work try `sudo mongod `, don't close this window or anything else. 
* Open up a new tab on your terminal and type `mongo ` and you're now connected to the database

#### Continue with installation

* Install latest version of [Node.js](https://nodejs.org/en/download/current/)
* Clone or download repo [hang in there](https://github.com/AlexFloresGreer/hang_in_there)
* Open Node.JS cmd prompt and navigate to folder named "hang in there", you should see all the folders but most importantly you should be able to see the server.js file, if you see it you're in the right place
* To connect to the MongoDB server follow the following instructions for Mac & Windows
* All npm commands should be run from the Node.js cmd prompt
* On a new cmd line (Node.JS) run `npm install express`, `npm install cors-anywhere`
* On the new commandline you just opened install `npm install -g nodemon`  (may require sudo or administrative level access)
* Once you've installed express, cors-anywhere, and nodemon run `nodemon server.js` to start the app connect to the server
* Go to [localhost:8000](http://localhost:8000/)
* And voila! Login to start playing Hangman!


Assumptions
-----------------

* Hangman will be played in desktop web browser

Hangman technology
-----------------

* Javascript, HTML, CSS
* MongoJS
* ExpressJS
* AngularJS
* NodeJS
* CORS Anywhere

Hangman features
-----------------

* Hangman game retrieves secret word
  - A random word is retrieved from Word Dictionary REST API based on level of difficulty chosen by the player
  - The random word's letters are displayed as empty "_" spaces

* Player makes guesses
  - Player makes guesses by typing their guess on the keyboard
  - If the letter they guessed is correct, the remaining Guesses counter stays the same, the correct letter is displayed, and if the guessed letter is typed again it won't be counted against the remaining Guesses counter
  - Else if the letter the player guessed is incorrect the remainingGuesses counter will decrement by 1, the secret words is still hidden, the wrong guess will be displayed, and the picture of the hangman will change
  
* Win
  - Player wins when they type all the letters of the Secret word
  - An alert will display letting the player know they've won the round
  
* Lose
  - Player loses when the remaining guesses are 0
  - An alert will be displayed letting the player know they've lost the round and also will display the secret word

Hangman extensions
-----------------

* Every time a wrong guess is made the image of the Hangman will change
* After a round is finished the Win or Lose score is stored in the MongoDB and updated in the Leaderboard
* Hint button will display the first and last letters of secret word
* Player chooses the level of difficulty from drop down list
* If player a loses the game an alert will notify the user and reveal what the secret word was
* Leaderboard will be displayed in descending order from highest score to lowest by clicking on Leaderboard tab, the socres are being pulled from the MongoDB
* In Leaderboard tab there's a feature to search for friends using Angular.JS
