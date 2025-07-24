let nm = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");

form.addEventListener("submit", function (dets) {
    dets.preventDefault();
    document.querySelector("#nameerror").textContent = "";
    document.querySelector("#emailerror").style.display = "";
    document.querySelector("#passworderror").style.display = "";
  const nameRegex = /^[A-Za-z\s]{3,}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  let nameans = nameRegex.test(nm.value);
  let emailans = emailRegex.test(email.value);
  let passaans = passwordRegex.test(password.value);


  if (!nameans) {
      document.querySelector("#nameerror").textContent = "Enter a valid name";
      document.querySelector("#nameerror").style.display= 'inital';
      
  }
  if (!emailans) {
      document.querySelector("#emailerror").style.display = "Enter a valid email";
       document.querySelector("#emailerror").style.display = "inital";
      
  }
  if (!passaans) {
      document.querySelector("#passworderror").style.display = "Choose a strong password";
       document.querySelector("#passworderror").style.display = "inital";
      
  }
});
