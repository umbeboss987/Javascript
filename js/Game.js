import Main from './Main.js'
import setStyle from './utils/utils.js'
import Form from './Form.js'


class Game {

    ready_to_start = false;
    wait = false;

    constructor() {
        let form = new Form();
        document.body.appendChild(form);

        let div = document.createElement('div');

         setStyle(div,{
            zIndex: '0',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            heigth: '100vh',
            width: '100vw',
            position: 'relative',
         })

        document.body.appendChild(div);

    }


    init() {
        let main = new Main();
        let selected_cards = [];
        this.ready_to_start = true;
        if (this.ready_to_start && main) {
            let cards = main.childNodes;
            cards.forEach(card => {
                card.addEventListener('click', () => {
                   let  covered = card.getAttribute('state') == 'covered' ? true : false;
                    if (!this.wait && covered == true) {
                        card.setAttribute('state', 'flipped');
                        card.setAttribute('flipped', true);
                        card.childNodes[1].setAttribute('hidden', true);
                        selected_cards.push(card);
                        if (selected_cards.length == 2) {
                            let card1 = selected_cards[0];
                            let card2 = selected_cards[1];
                            if (card1.getAttribute('data-image') == card2.getAttribute('data-image')) {

                                console.log("MATCH");
                                card1.setAttribute('solved', 'true');
                                card2.setAttribute('solved', 'true');
                                selected_cards = [];
                            } else {
                                this.wait = true;
                                setTimeout(()=>{
                                    card1.childNodes[1].removeAttribute('hidden');
                                    card2.childNodes[1].removeAttribute('hidden');
                                    card1.setAttribute('state', 'covered');
                                    card2.setAttribute('state', 'covered');
                                    selected_cards = [];
                                    this.wait = false;
                                },2000)
                            }
                        }
                    }
                })
            })
        }
        return main;
    }
}

export default Game;