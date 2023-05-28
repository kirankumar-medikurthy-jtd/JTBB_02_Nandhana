let button = document.querySelector(".button");
var result=JSON.parse(localStorage.getItem("signupdata")) || [];

button.onclick = function(){
    var name=document.querySelector(".name").value;
	var user=document.querySelector(".user").value;
	var email=document.querySelector(".email").value;
	var phone=document.querySelector(".phone").value;
    console.log(name,user,email,phone);

    if(name !== "" && user !== "" && email !== "" && phone !== ""){
			
		for(let i=0; i<result.length; i++){
            if(result[i].user === user){
				alert("User already exist");
				return;
			}
		}
    }else{
        alert("Please enter all data")
    }


    localStorage.setItem("signupdata",JSON.stringify({name,user,email,phone}));
   // alert("signup successful");
    console.log(localStorage.getItem("signupdata"));

}
let display = document.querySelector(".display");
var data=JSON.parse(localStorage.getItem("signupdata")) || [];

if(data){

for(let i=0; i<data.length; i++){

    let div=document.createElement("div");
    div.setAttribute("class", "card")
    div.setAttribute("id", "card")

    let name = document.createElement("h3");
    name.innerText = result.name;

    let user = document.createElement("h3");
    user.innerText = result.user;
    
    let email = document.createElement("h3");
    email.innerText = result.email;

    let phone = document.createElement("h3");
    phone.innerText = result.phone;

    div.setAttribute("onClick", `displayCard(${i})`)

    div.append(name,user,email,phone);
    console.log(div);

    display.append(div);


}


function displayCard(totalusers){
    localStorage.setItem("onlyuser",JSON.stringify(data[totalusers]))
    console.log(data[totalusers])
   window.location.href="../oneuser/oneuser.html"

}

}



