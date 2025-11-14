const FAQpage = document.querySelectorAll(".FAQ-page>div");
const FAQlist = document.querySelectorAll(".FAQ-list>div");

FAQlist.forEach((item) => {
  item.addEventListener("click", () => {
    let name = item.dataset.name;
    FAQlist.forEach(item=>item.classList.remove('FAQ-list-active'))
    item.classList.add('FAQ-list-active')
    FAQpage.forEach((page) => {
      page.classList.add("hidden");
      if (name == page.dataset.name) {
        page.classList.remove("hidden");
      }
    });
  });
});
