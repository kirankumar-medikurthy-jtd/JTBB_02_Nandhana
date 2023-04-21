//Write a program to calculate the sum of digits present in a number?
//Example : input : 124, output : 7


let number = 124;
let ans;
let sum = 0;
while(number){
    ans = number % 10;
    sum = sum + ans;
    number = Math.floor(number/10);
}
console.log(sum);
