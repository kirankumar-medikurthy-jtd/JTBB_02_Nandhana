//Write a program to check and reverse all words present in a string?
//Example : input : “Welcome to the JTBB bootcamp”;
                 //Output : “emoclew ot eht bbtj pmactoob”;

                 let str="Welcome to the JTBB bootcamp";
                 let arr=str.split('');
                 let start=0;
                 let end=str.length-1;
                 while(start<end){
                    let temp=arr[start];
                    arr[start]=arr[end];
                    arr[end]=temp;
                    start++;
                    end--;
                 }
                 console.log(arr.join(''));
