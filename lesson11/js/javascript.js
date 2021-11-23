function toggleMenu() {
  document
    .getElementsByClassName("navigation")[0]
    .classList.toggle("responsive");
}

var objToday = new Date(),
  weekday = new Array(
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ),
  dayOfWeek = weekday[objToday.getDay()],
  domEnder = (function () {
    var a = objToday;
    if (/1/.test(parseInt((a + "").charAt(0)))) return "th";
    a = parseInt((a + "").charAt(1));
    return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th";
  })(),
  dayOfMonth =
    today + (objToday.getDate() < 10)
      ? "0" + objToday.getDate() + domEnder
      : objToday.getDate() + domEnder,
  months = new Array(
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ),
  curMonth = months[objToday.getMonth()],
  curYear = objToday.getFullYear();

var today = dayOfWeek + " " + dayOfMonth + " of " + curMonth + ", " + curYear;
document.querySelector("#modify").textContent = today;

const birthday = new Date();
var day1 = birthday.getDay();
if (day1 == 5) {
  var change = document.getElementsByClassName("friday")[0];
  change.style.display = "block";
}
function adjustRating(rating) {
  document.getElementById("ratingvalue").innerHTML = rating;
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
