 import setStyles from '../utils/utils.js'
 
 class Card{
     
    constructor (heigth, width) { 
      return this.createCard(heigth, width);
    }

    createCard(heigth, width){
        const card_div = document.createElement('div');
        setStyles(card_div,{
            height: heigth + 'px',
            width: width +'px',
            backgroundColor: 'blue',
            borderRadius : '7px',
            transition : '0.8s ease-in-out',
            boxShadow : '0 0 10px 5px #fff',
            boxShadow : '0 0 10px 5px #f0f',
            boxShadow : '0 0 10px 5px #0ff',
        });

        card_div.setAttribute('class', 'card');
        card_div.setAttribute('state', 'covered');
        card_div.setAttribute('solved', 'false');

        return card_div;
    }
}

export default Card;

