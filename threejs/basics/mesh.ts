import * as THREE from 'three';

const box = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({
  color: 0x40e940,
});

const mesh = new THREE.Mesh(box, material);

export { mesh };
