import "./styles.css";
import * as THREE from "three";

var elements = document.getElementsByClassName("element");

Array.prototype.forEach.call(elements, function (el, i) {
  console.log(el, i);
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
camera.position.y = 400;
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
  // lines
  0.0,
  200.0,
  100.0,

  0.0,
  0.0,
  100.0,

  -70.7107,
  0.0,
  70.7107,

  -70.7107,
  200.0,
  70.7107,

  70.7107,
  0.0,
  70.7107,

  70.7107,
  200.0,
  70.7107,

  100.0,
  200.0,
  0.0,

  100.0,
  0.0,
  0.0,

  0.0,
  200.0,
  -100.0,

  0.0,
  0.0,
  -100.0,

  -100.0,
  200.0,
  0.0,

  -100.0,
  0.0,
  0.0,

  -70.7107,
  0.0,
  -70.7107,

  -70.7107,
  200.0,
  -70.7107,

  70.7107,
  0.0,
  -70.7107,

  70.7107,
  200.0,
  -70.7107,
  // lines
  0.0,
  200.0,
  100,
  0.0,
  200.0,
  0,

  70.7107,
  200.0,
  70.7107,
  0,
  200.0,
  0,

  -70.7107,
  200.0,
  70.7107,
  0,
  200.0,
  0,

  70.7107,
  200.0,
  70.7107,
  70.7107,
  200.0,
  70.7107,

  100.0,
  200.0,
  0.0,
  0.0,
  200.0,
  0.0,

  0.0,
  200.0,
  -100.0,
  0.0,
  200.0,
  0.0,

  -100.0,
  200.0,
  0.0,
  0.0,
  200.0,
  0.0,

  -70.7107,
  200.0,
  -70.7107,
  0,
  200.0,
  0,

  70.7107,
  200.0,
  -70.7107,
  0,
  200.0,
  0,

  // outer circle

  0.0,
  200.0,
  100,
  70.7107,
  200.0,
  70.7107,

  70.7107,
  200.0,
  70.7107,
  100.0,
  200.0,
  0,

  100.0,
  200.0,
  0,
  70.7107,
  200.0,
  -70.7107,

  70.7107,
  200.0,
  -70.7107,
  0,
  200.0,
  -100,

  0.0,
  200.0,
  -100,
  -70.7107,
  200.0,
  -70.7107,

  -70.7107,
  200.0,
  -70.7107,
  -100.0,
  200.0,
  0,

  -100.0,
  200.0,
  0,
  -70.7107,
  200.0,
  70.7107,

  -70.7107,
  200.0,
  70.7107,

  0,
  200.0,
  100,

  // middle circle

  0.0,
  200.0,
  86.6025,
  61.2372,
  200.0,
  61.2372,

  61.2372,
  200.0,
  61.2372,
  86.6025,
  200.0,
  0,

  86.6025,
  200.0,
  0,
  61.2372,
  200.0,
  -61.2372,

  61.2372,
  200.0,
  -61.2372,
  0,
  200.0,
  -86.6025,

  0.0,
  200.0,
  -86.6025,
  -61.2372,
  200.0,
  -61.2372,

  -61.2372,
  200.0,
  -61.2372,
  -86.6025,
  200.0,
  0,

  -86.6025,
  200.0,
  0,
  -61.2372,
  200.0,
  61.2372,

  -61.2372,
  200.0,
  61.2372,

  0,
  200.0,
  86.6025,

  // inner circle

  0.0,
  200.0,
  50.0,
  35.3553,
  200.0,
  35.3553,

  35.3553,
  200.0,
  35.3553,
  50.0,
  200.0,
  0,

  50.0,
  200.0,
  0,
  35.3553,
  200.0,
  -35.3553,

  35.3553,
  200.0,
  -35.3553,
  0,
  200.0,
  -50.0,

  0.0,
  200.0,
  -50.0,
  -35.3553,
  200.0,
  -35.3553,

  -35.3553,
  200.0,
  -35.3553,
  -50.0,
  200.0,
  0,

  -50.0,
  200.0,
  0,
  -35.3553,
  200.0,
  35.3553,

  -35.3553,
  200.0,
  35.3553,

  0,
  200.0,
  50.0,
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

const animate = function () {
  requestAnimationFrame(animate);

  sphereMesh.rotation.y += 0.01;
  // line.rotation.y += 0.01;
  lineSegments.rotation.y += 0.01;
  // circle.rotation.z += 0.01;
  cylinderWireframe.rotation.y += 0.01;
  // lineMesh.rotation.y += 0.01;
  // boxSegments.rotation.y += 0.01;

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
