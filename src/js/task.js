import { category } from "./svg.js";

// --------------------task page routing-------------------
const myList = document.querySelectorAll("#myList>li");
const taskPages = document.querySelectorAll("#taskPages>div");

myList.forEach((item) => {
  item.addEventListener("click", () => {
    document.getElementById(
      "listHead"
    ).innerText = `my list | ${item.innerText}`;
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
  task.innerHTML = `
                    <div class="flex h-20 w-full">
                        <figure class="h-full w-[100px] bg-[${taskColor}] flex justify-center items-center">${taskIcon}</figure>
                        <div class="h-full w-[calc(100%-100px)] flex items-center justify-between pl-5 pr-3">
                            <h3 class="capitalize font-['400'] text-(--txt-color) text-[20px]">${taskTitle}</h3>
                            <div class="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor"
                                    class="size-6 text-(--aside-icon-color) hover:text-(--aside-logo-color) duration-200 mr-1.5 opacity-0 invisible">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor"
                                    class="size-6 text-(--aside-icon-color) hover:text-(--aside-logo-color) duration-200 mr-1.5 opacity-0 invisible">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor"
                                    class="size-6 text-(--aside-icon-color) hover:text-(--aside-logo-color) duration-200 mr-4 opacity-0 invisible">
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
                    <div class="w-full bg-[${taskColor}] rounded-b-sm duration-300 h-0 overflow-hidden transition-[height] desc-wrap">
                        <div class="inner-wrap w-full h-auto p-4">
                            <div class="w-full h-auto bg-[#00000036] rounded-sm p-2.5">
                                <p class="font-['400'] text-white text-[14px] desc whitespace-pre-wrap">${taskDescription}</p>
                            </div>
                        </div>
                    </div>
    `;
    document.getElementById("all").appendChild(task);

    taskPages.forEach((item) => {
      let name = item.dataset.name;
      if (name == taskCategory) {
        item.appendChild(task.cloneNode(true));
      }
    });

}

 function openTask(item) {
 }
 window.openTask = openTask;


