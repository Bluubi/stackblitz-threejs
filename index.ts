import * as THREE from 'three';
import { mesh } from './threejs/basics/mesh';
import { camera } from './threejs/basics/camera';

const webGLRender = new THREE.WebGLRenderer();

webGLRender.render(mesh, camera);

document.querySelector('#app').appendChild(webGLRender.domElement);
