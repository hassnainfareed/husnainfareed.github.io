//initialise day, month and year

var showDate = document.getElementById("date-disp");
var showTime = document.getElementById("time-disp")
var d = new Date();
var day, month, year, fullDate;
var hour, min, sec, fullTime;


var date_line = false;

function display_c(){
    var refresh = 1000; // refresh rate in milli seconds
    mytime = setTimeout("display_ct()", refresh)
}
function display_ct(){
    // document.getElementById("ct").innerHTML = x;
    var x = new Date();
    var hour = x.getHours();
    var min = x.getMinutes();
    var sec = x.getSeconds();

    if (hour < 10 ){hour= "0" + hour;}
    if (min < 10) {min = "0" + min;}
    if (sec < 10) {sec = "0" + sec;}
    var x1 = hour + ":" + min + ":" + sec;
    document.getElementById("ct").innerHTML = x1;
    display_c();
}

function setDate(){
    day = d.getDate()
    month = d.getMonth() + 1;
    year = d.getFullYear()
    fullDate = day + " . " + month + " . " + year
    return fullDate
}

function setTime(){
    hour = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    fullTime = hour + ":" + min + ":" + sec;
    return fullTime
}

function date_disp(){
    setDate()
    showDate = fullDate;
}

function time_disp(){
    showTime.innerHTML =  setTime()
}

console.log(fullDate)
function get_date_line() {
    date_line = showDate.style.textDecoration == "none" ? "underline" : "none";
    return date_line;
    // showDate.style.textDecoration = "underline";
}

function toggle_date_line() {
    get_date_line()
    showDate.style.textDecoration = date_line;
}

// showTime.innerHTML =  setTime()
showDate.innerHTML =  setDate()