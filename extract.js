var str = "";
var schtable = document.getElementById("table4").getElementsByTagName("tbody")[0];
var len = schtable.rows[2].cells.length;
for(var i = 0; i < 98; i++) {
	if(i!=1){
		for(var j = 0; j < len; j++) {
			temp = schtable.rows[i].cells[j].innerHTML.trim();
			temp = temp.replace(/ /g,'');
			str += temp + "\t";
			
		}
		str += "\n";
	}
}
str += "Total Mus " + "\t";
var colSum = 0;
var cellVal = 0;
 for(var col = 1; col < len; col++) {
	colSum = 0;
	for(var row = 2; row < 98; row++) {
		cellVal = schtable.rows[row].cells[col].innerHTML.trim();
		cellVal = Number(cellVal);
		if(!isNaN(cellVal)){
			//valid cell value
			colSum += cellVal;
		}
	}
	str += colSum/4000 + "\t";
}
str += "\n";
str += "MAX" + "\t";
var colMax = -100000;
var cellVal = 0;
 for(var col = 1; col < len; col++) {
	colMax = -100000;
	for(var row = 2; row < 98; row++) {
		cellVal = schtable.rows[row].cells[col].innerHTML.trim();
		cellVal = Number(cellVal);
		if(!isNaN(cellVal)){
			//valid cell value
			if(cellVal>colMax){
				colMax = cellVal;
			}
		}
	}
	str += colMax + "\t";
}
str += "\n";
str += "MIN " + "\t";
var colMin = 100000;
var cellVal = 0;
 for(var col = 1; col < len; col++) {
	colMin = 100000;
	for(var row = 2; row < 98; row++) {
		cellVal = schtable.rows[row].cells[col].innerHTML.trim();
		cellVal = Number(cellVal);
		if(!isNaN(cellVal)){
			//valid cell value
			if(cellVal<colMax){
				colMin = cellVal;
			}
		}
	}
	str += colMin + "\t";
}

if(!document.getElementById("CONSOLE")){
	var newDiv = document.createElement("textarea"); 
	newDiv.setAttribute("id", "CONSOLE");
	newDiv.style.width = "600px";
	newDiv.style.height = "600px"
	var newContent = document.createTextNode(str); 
	newDiv.appendChild(newContent); //add the text node to the newly created div. 
	document.body.appendChild(newDiv);
	} else{
	document.getElementById("CONSOLE").innerHTML = str;
}
//document.body.style.backgroundColor = "#99b3ff"
window.scrollTo(0,document.body.scrollHeight);
document.getElementById("CONSOLE").focus();
document.getElementById("CONSOLE").select();
document.execCommand('Copy');
alert("Text selected and Copied!!!");