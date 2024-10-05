//War Card Game

// Deck - 52 cards

class Deck{
    constructor(){
        //An array of deck
        //empty array
        this.deck = [];
        //An array of rank
        //all ranks of a deck
        this.rank = [
            'Queen',
            'King',
            'Jack',
            'Ace',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
        ];
        // An array of suits
        this.suits = [
            'Diamonds ♦',
            'Spades ♠️',
            'Hearts ❤️',
            'Clubs ♣️'
        ];
    }

    // A method to create a deck
    //used two for loops to iliterate over suits then ranks
    //first iteration will go over suits then go into inner loop to ranks
    createDeck(){
        for(let i = 0; i < this.suits.length; i++){
            for(let j = 0; j < this.rank.length; j++){
                let card = {
                    name: `${this.rank[j]} of ${this.suits[i]}`,
                    value: j + 1
                }
                //use .push to push into deck
                this.deck.push(card)
            }
        }
    }
    //shuffle deck
    //GeeksforGeeks used Fisher-Yates shuffle method
    shuffleDeck(){
        for (let i = this.deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }
}

//class game
//have two players and name be player1 and player2
//an emprty array that will be filled with cards that are handed out to them
//score of 0 since game has not strted yet
class Game{ 
    constructor(){
        this.player1 = {
            name: 'Player 1',
            score: 0,
            hand: []
        }
        this.player2 = {
            name:'Player 2',
            score: 0,
            hand: []
        }
    }
   
    playGame(){
        //Instantiate new deck, create a deck, then shuffle the deck
        const deck = new Deck
        deck.createDeck()
        deck.shuffleDeck()


        //use while loop: while cards still in deck and not equal to zero 
        while(deck.deck.length != 0){
            //this keeps pushing cards into players 1 and 2 hands 
            //once it is equal to zero then it will stop handing out 
            //cards to players 1 and 2
            this.player1.hand.push(deck.deck.shift())
            this.player2.hand.push(deck.deck.shift())
        }
        
        //Playing the game
        for(let i = 0; i < this.player1.hand.length; i++){
            //Conditional logic to award points 
            //after comparing each other cards value
            //based on what player has the greater value will earn a point
            //and console.log the correct score and point
            if(this.player1.hand[i].value > this.player2.hand[i].value){
                this.player1.score ++
                console.log(` 
                    Player1 Card: ${this.player1.hand[i].name}
                    Player2 Card: ${this.player2.hand[i].name} 
                    Player1 gets a point!!
                    Current Score:
                    Player1: ${this.player1.score}
                    PLayer2: ${this.player2.score}`)
            }else if(this.player2.hand[i].value > this.player1.hand[i].value){
                this.player2.score++
                console.log(`
                    Player1 Card: ${this.player1.hand[i].name}
                    Player2 Card: ${this.player2.hand[i].name} 
                    Player2 gets a point!!
                    Current Score:
                    Player1: ${this.player1.score}
                    PLayer2: ${this.player2.score}`)
            }else(
                console.log(`
                    Player1 Card: ${this.player1.hand[i].name}
                    Player2 Card: ${this.player2.hand[i].name} 
                    Tie: No points are given
                    Current Score:
                    Player1: ${this.player1.score}
                    PLayer2: ${this.player2.score}`)
            )
        }
        if(this.player1.score > this.player2.score){
            console.log(`Player 1 wins!!
                        Player1 score: ${this.player1.score}
                        Player2 score; ${this.player2.score}`)
        }else if(this.player2.score > this.player1.score){
            console.log(`Player 2 wins!!
                        Player2 score: ${this.player2.score}
                        Player1 score: ${this.player1.score}`)
        }else{
            console.log(`Tie!!
                        Player1 score: ${this.player1.score}
                        Player2 score: ${this.player2.score}`)
        }
    }
}

//console.log 

const game = new Game
game.playGame()


