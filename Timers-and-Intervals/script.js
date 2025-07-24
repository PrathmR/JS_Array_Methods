//Create an setInterval for the downloading progress bar which should end in 5 seconds
let count = 0;
const progressBarInner = document.getElementById("progress-bar-inner");
const progressPercentage = document.getElementById("progress-percentage");

setInterval(function () {
    if (count <= 99) {
        count++
        progressBarInner.style.width =   count + '%'
        progressPercentage.textContent = `${count}`
    }
    if (count === 100) {
        progressBarInner.style.backgroundColor = 'green';
    }
    
}, 5000 / 100);