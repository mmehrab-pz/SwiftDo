let username = sessionStorage.getItem("username");
let email = "";
let password = "";
let firstName = "";
let lastName = "";
let phone = "";
console.log(username);
// ------------------------header username display------------------------
document.getElementById("headerUsername").textContent = username;
// ------------------------------get user info------------------------------
getUser();
async function getUser() {
  console.log(username);

  try {
    const myTok = Symbol("");
    const key = {
      [myTok]: "690df677bd0fefc30a02fc79",
    };

    const url = new URL(`https://${key[myTok]}.mockapi.io/users`);
    url.searchParams.append("username", username);

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const user = await response.json();

    if (user[0].length === 0) {
      console.error("Incorrect username or password. Please try again");
      return;
    }
    email = user[0].email;
    password = user[0].password;
    firstName = user[0].firstName;
    lastName = user[0].lastName;
    phone = user[0].phone;
    setInfo();
  } catch (error) {
    console.error(error);
  }
}

// ------------------------------------------------
function setInfo() {
  const currentInfo = document.querySelectorAll(".current-info");
  currentInfo.forEach((item) => {
    const info = item.dataset.info;
    switch (info) {
      case "fName":
        if (firstName) {
          item.value = firstName;
        }
        break;
      case "lName":
        if (lastName) {
          item.value = lastName;
        }
        break;
      case "username":
        if (username) {
          item.value = username;
        }
        break;
      case "email":
        if (email) {
          item.value = email;
        }
        break;
      case "phone":
        if (phone) {
          item.value = phone;
        }
        break;
    }
  });
}
// -----------------------------update user info-----------------------------
const updateForm = document.querySelectorAll("#updateForm input");
updateForm.forEach((input) => {
  input.addEventListener("input", (e) => {
    const role = input.dataset.role;
    switch (role) {
      case "fname":
        if (
          input.value === "" ||
          input.value === null ||
          input.value.search(/^[a-z]{2,20}$/) === -1
        ) {
            input.parentElement.previousElementSibling.lastElementChild.classList.remove("hidden");
            input.classList.add("input-error");
        }else{
            firstName = input.value;
            console.log(firstName);
            input.parentElement.previousElementSibling.lastElementChild.classList.add("hidden");
            input.classList.remove("input-error");
        }
        break;
    }
  });
});

// updateForm.forEach
