let button = document.querySelector(".btn");
var add = JSON.parse(localStorage.getItem("tododata")) || [];




		//creating Table Heading
		let CreateTable = document.createElement("table");
		let tableRow = document.createElement("tr");
		let tableHead = document.createElement("th");
		tableHead.textContent = "Sudent Name";
		let tableHead1 = document.createElement("th");
		tableHead1.textContent = " Marks";
		let tableHead2 = document.createElement("th");
		tableHead2.textContent = "Grade ";
		let tableHead3 = document.createElement("th");
		tableHead3.textContent = "Delete";

		
		// appending all table head to the table row tag
		tableRow.append(tableHead,tableHead1,tableHead2,tableHead3);
		
		//appending table row into the table
		CreateTable.appendChild(tableRow);
	
	
		//appending the table into the Display
		let display = document.querySelector(".display");
		display.appendChild(CreateTable);





        button.onclick = function() {
			let name = document.querySelector(".name").value;
			let marks = document.querySelector(".marks").value;
			let grade = document.querySelector(".grade").value;

            if (name === "" && marks === "" && grade === ""){
                alert("todo list is empty");
            }
            else{
			// appending the form information to the table
			let tableRow = document.createElement("tr");
			let tableData = document.createElement("td");
			tableData.textContent = name;
			let tableData1 = document.createElement("td");
			tableData1.textContent = marks;
			let tableData2 = document.createElement("td");
			tableData2.textContent = grade;
			let tableData3 = document.createElement("button");
			 tableData3.textContent = "delete"
             tableData3.style.backgroundColor = "red";
             tableData3.setAttribute("deleting","class");
             tableData3.style.padding = "10px 25px";

			
			// appending all table head to the table row tag
			tableRow.append(tableData,tableData1,tableData2,tableData3);
			CreateTable.appendChild(tableRow);
			
			//appending the table into the DisplayTableDetails
			let display = document.querySelector(".display");
			display.appendChild(CreateTable);
			console.log(name,marks,grade);


            tableData3.onclick=function(){
                    tableRow.remove();
            }
            // if (name === "" && marks === "" && grade === ""){
            //     alert("todo list is empty");
            // }else{
               alert("student details added to todo list");
               localStorage.setItem("tododata", JSON.stringify([...add, { name, marks, grade }]));
               console.log(localStorage.getItem("tododata"));
            }
       // }

        
        


        }
		

             





