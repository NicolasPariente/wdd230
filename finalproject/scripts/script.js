function toggleMenu() {
  document
    .getElementsByClassName("navigation")[0]
    .classList.toggle("responsive");
}
let d = new Date();
let fullyear = d.getFullYear();
document.querySelector(".year").textContent = fullyear;
let modified = document.lastModified;
document.querySelector("#modify").textContent = modified;
