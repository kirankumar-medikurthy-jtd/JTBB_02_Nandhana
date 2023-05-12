let hourHeading=document.getElementById("hour");
let minHeading=document.getElementById("minute");
let secHeading=document.getElementById("sec");
let milliHeading=document.getElementById("milli");
let hour=0;
let minute=0;
let seconds=0;
let milliseconds=0;

setInterval(() => {
    milliseconds++;
    if(milliseconds==60) {
    seconds++;
    secHeading.innerText=(seconds<10)? `0${seconds}`: seconds;
    milliseconds=0;
    }
   if(seconds==60) {
    minute++;
    minHeading.innerText=(minute< 10)?`0${minute}`:minute;
    seconds=0;
   }
   if(minute==60){
    hour++;
    hourHeading.innerText=(hour< 10)?`0${hour}`:hour;
    minute=0;
   }
   console.log(milliseconds,seconds,minute,hour);
   milliHeading.innerText= (milliseconds< 10)?`0${milliseconds}`:milliseconds;
}, 100);