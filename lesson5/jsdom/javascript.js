const input = document.querySelector("#favchap");
const button = document.querySelector("#button");
const list = document.querySelector(".list");

button.addEventListener("click", function () {
  if (document.querySelector("#favchap").value != "") {
    const item = document.createElement("li");
    list.appendChild(item);
    const text_of_input = document.querySelector("#favchap").value;
    const text = document.createTextNode(text_of_input);
    item.appendChild(text);
    const delete_item = document.createElement("button");
    item.appendChild(delete_item);
    const button_text = document.createTextNode("❌");
    delete_item.appendChild(button_text);
    delete_item.addEventListener("click", function () {
      item.parentNode.removeChild(item);
    });
    document.querySelector("#favchap").value = "";
  }
});
