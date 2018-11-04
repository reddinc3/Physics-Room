// Lights and Shadows

var ambientLight = new THREE.AmbientLight(0x555555);
//var ambientLight = new THREE.AmbientLight(0xdfebff);
scene.add(ambientLight);
//scene.add(new THREE.AmbientLight(0xdfebff, 1.2));

var light = new THREE.DirectionalLight(0xdfebff, 1.75);
light.castShadow = true;
scene.add(light);

light.position.y = (speeds.roomSize) * scale;
light.position.x = (speeds.roomSize) * scale;
light.position.z = (speeds.roomSize) * scale;

light.shadow.mapSize.width = (speeds.roomSize) * scale * 3;
light.shadow.mapSize.height = (speeds.roomSize) * scale * 3;

var d = (speeds.roomSize) * scale * 3;
//var d = 50;

light.shadow.camera.left = -d;
light.shadow.camera.right = d;
light.shadow.camera.top = d;
light.shadow.camera.bottom = -d;

light.shadow.camera.far = (speeds.roomSize) * scale * 23;
//light.shadow.camera.far = (speeds.roomSize) * scale * 4;

function lightSwitch()
{
	if(ambientLight.intensity == 1) 
	{
		scene.remove(light);
		ambientLight.intensity = 4;
	}
	else
	{
		scene.add(light);
		ambientLight.intensity = 1;
	}
}