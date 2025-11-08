const loginBox = document.getElementById("loginBox");
const signupBox = document.getElementById("signupBox");
const SignupNow = document.getElementById("SignupNow");
const LoginNow = document.getElementById("LoginNow");
const signupForm = document.getElementById("signup");

// -------------change form------------------
SignupNow.addEventListener("click", () => {
  loginBox.classList.add("hidden");
  signupBox.classList.remove("hidden");
  SignupNow.parentElement.classList.add("hidden");
  LoginNow.parentElement.classList.remove("hidden");
  email = "";
  password = "";
  username = "";
  loginForm.querySelectorAll("input").forEach((input) => {
    input.value = "";
    input.classList.remove("input-ok");
  });
});
LoginNow.addEventListener("click", () => {
  signupBox.classList.add("hidden");
  loginBox.classList.remove("hidden");
  LoginNow.parentElement.classList.add("hidden");
  SignupNow.parentElement.classList.remove("hidden");
  email = "";
  password = "";
  username = "";
  signupForm.querySelectorAll("input").forEach((input) => {
    input.value = "";
    input.classList.remove("input-ok");
  });
});
// -----------------------------------------signup
let email = "";
let username = "";
let password = "";

signupForm.querySelectorAll("input").forEach((input) => {
  input.addEventListener("change", () => {
    let role = input.dataset.role;
    switch (role) {
      case "email":
        if (
          input.value === "" ||
          input.value == null ||
          input.value.search(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) === -1
        ) {
          input.classList.remove("input-ok");
          input.classList.add("input-alert");
        } else {
          input.classList.remove("input-alert");
          input.classList.add("input-ok");
          email = input.value;
          console.log(email);
        }
        break;
      case "username":
        if (
          input.value === "" ||
          input.value == null ||
          input.value.search(/^[a-z0-9_-]{3,15}$/) === -1
        ) {
          input.classList.remove("input-ok");
          input.classList.add("input-alert");
        } else {
          input.classList.remove("input-alert");
          input.classList.add("input-ok");
          username = input.value;
          console.log(username);
        }
        break;
      case "password":
        if (
          input.value === "" ||
          input.value == null ||
          input.value.search(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
          ) === -1
        ) {
          input.classList.remove("input-ok");
          input.classList.add("input-alert");
        } else {
          input.classList.remove("input-alert");
          input.classList.add("input-ok");
          password = input.value;
          console.log(password);
        }
        break;
    }
  });
});
const registerBtn = document.getElementById("registerBtn");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!email || !password || !username) {
    errorAlert("Please make sure all fields are filled out before continuing.");

    signupForm.querySelectorAll("input").forEach((input) => {
      if (!input.value) {
        input.classList.add("input-alert");
      }
    });
  } else {
    addRegisterLoader();
    addUser();
  }
});

async function addUser() {
  try {
    const myTok = Symbol("");
    const key = {
      [myTok]: "690df677bd0fefc30a02fc79",
    };

    const userInfo = {
      email: email,
      username: username,
      password: password,
    };

    const response = await fetch(`https://${key[myTok]}.mockapi.io/users`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      // Send your data in the request body as JSON
      body: JSON.stringify(userInfo),
    });
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const user = await response.json();
    createdAlert();
    removeRegisterLoader();
    email = "";
    password = "";
    username = "";
    signupForm.querySelectorAll("input").forEach((input) => {
      input.value = "";
      input.classList.remove("input-ok");
    });
    signupBox.classList.add("hidden");
    loginBox.classList.remove("hidden");
    LoginNow.parentElement.classList.add("hidden");
    SignupNow.parentElement.classList.remove("hidden");
    console.log(user);
  } catch (error) {
    errorAlert(`Something went wrong. Please try again later.`);
    console.error(error);
  }
}

function createdAlert() {
  const createdAlert = document.getElementById("accountCreated");
  createdAlert.classList.remove("-right-120");
  createdAlert.classList.add("right-10");
  setTimeout(() => {
    createdAlert.classList.remove("right-10");
    createdAlert.classList.add("-right-120");
  }, 3000);
}
function errorAlert(p) {
  const errorAlert = document.getElementById("errorAlert");
  errorAlert.classList.remove("-right-120");
  errorAlert.classList.add("right-10");
  errorAlert.lastElementChild.innerText = p;
  setTimeout(() => {
    errorAlert.classList.remove("right-10");
    errorAlert.classList.add("-right-120");
  }, 3000);
}

function addRegisterLoader() {
  registerBtn.firstElementChild.classList.add("hidden");
  registerBtn.lastElementChild.classList.add("loader");
  registerBtn.setAttribute("disabled", "");
}
function removeRegisterLoader() {
  registerBtn.lastElementChild.classList.remove("loader");
  registerBtn.firstElementChild.classList.remove("hidden");
  registerBtn.removeAttribute("disabled", "");
}
// -------------------------------------------------login
const loginForm = document.getElementById("login");
const loginBtn = document.getElementById("loginBtn");

loginForm.querySelectorAll("input").forEach((input) => {
  input.addEventListener("change", () => {
    let role = input.dataset.role;
    switch (role) {
      case "email":
        email = input.value;
        break;
      case "password":
        password = input.value;
        break;
    }
  });
});

function addLoginLoader() {
  loginBtn.firstElementChild.classList.add("hidden");
  loginBtn.lastElementChild.classList.add("loader");
  loginBtn.setAttribute("disabled", "");
}
function removeLoginLoader() {
  loginBtn.lastElementChild.classList.remove("loader");
  loginBtn.firstElementChild.classList.remove("hidden");
  loginBtn.removeAttribute("disabled", "");
}

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!email || !password) {
    errorAlert("Please make sure all fields are filled out before continuing.");
    loginForm.querySelectorAll("input").forEach((input) => {
      if (!input.value) {
        input.classList.add("input-alert");
      }
    });
  } else {
    addLoginLoader();
    checkUser();
  }
});

async function checkUser() {
  console.log(email);
  console.log(password);

  try {
    const myTok = Symbol("");
    const key = {
      [myTok]: "690df677bd0fefc30a02fc79",
    };

    const url = new URL(`https://${key[myTok]}.mockapi.io/users`);
    url.searchParams.append("email", email);
    url.searchParams.append("password", password);

    const response = await fetch(url, {
      method: "GET",
      headers: { "content-type": "application/json" },
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const user = await response.json();

    if (user[0].lenght === 0) {
      errorAlert("Incorrect email or password. Please try again");
      removeLoginLoader();
      return;
    }

    email = "";
    password = "";
    username = "";
    loginForm.querySelectorAll("input").forEach((input) => {
      input.value = "";
      input.classList.remove("input-ok");
    });
    removeLoginLoader();
    // window.location = "todo.html";
  } catch (error) {
    errorAlert(`Incorrect email or password. Please try again`);
    console.error(error);
    removeLoginLoader();
  }
}
