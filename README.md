I broke it down into 3 components; table, card, scoreboard  

The table component gets a shuffled deck and deals the cards to the table. 

The table component displays the cards and attaches click functionality to the card. 

If a card is clicked on, the methods in the table component evaluate the clicks. 

The card component determines whether to display the card face, back or successful match.

The messaging, score and gameover status are managed in GlobalContext.

The helpers/base.js does not have any state and will be a re-usable component for managing card logic in different games.  

------------

Remove/delete the node_modules folder if it exists.
Remove/delete the package-json.lock and yarn.lock file if they exist.
On the command line, run yarn upgrade.
On the command line, run yarn start.
The app should automatically open in your browser at http://localhost:3000


