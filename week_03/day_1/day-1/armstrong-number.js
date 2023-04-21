//Write a program to check  whether a given number is an armstrong number or not?

let num=153;
let temp=num;
let k=0;
while(num>0){
    r=num%10;
    k=k+(r*r*r);
    num=Math.floor(num/10)
}
if(temp==k){
    console.log("armstong number")
}
else{
    console.log("not a armstrong number")
}