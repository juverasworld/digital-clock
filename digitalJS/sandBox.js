setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";

    let currentTime = hour + ":"
        + min + ":" + sec + am_pm;
    document.getElementById("clock").innerHTML = currentTime;
}
showTime();