const nav = document.querySelectorAll(".navbar");
const pages = document.querySelectorAll(".page");

// nav.forEach((item) => {
//   item.addEventListener("click", () => {
//     let name = item.dataset.name;
//     nav.forEach(item=>item.classList.remove('nav-active'))
//     item.classList.add('nav-active')
//     pages.forEach((page) => {
//       page.classList.add("hidden");
//       if (name == page.dataset.name) {
//         page.classList.remove("hidden");
//       }
//     });
//   });
// });

const showPage = (name) => {
  nav.forEach((item) => {
    item.classList.toggle("nav-active", item.dataset.name === name);
  });

  pages.forEach((page) => {
    page.classList.toggle("hidden", page.dataset.name === name);
  });
};

nav.forEach(item=>{
    item.addEventListener('click', ()=> showPage(item.dataset.name))
})