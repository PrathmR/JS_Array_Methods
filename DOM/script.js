// ----------------------------------------
// 1. Selecting Elements
// ----------------------------------------
// Question 1.1: Select the element with the ID 'title' and log it to the console.

let title = document.getElementById("title");
console.log(title);

// Question 1.2: Select all elements with the class 'item' and log them to the console.
let item = document.getElementsByClassName("item");
console.log(item);

// Question 1.3: Select the first element with the class 'description' using a query selector and log it.
let desc = document.querySelector(".description");
console.log(desc);

// ----------------------------------------
// 2. Text/Content Access
// ----------------------------------------
// Question 2.1: Change the text of the `<h1>` with the ID 'title' to "Welcome to the DOM Challenge!"
document.getElementById("title");
title.innerText = "Welcome to the DOM challenge";

// Question 2.2: Change the HTML inside the `div` with the ID 'status-message' to "<strong>Ready to start!</strong>".
document.getElementById('status-message').innerHTML="<strong>Ready to strat!</>";

// Question 2.3: Get the text content of the second list item (Item 2) and log it to the console.
let item2 = document.getElementsByClassName('item')[1];
console.log(item2);

// ----------------------------------------
// 3. Attribute Manipulation
// ----------------------------------------
// Question 3.1: Get the 'src' attribute of the image with the ID 'image' and log it.
document.getElementById('image');
let src = image.getAttribute('src');
console.log(src);



// ----------------------------------------
// 5. Style & Class Updates
// ----------------------------------------
// Question 5.1: Change the background color of the `div` with the ID 'main-container' to '#f0f0f0'.
let bg= document

// Question 5.2: Add the class 'highlight' to the `<h1>` with the ID 'title'.

// Question 5.3: Write code so that when the 'action-button' is clicked, the 'text-large' class is toggled on the paragraph with the class 'description'.
