import * as THREE from 'three';

//1 create a scene
const scene= new THREE.Scene();
scene.background=new THREE.Color('#000000');

//2 camera
const camera= new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z=5;

//3 create object
const geometry= new THREE.BoxGeometry();
const material=new THREE.MeshLambertMaterial({color:'#0000ff', emissive:"#0000ff"});

const cube=new THREE.Mesh(geometry,material);
scene.add(cube)

//4 lightning
const light= new THREE.DirectionalLight(0x9CDBA6, 10);
light.position.set(1,1,1);
scene.add(light);

//5. Renderer
const rend= new THREE.WebGLRenderer();
rend.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(rend.domElement);

//animation
function animate(){
    requestAnimationFrame(animate);

    cube.rotation.x += 0.02;
    cube.rotation.y += 0.02;
    rend.render(scene, camera);
}
animate();
