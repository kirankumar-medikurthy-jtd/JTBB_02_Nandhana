//Write a program to print all odd length palindrome words present in a sentence.
//Input : String = “madam speak malayalam fluently”
//Output : madam, malayalam

let str = "madam speak malayalam fluently";
let start  = 0;
let prePoint = 0;
while(start < str.length){
    while(start < str.length && str.charAt(start) != ' '){
   	 start ++;
   	 }
   	 let temp = str.substring(prePoint,start);
   	 if(temp.length % 2 != 0 && Palindrome(temp)){
   		 console.log(temp+" ");
   		 }
   		 start = start + 1;
   		 prePoint = start;
   	 }
function Palindrome(str){
    let start = 0;
    let end = str.length-1;
    while(start < end){
   	 if(str.charAt(start) != str.charAt(end)){
   		 return false;
   	 }
   	 start ++;
   	 end --;
    }
    return true;
}

