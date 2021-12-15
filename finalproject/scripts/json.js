const requestURL = "json/commerce.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const business = jsonObject["business"];

    for (let i = 0; i < 7; i++) {
      let card = document.createElement("section");

      let h2 = document.createElement("h2");
      h2.textContent = `${business[i].name}`;
      card.appendChild(h2);

      let img = document.createElement("img");
      let src = `${business[i].photo}`;
      console.log(`${business[i].photo}`);
      img.setAttribute("src", src);
      card.appendChild(img);

      let p = document.createElement("p");
      p.textContent = `${business[i].description}`;
      card.appendChild(p);

      let p2 = document.createElement("p");
      p2.innerHTML = `${business[i].contact[0]} <br> ${business[i].contact[1]} `;
      card.appendChild(p2);

      document.querySelector("div.cards").appendChild(card);
    }
  });
