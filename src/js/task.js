import { category } from "./svg.js";

// --------------------task page routing-------------------
const myList = document.querySelectorAll("#myList>li");
const taskPages = document.querySelectorAll("#taskPages>div");
const formTask = document.getElementById("formTask");

// ---------------------------------------
const taskGenBtn = document.getElementById("taskGenBtn");
let taskTitle = "";
let taskCategory = "";
let taskDescription = "";
let taskColor = "";
let taskIcon = "";

taskGenBtn.addEventListener("click", () => {
  taskTitle = document.getElementById("taskTitle").value;
  taskCategory = document.getElementById("taskCategory").value;
  category.map((item) => {
    if (item.name == taskCategory) {
      taskColor = item.color;
      taskIcon = item.tag;
    }
  });

  taskDescription = document.getElementById("taskDescription").value;
  if (!taskTitle || !taskCategory || !taskDescription) {
    alert("fill the box bitch");
  } else {
    taskGen();
  }
});

const allTask = document.getElementById("allTask");

function taskGen() {
  const task = document.createElement("div");
  task.classList.add("task");
  task.setAttribute("onclick", "openTask(this)");
  task.setAttribute("data-status", "off");
  task.setAttribute("data-name", taskCategory);
  task.innerHTML = `
                    <div class="flex h-20 w-full">
                          <figure class="h-full w-[100px] bg-[${taskColor}] flex justify-center items-center">${taskIcon}</figure>
                          <div class="h-full w-[calc(100%-100px)] flex items-center justify-between pl-5 pr-3">
                            <h3 class="capitalize font-['400'] text-(--txt-color) text-[20px]">${taskTitle}</h3>
                            <div class="flex">
                                <svg data-status='off' onclick="editable(this,event)" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor"
                                    class="size-6 text-(--aside-icon-color) hover:text-(--aside-logo-color) duration-200 mr-1.5 opacity-0 invisible">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                </svg>
                                <svg onclick="complete(this,event)" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor"
                                    class="complete size-6 text-(--aside-icon-color) hover:text-(--aside-logo-color) duration-200 mr-1.5 opacity-0 invisible">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                 <svg onclick="undo(this,event)" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                                    class="undo size-6 text-(--aside-icon-color) hover:text-(--aside-logo-color) duration-200 mr-1.5 opacity-0 invisible hidden">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                                </svg>
                                <svg onclick="trash(this,event)" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor"
                                    class="trash size-6 text-(--aside-icon-color) hover:text-(--aside-logo-color) duration-200 mr-4 opacity-0 invisible">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                                <svg onclick="_delete(this,event)" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor"
                                    class="delete size-6 text-(--aside-icon-color) hover:text-(--aside-logo-color) duration-200 mr-4 opacity-0 invisible hidden">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor"
                                    class="size-6 text-(--aside-icon-color) duration-200">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </div>
                          </div>
                      </div>
                    <div class="dec w-full bg-[${taskColor}] rounded-b-sm duration-300 h-auto overflow-hidden transition-[height]">
                        <div class="w-full h-auto p-4">
                            <div class="w-full h-auto bg-[#00000036] rounded-sm p-2.5">
                                <p onclick="edit(event,this)" class="font-['400'] text-white text-[14px] outline-0 whitespace-pre-wrap desc">${taskDescription}</p>
                            </div>
                        </div>
                    </div>
    `;

  document.getElementById("all").appendChild(task);
  checkerAll("all");
  checkLength();
  let boxHeight = "";
  requestAnimationFrame(() => {
    const descBox = task.querySelector(`.dec`);
    if (descBox) {
      boxHeight = descBox.scrollHeight;
      console.log(boxHeight);
      descBox.style.height = "0px";
      descBox.dataset.height = boxHeight;
    }
  });

  para();
}
// ---------open
function openTask(item) {
  let status = item.dataset.status;
  if (status == "off") {
    item.classList.add("active-task");
    item.lastElementChild.style.height =
      item.lastElementChild.dataset.height + "px";
    item.dataset.status = "on";
  } else {
    item.classList.remove("active-task");
    item.lastElementChild.style.height = "0px";
    item.dataset.status = "off";
  }
}
// ---------edit
function editable(item, e) {
  e.stopPropagation();
  let status = item.dataset.status;
  let p =
    item.parentElement.parentElement.parentElement.nextElementSibling
      .firstElementChild.firstElementChild.firstElementChild;
  if (status == "off") {
    p.contentEditable = true;
    p.parentElement.classList.add("boorder");
    item.dataset.status = "on";
  } else {
    p.contentEditable = false;
    p.parentElement.classList.remove("boorder");
    item.dataset.status = "off";
  }
  item.classList.toggle("text-(--txt-color)");
}
function edit(e, item) {
  e.stopPropagation();
}
// ---------completed
function complete(item, e) {
  e.stopPropagation();
  const task = item.closest(".task");
  task.remove();
  const completedBox = document.getElementById("completedBox");
  completedBox.appendChild(task);
  checkerAll("all");
  checkerAll("completedBox");
  checkerAll("trashBox");
  item.classList.add("hidden");
  item.parentElement.querySelector(".undo").classList.remove("hidden");

  task.classList.remove("active-task");
  task.lastElementChild.style.height = "0px";
  task.dataset.status = "off";
  para();
  checkLength();
}
// ---------trash
function trash(item, e) {
  e.stopPropagation();
  const task = item.closest(".task");
  task.remove();
  const trashBox = document.getElementById("trashBox");
  trashBox.appendChild(task);
  checkerAll("all");
  checkerAll("completedBox");
  checkerAll("trashBox");
  item.classList.add("hidden");

  item.parentElement.querySelector(".undo").classList.remove("hidden");
  item.parentElement.querySelector(".delete").classList.remove("hidden");
  item.parentElement.querySelector(".complete").classList.add("hidden");

  task.classList.remove("active-task");
  task.lastElementChild.style.height = "0px";
  task.dataset.status = "off";
  para();
  checkLength();
}
// ---------undo
function undo(item, e) {
  e.stopPropagation();
  const task = item.closest(".task");
  task.remove();
  checkerAll("completedBox");
  taskList.appendChild(task);
  checkerAll("all");
  checkerAll("trashBox");
  item.classList.add("hidden");

  item.parentElement.querySelector(".complete").classList.remove("hidden");
  item.parentElement.querySelector(".trash").classList.remove("hidden");
  item.parentElement.querySelector(".delete").classList.add("hidden");
  item.parentElement.querySelector(".undo").classList.add("hidden");

  task.classList.remove("active-task");
  task.lastElementChild.style.height = "0px";
  task.dataset.status = "off";
  para();
  checkLength();
}
// ---------delete
function _delete(item, e) {
  e.stopPropagation();
  const task = item.closest(".task");
  task.remove();
  checkerAll("trashBox");
  checkLength();
}

window.openTask = openTask;
window.editable = editable;
window.edit = edit;
window.complete = complete;
window.undo = undo;
window.trash = trash;
window._delete = _delete;

// --------------------dashboard count-------------------
let taskList = document.getElementById("all");
const count = document.querySelectorAll(".count");

function para() {
  const allTasks = document.querySelectorAll("#all > .task");
  const counts = {};

  allTasks.forEach((task) => {
    const name = task.dataset.name;
    counts[name] = (counts[name] || 0) + 1;
  });

  const counters = document.querySelectorAll(".count");
  counters.forEach((counter) => {
    const name = counter.dataset.name;
    counter.textContent = counts[name] || 0;
  });
}
// -------------------------------------------
function checkerAll(tag) {
  if (document.querySelector(`#${tag}>div`)) {
    document.querySelector(`#${tag}>span`).classList.add("hidden");
  } else {
    document.querySelector(`#${tag}>span`).classList.remove("hidden");
  }
}

function checkLength() {
  document.querySelectorAll(".lara").forEach((list) => {
    console.log(list.querySelectorAll(":scope>div").length);
    document.querySelectorAll(".para").forEach((item) => {
      if (item.dataset.name == list.dataset.role) {
        item.lastElementChild.innerText =
          list.querySelectorAll(":scope>div").length;
      }
    });
  });
}
