let x = document.querySelector(".a");
let y = document.querySelector(".b");
let z = document.querySelector(".c");

setInterval(()=>{
    const now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    x.innerHTML = (hour);
    y.innerHTML = (minutes);
    y.innerHTML = (minutes < 10) ? `0${minutes}` : minutes;
    z.innerHTML = (seconds);
    z.innerText = (seconds < 10)? `0${seconds}`: seconds;


},1000)
