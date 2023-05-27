let button = document.querySelector(".button");
button.onclick = function(){
    let div = document.createElement("div");
    let first = document.querySelector(".first");
    let last = document.querySelector(".last");
    let delay = document.querySelector(".delay");
    button.append(first,last,delay);
    // let display = document.querySelector(".display");
    // display.append(div);
}
