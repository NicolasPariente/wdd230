const apiURL =
  "http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=ae2888a2c00262c804233e7ec092c22a";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.querySelector(".condition").innerHTML = jsObject.weather[0].main;

    farenheit = (9 / 5) * (parseFloat(jsObject.main.temp_max) - 273) + 32;
    document.querySelector(".high").innerHTML = farenheit.toFixed(2);

    document.querySelector(".humidity").innerHTML = jsObject.main.humidity;

    document.querySelector(".speed").innerHTML = jsObject.wind.speed;

    let high = document.getElementsByClassName("high")[0].innerHTML;
    console.log(high);
    let speed = parseFloat(
      document.getElementsByClassName("speed")[0].innerHTML
    );
    console.log(speed);
    let chill = document.getElementsByClassName("chill")[0];
    let result = parseFloat(
      35.74 +
        0.6215 * high -
        35.75 * Math.pow(speed, 0.16) +
        0.4275 * high * Math.pow(speed, 0.16)
    );
    chill.innerHTML = result.toFixed(2);
    console.log(result);
  });

const apiURLforecast =
  "http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=ae2888a2c00262c804233e7ec092c22a";
fetch(apiURLforecast)
  .then((response) => response.json())
  .then((jsObject) => {
    list_days = jsObject.list;
    console.log(list_days);
    let list_correct_time = [];
    let moment = 0;
    for (let i = 0; i < list_days.length; i++) {
      moment = list_days[i].dt_txt;
      time = moment.split(" ");
      if (time[1] == "18:00:00") {
        list_correct_time.push(list_days[i]);
      }
    }
    console.log(list_correct_time);
    let list_of_temperatures = [];
    let list_of_images_src = [];
    let temp = 0;
    let image = "";
    for (let i = 0; i < list_correct_time.length; i++) {
      temp = list_correct_time[i].main.temp;
      temp = parseInt((9 / 5) * (temp - 273) + 32);
      list_of_temperatures.push(temp);
      image =
        "https://openweathermap.org/img/w/" +
        list_correct_time[i].weather[0].icon +
        ".png";
      list_of_images_src.push(image);
    }
    console.log(list_of_temperatures);
    document.querySelector(
      "#forecast_one"
    ).innerHTML = `${list_of_temperatures[0]}&deg;F`;
    document.querySelector("#forecast_img_one").src = list_of_images_src[0];

    document.querySelector(
      "#forecast_two"
    ).innerHTML = `${list_of_temperatures[1]}&deg;F`;
    document
      .querySelector("#forecast_img_two")
      .setAttribute("src", list_of_images_src[1]);

    document.querySelector(
      "#forecast_three"
    ).innerHTML = `${list_of_temperatures[2]}&deg;F`;
    document.querySelector("#forecast_img_three").src = list_of_images_src[2];

    document.querySelector(
      "#forecast_four"
    ).innerHTML = `${list_of_temperatures[3]}&deg;F`;
    document.querySelector("#forecast_img_four").src = list_of_images_src[3];

    document.querySelector(
      "#forecast_five"
    ).innerHTML = `${list_of_temperatures[4]}&deg;F`;
    document.querySelector("#forecast_img_five").src = list_of_images_src[4];
  });
