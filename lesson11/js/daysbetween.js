let lastVisit = localStorage.getItem("lastvisit");

if (lastVisit == null) {
  localStorage.setItem("lastvisit", Date.now());
}
console.log(lastVisit);

let daysbetween = Date.now() / 8640000 - lastVisit / 8640000;
daysbetween = daysbetween.toFixed(0);
console.log(daysbetween);

document.querySelector(".daysbetween").textContent = daysbetween;
localStorage.setItem("lastvisit", Date.now());
