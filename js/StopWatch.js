import setStyles from './utils/utils.js'

class StopWatch {

    stop = false;

    constructor(){
      return  this.start();
    }

    start(){
        let seconds = 0;
        let minutes = 0;
        const stopWatch = document.createElement('div');
        const minute = document.createElement('div');
        const second = document.createElement('div');

        setStyles(minute,{
            heigth: '70px',
            width: '100px',
            textAlign : 'center',
            fontSize: '30px',
            verticalAlign: 'middle',
            lineHeight: '60px'    
        })
        setStyles(second,{
            heigth: '70px',
            width: '100px',
            borderLeft : '1px solid black',
            textAlign : 'center',
            fontSize: '30px',
            verticalAlign: 'middle',
            lineHeight: '60px'    

        })
        setStyles(stopWatch,{
            width: '200px',
            height: '70px',
            display: 'flex',
            backgroundColor : 'rgb(46,207,237)',
            borderRadius : '15px',
            border : 'none'
        })
       if(!this.stop){
            setInterval(() =>{
                    seconds++
                    if(seconds == 60){
                        minutes++;
                        seconds = 0;
                    }

                    minute.innerHTML = minutes;
                    second.innerHTML = seconds
            },1000);
        }
        stopWatch.appendChild(minute);
        stopWatch.appendChild(second); 
        
        return stopWatch;
    }
}


export default StopWatch;