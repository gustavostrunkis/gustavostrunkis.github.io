//import * as THREE from 'three';

const d3_viewer_1 = document.querySelector("#idD3_viewer_1");
var rangeInp_1 = document.querySelector("#idRange_1");

const scene_1 = new THREE.Scene();
scene_1.background = new THREE.Color("rgb(16, 17, 22)");
var camera_1 = new THREE.PerspectiveCamera( 75, d3_viewer_1.clientWidth / d3_viewer_1.clientHeight, 0.1, 1000 );

const renderer_1 = new THREE.WebGLRenderer();
renderer_1.setSize(d3_viewer_1.clientWidth, d3_viewer_1.clientHeight);

d3_viewer_1.appendChild(renderer_1.domElement);
//document.body.appendChild( renderer_1.domElement );

var lb_1 = document.querySelector("#idLabel_1");

const divisor_1 = 50;

var r1 = parseFloat(rangeInp_1.value) / divisor_1;

lb_1.textContent = "Raio: r = " + r1.toString() + ";";

const tetra_geometry_1 = new THREE.TetrahedronGeometry(r1, 0); 
//const icos_edges_1 = new THREE.EdgesGeometry(tetra_geometry_1); 
const tetra_lines_1 = new THREE.Mesh(tetra_geometry_1, new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: true}));
//const tetra_lines_1 = new THREE.LineSegments(tetra_geometry_1, new THREE.LineBasicMaterial( { color: 0xffffff } ) ); 

//const axesHelper = new THREE.AxesHelper( 5 );
//tetra_lines_1.add( axesHelper );

scene_1.add(tetra_lines_1);

var camera_radius_1 = 2;
var cameraRotationAngle_1 = 0;//Em radianos;
var cameraRotationVelocity_1 = 0.005;//Em radianos;

var camera_xPosition_1 = 0;
var camera_yPosition_1 = 0.6;
var camera_zPosition_1 = camera_radius_1;

camera_1.position.set(camera_xPosition_1, camera_yPosition_1, camera_zPosition_1);
camera_1.lookAt(0, 0, 0);

const rotateVelocity_1 = 0.005;

rangeInp_1.addEventListener("input", range_onChange_1);

function range_onChange_1(){
    r1 = parseFloat(rangeInp_1.value) / divisor_1;
    lb_1.textContent = "Raio: r = " + r1.toString() + ";";
}

function rotateCamera_Circle_1(camera, radius1, cameraRotationVelocity1, cameraRotationAngle1){
    //x: A rotação deverá ser sobre o eixo x;
    //y: Será ignorado;
    //z: É o raio do círculo;

    cameraRotationAngle1 += cameraRotationVelocity1;

    camera.position.x = radius1 * Math.sin(cameraRotationAngle1);
    camera.position.z = radius1 * Math.cos(cameraRotationAngle1);

    camera.lookAt(0, 0, 0);

    return cameraRotationAngle1;
}

function rezizeCamera_Render_1(){
    camera_xPosition_1 = camera_1.position.x;
    camera_yPosition_1 = camera_1.position.y;
    camera_zPosition_1 = camera_1.position.z;

    camera_1 = new THREE.PerspectiveCamera(75, d3_viewer_1.clientWidth / d3_viewer_1.clientHeight, 0.1, 1000 );
    camera_1.position.x = camera_xPosition_1;
    camera_1.position.y = camera_yPosition_1;
    camera_1.position.z = camera_zPosition_1;
    camera_1.lookAt(0, 0, 0);

    renderer_1.setSize(d3_viewer_1.clientWidth, d3_viewer_1.clientHeight);
}

function animate_1() {
	requestAnimationFrame(animate_1);

    tetra_lines_1.rotation.z = 0.8;
    tetra_lines_1.rotation.x = -Math.PI / 5;
    //tetra_lines_1.rotation.y -= 0.005;

    //tetra_lines_1.rotation.x += -0.005;

    cameraRotationAngle_1 = rotateCamera_Circle_1(camera_1, camera_radius_1, cameraRotationVelocity_1, cameraRotationAngle_1);

    rezizeCamera_Render_1();

    //console.log(tetra_lines_1.rotation.x);

    //tetra_lines_1.position.applyEuler(new THREE.Euler(tetra_lines_1.rotation.x, tetra_lines_1.rotation.y + rotateVelocity_1, tetra_lines_1.rotation.z), "XYZ");

    tetra_lines_1.geometry.dispose();
    tetra_lines_1.geometry = new THREE.TetrahedronGeometry(r1);

	renderer_1.render(scene_1, camera_1);
}

animate_1();