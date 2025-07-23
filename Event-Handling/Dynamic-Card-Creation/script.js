// Select the necessary elements from the DOM
const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const cardContainer = document.querySelector("#card-container");

// Add an event listener for the form submission
form.addEventListener("submit", function (event) {
  // Prevent the default form behavior (page reload)
  event.preventDefault();

  // Create the main card element
  const card = document.createElement("div");
  card.classList.add("card");

  // Create the container for the profile image
  const profile = document.createElement("div");
  profile.classList.add("profile"); // Correct class name for styling

  // Create the image element and set its source from the first input
  const img = document.createElement("img");
  img.setAttribute("src", inputs[0].value);

  // Create the h3 element for the name
  const h3 = document.createElement("h3");
  h3.textContent = inputs[1].value;

  // Create the h5 element for the profession
  const h5 = document.createElement("h5");
  h5.textContent = inputs[2].value;

  // Create the p element for the info text
  const p = document.createElement("p");
  p.textContent = inputs[3].value;

  // --- Assemble the card ---
  // Add the image to the profile container
  profile.appendChild(img);
  // Add the profile container to the card
  card.appendChild(profile);
  // Add the name, profession, and info to the card
  card.appendChild(h3);
  card.appendChild(h5);
  card.appendChild(p);

  // Add the newly created card to the card container on the page
  cardContainer.appendChild(card);

  // Clear the form inputs for the next entry
  inputs.forEach(function (inp) {
    if (inp.type !== "submit") {
      inp.value = "";
    }
  });
});
