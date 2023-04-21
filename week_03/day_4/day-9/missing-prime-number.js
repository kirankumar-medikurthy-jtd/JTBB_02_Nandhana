//Write a program to find the all missing number prime numbers  present in an array
//Input: arr[] = {2, 8, 7,4 , 6, 9, 11} 3,5,8,10
//Output:   3, 5


let arr = [ 2,8, 7, 9, 11];
let array=[];
let min = Infinity;
let max = -Infinity;
let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i]
  }
  else if (arr[i] > max) {
    max = arr[i]
  }
}
let result = []
for (let i = 0; i <= 11; i++) {
  result[i] = 0
}
for (let i = min; i <= max; i++) {
  result[i] += 1
}
for (let i = 0; i < arr.length; i++) {
  result[arr[i]] += 1
}

for (let i = 0; i <= result.length; i++) {
    if (result[i] == 1) {
      array.push(i);
      //console.log(i)
    }
}
console.log(array)
for(let i=0;i<array.length;i++){
    let factor=0;
    for(let j=0;j<i;j++){
        if(i%j==0){
        factor++;
        break;
    }
}
if(factor==0){
    console.log(i)
}
}