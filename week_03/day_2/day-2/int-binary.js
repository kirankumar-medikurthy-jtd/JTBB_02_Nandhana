//Write a program to Convert Integer  into  a Binary?


let number = 92; 
		
    let binary = ""; 

		while(number > 0)
	        {
		    let remainder = number % 2; 
		    binary = remainder+binary; 
		    number = Math.floor(number / 2); 
		}

		 console.log(binary);