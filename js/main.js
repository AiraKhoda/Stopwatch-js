let hoursSpan = document.querySelector("#hour");
let minutesSpan = document.querySelector("#minute");
let secondsSpan = document.querySelector("#second");
// let milisecondsSpan = document.querySelector("#milisecond");
let startBtn = document.querySelector("#start");
let stopBtn = document.querySelector("#stop");
let resetBtn = document.querySelector("#reset");


let stopCount;
let seconds = 0;
let hours = 0;
let minutes = 0;
let addZero = (number) => number < 10 ? "0" + number : number;

const starStopWatch = () => {

    seconds += 1;

    if (seconds === 60) {
        minutes += 1;
        seconds = 0;
        if (minutes === 60) {
            hours += 1;
            minutes = 0;
            seconds = 0;
            if (hours === 24) {
                minutes = 0;
                seconds = 0;
                hours = 0;
            }

        }
    }


    hoursSpan.innerText = addZero(hours);
    minutesSpan.innerText = addZero(minutes);
    secondsSpan.innerText = addZero(seconds);
}


startBtn.addEventListener("click", () => {
    stopCount = setInterval(starStopWatch, 1000);
});

stopBtn.addEventListener("click", () => {
    clearInterval(stopCount);
});

resetBtn.addEventListener("click", () => {

    seconds = 0;
    hours = 0;
    minutes = 0;

    hoursSpan.innerText = addZero(hours);
    minutesSpan.innerText = addZero(minutes);
    secondsSpan.innerText = addZero(seconds);

    clearInterval(stopCount);

});