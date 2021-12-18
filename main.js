
// The day I want to target
var newYearDate = new Date('Jan 1, 2022 00:00:00').getTime();

function newYear() {
    var now = new Date().getTime();
    gap = newYearDate - now;

    // console.log(gap);

    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;


    var d = Math.floor(gap / (day));
    var h = Math.floor((gap % (day)) / (hour));
    var m = Math.floor((gap % (hour)) / (minute));
    var s = Math.floor((gap % (minute)) / second);
    // console.log(d, h , m, s);

    // Selection
    document.getElementById('day').innerHTML = d;
    document.getElementById('hour').innerHTML = h;
    document.getElementById('minute').innerHTML = m;
    document.getElementById('second').innerHTML = s;
}

newYear();
setInterval(newYear, 1000);