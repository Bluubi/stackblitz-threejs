import * as THREE from 'three';
import { mesh } from './elements/mesh';
import { camera } from './elements/camera';

const scene = new THREE.Scene();

scene.add(mesh, camera);

export { scene };
