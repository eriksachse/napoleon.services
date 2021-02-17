import "./styles.css";

var mailT = document.querySelector("#mail-text");
var text = mailT.textContent.split("");

var result = "";

text.forEach(function (char) {
  result += "<span>" + char + "</span>";
});

mailT.innerHTML = result;

var mailTElements = document.querySelectorAll("#mail-text span");

function degreeToRad(angle) {
  return angle * (Math.PI / 180);
}
var animationCycle = 1;
var frequency = 0.15;
var pixelOffset = 20;

window.setInterval(function () {
  for (var i = 0; i < mailTElements.length; i++) {
    mailTElements[i].style.marginLeft = i * 16 + "px";
    mailTElements[i].style.transform =
      "translateY(" +
      Math.sin(i + degreeToRad(animationCycle * frequency)) * pixelOffset +
      "px)rotateZ(" +
      Math.cos(i + degreeToRad(animationCycle * frequency)) * pixelOffset +
      "deg)";
    animationCycle -= 1;
  }
}, 15);

var tiles = document.getElementById("tiles");
var tileElements = [];
tiles.innerHTML = "";
var count = 0;
for (var row = 0; row < 40; row++) {
  for (var column = 0; column < 10; column++) {
    count++;
    var div = document.createElement("div");
    // div.style.fontSize = "8px";
    div.style.position = "absolute";
    tileElements.push(div);
    // position(div, column, row);
    div.style.top = column * 2.5 + "vw";
    div.style.left = row * 2.5 + "vw";

    tiles.appendChild(div);
  }
}

// function loop1() {
//   setTimeout(() => {
//     var randomItem =
//       tileElements[Math.floor(Math.random() * tileElements.length)];
//     console.log(randomItem);
//     randomItem.style.loop1();
//   }, 5000);
// }
// loop1();

var windowH = window.innerHeight;
var tilesH = tiles.offsetHeight;
console.log(tilesH);
var intro = document.getElementById("intro");
intro.style.height = windowH - tilesH + "px";
