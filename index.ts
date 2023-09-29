import * as THREE from 'three';
import { scene } from './threejs/basics/scene';
import { camera } from './threejs/basics/elements/camera';

const webGLRender = new THREE.WebGLRenderer();

webGLRender.render(scene, camera);

document.querySelector('#app').appendChild(webGLRender.domElement);
