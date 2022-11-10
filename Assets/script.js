document.getElementById("btn").addEventListener("click", function () {
  var email = document.getElementById("exampleInputEmail1");
  localStorage.setItem("emailHelp", email.value);
});
document.getElementById("btn").addEventListener("click", function () {
  var email = document.getElementById("First Name");
  localStorage.setItem("First Name", email.value);
});
document.getElementById("btn").addEventListener("click", function () {
  var email = document.getElementById("Last Name");
  localStorage.setItem("Last Name", email.value);
});
