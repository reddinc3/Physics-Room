function startButton()
{ 
	// Cancel any animation currently running
	cancelAnimationFrame( animate );
	trail.deactivate();
	
	// set values
	xVelocityC = speeds.xVelocity * scale;
	xAccelerationC = speeds.xAcceleration * scale;
	yVelocityC = speeds.yVelocity * scale;
	yAccelerationC = speeds.yAcceleration * scale;
	zVelocityC = speeds.zVelocity * scale;
	zAccelerationC = speeds.zAcceleration * scale;
	
	if(quest == "LeaAM2016Q1b")
	{
		xVelocityC2 = speeds.xVelocity * scale;
		yVelocityC2 = speeds.yVelocity * scale;
		zVelocityC2 = speeds.zVelocity * scale;
	}
	
	// reset world
	touchedGround = false;
	results.innerHTML = "";
	generate();
	
	// run program
	startTime = clock.getElapsedTime();
	t2 = clock.getElapsedTime();
	output();
	run();
}

function homeButton()
{
	resetRoom();
	educationLevel.style.display = 'block';
	Junior_subject.style.display = 'none';
	Leaving_subject.style.display = 'none';
	Junior_questions.style.display = 'none';
	Leaving_Phys_questions.style.display = 'none';
	Leaving_AM_questions.style.display = 'none';
	Controls.style.display = 'none';
	if(!display)
		QandADisplay();
}

function QandADisplay()
{
	var content;
	if(display)
	{
		results.style.display = 'block';
		question.style.display = 'block';
		content = "<button type='button' class='buttonSize' onclick='QandADisplay()'><B>Hide Q&A</B></button>"
	}
	else
	{
		results.style.display = 'none';
		question.style.display = 'none';
		content = "<button type='button' class='buttonSize' onclick='QandADisplay()'><B>Show Q&A</B></button>"
	}
	document.getElementById('resultsButton').innerHTML = content;
	display = !display;
}

function menuShow_Hide()
{
	var content;
	if(menuDisplay)
	{
		menu.style.display = 'block';
		QandA.style.display = 'block';
		content = "MENU DISPLAY: <button type='button' onclick='menuShow_Hide()'><B>HIDE</B>";
	}
	else
	{
		menu.style.display = 'none';
		QandA.style.display = 'none';
		content = "MENU DISPLAY: <button type='button' onclick='menuShow_Hide()'><B>SHOW</B>";
	}
	document.getElementById('menuButton').innerHTML = content;
	menuDisplay = !menuDisplay;
}