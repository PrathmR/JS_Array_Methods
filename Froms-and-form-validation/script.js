let nm = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");

form.addEventListener("submit", function (dets) {
  dets.preventDefault();

  document.querySelector("#nameerror").style.display = "none";
  document.querySelector("#emailerror").style.display = "none";
  document.querySelector("#passworderror").style.display = "none";
  document.querySelector("#resultmsg").textContent = "";

  const nameRegex = /^[A-Za-z\s]{3,}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const nameans = nameRegex.test(nm.value);
  const emailans = emailRegex.test(email.value);
  const passaans = passwordRegex.test(password.value);

  let isvalid = true;

  if (!nameans) {
    const nameErrorEl = document.querySelector("#nameerror");
    nameErrorEl.textContent = "Enter a valid name (at least 3 letters).";
    nameErrorEl.style.display = "block";
    isvalid = false;
  }

  if (!emailans) {
    const emailErrorEl = document.querySelector("#emailerror");
    emailErrorEl.textContent = "Enter a valid email.";
    emailErrorEl.style.display = "block";
    isvalid = false;
  }

  if (!passaans) {
    const passwordErrorEl = document.querySelector("#passworderror");
    passwordErrorEl.textContent = "Choose a strong password.";
    passwordErrorEl.style.display = "block";
    isvalid = false;
  }

  if (isvalid) {
    document.querySelector("#resultmsg").textContent =
      "Submitted Successfully!!";
  }
});
