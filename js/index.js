let links = document.querySelectorAll("nav ul li a");
console.log(links);
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", (e) => {
    console.log(e.target);
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.target.classList.add("active");
  });
}
