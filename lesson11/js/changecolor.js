var colors = ["#b1d2f8", "rgb(231, 197, 182)"];
var i = 0;
setInterval(function () {
  document.querySelector(".events").style.background = colors[i];
  i = i == colors.length - 1 ? 0 : i + 1;
}, 800);
