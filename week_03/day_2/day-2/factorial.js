//Write a program to calculate a factorial of a number?
//Example :  Input : 5
                 // Output : 120

var number = 5;
 if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
}
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(fact);
}


//let fact=1;
//let n=5;
//if(n==0||n==1){
    //console.log(n);
//}else{
    //for(let i=1; i<=n; i++){
        //fact=fact*i;
    //}
    //console.log(fact);
//}
