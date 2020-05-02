class Card {
  constructor(face, suit, number) {
    this.face = face;
    this.suit = suit;
    this.number = number;
  }

  show() {
    console.log(`This is the ${this.face}(${this.number}) of ${this.suit} `)
  }
}


const aceOfSpades = new Card("ace", "spades", 1)
aceOfSpades.show()


class Deck {
  constructor() {
    this.deck = [];
    this.createDeck();
   
  }

  createDeck() {


    for (let count = 0; count < 52; count++) {
      let faces = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

      let suits = ["Hearts", "Clubs", "Diamonds", "Spades"];

      let currentFace = count % 13;
      let currentSuit = Math.floor(count / 13);

      const currentCard = new Card(faces[currentFace], suits[currentSuit], count + 1);
      this.deck.push(currentCard);

    }
    console.log(this.deck);
    return this.deck;
  }

  

  shuffle() {

    var copy = [], n = this.deck.length, i;


    while (n) {


      i = Math.floor(Math.random() * this.deck.length);


      if (i in this.deck) {
        copy.push(this.deck[i]);
        delete this.deck[i];
        n--;
      }
    }
    this.deck = copy;
    console.log(this.deck);
    return this.deck;

  }

  dealCard() {
    let currentCard = this.deck.shift();
    console.log(currentCard);
    return currentCard;

   }

}



class Player {
  constructor(name){
    this.name = name;
    this.hand = [];
  }

  playDealCard(deck){
    let card = deck.dealCard();
    this.hand.push(card);
    console.log(this.hand);
    return this.hand;
  }

  discard(){
    this.hand.pop();
    console.log(this.hand);
    return this.hand;
  }

}

let d1 = new Deck();
d1.shuffle();


let p1 = new Player("Nick");
p1.playDealCard(d1);
p1.playDealCard(d1);
p1.playDealCard(d1);
p1.discard();