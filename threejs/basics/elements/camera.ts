import * as THREE from 'three';

const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.2,
  1000
);

camera.position.set(0, 10, 50);
camera.rotation.set(0, 0, 0);

export { camera };
