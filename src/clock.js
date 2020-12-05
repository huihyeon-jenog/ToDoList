const clock = document.querySelector(".js-clock"),
    showClock = clock.querySelector("h1");

function getTime(){
    const date = new Date();
    const minute = date.getMinutes();
    const hours = date.getHours();
    const second = date.getSeconds();
    showClock.innerText = `${hours}:${minute < 10 ? `0${minute}` : minute}:${second < 10 ? `0${second}` : second}`;

}

function init(){
    getTime();
    setInterval(getTime,1000);
}

init();