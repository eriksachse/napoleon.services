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
    console.log(
      Math.sin(i + degreeToRad(animationCycle * frequency)) * pixelOffset
    );
    animationCycle -= 1;
  }
}, 15);

const tiles = document.getElementById("tiles");
var elements = tiles.childNodes;

tiles.innerHTML = "";
var count = 0;
for (var row = 0; row < 40; row++) {
  for (var column = 0; column < 4; column++) {
    count++;
    var div = document.createElement("div");
    // div.style.fontSize = "8px";
    div.style.position = "absolute";
    div.style.left = row * 2.5 + "vw";
    div.style.top = column * 2.5 + "vw";

    tiles.appendChild(div);
  }
}
