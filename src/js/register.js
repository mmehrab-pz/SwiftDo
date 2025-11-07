const loginBox = document.getElementById("login");
const signupBox = document.getElementById("signup");
const SignupNow = document.getElementById("SignupNow");
const LoginNow = document.getElementById("LoginNow");

// -------------change form------------------
SignupNow.addEventListener("click", () => {
  loginBox.classList.add("hidden");
  signupBox.classList.remove("hidden");
  SignupNow.parentElement.classList.add("hidden");
  LoginNow.parentElement.classList.remove("hidden");
});
LoginNow.addEventListener("click", () => {
  signupBox.classList.add("hidden");
  loginBox.classList.remove("hidden");
  LoginNow.parentElement.classList.add("hidden");
  SignupNow.parentElement.classList.remove("hidden");
});
