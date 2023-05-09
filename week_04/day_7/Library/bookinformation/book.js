let bookdisplay=document.querySelector(".bookdisplay");
let result=JSON.parse(localStorage.getItem("bookinformation"));
let totalData=JSON.parse(localStorage.getItem("bookDetails"));
if(result){

let name = document.createElement("h2");
name.textContent = "BookName:"+result.name;
name.style.marginLeft="30%";


let author = document.createElement("h3");
author.textContent = "Author:"+result.authour;
author.style.marginLeft="30%";

let year=document.createElement("h3");
year.textContent="Year:"+result.year;
year.style.marginLeft="30%";

let type=document.createElement("h3");
type.textContent="Type:"+result.type;
type.style.marginLeft="30%";

let publisher=document.createElement("h3");
publisher.textContent="Publisher:"+result.publisher;
publisher.style.marginLeft="30%";

let rate = document.createElement("h3");
rate.textContent = "rate : " + result.rate;
rate.style.marginLeft="30%";

let avatar = document.createElement("img");
avatar.setAttribute("src", result.avatar);
avatar.style.marginLeft="40%";
avatar.style.marginTop="30px";

let edit = document.createElement("button");
edit.textContent = "Edit"; 
edit.style.marginLeft="30px";

let element = document.createElement("button");
element.textContent = "Delete";
element.style.marginLeft="310px";

bookdisplay.append(avatar,name,author,year,type,publisher,rate,edit,element);

  element.onclick = function(){
let dub=[];
for(let i=0; i<totalData.length; i++){
  if(result.serial_number != totalData[i].serial_number){
    dub.push(totalData[i])
  }else{
    console.log(totalData[i],result)
  }
}

localStorage.removeItem("bookDta");
localStorage.setItem("bookDetails",JSON.stringify(dub))
alert("successfully deleted");
window.location.href="../viewbook/view.html";   
 }

 
edit.onclick = function(){
  bookdisplay.innerHTML= ""
  let namediv = document.createElement("div");
  let nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text")
  nameInput.setAttribute("value", result.name)
  nameInput.setAttribute("class", "NAME");
  namediv.append(nameInput);

  let authordiv = document.createElement("div");
  let authorInput = document.createElement("input");
  authorInput.setAttribute("type", "text")
  authorInput.setAttribute("value", result.authour);
  authorInput.setAttribute("class", "AUTHOR");
  authordiv.append(authorInput);

  let yeardiv = document.createElement("div");
  let yearInput = document.createElement("input");
  yearInput.setAttribute("type", "text")
  yearInput.setAttribute("value", result.year);
  yearInput.setAttribute("class", "YEAR");
  yeardiv.append(yearInput);

  let typediv = document.createElement("div");
  let typeInput = document.createElement("input");
  typeInput.setAttribute("type", "text")
  typeInput.setAttribute("value", result.type);
  typeInput.setAttribute("class", "TYPE");
  typediv.append(typeInput);

  let publisherdiv = document.createElement("div");
  let publisherInput = document.createElement("input");
  publisherInput.setAttribute("type", "text")
  publisherInput.setAttribute("value", result.publisher);
  publisherInput.setAttribute("class", "PUBLISHER");
  publisherdiv.append(publisherInput);

  let ratediv = document.createElement("div");
  let rateInput = document.createElement("input");
  rateInput.setAttribute("type", "text")
  rateInput.setAttribute("value", result.rate);
  rateInput.setAttribute("class", "RATE");
  ratediv.append(rateInput);




  let done = document.createElement("div");
  done.textContent = "Done";
  done.setAttribute("class", "butn")
  
  done.onclick = function(){

    var name=document.querySelector(".NAME").value;
		var authour=document.querySelector(".AUTHOR").value;
		var year=document.querySelector(".YEAR").value;
		var publisher=document.querySelector(".PUBLISHER").value;
		var type=document.querySelector(".TYPE").value;
    var rate=document.querySelector(".RATE").value;
		
    let obj ={name, authour, year,publisher,type,rate}


    localStorage.setItem("bookinformation", JSON.stringify({...result, ...obj}))

      let arr=[];
      for(let i=0; i<totalData.length; i++){
        if(totalData[i].serial_number === result.serial_number){
         arr.push({...result, ...obj});
        }
        else{
          arr.push(totalData[i])
        }
      }
      alert("edited successfully");
      localStorage.setItem("bookDetails", JSON.stringify(arr))
        window.location.href="../bookinformation/book.html"

  }


  

  bookdisplay.append(avatar, namediv,authordiv,yeardiv,typediv,publisherdiv,ratediv, done)

  // bookdisplay.append(avatar,nameInput,authorInput,yearInput,typeInput,publisherInput,rateInput,done);
  
}

}else{
  window.location.href="../viewbook/view.html";
}

