var timer = document.querySelector("#timer");
var startbtn = document.querySelector("#start");
var stopbtn = document.querySelector("#stop");
var resetbtn = document.querySelector("#reset");
	//var time = "00:00:00:00";
	var milliseconds = 0;
  	var seconds = 0;
  	var minutes = 0;
	var hours = 0;
	var watch;
	function startTimer(){
		//console.log("yes")
		watch=setInterval(function(){
			milliseconds++;
			if(milliseconds==60) {
				milliseconds=0;
				seconds++;
			//}
		
	   		if(seconds==60) {
				seconds=0;
				minutes++;
	   		//}
	   
	   		if(minutes==60){
				minutes=0;
				hours++;
	   		}
		}
	}
	
			timer.innerHTML = timing(hours)+":"+timing(minutes)+":"+timing(seconds)+":"+timing(milliseconds);
		}, 100);
	}

		function stopTimer(){
			clearInterval(watch);
			//console.log("no")
		}
		function resetTimer(){
			clearInterval(watch);
			hours = 0;
			minutes = 0;
			seconds = 0;
			//milliseconds = 0;
			timer.innerHTML = "00:00:00:00";
		}
		function timing(integer){
			var string = integer + "";
			if(string<10){
				return "0"+string;
				}else{
					return string;
			}
		}
			startbtn.addEventListener('click',startTimer);
			stopbtn.addEventListener('click',stopTimer);
			resetbtn.addEventListener('click',resetTimer);




