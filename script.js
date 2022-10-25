document.getElementById("hourSetAlert").focus();
document.getElementById("hourSetAlert").value = "";
document.getElementById("minSetAlert").value = "";
document.getElementById("msgSetAlert").value = "";

function seconds() {
const data = new Date();
const hour = data.getHours();
const min = data.getMinutes();
const sec = data.getSeconds();

const h = hour < 10 ? "0" + hour : hour;
const m = min < 10 ? "0" + min : min;
const s = sec < 10 ? "0" + sec : sec;

const clock = h+ ":" + m + ":" + s;
const screen = document.getElementById("clock");

screen.innerHTML = clock
}

document.addEventListener('keypress', function(e){
	if(e.which == 13){
	   setAlert();
	}
	}, false);

let click = 0;

function setAlert() {
    let hour = document.getElementById("hourSetAlert").value;
    let min = document.getElementById("minSetAlert").value;
    let msg = document.getElementById("msgSetAlert").value;
    let alarm = document.getElementById("alarm");
    let alarmRing = new Audio('alarm-ring.mp3');
    
    click++;

    if (hour < 0 || hour > 23 || min < 0 || min > 59 || hour == "" || min == "" || hour.length < 2 || min.length < 2){
	alert('Invalid time to set alarm.');
	hour = "";
	min = "";
	alarm.innerHTML = "No alarm set yet.";
	click = 0;
    } else {
	alarm.innerHTML = `Alarm <strong>${msg}</strong> set to <strong style="background-color: black; color: white; padding: 05px;">${hour}:${min}h</strong>.`
	}
    document.getElementById("hourSetAlert").value = "";
    document.getElementById("minSetAlert").value = "";
    document.getElementById("msgSetAlert").value = "";
    document.getElementById("hourSetAlert").focus();
    
    function getTime() {
        const data = new Date();
        const h = data.getHours();
        const m = data.getMinutes();

	console.log('get time');
	
	if (click == 2){
	    clearInterval(gtInterval);
	    click = 1;
	}
	
	if  (h == hour && m == min) {
	    alarmRing.play();
	    alert(`${hour}:${min}h - ${msg}`);
	    hour = 0;
	    min = 0;
	    alarm.innerHTML = "No alarm set yet.";
	    clearInterval(gtInterval);
	    click =0;
	} else if (click == 0){
	    alarm.innerHTML = "No alarm set yet.";
	    clearInterval(gtInterval);
	    click = 0;
	  }
    }
    let gtInterval = setInterval(getTime, 1000);
}

setInterval(seconds, 1000);