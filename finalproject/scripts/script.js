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

function toggle1() {
  document.getElementById("cards").classList.remove("cards2");
  document.getElementById("cards").classList.add("cards");
}
function toggle2() {
  document.getElementById("cards").classList.remove("cards");
  document.getElementById("cards").classList.add("cards2");
}
function check_Alpha(letters) {
  //let regex = /[a-zA-Z]{5,30}/;
  let regex = /\d+/;
  if (regex.test(letters.name.value) == true) {
    alert("Your full name should have more than 5 characters and only letters");
    letters.name.focus();
    return false;
  }
}
