import Deck from './Deck.js';
import setStyle from '../utils/utils.js'
import StopWatch from './StopWatch.js';


class Main {

    coordinates = [];
    deck = new Deck();


    constructor() {

        return this.createMain();
    }

    createMain() {
        const main = document.createElement('div');
        main.setAttribute('id', 'main');
        setStyle(main, {
            position: 'absolute',
            width: '900px',
            height: '500px',
            zIndex : '0'
        })
        this.position();
        this.deck.forEach(card => {
            main.appendChild(card);
        })
        this.shuffle();
        //setTimeout(() => this.animate_shuffle(), 2000);
        document.body.appendChild(main);
    }

    position() {
        let col = 0;
        let row = 0;
        let row_offset = 150;
        let col_offset = 140;
        let max_cards_row = 4;

        let cards = this.deck
        for (let i = 0; i < cards.length; i++) {
            col++;
            this.coordinates.push([cards[i].style.top = col * col_offset - 30 + 'px', cards[i].style.left = row * row_offset + 50 + 'px'])

            if (col == max_cards_row) {
                row++;
                col = 0;
            }
        }
        return this.coordinates;
    }

    shuffle() {
        for (let i = 0; i < this.coordinates.length; i++) {
            let j = Math.floor(Math.random() * this.coordinates.length)
            var temp = this.coordinates[i];
            this.coordinates[i] = this.coordinates[j];
            this.coordinates[j] = temp;
        }
        return this.coordinates;

    }

    animate_shuffle() {
        let index = 0;
        let cards = this.deck
        for (let i = 0; i < cards.length; i++) {
            cards[i].style.top = this.coordinates[index][0];
            cards[i].style.left = this.coordinates[index][1];
            index++;
        }

        function cover_cards() {
            cards.forEach((card) => {
                let cover = document.createElement('img');
                setStyle(cover, {
                    position: 'absolute',
                    width: '130px',
                    height: '130px',
                    borderRadius: '10px',
                });
                cover.setAttribute('id', 'cover')
                cover.src = './assets/human-brain.svg'
                card.appendChild(cover);
            })

            let main = document.getElementById('main');
            let stopwatch = new StopWatch();
            main.appendChild(stopwatch);
        }
        cover_cards();
    }

}

export default Main;