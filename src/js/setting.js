const body = document.body;
// ------------------open & close setting box--------------------
const curtain = document.getElementById("curtain");
const settingBox = document.getElementById("settingBox");
const openSet = document.getElementById("openSet");

openSet.addEventListener("click", () => {
  curtain.classList.remove("hidden");
  settingBox.classList.remove("right-[-280px]");
  settingBox.classList.add("right-[0px]");
});
document.getElementById("closeSet").addEventListener("click", () => {
  settingBox.classList.remove("right-[0px]");
  settingBox.classList.add("right-[-280px]");
  curtain.classList.add("hidden");
});

document.addEventListener("click", (event) => {
  if (!settingBox.contains(event.target) && !openSet.contains(event.target)) {
    settingBox.classList.remove("right-[0px]");
    settingBox.classList.add("right-[-280px]");
    curtain.classList.add("hidden");
  }
});
// ------------------dark mode and light mode--------------------
const lightBtn = document.getElementById("light-btn");
const darkBtn = document.getElementById("dark-btn");

// بررسی ذخیره قبلی
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  // اگر کاربر قبلاً تمی انتخاب کرده
  if (savedTheme === "dark") {
    body.classList.add("dark");
    darkBtn.classList.add("mode-active");
    lightBtn.classList.remove("mode-active");
  } else {
    body.classList.remove("dark");
    lightBtn.classList.add("mode-active");
    darkBtn.classList.remove("mode-active");
  }
} else {
  // اگر تم ذخیره‌شده وجود ندارد → پیش‌فرض لایت مود
  body.classList.remove("dark");
  lightBtn.classList.add("mode-active");
}

darkBtn.addEventListener("click", () => {
  lightBtn.classList.remove("mode-active");
  darkBtn.classList.add("mode-active");
  body.classList.add("dark");
  localStorage.setItem("theme", "dark");
});

lightBtn.addEventListener("click", () => {
  darkBtn.classList.remove("mode-active");
  lightBtn.classList.add("mode-active");
  body.classList.remove("dark");
  localStorage.setItem("theme", "light");
});
// ------------------left sidebar type--------------------
const aside = document.getElementById("aside");
const main = document.getElementById("main");
const iconSideBtn = document.getElementById("iconSide");
const normSideBtn = document.getElementById("normSide");

iconSideBtn.addEventListener("click", () => {
  normSideBtn.classList.remove("mode-active");
  iconSideBtn.classList.add("mode-active");
  aside.classList.add("menu-icon");
  main.classList.add("menu-icon2");
  aside.dataset.status = "on";
});
normSideBtn.addEventListener("click", () => {
  iconSideBtn.classList.remove("mode-active");
  normSideBtn.classList.add("mode-active");
  aside.classList.remove("menu-icon");
  main.classList.remove("menu-icon2");
  aside.dataset.status = "off";
});

document.getElementById("menuBtn").addEventListener("click", () => {
  const val = aside.dataset.status;
  if (val == "off") {
    normSideBtn.classList.remove("mode-active");
    iconSideBtn.classList.add("mode-active");
    aside.classList.add("menu-icon");
    main.classList.add("menu-icon2");
    aside.dataset.status = "on";
  } else {
    iconSideBtn.classList.remove("mode-active");
    normSideBtn.classList.add("mode-active");
    aside.classList.remove("menu-icon");
    main.classList.remove("menu-icon2");
    aside.dataset.status = "off";
  }
});
// ------------------fullscreen mode--------------------
const fullBtn = document.getElementById("fullBtn");
fullBtn.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
    fullBtn.firstElementChild.classList.add("hidden");
    fullBtn.lastElementChild.classList.remove("hidden");
  } else {
    document.exitFullscreen();
    fullBtn.firstElementChild.classList.remove("hidden");
    fullBtn.lastElementChild.classList.add("hidden");
  }
});
// ------------------header btn--------------------
const toka = document.querySelectorAll(".toka");

toka.forEach((item, i, arr) => {
  item.addEventListener("click", (e) => {
    e.stopPropagation();
    arr.forEach((item) => {
      item.lastElementChild.classList.add("hidden");
    });
    item.lastElementChild.classList.remove("hidden");
  });
});
document.addEventListener("click", (e) => {
  toka.forEach((item) => {
    // if(!item.contains(e.target) || item.contains(e.target) ){
    //   item.lastElementChild.classList.add("hidden");
    // }
    item.lastElementChild.classList.add("hidden");
  });
});
// ------------------change aside color--------------------
const asideMode = document.querySelectorAll(".aside-mode");
let mode = "";

function setMode(newMode) {
  asideMode.forEach((item) => item.classList.remove("color-active"));
  if (mode) body.classList.remove(mode);

  const activeItem = [...asideMode].find(
    (item) => item.dataset.mode === newMode
  );
  if (activeItem) {
    activeItem.classList.add("color-active");
  }

  body.classList.add(newMode);
  mode = newMode;

  localStorage.setItem("aside-mode", newMode);
}

asideMode.forEach((item) => {
  item.addEventListener("click", () => {
    const newMode = item.dataset.mode;
    setMode(newMode);
  });
});

window.addEventListener("DOMContentLoaded", () => {
  const savedMode = localStorage.getItem("aside-mode");
  if (savedMode) {
    setMode(savedMode);
  }
});
// ------------------change aside pattern--------------------
// const pattern = document.querySelectorAll(".pattern");
// const asidePat = document.getElementById("asidePat");
// let url = "";

// pattern.forEach((item) => {
//   item.addEventListener("click", () => {
//     if (url) {
//       asidePat.classList.remove(`bg-[${url}]`);
//     }
//     pattern.forEach((item) =>
//       item.classList.remove("outline-2", "outline-[#556ee6]")
//     );
//     item.classList.add("outline-2", "outline-[#556ee6]");
//     url = item.dataset.url;
//     asidePat.classList.add(`bg-[${url}]`);
//   });
// });

const pattern = document.querySelectorAll(".pattern");
const asidePat = document.getElementById("asidePat");
let url = "";

// تابع برای اعمال pattern جدید
function setPattern(newUrl) {
  // حذف pattern قبلی از کلاس
  if (url) {
    asidePat.classList.remove(`bg-[${url}]`);
  }

  // حذف outline از همه patternها
  pattern.forEach(item =>
    item.classList.remove("outline-2", "outline-[#556ee6]")
  );

  // افزودن outline به pattern فعال
  const activeItem = [...pattern].find(item => item.dataset.url === newUrl);
  if (activeItem) {
    activeItem.classList.add("outline-2", "outline-[#556ee6]");
  }

  // افزودن background جدید
  asidePat.classList.add(`bg-[${newUrl}]`);
  url = newUrl;

  // ذخیره در localStorage
  localStorage.setItem("aside-pattern", newUrl);
}

// رویداد کلیک برای انتخاب pattern
pattern.forEach(item => {
  item.addEventListener("click", () => {
    const newUrl = item.dataset.url;
    setPattern(newUrl);
  });
});

// بازیابی pattern ذخیره‌شده در بارگذاری صفحه
window.addEventListener("DOMContentLoaded", () => {
  const savedUrl = localStorage.getItem("aside-pattern");
  if (savedUrl) {
    setPattern(savedUrl);
  }
});
