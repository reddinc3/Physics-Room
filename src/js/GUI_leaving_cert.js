function makeLeavingCertGUI()
{
	results.innerHTML = "";
	// Makes user interface for Leaving Cert
	if(!leaving_Cert_exits)
	{
		leaving_Cert = new dat.GUI();
			
		var factors = leaving_Cert.addFolder('Factors'); factors.open();
		var movement_Variables = leaving_Cert.addFolder('Movement Variables'); movement_Variables.open();		

		movement_Variables.add(speeds, 'xVelocity').listen();
		movement_Variables.add(speeds, 'yVelocity').listen();
		movement_Variables.add(speeds, 'yAcceleration').listen();
		movement_Variables.add(speeds, 'zVelocity').listen();

		factors.add(speeds, 'angle').listen();
		factors.add(speeds, 'StopTime').listen();
		leaving_Cert_exits = true;
	}else
		leaving_Cert.open();
}
	
// GUI Questions

// Physics
// Ordinary
function LeaPhy2015Q5b()
{ 
	resetRoom();
	
	examQuestion.src="images/Questions/Leaving_cert/Physics/Ordinary/2015_Q5_b.jpg";
	
	quest = "LeaPhy2015Q5b";
	
	setCamera(500);
	
	speeds.xVelocity = 0;
	speeds.xAcceleration = 0;
	speeds.yVelocity = 20;
	speeds.yAcceleration = -9.8;
	speeds.zVelocity = 0;
	speeds.zAcceleration = 0;
	speeds.radius = 0.1;
	speeds.elasticity = 0.7;
	speeds.friction = 0.95;
	speeds.roomSize = 20;
	speeds.StopTime = 2;
	speeds.angle = 0;
	
	sphereOriginX = 0;
	sphereOriginY = 0;
	sphereOriginZ = 0;
	highestPoint = 0;
	
	generate();
}

// Higher
function LeaPhy2015Q5a()
{ 
	resetRoom();
	
	examQuestion.src="images/Questions/Leaving_cert/Physics/Higher/2015_Q5_a.JPG";
	
	quest = "LeaPhy2015Q5a";
	
	setCamera(6000);
	
	speeds.xVelocity = 41 * Math.cos(30 * (Math.PI/180));;
	speeds.xAcceleration = 0;
	speeds.yVelocity = 41 * Math.sin(30 * (Math.PI/180));
	speeds.yAcceleration = -9.8;
	speeds.zVelocity = 0;
	speeds.zAcceleration = 0;
	speeds.radius = 1;
	speeds.elasticity = 0.7;
	speeds.friction = 0.95;
	speeds.roomSize = 120;
	speeds.StopTime = 3;
	speeds.angle = 0;
	
	var pos = -(speeds.roomSize * scale)/2;
	sphereOriginX = pos + (5 * scale);
	sphereOriginY = 0;
	sphereOriginZ = 0;
	highestPoint = 0;
	
	generate();
}

// Applied_Maths
// Higher
function LeaAM2016Q1b()
{
	resetRoom();
	
	examQuestion.src="images/Questions/Leaving_cert/Applied_Maths/Higher/2016_Q1_b.JPG";
	
	quest = "LeaAM2016Q1b";
	
	setCamera(1500);
	
	speeds.xVelocity = 0;
	speeds.xAcceleration = 0;
	speeds.yVelocity = 20;
	speeds.yAcceleration = -9.8;
	speeds.zVelocity = 0;
	speeds.zAcceleration = 0;
	speeds.radius = 0.3;
	speeds.elasticity = 0.7;
	speeds.friction = 0.95;
	speeds.roomSize = 30;
	speeds.StopTime = 0;
	speeds.angle = 0;
	
	sphereOriginX = 0;
	sphereOriginY = 0;
	sphereOriginZ = 0;
	highestPoint = 0;
	
	generate();
}

function LeaAM2016Q3a()
{
	resetRoom();
	
	examQuestion.src="images/Questions/Leaving_cert/Applied_Maths/Higher/2016_Q3_a.JPG";
	
	quest = "LeaAM2016Q3a";
	
	setCamera(1500);
	
	speeds.xVelocity = 25 * Math.cos(30 * (Math.PI/180));
	speeds.xAcceleration = 0;
	speeds.yVelocity = -25 * Math.sin(30 * (Math.PI/180));
	speeds.yAcceleration = -9.8;
	speeds.zVelocity = 0;
	speeds.zAcceleration = 0;
	speeds.radius = 0.5;
	speeds.elasticity = 0.7;
	speeds.friction = 0.95;
	speeds.roomSize = 30;
	speeds.StopTime = 0;
	speeds.angle = 0;
	
	var pos = -(speeds.roomSize * scale)/2;
	sphereOriginX = pos + (5 * scale);
	sphereOriginY = pos + (17.4 * scale);
	sphereOriginZ = 0;
	highestPoint = pos + 17.4;
	
	generate();
}

function LeaAM2015Q3a()
{
	resetRoom();
	
	examQuestion.src="images/Questions/Leaving_cert/Applied_Maths/Higher/2015_Q3_a.JPG";
	
	quest = "LeaAM2015Q3a";
	
	setCamera(1500);
	
	speeds.xVelocity = -50 * Math.cos(3 * (Math.PI/180));
	speeds.xAcceleration = 0;
	speeds.yVelocity = -50 * Math.sin(3 * (Math.PI/180));
	speeds.yAcceleration = -9.8;
	speeds.zVelocity = 0;
	speeds.zAcceleration = 0;
	speeds.radius = 0.4;
	speeds.elasticity = 0.7;
	speeds.friction = 0.95;
	speeds.roomSize = 34;
	speeds.StopTime = 0;
	speeds.angle = 0;
	
	var pos = -(speeds.roomSize * scale)/2;
	sphereOriginX = -pos/1.4;
	sphereOriginY = pos + (3 * scale);
	sphereOriginZ = 0;
	highestPoint = pos + 3;
	
	generate();
}

function LeaAM2014Q3a()
{
	resetRoom();
	
	examQuestion.src="images/Questions/Leaving_cert/Applied_Maths/Higher/2014_Q3_a.jpg";
	
	quest = "LeaAM2014Q3a";
	
	setCamera(4500);
	
	speeds.xVelocity = 28.15 * Math.cos(30 * (Math.PI/180));
	speeds.xAcceleration = 0;
	speeds.yVelocity = 28.15 * Math.sin(30 * (Math.PI/180));
	speeds.yAcceleration = -9.8;
	speeds.zVelocity = 0;
	speeds.zAcceleration = 0;
	speeds.radius = 0.7;
	speeds.elasticity = 0.7;
	speeds.friction = 0.95;
	speeds.roomSize = 80;
	speeds.StopTime = 0;
	speeds.angle = 0;
	
	var pos = -(speeds.roomSize * scale)/2;
	sphereOriginX = pos + (1 * scale);;
	sphereOriginY = pos + (speeds.radius * scale);
	sphereOriginZ = 0;
	highestPoint = pos + (speeds.radius * scale);
	
	generate();
}

function LeaAM2013Q3b()
{
	resetRoom();
	
	examQuestion.src="images/Questions/Leaving_cert/Applied_Maths/Higher/2013_Q3_b.JPG";
	
	quest = "LeaAM2013Q3b";
	
	setCamera(4500);
	
	speeds.xVelocity = 0;
	speeds.xAcceleration = 0;
	/*speeds.yVelocity = 30 * Math.sin(58.27 * (Math.PI/180));
	speeds.yAcceleration = -9.8;
	speeds.zVelocity = -30 * Math.cos(58.27 * (Math.PI/180));*/
	speeds.yVelocity = 30 * Math.sin(70 * (Math.PI/180));
	speeds.yAcceleration = -9.8;
	speeds.zVelocity = -30 * Math.cos(70 * (Math.PI/180));
	speeds.zAcceleration = 0;
	speeds.radius = 0.6;
	speeds.elasticity = 0.7;
	speeds.friction = 0.95;
	speeds.roomSize = 80;
	speeds.StopTime = 0;
	speeds.angle = Math.atan(0.5) * (180/Math.PI);
	
	var pos = -(speeds.roomSize * scale)/2;
	sphereOriginX = 0;
	sphereOriginY = pos - (speeds.roomSize * 0.22 * scale);
	sphereOriginZ = -pos - (3 * scale);
	highestPoint = pos - (speeds.roomSize * 0.22 * scale);
	
	generate();
}