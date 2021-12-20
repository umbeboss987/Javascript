import Game from './Game.js';

window.addEventListener('load', function() {
    this.document.body.style.display = 'flex';
    this.document.body.style.justifyContent = 'center';
    document.body.style.backgroundColor = '#673ab7'

    const game = new Game ();

   let start = game.init();

   document.body.appendChild(start);
  // document.body.appendChild(stopWatch);



})