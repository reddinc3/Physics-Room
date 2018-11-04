// Scene
var scene = new THREE.Scene();

// Camera
var camera = new THREE.PerspectiveCamera( 50, w / h, 1, 100000 );
scene.add(camera);
updateCameraXYZ();
camera.updateMatrix();

// renderer
var renderer = new THREE.WebGLRenderer({alpha: true});
renderer.domElement.style.position = "relative";
renderer.shadowMap.enabled = true;
renderer.shadowMapSoft = true;
renderer.setSize( w, h );

// Page elements
var container = document.getElementById('container');
var noise = document.getElementById('theaudio');
container.appendChild( renderer.domElement );

// User interfaces
var junior_Cert;
var junior_Cert_exits = false;
var leaving_Cert;
var leaving_Cert_exits = false;
var third_level;
var third_level_exits = false;

// Renders the world
function render() 
{
	camera.lookAt( scene.position );
	renderer.render( scene, camera );	 		  
}

function setCamera(num) 
{
	radius = num;
	updateCameraXYZ();
	camera.updateMatrix(); 		  
}