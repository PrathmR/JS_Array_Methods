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

//Mouseover event 
let mouse_event = document.querySelector("#mouse")
    mouse_event.addEventListener("mouseover", function () {
    mouse_event.style.backgroundColor = 'blue';
    });
//Mouse-out event
mouse_event.addEventListener("mouseout", function () {
  mouse_event.style.backgroundColor = "red";
});

//Mouse-move
//This will supress the trigerring of other body elements.
let mouse2 = document.querySelector('#mouse2');
window.addEventListener("mousemove", function (h) {
    mouse2.style.top = h.clientY + "px";
    mouse2.style.left = h.clientX + "px";
}
);