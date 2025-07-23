//Click Event
//Objective: When the button is clicked, change the text of the paragraph to "Button Clicked!".
let actionbtn = document.querySelector("#actionBtn");
let p = document.querySelector("#statusText");
actionbtn.addEventListener('click', function () {
    p.textContent = "Button Clicked";
    
});

//Input Event
//As a user types into the input field, display their text in the paragraph below in real-time.
let textinp = document.querySelector('#username');
let textout = document.querySelector('#liveText');

textinp.addEventListener('input', function (input) {
    textout.textContent = input.target.value;
})

//Change event
//When the user selects a new option from the dropdown menu, update the paragraph text to show which color they chose.
let sel = document.querySelector('#colorSelect');
let choiceText = document.querySelector('#choiceText');

sel.addEventListener('change', function (sel) {
    choiceText.textContent = sel.target.value;

    
});

