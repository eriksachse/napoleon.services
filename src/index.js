import "./styles.css";

let h1 = document.getElementsByClassName("element");
const colors = ["blue", "red", "cyan", "magenta", "yellow", "green"];
for (var i = 0; i < h1.length; i++) {
  let text = h1[i].textContent.split("");
  let result = "";
  text.forEach(function (char) {
    // Append a new span only if the current char is not a space
    result += "<span>" + char + "</span>";
  });
  h1[i].innerHTML = result;

  var spans = h1[i].querySelectorAll("span");

  for (var is = 0; is < spans.length; is++) {
    // console.log(spans[is]);
    spans[is].addEventListener("mouseenter", function () {
      var randomColor = colors[Math.floor(Math.random() * colors.length)];
      this.style.color = randomColor;
      setTimeout(() => {
        this.style.color = "black";
      }, 1000);
    });
  }
}

// const a = document.getElementsByTagName("a");
// // console.log(a);
// for (var ia = 0; ia < a.length; ia++) {
//   let text = a[ia].textContent.split("");
//   let result = "";
//   text.forEach(function (char) {
//     // Append a new span only if the current char is not a space
//     result += "<span>" + char + "</span>";
//   });
//   a[ia].innerHTML = result;
//   var spansa = a[ia].querySelectorAll("span");
//   for (var is = 0; is < spansa.length; is++) {
//     var offsetLeft = spansa[is].offsetLeft;
//     console.log(spansa[is], offsetLeft);
//     // spansa[is].style.left = offsetLeft + "px";

//     spansa[is].style.position = "relative";

//     spansa[is].addEventListener("mouseenter", function () {
//       var randomColor = colors[Math.floor(Math.random() * colors.length)];
//       this.style.transform = "translateX(10px)";
//       setTimeout(() => {
//         this.style.color = "black";
//       }, 1000);
//     });
//   }
// }
import * as THREE from "three";

var elements = document.getElementsByClassName("element");

Array.prototype.forEach.call(elements, function (el, i) {
  // console.log(el, i);
});
var mail = document.getElementById("mail");
mail.addEventListener("click", function () {
  window.location.href = "mailto:erik@napoleon.services";
});

const scene = new THREE.Scene();
const frustumSize = 1000;
const aspect = window.innerWidth / window.innerHeight;
const camera = new THREE.OrthographicCamera(
  (frustumSize * aspect) / -2,
  (frustumSize * aspect) / 2,
  frustumSize / 2,
  frustumSize / -2,
  1,
  2000
);

camera.position.z = 600;
camera.position.y = 300;
camera.lookAt(scene.position);

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// sphere
var spheregeometry = new THREE.SphereGeometry(100);
var sphereMaterial = new THREE.MeshBasicMaterial({
  color: 0xffffff,
  polygonOffset: true,
  polygonOffsetFactor: 1, // positive value pushes polygon further away
  polygonOffsetUnits: 1,
});
var sphereMesh = new THREE.Mesh(spheregeometry, sphereMaterial);
scene.add(sphereMesh);

// sphere wireframe
var geo = new THREE.EdgesGeometry(sphereMesh.geometry); // or WireframeGeometry
var mat = new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 10 });
var wireframe = new THREE.LineSegments(geo, mat);
sphereMesh.add(wireframe);

const cylinderGeometry = new THREE.CylinderGeometry(100, 100, 200, 8);
var cylinderGeo = new THREE.EdgesGeometry(cylinderGeometry); // or WireframeGeometry
var cylinderMat = new THREE.LineDashedMaterial({
  color: 0x000000,
  linewidth: 2,
  dashSize: 1,
  gapSize: 0.5,
});
var cylinderWireframe = new THREE.LineSegments(cylinderGeo, cylinderMat);
cylinderWireframe.position.y = 100;
// scene.add(cylinderWireframe);

//
const lineGeometry = new THREE.BufferGeometry();
const vertices = new Float32Array([
  0,
  200,
  100,
  0,
  0,
  100,
  -70.7107,
  0,
  70.7107,
  -70.7107,
  200,
  70.7107,
  70.7107,
  0,
  70.7107,
  70.7107,
  200,
  70.7107,
  100,
  200,
  0,
  100,
  0,
  0,
  0,
  200,
  -100,
  0,
  0,
  -100,
  -100,
  200,
  0,
  -100,
  0,
  0,
  -70.7107,
  0,
  -70.7107,
  -70.7107,
  200,
  -70.7107,
  70.7107,
  0,
  -70.7107,
  70.7107,
  200,
  -70.7107,
  0,
  200,
  100,
  0,
  200,
  0,
  70.7107,
  200,
  70.7107,
  0,
  200,
  0,
  -70.7107,
  200,
  70.7107,
  0,
  200,
  0,
  70.7107,
  200,
  70.7107,
  70.7107,
  200,
  70.7107,
  100,
  200,
  0,
  0,
  200,
  0,
  0,
  200,
  -100,
  0,
  200,
  0,
  -100,
  200,
  0,
  0,
  200,
  0,
  -70.7107,
  200,
  -70.7107,
  0,
  200,
  0,
  70.7107,
  200,
  -70.7107,
  0,
  200,
  0,
  0,
  200,
  100,
  70.7107,
  200,
  70.7107,
  70.7107,
  200,
  70.7107,
  100,
  200,
  0,
  100,
  200,
  0,
  70.7107,
  200,
  -70.7107,
  70.7107,
  200,
  -70.7107,
  0,
  200,
  -100,
  0,
  200,
  -100,
  -70.7107,
  200,
  -70.7107,
  -70.7107,
  200,
  -70.7107,
  -100,
  200,
  0,
  -100,
  200,
  0,
  -70.7107,
  200,
  70.7107,
  -70.7107,
  200,
  70.7107,
  0,
  200,
  100,
  0,
  200,
  86.6025,
  61.2372,
  200,
  61.2372,
  61.2372,
  200,
  61.2372,
  86.6025,
  200,
  0,
  86.6025,
  200,
  0,
  61.2372,
  200,
  -61.2372,
  61.2372,
  200,
  -61.2372,
  0,
  200,
  -86.6025,
  0,
  200,
  -86.6025,
  -61.2372,
  200,
  -61.2372,
  -61.2372,
  200,
  -61.2372,
  -86.6025,
  200,
  0,
  -86.6025,
  200,
  0,
  -61.2372,
  200,
  61.2372,
  -61.2372,
  200,
  61.2372,
  0,
  200,
  86.6025,
  0,
  200,
  50,
  35.3553,
  200,
  35.3553,
  35.3553,
  200,
  35.3553,
  50,
  200,
  0,
  50,
  200,
  0,
  35.3553,
  200,
  -35.3553,
  35.3553,
  200,
  -35.3553,
  0,
  200,
  -50,
  0,
  200,
  -50,
  -35.3553,
  200,
  -35.3553,
  -35.3553,
  200,
  -35.3553,
  -50,
  200,
  0,
  -50,
  200,
  0,
  -35.3553,
  200,
  35.3553,
  -35.3553,
  200,
  35.3553,
  0,
  200,
  50,
]);
lineGeometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
const lineSegments = new THREE.LineSegments(
  lineGeometry,
  new THREE.LineDashedMaterial({ color: 0x000000, dashSize: 10, gapSize: 10 })
);
lineSegments.computeLineDistances();
scene.add(lineSegments);

// box
const geometryBox = box(500, 500, 500);
const boxSegments = new THREE.LineSegments(
  geometryBox,
  new THREE.LineDashedMaterial({ color: 0x000000, dashSize: 10, gapSize: 10 })
);
boxSegments.computeLineDistances();
boxSegments.rotation.y = Math.PI / 4;
scene.add(boxSegments);
document.addEventListener("mousemove", onDocumentMouseMove);
var mouseX = 0,
  mouseY = 0;
function onDocumentMouseMove(event) {
  mouseX = (event.clientX - window.innerWidth / 2) / 20;
  mouseY = (event.clientY - window.innerHeight / 2) / 20;
}
const animate = function () {
  requestAnimationFrame(animate);

  sphereMesh.rotation.y += 0.01;
  // line.rotation.y += 0.01;
  lineSegments.rotation.y += 0.01;
  // circle.rotation.z += 0.01;
  cylinderWireframe.rotation.y += 0.01;

  camera.position.x += (mouseX - camera.position.x) * 0.05;
  camera.position.y += (-mouseY - camera.position.y + 400) * 0.05;

  camera.lookAt(scene.position);

  renderer.render(scene, camera);
};

animate();
window.addEventListener("resize", onWindowResize);
function onWindowResize() {
  const aspect = window.innerWidth / window.innerHeight;

  camera.left = (-frustumSize * aspect) / 2;
  camera.right = (frustumSize * aspect) / 2;
  camera.top = frustumSize / 2;
  camera.bottom = -frustumSize / 2;

  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}
/*
var h1 = document.querySelector(".title");

var bar = document.createElement("div");
bar.classList.add("bar");
bar.style.position = "absolute";
bar.style.left = h1.offsetLeft + "px";
bar.style.top = h1.offsetTop + "px";
bar.style.width = h1.offsetWidth + "px";
bar.style.height = h1.offsetHeight + "px";
bar.style.backgroundColor = "black";
document.getElementById("app").appendChild(bar);
var barEl = document.getElementsByClassName("bar")[0];
setTimeout(() => {
  barEl.classList.add("bar-away");
}, 1000);
*/
function box(width, height, depth) {
  (width = width * 0.5), (height = height * 0.5), (depth = depth * 0.5);
  const geometry = new THREE.BufferGeometry();
  const position = [];
  position.push(
    -width,
    -height,
    -depth,
    -width,
    height,
    -depth,
    -width,
    height,
    -depth,
    width,
    height,
    -depth,
    width,
    height,
    -depth,
    width,
    -height,
    -depth,
    width,
    -height,
    -depth,
    -width,
    -height,
    -depth,
    -width,
    -height,
    depth,
    -width,
    height,
    depth,
    -width,
    height,
    depth,
    width,
    height,
    depth,
    width,
    height,
    depth,
    width,
    -height,
    depth,
    width,
    -height,
    depth,
    -width,
    -height,
    depth,
    -width,
    -height,
    -depth,
    -width,
    -height,
    depth,
    -width,
    height,
    -depth,
    -width,
    height,
    depth,
    width,
    height,
    -depth,
    width,
    height,
    depth,
    width,
    -height,
    -depth,
    width,
    -height,
    depth
  );
  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(position, 3)
  );
  return geometry;
}
