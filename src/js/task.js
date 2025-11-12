// --------------------task page routing-------------------
const myList = document.querySelectorAll("#myList>li");
const taskPages = document.querySelectorAll("#taskPages>div");

myList.forEach((item) => {
  item.addEventListener("click", () => {
    document.getElementById('listHead').innerText = `my list | ${item.innerText}`
    myList.forEach((item) => {
      item.classList.remove("active-task-li");
    });
    let name = item.dataset.name;
    item.classList.add("active-task-li");
    taskPages.forEach((page) => {
      page.classList.add("hidden");
      if (page.dataset.name == name) {
        page.classList.remove("hidden");
      }
    });
  });
});

// ---------------------------------------
const taskGenBtn = document.getElementById("taskGenBtn");
let taskTitle = "";
let taskCategory = "";
let taskDescription = "";

taskGenBtn.addEventListener("click", () => {
  taskTitle = document.getElementById("taskTitle").value;
  taskCategory = document.getElementById("taskCategory").value;
  taskDescription = document.getElementById("taskDescription").value;
  if (!taskTitle || !taskCategory || !taskDescription) {
    alert("fill the box bitch");
  } else {
  }
});

const allTask = document.getElementById("allTask");

function taskGen() {}
