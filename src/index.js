import * as THREE from 'three';

window.addEventListener('load', init);

let scene, camera;

const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('canvas')
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

function init(){
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );
    camera.position.set(1,1,1000);
    scene.add( camera );

    const geometry = new THREE.BoxGeometry(400, 400, 400);
    const material = new THREE.MeshNormalMaterial();
    const box = new THREE.Mesh(geometry, material);
    scene.add(box);
    animate();
}

function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}