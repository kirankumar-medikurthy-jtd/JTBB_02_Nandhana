//Write a program to print all border elements present in a 2d array??
//Example : Input 1 : [[1 3  4][6 3 2][9 2 10]]                          
       //Output1 :  1  6 9 2 10 2 4 3     


let arr=[[1,3,4],[6,3,2],[9,2,10]];
let row=3;
let col=3;
for(let i=0;i<row;i++){
    console.log(arr[i][0]);
}
for(let i=1;i<col;i++){
    console.log(arr[row-1][i]);
}
for(let i=row-2;i>=0;i--){
    console.log(arr[i][col-1]);
}
for(let i=col-2;i>=1;i--){
    console.log(arr[0][i]);
}

