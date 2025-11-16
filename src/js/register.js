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
// -------------show password------------------
const eyeBtn = document.querySelectorAll(".show-password");

eyeBtn.forEach((item) => {
  item.addEventListener("mousedown", () => {
    item.firstElementChild.classList.add("hidden");
    item.lastElementChild.classList.remove("hidden");
    // item.previousElementSibling.setAttribute("type", "text");
    item.parentElement.firstElementChild.setAttribute("type", "text");
  });
  item.addEventListener("mouseup", () => {
    item.lastElementChild.classList.add("hidden");
    item.firstElementChild.classList.remove("hidden");
    item.parentElement.firstElementChild.setAttribute("type", "password");
  });
});
// -----------------------------------------error func
function addRegexError(p, input) {
  input.nextElementSibling.innerText = p;
  input.nextElementSibling.classList.remove("hidden");
}
function removeRegexError(input) {
  input.nextElementSibling.innerText = "";
  input.nextElementSibling.classList.add("hidden");
}
// -----------------------------------------signup
let email = "";
let username = "";
let password = "";

signupForm.querySelectorAll("input").forEach((input, i, arr) => {
  input.addEventListener("input", () => {
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
          addRegexError("Oops! That doesn’t look like a valid email.", input);
        } else {
          input.classList.remove("input-alert");
          input.classList.add("input-ok");
          removeRegexError(input);
          email = input.value;
          console.log(email);
          checkEmail();
        }
        break;
      case "username":
        if (
          input.value === "" ||
          input.value == null ||
          input.value.search(/^(?![0-9_-]+$)[a-z0-9_-]{3,15}$/) === -1
        ) {
          input.classList.remove("input-ok");
          input.classList.add("input-alert");
          addRegexError("Oops! That username doesn’t look right.", input);
        } else {
          input.classList.remove("input-alert");
          input.classList.add("input-ok");
          removeRegexError(input);
          username = input.value;
          console.log(username);
          checkUsername()
        }
        break;
      case "password":
        if (
          input.value === "" ||
          input.value == null ||
          input.value.search(
            /^[A-Za-z]{8,}$/
          ) === -1
        ) {
          input.classList.remove("input-ok");
          input.classList.add("input-alert");
          addRegexError("Hmm... that password looks too weak.", input);
        } else {
          input.classList.remove("input-alert");
          input.classList.add("input-ok");
          removeRegexError(input);
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
    addUser()
  }
});
// -----------check email---------------

async function checkEmail() {
  try {
    const myTok = Symbol("");
    const key = {
      [myTok]: "690df677bd0fefc30a02fc79",
    };

    const url = new URL(`https://${key[myTok]}.mockapi.io/users`);
    url.searchParams.append("email", email);

    const response = await fetch(url, {
      method: "GET",
      headers: { "content-type": "application/json" },
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const user = await response.json();

    console.log(user);

    errorAlert("This email is already registered.");
    email = "";
    signupForm.querySelectorAll("input").forEach((input, i, arr) => {
      arr[2].classList.remove("input-ok");
      arr[2].classList.add("input-alert");
      addRegexError("This email is already registered.", arr[2]);
    });
  } catch (error) {
    // console.error(error);
    signupForm.querySelectorAll("input").forEach((input, i, arr) => {
      removeRegexError(arr[2]);
    });
  }
}
// -----------check username---------------

async function checkUsername() {
  try {
    const myTok = Symbol("");
    const key = {
      [myTok]: "690df677bd0fefc30a02fc79",
    };

    const url = new URL(`https://${key[myTok]}.mockapi.io/users`);
    url.searchParams.append("username", username);

    const response = await fetch(url, {
      method: "GET",
      headers: { "content-type": "application/json" },
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const user = await response.json();

    console.log(user);

    errorAlert("This username is already registered.");
    username = "";
    signupForm.querySelectorAll("input").forEach((input, i, arr) => {
      arr[3].classList.remove("input-ok");
      arr[3].classList.add("input-alert");
      addRegexError("This username is already registered.", arr[3]);
    });
  } catch (error) {
    // console.error(error);
    signupForm.querySelectorAll("input").forEach((input, i, arr) => {
      removeRegexError(arr[3]);
    });
  }
}

// -------------------adduser----------
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
  input.addEventListener("input", () => {
    let role = input.dataset.role;
    switch (role) {
      case "username":
        username = input.value;
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
  if (!username || !password) {
    errorAlert("Please make sure all fields are filled out before continuing.");
    loginForm.querySelectorAll("input").forEach((input) => {
      if (!input.value) {
        input.classList.add("input-alert");
      }
    });
  } else {
    addLoginLoader();
    getUser();
  }
});

async function getUser() {
  console.log(username);
  console.log(password);

  try {
    const myTok = Symbol("");
    const key = {
      [myTok]: "690df677bd0fefc30a02fc79",
    };

    const url = new URL(`https://${key[myTok]}.mockapi.io/users`);
    url.searchParams.append("username", username);


    const response = await fetch(url, {
      method: "GET",
      headers: { "content-type": "application/json" },
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const user = await response.json();

    if (user[0].length === 0 || user[0].password !== password) {
      errorAlert("Incorrect username or password. Please try again");
      removeLoginLoader();
      return;
    }
    sessionStorage.setItem("username", username);
    
    email = "";
    password = "";
    username = "";
    loginForm.querySelectorAll("input").forEach((input) => {
      input.value = "";
      input.classList.remove("input-ok");
    });
    removeLoginLoader();
    window.location = "todo.html";
  } catch (error) {
    errorAlert(`Incorrect username or password. Please try again`);
    console.error(error);
    removeLoginLoader();
  }
}
