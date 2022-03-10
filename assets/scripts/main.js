const LAUNCH_IN = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7);

const dayElement = document.getElementById('day');
const hoursElement = document.getElementById('hour');
const minutesElement = document.getElementById('minute');
const secondsElement = document.getElementById('second');


function getTimeFormated(time) {
    return time < 10 ? `0${time}` : time;
}

function updateTime() {
    const now = new Date();
    const timeLeft = LAUNCH_IN - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    dayElement.innerHTML = getTimeFormated(days);
    hoursElement.innerHTML = getTimeFormated(hours);
    minutesElement.innerHTML = getTimeFormated(minutes);
    secondsElement.innerHTML = getTimeFormated(seconds);

}



setInterval(updateTime, 1000);

