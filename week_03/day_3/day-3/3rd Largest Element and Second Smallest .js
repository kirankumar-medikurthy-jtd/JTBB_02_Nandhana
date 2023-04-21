//Write a program to find 3rd Largest Element and Second Smallest Element in an array
//Example : input :Array = [3,8,19,3,2,7,6], output :  7,3

let arr = [3,8,19,3,2,7,6];
let min=arr[0];
let secondMin=arr[0];
let next=arr[0];
let thirdmin=arr[0];
let last=arr[0];
for(let i=0;i<arr.length;i++){
    if(arr[i]<min){
        secondMin=min;
        min=arr[i];
    }else if(arr[i]<secondMin){
        thirdmin=secondMin;
        secondMin=arr[i];
    }else if(arr[i]>thirdmin){
        next=thirdmin;
        thirdmin=arr[i];
    }else if(arr[i]>next){
        last=next;
        next=arr[i];
    }else if(arr[i]>last){
        last=arr[i];
    }
}
console.log(last+","+secondMin);


