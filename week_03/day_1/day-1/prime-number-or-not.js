//Write a program to check whether a given number is prime or not?

let count=0;
let number=4;
for(let i=0; i<=number; i++){
    if(number%i==0){
        count++;
    }
}
if(count==2){
    console.log("prime number");
}else{
    console.log("not a prime number");
}

