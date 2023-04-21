//write a program to convert  integer into binary?

let number=2;
let binary="";
while(number>0){
   // binary=(number%2)+binary;
   // number=Math.floor(number/2);
    //return binary;
    let remainder=number%2;
    binary=remainder+binary;
    number=Math.floor(number/2);

}
console.log(binary);





