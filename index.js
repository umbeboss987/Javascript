window.addEventListener('load', function() {
   const aside = document.createElement('div');
   const divForm = document.createElement('div');
   const form = document.createElement('div');
   const main = document.createElement('div');
   const content = document.createElement('div');
   const inputName = document.createElement('input');
   const inputSurname = document.createElement('input');
   const submit = document.createElement('button');
   const text2 = document.createTextNode('submit');
   const title = document.createElement('h1');
   const start = document.createElement('div');

   document.body.style.position = 'relative';
   document.body.style.height = '98vh';
   document.body.style.margin = '-3px';
   document.body.style.outline = 'none';

  
   //stili conteiner
   content.style.position = 'relative';
   //stili del main
   main.style.position = 'absolute';
   main.style.width = '70%';
   main.style.height = '100%';
   main.style.left = '30%';
   main.style.borderLeft = '1px solid #bdbdbd';
   main.style.margin = '-2px';
   main.style.background = '-webkit-linear-gradient(white, #b3e5fc)';

   //stili aside
   aside.style.position = 'absolute';
   aside.style.width = '30%';
   aside.style.height = '100%';
   aside.style.margin = '-2px';
  
   aside.style.background = '-webkit-linear-gradient(white, #b3e5fc)';
   
   // title
   aside.appendChild(title);
   title.innerHTML = 'Memory Card Game';
   title.style.fontFamily = 'Concert One, cursive';
   title.style.textAlign = 'center';
   title.style.padding = '20px';
   title.style.fontSize = '50px';

   //stili form
   
   aside.appendChild(divForm);
   divForm.appendChild(form);
   divForm.style.position = 'relative';
   divForm.style.width = '100%';
   divForm.style.height = '50%';
   divForm.style.margin = '-3px';
   form.style.position = 'relative';
   form.style.display = 'flex';
   form.style.width = '80%';
   form.style.height = '100%';
   form.style.justifyContent = 'center';
   form.style.textAlign = 'center';
   form.style.padding ='0 auto';
   form.style.left = '30%';
   form.style.top = '30%';
   form.style.marginLeft = '-40%';
   form.style.marginTop = '-60%'
   form.style.backgroundColor = 'white';
   form.style.borderRadius = '20px';
   form.style.boxShadow = "10px 10px 100px #90caf9";
   form.style.margin ='-70px';
   form.style.flexDirection = 'column';
   form.style.justifyContent = 'center';
   form.style.alignItems = 'center';


   //inputName
   form.appendChild(inputName);
   inputName.style.position = 'absolute';
   inputName.style.margin = '0 auto';
   inputName.style.top = '40px';
   inputName.style.width = '80%';
   inputName.style.height = '13%';
   inputName.style.borderRadius = '20px';
   inputName.style.boxSizing = 'border-box';
   inputName.style.border = '1px solid #42a5f5';
   inputName.style.outline = 'none';
   inputName.setAttribute('placeholder', 'Nome');
   inputName.style.fontFamily = 'Concert One, cursive';
   inputName.style.textAlign ='center';
   inputName.style.fontSize = '20px';
   inputName.setAttribute('id','Name');
  

   //inputSurname
   form.appendChild(inputSurname);
   inputSurname.setAttribute('placeholder', 'Cognome');
   inputSurname.style.position = 'absolute';
   inputSurname.style.margin = '-1px';
   inputSurname.style.top = '100px';
   inputSurname.style.width = '80%';
   inputSurname.style.height = '13%';
   inputSurname.style.borderRadius = '20px';
   inputSurname.style.boxSizing = 'border-box';
   inputSurname.style.border = '1px solid #42a5f5';
   inputSurname.style.outline = 'none';
   inputSurname.style.marginTop ='20px';
   inputSurname.style.fontFamily = 'Concert One, cursive';
   inputSurname.style.textAlign ='center';
   inputSurname.style.fontSize = '20px';
   inputSurname.setAttribute('id','Surname');


   //submit Form
   form.appendChild(submit);
   submit.appendChild(text2);
   submit.setAttribute('value', 'submit');
   submit.setAttribute('type', 'submit');
   submit.setAttribute('id', 'submit');
   submit.setAttribute('state','unclicked');
   submit.position = 'absolute';
   submit.style.height ='40px';
   submit.style.width = '45%';
   submit.style.padding = '10px';
   submit.style.boxSizing = 'border-box';
   submit.style.borderRadius = '15px';
   submit.style.backgroundColor = '#81d4fa';
   submit.style.border ='none';
   submit.style.fontFamily ='Concert One, cursive';
   submit.style.color = '#29434e';
   submit.style.outline = 'none';
   submit.style.marginTop = '100px';
   submit.style.fontSize = '15px';

   //stile inizia partita

   main.appendChild(start);
   start.style.position ='fixed';
   start.style.display = 'flex';
   start.style.margin = '-10px';
   start.style.top = '0';
   start.style.bottom = '0';
   start.style.right = '0';
   start.style.left = '30%';
   start.innerHTML = 'Inserisci Nome e Cognome per iniziare a giocare';
   start.style.justifyContent = 'center';
   start.style.alignItems = 'center';
   start.style.fontSize = '2em';
   start.style.height = '98vh';
   start.style.backgroundColor ='rgba(255,255,255,0.9)';
   start.style.zIndex ='100';
   start.style.fontFamily = 'Concert One, cursive';
   start.style.flexWrap = 'wrap';




  // creo le cards
  function createDivs (main){
     for (let i = 0; i < 20; i++) {
        let div = document.createElement('div');
        content.appendChild(div);
        div.setAttribute('class', 'card');
        div.setAttribute('state', 'covered');
        div.setAttribute('solved', 'false');
        div.style.margin = '-50px';
        div.style.position = 'absolute';
        div.style.width = '130px';
        div.style.height = '130px';
        div.style.backgroundColor = '#4fc3f7';
        div.style.borderRadius = '7px';
        div.style.transition = 'top 1s linear, left 1s linear';
        div.style.marginLeft = '30px';
        div.style.marginTop = '10px';
       }
    }


   function styleDivs (emoji) {
       const divs = document.getElementsByClassName('card');
       let obj_keys = Object.keys(emoji);
       let obj_values = Object.values(emoji);
       let counter = 0;
       let j = 0;
        for (let i = 0; i < divs.length; i++) {
          let p = document.createElement('p');
           p.setAttribute('class', 'emoji');
            divs[i].appendChild(p);
            divs[i].style.display = 'flex';
            divs[i].style.justifyContent = 'center';
            divs[i].style.alignItems = 'center';
        }
       const p = document.getElementsByClassName('emoji');
        for (let e = 0; e < p.length; e++) {
            if (counter == 2) {
                j++;
                counter = 0;
            
                if (j == 10) {
                    break;
                }
            }
            counter++;
           let nodi = document.createTextNode(obj_keys[j]);
           p[e].appendChild(nodi);
           p[e].style.fontSize = '5rem';
           p[e].style.position = 'absolute';
           divs[e].setAttribute('data-image', obj_values[j]);
           
        }
   }

   
  function position (){
       var coordinates = [];
       let col = 0;
       let row = 0;
       let row_offset = 150;
       let col_offset = 140;
       let max_cards_row = 4;

       const div = document.getElementsByClassName('card');
       for (let i = 0 ; i < div.length; i++) {
           col++;
           div[i].style.top = col * col_offset - 30 + 'px';
           div[i].style.left = row * row_offset + 50  +'px';
           coordinates.push([div[i].style.top = col * col_offset - 30 + 'px', div[i].style.left = row * row_offset + 50  +'px'])  

           if (col == max_cards_row )
           {
                row++;
                col = 0;
           }
        }
        return coordinates;
   }

   

  const emoji2 = {
    '🙂':'happy',
    '🤑':'money_face',
    '😘':'kiss',
    '😓':'ugh',
    '✈':'airplane',
    '💸':'money',
    '🐔':'chicken',
    '💣':'boomb',
    '🍷':'wine'
    ,'😟':'face'
  }

   main.appendChild(content);   
   document.body.appendChild(main);
   document.body.appendChild(aside);
   createDivs(main);
   styleDivs(emoji2);
   coordinates = position(); 
   
  
   function shuffle ()
    {
        for (let i = 0; i < coordinates.length; i++)
        {
            let j = Math.floor(Math.random() * coordinates.length)
            var temp = coordinates[i];
            coordinates[i] = coordinates[j];
            coordinates[j] = temp;
        }
    } 

    function animate_shuffle ()
    {
        let index = 0;
        let cards = document.getElementsByClassName('card');
        for (let i= 0; i < cards.length; i++) 
        {
            cards[i].style.top = coordinates[index][0];
            cards[i].style.left = coordinates[index][1];
            index++;
        }
    } 

    ready_to_play = false;
    submit.addEventListener('click', function submit_click() {
          const Surname = document.getElementById('Surname').value;
          const Name = document.getElementById('Name').value;
          if ((Name.length <= 3 || Name.length >= 15) || (Surname.length <= 3 || Surname.length >= 15)){
              alert('I campi non sono corretti')
          }
          else{
            ready_to_play = true;
          }
          if (ready_to_play){
            main.removeChild(main.children[0]);
            submit.removeEventListener('click', submit_click);
              shuffle();
             setTimeout(animate_shuffle, 2000);
             setTimeout(() => {
                const cards2 = document.querySelectorAll("div.card")
                 const p = document.querySelectorAll("p")            
                 for (let j = 0; j < cards2.length; j++) {
                     p[j].style.visibility = "hidden";
                     const JsImage = document.createElement('img');
                     JsImage.src = 'js-badge.svg';
                     JsImage.style.width = '80%';
                     cards2[j].appendChild(JsImage);
                    }
                 cards2.forEach(card => card.addEventListener('click', flipCard))
             },3000);
        
             let selected_cards = [];
             let wait = false;
    
             function flipCard() {
                 const JsImage = document.createElement('img');
                 const JsImage2 = document.createElement('img');
                 JsImage.src = 'js-badge.svg';
                 JsImage2.src = 'js-badge.svg';
                 covered = this.getAttribute('state') == 'covered' ? true : false;
                 unsolved = this.getAttribute('solved') == 'false' ? true : false;
                 if(covered && unsolved && !wait) {       
                     this.setAttribute('state', 'flipped' )
                     this.removeChild(this.children[1]);
                     this.children[0].style.visibility = 'visible';
    
                     selected_cards.push(this);
                    
                     if(selected_cards.length == 2){
                         card1 = selected_cards[0];
                         card2 = selected_cards[1];
                    
                       
                            if (card1.getAttribute('data-image') == card2.getAttribute('data-image'))
                                {
                                console.log("MATCH");
                                card1.setAttribute('solved', 'true' );
                                card2.setAttribute('solved', 'true' );
    
                                selected_cards = [];
                                }
                            else
                            {   
                                wait = true;
                                setTimeout(() => {
                                    JsImage.style.width = '80%';
                                    JsImage2.style.width = '80%';
                                    card1.setAttribute('state','covered');
                                    card2.setAttribute('state','covered');
                                    card1.children[0].style.visibility = 'hidden';
                                    card2.children[0].style.visibility = 'hidden';
                                    card1.appendChild(JsImage2);
                                    card2.appendChild(JsImage);
                                    selected_cards = [];
                                    wait = false;
                                    }, 1500)
                                
                                }  
                        }
                    }  
                }
          }
          

        
        })
        var minuti = 0, secondi = 0, decimi = 0;
        function cronometro() {

            var stop = false;
            if(stop == false) {
                secondi++;
                if(secondi > 59) {
                    secondi = 0;
                    minuti++;
                }
                if(minuti > 59) {
                    minuti = 0;
                    ore++;
                }
               console.log(minuti,secondi);
               setTimeout(cronometro, 1000)
            }


        }
          
       cronometro();       
           
});


















/*function prodotto (ls, attributi) {
    let j = 0;
    let counter = 0;
    for (let index = 0; index < ls.length; index++) {
        
        if (counter == 2) {
            j++;
            counter = 0;
            

            if (j == 3) {
                break;
            }
            
        }
       
        
        counter++;
        let result =ls[index] * attributi[j];
        console.log(result);
     }

     
}
ls = [1,1,2,2,3,3];
attributi=[2,3,4]

console.log(prodotto(ls, attributi))*/