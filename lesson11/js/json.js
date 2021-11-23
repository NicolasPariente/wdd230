const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const towns = jsonObject["towns"];

    let card = document.createElement("section");

    let h2 = document.createElement("h2");
    h2.textContent = `${towns[2].name}`;
    card.appendChild(h2);

    let h3 = document.createElement("h4");
    h3.textContent = `${towns[2].motto}`;
    card.appendChild(h3);

    h3 = document.createElement("h3");
    h3.textContent = `Year Founded: ${towns[2].yearFounded}`;
    card.appendChild(h3);

    h3 = document.createElement("h3");
    h3.textContent = `Population: ${towns[2].currentPopulation}`;
    card.appendChild(h3);

    h3 = document.createElement("h3");
    h3.textContent = `Annual Rain Fall: ${towns[2].averageRainfall}`;
    card.appendChild(h3);

    let img = document.createElement("img");
    let src = `images/${towns[2].photo}`;
    img.setAttribute("src", src);
    card.appendChild(img);

    document.querySelector("div.cards").appendChild(card);

    let card2 = document.createElement("section");

    h2 = document.createElement("h2");
    h2.textContent = `${towns[6].name}`;
    card2.appendChild(h2);

    h3 = document.createElement("h4");
    h3.textContent = `${towns[6].motto}`;
    card2.appendChild(h3);

    h3 = document.createElement("h3");
    h3.textContent = `Year Founded: ${towns[6].yearFounded}`;
    card2.appendChild(h3);

    h3 = document.createElement("h3");
    h3.textContent = `Population: ${towns[6].currentPopulation}`;
    card2.appendChild(h3);

    h3 = document.createElement("h3");
    h3.textContent = `Annual Rain Fall: ${towns[6].averageRainfall}`;
    card2.appendChild(h3);

    img = document.createElement("img");
    src = `images/${towns[6].photo}`;
    console.log(src);
    img.setAttribute("src", src);
    card2.appendChild(img);

    document.querySelector("div.cards").appendChild(card2);

    let card3 = document.createElement("section");

    h2 = document.createElement("h2");
    h2.textContent = `${towns[0].name}`;
    card3.appendChild(h2);

    h3 = document.createElement("h4");
    h3.textContent = `${towns[0].motto}`;
    card3.appendChild(h3);

    h3 = document.createElement("h3");
    h3.textContent = `Year Founded: ${towns[0].yearFounded}`;
    card3.appendChild(h3);

    h3 = document.createElement("h3");
    h3.textContent = `Population: ${towns[0].currentPopulation}`;
    card3.appendChild(h3);

    h3 = document.createElement("h3");
    h3.textContent = `Annual Rain Fall: ${towns[0].averageRainfall}`;
    card3.appendChild(h3);

    img = document.createElement("img");
    src = `images/${towns[0].photo}`;
    console.log(src);
    img.setAttribute("src", src);
    card3.appendChild(img);

    document.querySelector("div.cards").appendChild(card3);
  });
