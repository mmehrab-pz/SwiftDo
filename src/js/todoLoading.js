const loader = document.getElementById("loader");

// شروع زمان لودینگ
const start = Date.now();

window.addEventListener("load", () => {
  const loadTime = Date.now() - start;
  const minTime = 4000; // حداقل 3 ثانیه

  const delay = loadTime < minTime ? minTime - loadTime : 0;

  setTimeout(() => {
    loader.classList.add("hidden"); // افکت محو شدن
    setTimeout(() => {
      loader.style.display = "none";
    }, 500); // صبر برای افکت fade-out
  }, delay);
});
