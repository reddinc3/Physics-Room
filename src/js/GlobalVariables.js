// time variables
var clock = new THREE.Clock();
var t;
var t2;
var startTime;

// stop program variables
var animate;
var stopCounter = 0;
var touchedGround = false;

// Screem height and width
var w = window.innerWidth * 0.98;
var h = window.innerHeight * 0.975;   

// Meshes
var theSphere;
var theSphere2;
var spot;
var floor;
var wall1;
var wall2;
var wall3;
var wall4;
var net;

// lines
var linesExist = false;
var disLinesY = [];
var disLinesX = [];
var highLines = [];

// sphere variables	
var sphereOriginX = 0;
var sphereOriginY = 0;
var sphereOriginZ = 0;
		
// GUI copy variables
var xVelocityC = 0;
var xAccelerationC = 0;
var yVelocityC = 0;
var yAccelerationC = 0;
var zVelocityC = 0;
var zAccelerationC = 0;

// GUI copy variables for second sphere if used
var xVelocityC2 = 0;
var yVelocityC2 = 0;
var zVelocityC2 = 0;

// Angle of floor in radians
var radAngle = 0;

// The scale that all object are increased by when created
var scale = 20;

// GUI variables
var speeds = new function() {
	this.xVelocity = -5;
	this.xAcceleration = 0;
	this.yVelocity = 10;
	this.yAcceleration = -9.8;
	this.zVelocity = 7;
	this.zAcceleration = 0;
	this.radius = 0.5;
	this.roomSize = 20;
	this.angle = 0;
	this.elasticity = 0.7;
	this.friction = 0.95;
	this.StopTime = 5.0;
}

// results varibales
var highestPoint = 0;

// Display variables
var quest;
var menuDisplay = false;
var display = true;

// World textures
var texloader = new THREE.TextureLoader();
var groundTex = texloader.load("images/Ground/Dark_gray_surface.jpg");
var wallTex = texloader.load("images/Walls/gray-siding.jpg");
var propTex = texloader.load("images/Props/net.png");