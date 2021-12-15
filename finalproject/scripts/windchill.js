const apiURL2 =
  "https://api.openweathermap.org/data/2.5/onecall?lat=-32.36667&lon=-54.18333&exclude=hourly,minutely&appid=ae2888a2c00262c804233e7ec092c22a";
fetch(apiURL2)
  .then((response) => response.json())
  .then((jsObject) => {
    information = jsObject;
    console.log(information);
    let current = information.current;
    let temp = parseInt((9 / 5) * (current.temp - 273) + 32);

    let description = current.weather[0].main;

    let humidity = current.humidity;

    let srcimg =
      "https://openweathermap.org/img/w/" + current.weather[0].icon + ".png";
    if (current.weather[0].icon == "01d" || current.weather[0].icon == "01n") {
      srcimg = "images/sun.png";
    }
    if (current.weather[0].icon == "02d" || current.weather[0].icon == "02n") {
      srcimg = "images/cloudsun.png";
    }
    if (current.weather[0].icon == "03d" || current.weather[0].icon == "03n") {
      srcimg = "images/clouds.png";
    }
    if (current.weather[0].icon == "04d" || current.weather[0].icon == "04n") {
      srcimg = "images/brokenclouds.png";
    }
    if (
      current.weather[0].icon == "09d" ||
      current.weather[0].icon == "09n" ||
      current.weather[0].icon == "10d" ||
      current.weather[0].icon == "10n"
    ) {
      srcimg = "images/rain.png";
    }
    if (current.weather[0].icon == "11d" || current.weather[0].icon == "11n") {
      srcimg = "images/storm.png";
    }

    document.querySelector("#forecast_img").src = srcimg;
    document.querySelector("#temp").innerHTML = temp;
    document.querySelector("#description").innerHTML = description;
    document.querySelector("#humidity").innerHTML = humidity;
    for (let i = 1; i < 4; i++) {
      srcimg =
        "https://openweathermap.org/img/w/" +
        information.daily[i].weather[0].icon +
        ".png";
      temp = information.daily[i].temp.day;
      temp = parseInt((9 / 5) * (temp - 273) + 32);
      let idimg = `#forecast_img${i}`;
      let idtemp = `#forecast${i}`;
      document.querySelector(idimg).src = srcimg;
      document.querySelector(idtemp).innerHTML = temp;
    }
  });
let date = new Date();
let day = date.getDay();
console.log(day);
let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
let day_indexes = [day - 1, day, day + 1, day + 2, day + 3];
let correct_index = function (day) {
  if (day > 6) {
    day = day - 7;
  }
  return day;
};
day_index_correct = day_indexes.map(correct_index);
console.log(day_index_correct);

document.querySelector("#day1").innerHTML = days[day_index_correct[1]];

document.querySelector("#day2").innerHTML = days[day_index_correct[2]];

document.querySelector("#day3").innerHTML = days[day_index_correct[3]];
