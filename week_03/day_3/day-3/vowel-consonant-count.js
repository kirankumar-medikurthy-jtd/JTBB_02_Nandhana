//Write a program to count all vowels and consonants present in a string?
//Example : input : “jtbfoundation”
//Output : 4


let str="jtdfoundation";
let vowelcount=0;
let consonantcount=0;
for(i=0;i<str.length;i++){
    if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"){
        vowelcount++
    }else{
        consonantcount++;
    }
}
console.log(vowelcount);
console.log(consonantcount);
