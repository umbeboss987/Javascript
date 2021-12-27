import Main from './Main.js'
import setStyle from '../utils/utils.js'
import Form from './Form.js'


class Game {

    ready_to_start = false;
    wait = false;
    main = new Main();

    constructor() {
        let form = new Form(); 
        let div = document.createElement('div');
     
         setStyle(div,{
            zIndex: '1',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            height: '100vh',
            width: '100vw',
            position: 'absolute',
         })
     
         setStyle(form, {
          top : '20%',
          left : '40%',
          float : 'right',
         })
        document.body.appendChild(div);
        div.appendChild(form);
    
        let button =  form.lastChild;
        button.addEventListener('click',()=>{
            if(form.childNodes[1].value.length > 0 && form.childNodes[2].value.length > 0){
                this.ready_to_start = true;
                //let body =  document.body.childNodes[3];
               div.setAttribute('hidden', true);
               return this.init();
            } else{
                window.alert('completa i campi');
            }
        })
    }


    init() {
        let selected_cards = [];
        console.log(this.main);
        if (this.ready_to_start && this.main) {
            setTimeout(() => this.main.animate_shuffle(), 2000);
            let cards = this.main.deck;
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