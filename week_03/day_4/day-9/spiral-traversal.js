let matrix=[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
let row = 4;
let col = 4;
let t=0;
let b=row-1;
let l=0;
let r=col-1;
let result="";
while(t<=b  && l<=r){
    for(let i=t;i<=b;i++){
        if(i==l){
            result+=matrix[i][i]+" ";
        }
        if(i==r){
            result+=matrix[i][i]+" ";
        }
    }
    let m = t;
    for(let i=b;i>=t;i--){
        if(i==l){
            result+=matrix[i][m]+" ";
        }
        if(i==r){
            result+=matrix[i][m]+" ";
        }
        m++
    }
    t++;
    b--;
    l++;
    r--;
}
console.log(result);