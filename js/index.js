var updateInterval = setInterval(updateTime, 1000);
var timeArr = [];
var hextimeArr = [];
var shadowArr = [];
var hex = true;

function updateTime() {
	getTimes();
	createShadowArray();
	normalizeTimes();

	var timetext = ""+timeArr[0]+":"+timeArr[1]+":"+timeArr[2];
	var timetexthex = "#"+hextimeArr[0]+hextimeArr[1]+hextimeArr[2]

	if(hex) {
		updateText(timetexthex);
	}else {
		updateText(timetext);
	}

	updateShadow();
	setBackground(timetexthex);
}

function getTimes() {
	var dt = new Date();
	timeArr = [];
	timeArr.push(dt.getHours());
	timeArr.push(dt.getMinutes());
	timeArr.push(dt.getSeconds());
	
	hextimeArr = [];
	hextimeArr.push(dt.getHours());
	hextimeArr.push(dt.getMinutes());
	hextimeArr.push(dt.getSeconds());
}

function updateShadow() {
	$("#time").css('text-shadow', '-5px 5px 0px rgba('+shadowArr[0]+','+shadowArr[1]+','+shadowArr[2]+',1.0), -8px 8px 0px rgba('+shadowArr[3]+','+shadowArr[4]+','+shadowArr[5]+',1.0)');
}

function createShadowArray() {
	shadowArr = [];
	//lightest
	for(var i=0; i<timeArr.length; i++) {
		shadowArr.push(timeArr[i] + Math.round(10*2.55));
	}
	//medium
	for(var i=0; i<timeArr.length; i++) {
		shadowArr.push(timeArr[i] + Math.round(20*2.55));
	}
	//darkest
	for(var i=0; i<timeArr.length; i++) {
		shadowArr.push(timeArr[i] + Math.round(30*2.55));
	}
}

function normalizeTimes() {
	for(var i=0; i<timeArr.length; i++){
		hextimeArr[i] = hextimeArr[i].toString(16).toUpperCase();
		timeArr[i] = timeArr[i].toString();
		if(timeArr[i].length != 2)	timeArr[i] = "0"+timeArr[i];
		if(hextimeArr[i].length != 2)	hextimeArr[i] = "0"+hextimeArr[i];
	}
}

function updateText(text) {
	$("#time").text(text);
}

function setBackground(color) {
	$("body").css("background", color);
}

$(document).click(function(){
	hex = !hex;
});