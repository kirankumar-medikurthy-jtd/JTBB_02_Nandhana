//Write a program to check to print indices of three numbers present in an array, whose sum is equal to target value ?
//Example : input  : Array = [2,3,4,6,8,1];     Target : 13
//Output = 1,2,3

let arr = [2,3,4,6,8,1];
let m=13;
let a=0;
let b=0;
let c=0;
for(let i=0;i<arr.length-1;i++){
    for(let j=i;j<arr.length-1;j++){
        for(k=j+1;k<arr.length-1;k++){
        if(arr[i]+arr[j]+arr[k]==m){
            a=i;
            b=j;
            c=k;
        }
    }
}
}
console.log(a,b,c);
