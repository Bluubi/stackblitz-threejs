import * as THREE from 'three';
import { boxGeometry } from './geometry';
import { material } from './material';

const mesh = new THREE.Mesh(boxGeometry, material);

export { mesh };
