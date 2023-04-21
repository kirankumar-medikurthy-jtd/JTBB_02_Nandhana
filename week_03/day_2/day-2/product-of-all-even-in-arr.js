//Write a program to calculate a product of all even numbers present in an array?


let arr = [1,2,3,4,5];
	let even = 1;
	for (let i = 0; i < arr.length; i++) {
		if (i % 2 == 0)
			even *= arr[i];
	}
	console.log(even);



	

	



