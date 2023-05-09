//var data=JSON.parse(localStorage.setItem("bookDetails"));

		var button=document.querySelector(".button");
		var addbook=JSON.parse(localStorage.getItem("bookDetails")) || [];
		button.onclick=function(){
			var name=document.querySelector(".name").value;
			var authour=document.querySelector(".author").value;
			var year=document.querySelector(".year").value;
			var publisher=document.querySelector(".publisher").value;
			var type=document.querySelector(".type").value;
            var prize=document.querySelector(".prize").value;
            var rate=document.querySelector(".rate").value;
			var serial_number=document.querySelector(".serial").value;
			
			
			console.log(name,authour,year,publisher,type,prize,rate);
			
            let addbook=JSON.parse(localStorage.getItem("data"))||[];
			localStorage.setItem("data",JSON.stringify([...addbook,{name,authour,year,publisher,type,prize,rate, serial_number}]));
			console.log(localStorage.getItem("data"));
			alert("book added succesfully")
			window.location.href="../viewbook/view.html"
		}
		
