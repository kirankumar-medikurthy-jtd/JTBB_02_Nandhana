//Write a program to calculate a  sum of left diagonal and right diagonal elements present in 2D arrays?
//Example : Input  : [[1 3  4][6 3 2][9 2 10]]                          
		//Output :  27



let arr =[[1,3,4],[6,3,2],[9,2,10]];
	let rows = 3;
	let columns = 3;
	let sum = 0;
	let result="";
		
		for(let i = 0; i < rows; i++)
		{
			for(let j = 0; j < columns; j++)
			{
				if((i==0 && j==0 || i==1 && j== 1 || i==rows-1 && j==columns-1)||(j==columns-1 && i==0 || i==rows-1 && j==0))
				{
					result+=arr[i][j]+" ";
					 sum+=arr[i][j];
				
				}
			}
		} 
	//	console.log(result);
		console.log(sum);