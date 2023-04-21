//Write a program to print “Z” Traversal  elements present in an array?
//Example : Input  : [[1 3  4][6 3 2] [9 2 10]]                          
//Output :  1 3 4 3 9 2 10

let arr=[[1,3,4],[6,3,2],[9,2,10]];
let row=3;
let col=3;
for(let j=0; j<col-1; j++){
    console.log(arr[0][j]+" ");
}
let i=0;
let j=col-1;
while(i<row&&j>=0){
    console.log(arr[i][j]+" ");
    i++;
    j--;
}
for(let i=1; i<col;i++){
    console.log(arr[row-1][i]);
}
