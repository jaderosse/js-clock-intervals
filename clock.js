var startTime = 0;

var hourDegrees = 30;

var hourTick = function() {
    console.log("tick");
    startTime += hourDegrees;
    var el = document.getElementById("hour");
    el.style.transform = "rotate(" + startTime + "deg)";
};

var minuteDegrees = 6; 

var minuteTick = function() {
	console.log("tick");
	startTime += minuteDegrees;
	var el = document.getElementById("minute");
	el.style.transform = "rotate(" + startTime + "deg)";
};

var secondDegrees = 6;

var secondTick = function() {
	console.log("tick");
	startTime += secondDegrees;
	var el = document.getElementById("second");
	el.style.transform = "rotate(" + startTime + "deg)";
};

var secondInterval = setInterval(secondTick, 1000);
var minuteInterval = setInterval(minuteTick, 60000);
var hourInterval = setInterval(hourTick, 3600000);