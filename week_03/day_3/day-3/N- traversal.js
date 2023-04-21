//Write a program to print “N” Traversal  elements present in an array?
//Example : Input  : [[1 3  4][6 3 2][9 2 10]]                          
// Output :  9 6 1 3 10 2 4


let arr=[[1,3,4],[6,3,2],[9,2,10]];
let row=3;
let col=3;
for(let i=row-1; i>=1; i--){
    console.log(arr[i][0]);
}
let i=0;
let j=0;
while(i<row-1 && j<col){
    console.log(arr[i][j]);
    i++;
    j++;
}
for(let i=row-1; i>=0; i--){
    console.log(arr[i][col-1]);
}