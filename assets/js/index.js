const Timer = document.querySelector('.Watch');
const pause = document.querySelector('.Pause');
const resume = document.querySelector('.Resume');
const cancel = document.querySelector('.Stop');


let sec = 0; 
let min = 0;
let hr = 0;
let interval;

function start(){

    interval = setInterval(watch,1000);
    
}

function stop(){
    clearInterval(interval);
}

function cancelAct(){
    clearInterval(interval);
    hr = 0
    min = 0 
    sec = 0
    Timer.innerText='00:00';
    
}

function watch(){
    sec++
    if(sec == 60){
        min++
        sec=0
    }if(min == 60){
        hr++
        min=0
        sec=0
    }
    if(hr == 24){
        alert("please go take a rest")
        hr = 0
        min = 0
        sec = 0
        clearInterval(interval)
    }
    
    let result = `${hr < 10 ? '0' + hr :hr}:${min < 10 ? '0' + min :min}:${sec < 10 ? '0' + sec :sec}`

    Timer.innerText= result
    
}


resume.addEventListener('click',start);

pause.addEventListener('click',stop);

cancel.addEventListener('click',cancelAct)