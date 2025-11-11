const body = document.body;
// ------------------open & close setting box--------------------
const curtain = document.getElementById("curtain");
const settingBox = document.getElementById("settingBox");

document.getElementById("openSet").addEventListener("click", () => {
  curtain.classList.remove("hidden");
  settingBox.classList.remove("right-[-280px]");
  settingBox.classList.add("right-[0px]");
});
document.getElementById("closeSet").addEventListener("click", () => {
  settingBox.classList.remove("right-[0px]");
  settingBox.classList.add("right-[-280px]");
  curtain.classList.add("hidden");
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
