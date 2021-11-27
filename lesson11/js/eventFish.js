const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const towns = jsonObject["towns"];

    let event = document.querySelector(".events");

    h3 = document.createElement("h3");
    h3.textContent = `${towns[2].events[0]}`;
    event.appendChild(h3);

    h3 = document.createElement("h3");
    h3.textContent = `${towns[2].events[1]}`;
    event.appendChild(h3);

    h3 = document.createElement("h3");
    h3.textContent = `${towns[2].events[2]}`;
    event.appendChild(h3);
  });
