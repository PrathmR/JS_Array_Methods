//Create an setInterval for the downloading progress bar which should end in 3 seconds
let count = 0;
const progressBarInner = document.getElementById("progress-bar-inner");
const progressPercentage = document.getElementById("progress-percentage");
let downloadText = document.querySelector("h1");
let interval = setInterval(function () {
  if (count <= 99) {
    count++;
    progressBarInner.style.width = count + "%";
    progressPercentage.textContent = `${count}`;
  }
  if (count === 100) {
    progressBarInner.style.backgroundColor = "green";
    downloadText.innerText = "Downloaded!";
    clearInterval(interval);
  }
}, 3000 / 100);

//Auto hide alert banner in 3 seconds
let timer = 3; 
let hide = document.querySelector('#hide');
let alertMsg = document.querySelector("#alert-msg");

let st = setInterval(function () {
  if (timer => 0) {
    timer++;
    alertMsg.innerText = `This block will be removed in ${timer} seconds`;
    //document.body.remove(hide);
  }
   
}, 1000)
clearInterval(st);
