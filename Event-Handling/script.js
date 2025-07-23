//Objective: When the button is clicked, change the text of the paragraph to "Button Clicked!".
let actionbtn = document.querySelector("#actionBtn");
let p = document.querySelector("#statusText");
actionbtn.addEventListener('click', function () {
    p.textContent = "Button Clicked";
    
});

//As a user types into the input field, display their text in the paragraph below in real-time.
let textinp = document.querySelector('#username');
let textout = document.querySelector('#liveText');

textinp.addEventListener('input', function (input) {
    textout.textContent = input.target.value;
})