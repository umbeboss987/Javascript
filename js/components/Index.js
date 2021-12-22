import Game from './Game.js';

window.addEventListener('load', function() {
    this.document.body.style.display = 'flex';
    this.document.body.style.justifyContent = 'center';
    document.body.style.backgroundColor = '#673ab7'
    document.body.style.width = '100vw'
    document.body.style.height = '100vh'
    document.body.style.margin = '0'


    const game = new Game ();

//   let start = game.init();

   document.body.appendChild(game);
  // document.body.appendChild(stopWatch);



})