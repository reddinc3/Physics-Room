function stopRunCheck()
{
	var speedBool = Math.round(yVelocityC * 10) / 10 >= -0.2 * scale && Math.round(yVelocityC * 10) / 10 <= 0.2 * scale;
	var posBool = theSphere.position.y <= scale + floor.position.y + (((theSphere.position.z * -Math.sin(radAngle)) + speeds.radius * scale)/ Math.cos(radAngle))
	
	// Check if ball has stopped bouncing
	if(speedBool && posBool)
	{
		stopCounter += 1;
		if(stopCounter >= 30)
		{
			endRun();
		}
	}
	else
		stopCounter = 0;
}

function stopTimeReachedCheck()
{
	if(speeds.StopTime != 0 && (t - startTime) >= speeds.StopTime)
		endRun();
}

function collisionCheck()
{
	// Movement on x-axis
	if((theSphere.position.x <= wall2.position.x + speeds.radius * scale && xVelocityC < 0) || (theSphere.position.x >= -wall2.position.x - speeds.radius * scale && xVelocityC > 0))
	{
		xVelocityC = -xVelocityC * speeds.elasticity - xAccelerationC * (t-t2);
		noise.play();
	}
	
	// Movement on z-axis
	if((theSphere.position.z <= wall1.position.z + speeds.radius * scale && zVelocityC < 0) || (theSphere.position.z >= -wall1.position.z - speeds.radius * scale && zVelocityC > 0))
	{
		zVelocityC = -zVelocityC * speeds.elasticity - zAccelerationC * (t-t2);
		noise.play();
	}
	
	// Movement on y-axis
	if(theSphere.position.y <= floor.position.y + (((theSphere.position.z * -Math.sin(radAngle)) + speeds.radius * scale)/ Math.cos(radAngle)) && yVelocityC < 0)
	{
		yVelocityC = -yVelocityC * Math.cos(radAngle) * speeds.elasticity + speeds.friction * xVelocityC * Math.sin(radAngle) - yAccelerationC * (t-t2);
		xVelocityC = xVelocityC * speeds.friction;
		zVelocityC = zVelocityC * Math.cos(radAngle) * speeds.friction + yVelocityC * Math.sin(radAngle);// * speeds.elasticity;
		if(!touchedGround)
		{
			touchedGround = true;
			markTheSpot();
			if(!linesExist)
				markTheLines();
		}
		// v = u + at
		// s = ut + (1/2)a(t^2)
		noise.play();
	}
}

function moveBall()
{
	// reposition on x-axis
	xVelocityC = xVelocityC + xAccelerationC * (t-t2);
	theSphere.translateX(xVelocityC * (t-t2));
	
	// reposition on z-axis
	zVelocityC = zVelocityC + zAccelerationC * (t-t2);
	theSphere.translateZ(zVelocityC * (t-t2));
	
	// reposition on y-axis
	yVelocityC = yVelocityC + yAccelerationC * (t-t2);
	theSphere.translateY(yVelocityC * (t-t2));
	
	if(quest == "LeaAM2016Q1b" && (t - startTime) >= 2)
	{
		// reposition on x-axis
		xVelocityC2 = xVelocityC2 + xAccelerationC * (t-t2);
		theSphere2.translateX(xVelocityC2 * (t-t2));
		
		// reposition on z-axis
		zVelocityC2 = zVelocityC2 + zAccelerationC * (t-t2);
		theSphere2.translateZ(zVelocityC2 * (t-t2));
		
		// reposition on y-axis
		yVelocityC2 = yVelocityC2 + yAccelerationC * (t-t2);
		theSphere2.translateY(yVelocityC2 * (t-t2));
		
		if((theSphere.position.y - theSphere2.position.y) == (2 * scale) || (theSphere.position.y < theSphere2.position.y))
			endRun();
	}
}

function endRun()
{
	cancelAnimationFrame( animate );
	if(!linesExist)
		markTheLines();
}

function run()
{
	animate = requestAnimationFrame( run );
	
	stopRunCheck();
	t = clock.getElapsedTime();
	stopTimeReachedCheck();
	
	// Highest point reached
	if(highestPoint < theSphere.position.y / scale)
		highestPoint = theSphere.position.y / scale;
	
	collisionCheck();
	
	moveBall();
	
	// Updates trail to balls new position
	trail.advance();
	
	// Remembers time elapsed for next run
	t2 = t;
	
	// Recreates the scene
	render();
}