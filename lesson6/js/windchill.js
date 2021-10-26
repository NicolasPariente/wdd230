let high = parseInt(document.getElementsByClassName("high")[0].innerHTML);
let speed = parseInt(document.getElementsByClassName("speed")[0].innerHTML);
let chill = document.getElementsByClassName("chill")[0];
let result = parseInt(
  35.74 +
    0.6215 * high -
    35.75 * Math.pow(speed, 0.16) +
    0.4275 * high * Math.pow(speed, 0.16)
);
chill.innerHTML = result;
console.log(result);
