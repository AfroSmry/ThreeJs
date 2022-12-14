import * as THREE from 'three';

const render = new THREE.WebGLRenderer();

render.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(render.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const axesHelper = new THREE.AxesHelper(3);

scene.add(axesHelper);

camera.position.set(0, 2, 5);

const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x00FF00 });
const box = new THREE.Mesh(boxGeometry, boxMaterial);
scene.add(box);



function animate() {
    box.rotation.x += 0.01;
    box.rotation.y += 0.01;
    render.render(scene, camera);
}

render.setAnimationLoop(animate);