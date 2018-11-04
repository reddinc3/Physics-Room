function makeJuniorCertGUI()
{
	results.innerHTML = "";
	// Makes user interface for Junior Cert
	if(!junior_Cert_exits)
	{
		junior_Cert = new dat.GUI();
			
		var factors = junior_Cert.addFolder('Factors'); factors.open();		
		var movement_Variables = junior_Cert.addFolder('Movement Variables'); movement_Variables.open();

		movement_Variables.add(speeds, 'yVelocity').listen();
		movement_Variables.add(speeds, 'yAcceleration').listen();

		factors.add(speeds, 'StopTime').listen();
		junior_Cert_exits = true;
	}
	else
		junior_Cert.open();
}
	
// GUI Questions

// Physics
// Higher
function Jun2011Q9aii()
{ 
	resetRoom();
	
	examQuestion.src="images/Questions/Junior_cert/Physics/Higher/2011_Q9_a_ii.JPG";
	
	quest = "Jun2011Q9aii";
	
	setCamera(6000);
	
	speeds.xVelocity = 0;
	speeds.xAcceleration = 0;
	speeds.yVelocity = 0;
	speeds.yAcceleration = -9.8;
	speeds.zVelocity = 0;
	speeds.zAcceleration = 0;
	speeds.radius = 1.0;
	speeds.elasticity = 0.7;
	speeds.friction = 0.95;
	speeds.roomSize = 110;
	speeds.StopTime = 3.5;
	speeds.angle = 0;
	
	var pos = -(speeds.roomSize * scale)/2;
	sphereOriginX = 0;
	sphereOriginY = -pos + -10 * scale;
	sphereOriginZ = 0;
	highestPoint = 0;
	
	generate();
}

function Jun2011Q9aiii()
{ 
	resetRoom();
	
	examQuestion.src="images/Questions/Junior_cert/Physics/Higher/2011_Q9_a_iii.JPG";
	
	quest = "Jun2011Q9aiii";
	
	setCamera(6000);
	
	speeds.xVelocity = 0;
	speeds.xAcceleration = 0;
	speeds.yVelocity = 0;
	speeds.yAcceleration = -9.8;
	speeds.zVelocity = 0;
	speeds.zAcceleration = 0;
	speeds.radius = 1.0;
	speeds.elasticity = 0.7;
	speeds.friction = 0.95;
	speeds.roomSize = 110;
	speeds.StopTime = 4.0;
	speeds.angle = 0;
	
	var pos = -(speeds.roomSize * scale)/2;
	sphereOriginX = 0;
	sphereOriginY = -pos + -10 * scale;
	sphereOriginZ = 0;
	highestPoint = 0;
	
	generate();
}