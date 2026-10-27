var number;
var numbers = ['&#48;' , '&#49;' , '&#50;' , '&#51;' , '&#52;' , '&#53;' , '&#54;' , '&#55;' , '&#56;' , '&#57;']
var stopped = true;
var t;

function change() {
    var random = Math.floor(Math.random()*6);
    number.innerHTML = numbers[random];
}

function stopstart() {
    if(stopped) {
        stopped = false;
        t = setInterval(change,100);
    } else {
        clearInterval(t);
        stopped = true;
    }
}

window.onload = function() {
    number = document.getElementById("number");
    stopstart();
}
