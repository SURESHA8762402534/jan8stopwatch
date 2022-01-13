let seconds = 0;
let minutes = 0;
let hours = 0;
let displaysec = 0;
let displaymin = 0;
let displayhr = 0;
let interval = null;

function stopwatch(){

    seconds++;

    if(seconds/60 == 1){
        seconds = 0;
        minutes++;

       if(minutes/60 == 1){
           minutes =0;
           hours++;
    }
}

if(seconds<10){
    displaysec = "0" + seconds;
}else{
    displaysec= seconds;
}
if(minutes<10){
    displaymin = "0" + minutes;
}else{
    displaymin = minutes;
}
if(hours<10){
    displayhr = "0" + hours;
}else{
    displayhr = hours;
}

    document.getElementById("display").innerHTML = displayhr + ":" + displaymin + ":" + displaysec;
}

//function for start stop

let btn1 = document.getElementById('btn1');
/*
btn1.addEventListener('click',() => {
    if(btn1.innerText == 'start'){
        btn1.innerText = 'stop';
        window.setInterval(stopwatch, 1000);

    }

     if(btn1.innerText == 'stop'){
         btn1.innerText ='start';
         window.clearInterval(stopwatch);
     }
    
})*/

let statuse = "stopped";

function startstop(){
    if(statuse === 'stopped'){
        statuse = 'started';
        interval = window.setInterval(stopwatch, 1000);
        btn1.innerHTML = 'stop';
    }else{
        statuse = 'stopped';
        window.clearInterval(interval)
        btn1.innerHTML = 'start'
    }
}

//function for reset

function reset(){
    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    btn1.innerHTML = 'start';
    document.getElementById('display').innerHTML = '00:00:00';
    
}

//fo lap function

function lap(){
    let display = document.getElementById('display').innerHTML;
    let para = document.createElement('p');
    para.classList.add('li')
    //let node = document.createTextNode('this is a para');
    //para.appendChild(node);

    para.innerHTML = display;

    let lap = document.getElementById('list');
    lap.appendChild(para)

    //alert('clicked')
}