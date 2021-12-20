import Card from "./Card.js"
import {emoji} from "../utils/constants.js"

export default class Deck {
   
    cards = [];

    constructor() {
        return this.createDeck();
    }

    createDeck () {
     let obj_keys = Object.keys(emoji);
     let obj_values = Object.values(emoji);
     let counter = 0;
     let j = 0;
      for (let i = 0; i < 20; i++) {
        let card = new Card("130", "130");
        //creo le carte
        this.cards.push(card);
        } 

        //stilizzo ogni carta
        this.cards.forEach(card =>{
            let p = document.createElement('p');
            p.setAttribute('class', 'emoji');
            card.style.position = 'absolute'
            card.style.display = 'flex';
            card.style.justifyContent = 'center';
            card.style.alignItems = 'center';
            card.appendChild(p);
        })

        //assegno i valori alle carte
        for(let i = 0; i < this.cards.length; i++){
            if (counter == 2) {
                j++;
                counter = 0;
            }
            counter++;
            let text_node = document.createTextNode(obj_keys[j]);
            this.cards[i].firstChild.appendChild(text_node);
            this.cards[i].firstChild.style.fontSize = '5rem';
            this.cards[i].firstChild.style.position = 'absolute';
            this.cards[i].setAttribute('data-image', obj_values[j]);
        }
        return this.cards;
    }


}
