//Objective: When the button is clicked, change the text of the paragraph to "Button Clicked!".
let actionbtn = document.querySelector("#actionBtn");
let p = document.querySelector("#statusText");
actionbtn.addEventListener('click', function () {
    p.textContent = "Button Clicked";
    
});