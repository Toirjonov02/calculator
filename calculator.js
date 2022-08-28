	function aktiv(ttt){
		let text = document.getElementById("text")
		text.value += ttt.value
	}
	function raqam(bbbbb,ttt){
		let text = document.getElementById("text")
		text.value += bbbbb
		
	}
	function amal(rrr){
		let text = document.getElementById("text")
		text.value += rrr.value
		
	}
	function hisobla(){
		let text = document.getElementById("text")
		let javob = eval(text.value)
		text.value = javob
	}
	function tozalash(){
		document.getElementById("text").value = ''
	}
	function rate(){
		let text = document.getElementById("text")
		// let javob= text/100
		// console.log(javob)
		text.value=text.value/100

	}
	function back(){
		var exp = document.getElementById("text").value
		// alert(text.value)
         // console.log(exp.value)
          document.getElementById("text").value = exp.substring(0, exp.length-1);
	}