import * as THREE from 'three'
import {OrbitControls} from "three/addons/controls/OrbitControls.js"
const canvas= document.getElementById('canvas');

//1. create a scene
const scene = new THREE.Scene();
scene.background= new THREE.Color("#f0f0f0");

//2. camera
const camera= new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1,1000);
camera.position.z=5;

//3. Object
const geometry= new THREE.DodecahedronGeometry();
const material= new THREE.MeshLambertMaterial({color:'#468585', emissive:'#468585'});
const dodeca= new THREE.Mesh(geometry, material);

const boxgeometry= new THREE.BoxGeometry(2,0.1,2);
const boxmaterial= new THREE.MeshStandardMaterial({color:'#B4B4B3', emissive:'B4B4B3'});
const box= new THREE.Mesh(boxgeometry, boxmaterial);
box.position.y=-1.5;

scene.add(dodeca);
scene.add(box);

//4. light
const light = new THREE.SpotLight(0x006769, 100);
light.position.set(1,1,1);
scene.add(light);

//5. renderer
const rend= new THREE.WebGLRenderer({canvas});
rend.setSize(window.innerWidth, window.innerHeight);
rend.setPixelRatio(window.devicePixelRatio);

//6. add orbit control
const controls= new OrbitControls(camera, rend.domElement);
controls.enableDamping= true;
controls.dampingFactor=0.05;
controls.enableZoom=true;
controls.enablePan=true;

//7. Animations
function animate(){
  requestAnimationFrame(animate);
  dodeca.rotation.x +=0.01;
  dodeca.rotation.y +=0.01;

  box.rotation.y +=0.005;
  controls.update();
  rend.render(scene,camera);

}

//8. Handling resizing
window,addEventListener('resize',()=>{
  camera.aspect=window.innerWidth/ window.innerHeight;
  camera.updateProjectionMatrix();
  rend.setSize(window.innerWidth, window.innerHeight);

});
animate();