let nm = document.querySelector('#name');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let form = document.querySelector('form');

form.addEventListener("submit", function (dets) {
    dets.preventDefault();
    const nameRegex = /^[A-Za-z\s]{2,}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    nameRegex.test(nm.value);
    emailRegex.test(email.value);
    passwordRegex.test(password.value);

    if (nm.value.length <= 2) {
        document.querySelector('#nameerror').style.display = 'initial';
    }


})