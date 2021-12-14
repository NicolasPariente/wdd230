var colors = ["#FFFFFF", "#FFdd00"];
var colors2 = ["#FFFFFF", "#1976d2"];
var colors3 = ["#FFFFFF", "#FFdd00"];
var i = 0;
setInterval(function () {
  document.getElementById("advertisement-one").style.borderColor = colors[i];
  document.getElementById("advertisement-two").style.borderColor = colors2[i];
  document.getElementById("advertisement-three").style.borderColor = colors3[i];
  i = i == colors.length - 1 ? 0 : i + 1;
}, 800);
var i2 = 0;
