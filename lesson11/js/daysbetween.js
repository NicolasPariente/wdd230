let lastVisit = localStorage.getItem("lastvisit");
let now = String(Date.now());
let daysbetween = 0;
if (lastVisit == null) {
  localStorage.setItem("lastvisit", now);
  lastVisit = localStorage.getItem("lastvisit");
} else {
  console.log(lastVisit);

  daysbetween = Date.now() / 8640000 - parseFloat(lastVisit) / 8640000;
  daysbetween = daysbetween.toFixed(0);
  console.log(daysbetween);
}
document.querySelector(".daysbetween").textContent = daysbetween;
localStorage.setItem("lastvisit", now);
