//Write a program to  Count all duplicate elements present in an array?


let arr=[2,1,3,4,5,6,4,3,2];
let count=0;
for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
        if(arr[i]==arr[j]){
            count++;
        }
    }
}
console.log(count);