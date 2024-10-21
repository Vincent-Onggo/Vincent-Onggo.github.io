import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

// Create a Three.JS Scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 100); // Adjust based on your model's size
camera.lookAt(0, 0, 0);         // Ensure the camera is pointing at the model

// Instantiate a new renderer with a transparent background
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("container3D").appendChild(renderer.domElement);

// Add minimal ambient lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 1); // Soft, white ambient light
scene.add(ambientLight);

// Load the CAD model
const loader = new GLTFLoader();
loader.load('static/UVINCI.gltf', function (gltf) {
  const object = gltf.scene;
  object.scale.set(1, 1, 1);  // Adjust scale if necessary
  object.position.set(0, 0, 0); // Center the model
  scene.add(object);
}, undefined, function (error) {
  console.error('An error happened:', error);
});

// Basic render loop to display the model
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();

// Handle window resizing to keep the 3D model responsive
window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
