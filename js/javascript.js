let d = new Date();
let fullyear = d.getFullYear();
document.querySelector(".year").textContent = fullyear;
let modified = document.lastModified;
document.querySelector("#modify").textContent = modified;
