function renderTextureSerious()
{
	groundTex = texloader.load("images/Ground/Dark_gray_surface.jpg");
	wallTex = texloader.load("images/Walls/gray-siding.jpg");
	resetRoom();
	generate();
}

function renderTextureColourful()
{
	groundTex = texloader.load("images/Ground/woodFloor.jpg");
	wallTex = texloader.load("images/Walls/brickWall.jpg");
	resetRoom();
	generate();
}

function renderTextureSilly()
{
	groundTex = texloader.load("images/Ground/space.png");
	wallTex = texloader.load("images/Ground/space.png");
	resetRoom();
	generate();
}

function makeBall(pos)
{
	// Ball
	var cover = new THREE.MeshLambertMaterial( { color: 0x4286f4 } ); 
	var shape = new THREE.SphereGeometry( speeds.radius * scale, 64, 64 );
	theSphere = new THREE.Mesh( shape, cover );
	theSphere.position.x = sphereOriginX; 
	theSphere.position.y = sphereOriginY; 
	theSphere.position.z = sphereOriginZ; 
	theSphere.castShadow = true;
	scene.add(theSphere);
	
	// Trail to follow the ball
	// specify points to create planar trail-head geometry
	var trailHeadGeometry = [];
	trailHeadGeometry.push( 
	  new THREE.Vector3( -10.0, 0.0, 0.0 ), 
	  new THREE.Vector3( 0.0, 0.0, 0.0 ), 
	  new THREE.Vector3( 10.0, 0.0, 0.0 ) 
	);

	// create the trail renderer object
	trail = new THREE.TrailRenderer( scene, false );

	// create material for the trail renderer
	var trailMaterial = THREE.TrailRenderer.createBaseMaterial();	

	// specify length of trail
	var trailLength = 300;

	// initialize the trail
	trail.initialize( trailMaterial, trailLength, false, 0, trailHeadGeometry, theSphere );
	trailMaterial.uniforms.headColor.value.set( 1, 1, 1, 1 );
    trailMaterial.uniforms.tailColor.value.set( 1, 1, 1, 1 );
	trail.activate();
	
	// Second Ball
	if(quest == "LeaAM2016Q1b")
	{
		theSphere2 = new THREE.Mesh( shape, cover );
		theSphere2.castShadow = true;
		scene.add(theSphere2);
	}
}

function makeGround(pos, radAngle)
{
	// Ground
	var geometry = new THREE.PlaneGeometry( speeds.roomSize * scale, speeds.roomSize * scale / Math.cos(radAngle));//, 1, 1 );
	var material;
	if(speeds.angle == 0)
		material = new THREE.MeshPhongMaterial( { map: groundTex } );
	else
		material = new THREE.MeshPhongMaterial( { map: groundTex, transparent: true, opacity: 0.7 } );
	floor = new THREE.Mesh( geometry, material );
	floor.position.y = pos; //lower it 
	floor.rotation.x = -Math.PI/2 + radAngle; //-90 degrees around the xaxis 
	floor.material.side = THREE.DoubleSide;	
	floor.receiveShadow = true;
	scene.add( floor );
}

function makeWalls(pos, radAngle)
{
	// BackWall
	var geometry = new THREE.PlaneGeometry( speeds.roomSize * scale, speeds.roomSize * scale , 1, 1 );
	var material = new THREE.MeshPhongMaterial( { map: wallTex } );
	wall1 = new THREE.Mesh( geometry, material );
	wall1.position.y = (speeds.roomSize * scale * Math.tan(radAngle))/2;
	wall1.position.z = pos;  
	wall1.receiveShadow = true;
	scene.add( wall1 );
	
	// FrontWall
	var geometry = new THREE.PlaneGeometry( speeds.roomSize * scale, speeds.roomSize * scale, 1, 1 );
	var material = new THREE.MeshPhongMaterial( { map: wallTex } );
	wall4 = new THREE.Mesh( geometry, material );
	wall4.position.y = -(speeds.roomSize * scale * Math.tan(radAngle))/2;
	wall4.position.z = -pos;  
	wall4.rotation.y = Math.PI;
	wall4.receiveShadow = true;
	scene.add( wall4 );
	
	// LeftWall
	var geometry = new THREE.PlaneGeometry( speeds.roomSize * scale, speeds.roomSize * scale, 1, 1 );
	var material = new THREE.MeshPhongMaterial( { map: wallTex } );
	wall2 = new THREE.Mesh( geometry, material );
	wall2.position.x = pos;  
	wall2.rotation.y = Math.PI/2;
	wall2.receiveShadow = true;
	scene.add( wall2 );
	
	// RightWall
	var geometry = new THREE.PlaneGeometry( speeds.roomSize * scale, speeds.roomSize * scale, 1, 1 );
	var material = new THREE.MeshPhongMaterial( { map: wallTex } );
	wall3 = new THREE.Mesh( geometry, material );
	wall3.position.x = -pos;  
	wall3.rotation.y = -Math.PI/2;
	wall3.receiveShadow = true;
	scene.add( wall3 );
}

function makeProps(pos, radAngle)
{
	// MiddleNet
	if(quest == "LeaAM2015Q3a")
	{
		var geometry = new THREE.PlaneGeometry( (speeds.roomSize * scale)/1.4, scale, 1, 1 );
		var material = new THREE.MeshPhongMaterial( { map: propTex } );
		net = new THREE.Mesh( geometry, material );  
		net.position.y = pos + scale/2;
		net.rotation.y = Math.PI/2;
		net.material.side = THREE.DoubleSide;
		net.receiveShadow = true;
		scene.add( net );
	}
}

function markTheSpot()
{
	// Marks Spot where ball hit the ground
	var material = new THREE.LineBasicMaterial( { color: 0x000000 } );
    var geometry = new THREE.CircleGeometry( speeds.radius * scale, 64 );
	spot = new THREE.Mesh( geometry, material );
	spot.position.x = theSphere.position.x;
	if(speeds.angle == 0)
		spot.position.y = floor.position.y + 0.2 * scale;
	else
		spot.position.y = theSphere.position.y + 0.2 * scale;
	spot.position.z = theSphere.position.z;
	spot.rotation.x = -Math.PI/2 + radAngle;
	scene.add(spot);
}

function markTheLines()
{
	for(x = -2; x < 3; x++)
	{
		// Displacement
		if(quest == "LeaAM2014Q3a")
		{
			var pos = (-(speeds.roomSize * scale)/2);
			
			// y-axis
			var material = new THREE.LineBasicMaterial({ color: 0x0000ff, linewidth: 1 });
			var geometry = new THREE.Geometry();
			geometry.vertices.push(
				new THREE.Vector3( sphereOriginX + x, sphereOriginY, sphereOriginZ + x ),
				new THREE.Vector3( sphereOriginX + x, pos + (7.35 * scale), sphereOriginZ + x )
			);
			var disLineY = new THREE.Line( geometry, material );
			scene.add( disLineY );
			disLinesY.push(disLineY);
			
			// x-axis
			var material = new THREE.LineBasicMaterial({ color: 0x0000ff, linewidth: 1 });
			var geometry = new THREE.Geometry();
			geometry.vertices.push(
				new THREE.Vector3( (sphereOriginX + (15 * scale) ) + x, pos + (7.35 * scale), sphereOriginZ + x ),
				new THREE.Vector3( (sphereOriginX + (53 * scale)) + x, pos + (7.35 * scale), theSphere.position.z + x )
			);
			var disLineX = new THREE.Line( geometry, material );
			scene.add( disLineX );
			disLinesX.push(disLineX);
		}
		else
		{
			// y-axis
			var material = new THREE.LineBasicMaterial({ color: 0x0000ff, linewidth: 1 });
			var geometry = new THREE.Geometry();
			if(touchedGround)
				geometry.vertices.push(
					new THREE.Vector3( sphereOriginX + x, sphereOriginY, sphereOriginZ + x ),
					new THREE.Vector3( sphereOriginX + x, spot.position.y, sphereOriginZ + x )
				);
			else
				geometry.vertices.push(
					new THREE.Vector3( sphereOriginX + x, sphereOriginY, sphereOriginZ + x ),
					new THREE.Vector3( sphereOriginX + x, theSphere.position.y, sphereOriginZ + x )
				);
			var disLineY = new THREE.Line( geometry, material );
			scene.add( disLineY );
			disLinesY.push(disLineY);
			
			// x-axis
			var material = new THREE.LineBasicMaterial({ color: 0x0000ff, linewidth: 1 });
			var geometry = new THREE.Geometry();
			if(touchedGround)
				geometry.vertices.push(
					new THREE.Vector3( sphereOriginX + x, spot.position.y, sphereOriginZ + x ),
					new THREE.Vector3( spot.position.x + x, spot.position.y, spot.position.z + x )
				);
			else
				geometry.vertices.push(
					new THREE.Vector3( sphereOriginX + x, theSphere.position.y, sphereOriginZ + x ),
					new THREE.Vector3( theSphere.position.x + x, theSphere.position.y, theSphere.position.z + x )
				);
			var disLineX = new THREE.Line( geometry, material );
			scene.add( disLineX );
			disLinesX.push(disLineX);
		}
		
		// Highest point
		var material = new THREE.LineBasicMaterial({ color: 0xff0000, linewidth: 1 });
		var geometry = new THREE.Geometry();
		geometry.vertices.push(
			new THREE.Vector3( sphereOriginX + x, sphereOriginY, sphereOriginZ + x ),
			new THREE.Vector3( sphereOriginX + x, highestPoint * scale, sphereOriginZ + x )
		);
		var highLine = new THREE.Line( geometry, material );
		scene.add( highLine );
		highLines.push(highLine);
	}
	linesExist = true;
}

function generate()
{
	scene.remove(theSphere);
	scene.remove(theSphere2);
	scene.remove(floor);
	scene.remove(wall1);
	scene.remove(wall2);
	scene.remove(wall3);
	scene.remove(wall4);
	scene.remove(net);
	scene.remove(spot);
	
	for(x = 0; x < 5; x++)
	{
		scene.remove(disLinesY.pop());
		scene.remove(disLinesX.pop());
		scene.remove(highLines.pop());
	}
	linesExist = false;
	
	// Limiters for the room and ball size
	if(speeds.radius < 0)
		speeds.radius = 0;
	else if(speeds.radius > 30)
		speeds.radius = 30;
	
	if(speeds.roomSize < 0)
		speeds.roomSize = 0;
	else if(speeds.roomSize > 200)
		speeds.roomSize = 200;
	
	// Ground and wall positions
	var pos = -(speeds.roomSize * scale)/2;
	
	// Ground angle
	radAngle = speeds.angle * (Math.PI/180);
	
	makeBall(pos);
	makeGround(pos, radAngle);
	makeWalls(pos, radAngle);
	makeProps(pos, radAngle);
	
	updateCameraXYZ();
	camera.updateMatrix();
	render();
}