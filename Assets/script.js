var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");

var modalContent = document.querySelector("#modal-content");
function renderLastRegistered() {
  var email = localStorage.getItem("email");
  var firstName = localStorage.getItem("first-name");
  var lastName = localStorage.getItem("last-name");

  if (!email || !firstName || lastName) {
    return;
  }

  emailInput.textContent = email;
  firstNameInput.textContent = firstName;
  lastNameInput.textContent = lastname;
  if (email === "") {
    displayMessage("error", "Email cannot be blank");
  } else if (firstName === "") {
    displayMessage("error", "first name cannot be blank");
  } else {
    displayMessage("success", "registered succesfully");
  }
}
// signUpButton.addEventListener("click", function (event) {
//   event.preventDefault();

localStorage.setItem("email", emailInput);
// localStorage.setItem("first-name", firstName);
localStorage.setItem("last-name", lastNameInput);
