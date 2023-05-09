var signupdata=JSON.parse(localStorage.getItem("loginUser"));
		if(signupdata){
			location.href="../homepage/home.html"
		}
		else{


var result=JSON.parse(localStorage.getItem("bookDetails")) || [];
		
		var button=document.querySelector(".button");
		button.onclick=function(){
		
			var username=document.querySelector(".username").value;
			var newpassword=document.querySelector(".newpassword").value;
			var confirmpassword=document.querySelector(".confirmpassword").value;
			
			
			if(newpassword === confirmpassword){
			
				let dub = []
				for(let i=0; i<result.length; i++){
					if(username === result[i].user){
					console.log(result[i])
						if(newpassword !== result[i].password){
							console.log(username,newpassword,confirmpassword);
							let temp ={
								...result[i],
								password: newpassword
							}		
							dub.push(temp)
						}
					}
					else{
						dub.push(result[i])
					}
				}
				localStorage.setItem("data", JSON.stringify(dub))
				alert("changed!")
				window.location.href = "../login/login.html";
				return
			}
			else{
			
				alert("password not matching")
			}
			
		}
    }
			
