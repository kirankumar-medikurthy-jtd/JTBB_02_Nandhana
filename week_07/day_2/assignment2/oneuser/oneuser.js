let oneuser = document.querySelector(".oneuser");
let result=JSON.parse(localStorage.getItem("signupdata"));
let totalusers = JSON.parse(localStorage.getItem("totalusers"));

if(result){

    let name = document.createElement("h3");
    name.innerText = result.name;

    let user = document.createElement("h3");
    user.innerText = result.user;
    
    let email = document.createElement("h3");
    email.innerText = result.email;

    let phone = document.createElement("h3");
    phone.innerText = result.phone;

    let edit = document.createElement("button");
    edit.textContent = "Edit"; 

    let element = document.createElement("button");
    element.textContent = "Delete";

    oneuser.append(name,user,email,phone,edit,element);


element.onclick = function(){
    let arr=[];
    for(let i=0; i<totalusers.length; i++){
      if(result.user != totalusers[i].user){
        arr.push(totalusers[i])
      }else{
        console.log(totalusers[i],result)
      }
    }
    
    localStorage.removeItem("userDta");
    localStorage.setItem("signupdata",JSON.stringify(arr))
    alert("successfully deleted");
}

edit.onclick = function(){
    oneuser.innerHTML= "";

    let NAME = document.createElement("div");
    let NAMEInput = document.createElement("input");
    NAMEInput.setAttribute("type", "text")
    NAMEInput.setAttribute("value", result.NAME)
    NAMEInput.setAttribute("class", "NAME");
    NAME.append(NAMEInput);

    let USER = document.createElement("div");
    let USERInput = document.createElement("input");
    USERInput.setAttribute("type", "text")
    USERInput.setAttribute("value", result.USER)
    USERInput.setAttribute("class", "USER");
    USER.append(USER);

    let EMAIL = document.createElement("div");
    let EMAILInput = document.createElement("input");
    EMAILInput.setAttribute("type", "text")
    EMAILInput.setAttribute("value", result.EMAIL)
    EMAILInput.setAttribute("class", "EMAIL");
    EMAIL.append(EMAIL);

    let PHONE = document.createElement("div");
    let PHONEInput = document.createElement("input");
    PHONEInput.setAttribute("type", "text")
    PHONEInput.setAttribute("value", result.PHONE)
    PHONEInput.setAttribute("class", "PHONE");
    PHONE.append(PHONE);

    let done = document.createElement("div");
    done.textContent = "Done";
    done.setAttribute("class", "butn")
    
    done.onclick = function(){
  
    var name=document.querySelector(".NAME").value;
    var user=document.querySelector(".USER").value;
    var email=document.querySelector(".EMAIL").value;
    var phone=document.querySelector(".PHONE").value;
   
          
      let obj ={name, user, email,phone}
  
  
      localStorage.setItem("signupdata", JSON.stringify({...result, ...obj}))
  
        let arr=[];
        for(let i=0; i<totalusers.length; i++){
          if(totalusers[i].user === result.user){
           arr.push({...result, ...obj});
          }
          else{
            arr.push(totalusers[i])
          }
        }
        alert("edited successfully");
        localStorage.setItem("oneuserdata", JSON.stringify(arr))

}

}
}