let button = document.querySelector(".button");
function view(){
    let first = document.querySelector(".first").value;
    let last = document.querySelector(".last").value;
    let delay = document.querySelector(".delay").value;

    setTimeout(function(){
        var name = first+last;
        document.querySelector(".display").textContent = name;
    },delay *  500);
}
