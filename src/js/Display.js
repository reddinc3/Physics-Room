function clear()
{
	results.innerHTML = "";
	examQuestion.src="";
	
	if(junior_Cert_exits)
	{
		junior_Cert.destroy();
		junior_Cert_exits = false;
	}
	if(leaving_Cert_exits)
	{
		leaving_Cert.destroy();
		leaving_Cert_exits = false;
	}
	if(third_level_exits)
	{
		third_level.destroy();
		third_level_exits = false;
	}
}

function resetRoom()
{ 
	cancelAnimationFrame( animate );
	trail.deactivate();
	clear();
}

function openJuniorCert()
{
	clear();
	Junior_subject.style.display = 'block';
	educationLevel.style.display = 'none';
}

function openLeavingCert()
{	
	clear();
	Leaving_subject.style.display = 'block';
	educationLevel.style.display = 'none';
}

function open3rdLevel()
{
	clear();
	makeThirdLevelGUI()
	educationLevel.style.display = 'none';
	Controls.style.display = 'block';
}

// show final results
function output()
{
	
	if(quest == "Jun2011Q9aii")
	{
		var displacement = Math.round( 1000 * ((speeds.yVelocity * speeds.StopTime) + (0.5 * speeds.yAcceleration * Math.pow(speeds.StopTime,2))) ) / 1000;
		
		results.innerHTML += "Initial Velocity = " + speeds.yVelocity + "<br>";
		results.innerHTML += "Acceleration = " + speeds.yAcceleration + "<br>";
		results.innerHTML += "Time = " + speeds.StopTime + "<br>";
		results.innerHTML += "<br>";
		results.innerHTML += "Formula used:" + "<br>";
		results.innerHTML += "s = u*t + (0.5)*a*(t<sup>2</sup>)" + "<br>";
		results.innerHTML += "Displacement = (Initial Velocity)*(Time) + (0.5)*(Acceleration)*(Time Squared)" + "<br>";
		results.innerHTML += "<br>";
		results.innerHTML += "(Initial Velocity)*(Time) = " + speeds.yVelocity + "*" + speeds.StopTime + " = " + speeds.yVelocity * speeds.StopTime + "<br>";
		results.innerHTML += "(0.5)*(Acceleration)*(Time Squared) = " +  "(0.5)*" + speeds.yAcceleration + "*(" + speeds.StopTime + "<sup>2</sup>) = " + Math.round( 1000 * ((0.5) * speeds.yAcceleration * Math.pow(speeds.StopTime,2)) ) / 1000 + "<br>";
		results.innerHTML += "<br>";
		results.innerHTML += "Displacement = " + speeds.yVelocity * speeds.StopTime + " + " 
			+ Math.round( 1000 * ((0.5) * speeds.yAcceleration * Math.pow(speeds.StopTime,2)) ) / 1000 + " = " 
			+ displacement + "<br>";
	}
	
	if(quest == "Jun2011Q9aiii")
	{
		var FinalVelocity = speeds.yVelocity + speeds.yAcceleration * 2;
		var displacement = Math.round( 1000 * ((speeds.yVelocity + speeds.yAcceleration * 2)*(speeds.StopTime - 2) + (0.5 * speeds.yAcceleration * Math.pow(speeds.StopTime - 2,2))) ) / 1000;
		var AverageSpeed = displacement / (speeds.StopTime - 2);
		
		results.innerHTML += "Initial Velocity = " + speeds.yVelocity + "<br>";
		results.innerHTML += "Acceleration = " + speeds.yAcceleration + "<br>";
		results.innerHTML += "Time = 2" + "<br>";
		results.innerHTML += "<br>";
		results.innerHTML += "After 2 seconds velocity is: <br>";
		results.innerHTML += "<br>";
		results.innerHTML += "&emsp; Formula used:" + "<br>";
		results.innerHTML += "&emsp; &emsp; v = u + a*t" + "<br>";
		results.innerHTML += "&emsp; Final Velocity = Initial Velocity + (Acceleration)*(Time)" + "<br>";
		results.innerHTML += "<br>";
		results.innerHTML += "&emsp; Final Velocity = " + speeds.yVelocity + " + " + speeds.yAcceleration + " * " + 2 + " = " + FinalVelocity + "<br>";
		results.innerHTML += "<br>";
		results.innerHTML += "Start Time = 2" + "<br>";
		results.innerHTML += "Stop Time = " + speeds.StopTime + "<br>";
		results.innerHTML += "<br>";
		results.innerHTML += "Average Speed = " + "Displacement / Travel Time" + "<br>";
		results.innerHTML += "<br>";
		results.innerHTML += "Travel Time = Stop Time - Start Time = " + speeds.StopTime + " - " + 2 + " = " + (speeds.StopTime - 2) + "<br>";
		results.innerHTML += "<br>";
		results.innerHTML += "Formula used:" + "<br>";
		results.innerHTML += "s = u*t + (0.5)*a*(t<sup>2</sup>)" + "<br>";
		results.innerHTML += "Displacement = (Initial Velocity)*(Travel Time) + (0.5)*(Acceleration)*(Travel Time Squared)" + "<br>";
		results.innerHTML += "<br>";
		results.innerHTML += "(Initial Velocity)*(Travel Time) = " + (speeds.yVelocity + speeds.yAcceleration * 2) + "*" + (speeds.StopTime - 2) + " = " + (speeds.yVelocity + speeds.yAcceleration * 2) * (speeds.StopTime - 2) + "<br>";
		results.innerHTML += "(0.5)*(Acceleration)*(Time Squared) = " +  "(0.5)*" + speeds.yAcceleration + "*(" + (speeds.StopTime - 2) + "<sup>2</sup>) = " + Math.round( 1000 * ((0.5) * speeds.yAcceleration * Math.pow((speeds.StopTime - 2),2)) ) / 1000 + "<br>";
		results.innerHTML += "Displacement = " + (speeds.yVelocity + speeds.yAcceleration * 2) * (speeds.StopTime - 2) + " + " 
			+ Math.round( 1000 * ((0.5) * speeds.yAcceleration * Math.pow((speeds.StopTime - 2),2)) ) / 1000 + " = " 
			+ displacement + "<br>";
		results.innerHTML += "<br>";
		results.innerHTML += "Average Speed = " + displacement + " / " + (speeds.StopTime - 2) + " = " + AverageSpeed; 		
	}
	
	if(quest == "LeaPhy2015Q5b")
	{
		var displacement = Math.round( 1000 * ((speeds.yVelocity * speeds.StopTime) + (0.5 * speeds.yAcceleration * Math.pow(speeds.StopTime,2))) ) / 1000;
		
		results.innerHTML += "Initial Velocity = " + speeds.yVelocity + "<br>";
		results.innerHTML += "Acceleration = " + speeds.yAcceleration + "<br>";
		results.innerHTML += "Time = " + speeds.StopTime + "<br>";
		results.innerHTML += "<br>";
		results.innerHTML += "Formula used:" + "<br>";
		results.innerHTML += "s = u*t + (0.5)*a*(t<sup>2</sup>)" + "<br>";
		results.innerHTML += "Displacement = (Initial Velocity)*(Time) + (0.5)*(Acceleration)*(Time Squared)" + "<br>";
		results.innerHTML += "<br>";
		results.innerHTML += "(Initial Velocity)*(Time) = " + speeds.yVelocity + "*" + speeds.StopTime + " = " + speeds.yVelocity * speeds.StopTime + "<br>";
		results.innerHTML += "(0.5)*(Acceleration)*(Time Squared) = " +  "(0.5)*" + speeds.yAcceleration + "*(" + speeds.StopTime + "<sup>2</sup>) = " + Math.round( 1000 * ((0.5) * speeds.yAcceleration * Math.pow(speeds.StopTime,2)) ) / 1000 + "<br>";
		results.innerHTML += "<br>";
		results.innerHTML += "Displacement = " + speeds.yVelocity * speeds.StopTime + " + " 
			+ Math.round( 1000 * ((0.5) * speeds.yAcceleration * Math.pow(speeds.StopTime,2)) ) / 1000 + " = " 
			+ displacement + "<br>";
	}
	
	if(quest == "LeaPhy2015Q5a")
	{
		var InitialVerticalVelocity = Math.round( 100 * speeds.yVelocity) / 100;
		var InitialHorizontalVelocity = Math.round( 100 * speeds.xVelocity) / 100;
		
		results.innerHTML += "Initial Horizontal Velocity = 41 * cos(30) = " + InitialHorizontalVelocity + "<br>";
		results.innerHTML += "Acceleration Due To Gravity = " + speeds.yAcceleration + "<br>";
		results.innerHTML += "Travel Time = " + speeds.StopTime + "<br>";
		results.innerHTML += "<br>";
		results.innerHTML += "Displacement = " + "Average Speed * Travel Time" + "<br>";
		results.innerHTML += "<br>";
		results.innerHTML += "Distance Traveled = " + InitialHorizontalVelocity + " * " + speeds.StopTime + " = " + (InitialHorizontalVelocity * speeds.StopTime) + "<br>";
	}

	if(quest == "LeaAM2016Q1b")
	{	
		results.innerHTML += "Initial Velocity = u <br>";
		results.innerHTML += "Second ball is launched at = 2x (to avoid confustion 2x will replace 2t) <br>";
		results.innerHTML += "Both balls meet at height = h <br>";
		results.innerHTML += "<br>";
		results.innerHTML += "Formula used:" + "<br>";
		results.innerHTML += "s = u*t + (0.5)*a*(t<sup>2</sup>)" + "<br>";
		results.innerHTML += "<br>";
		results.innerHTML += "s1 = u*t - (1/2)g(t<sup>2</sup>) <br>";
		results.innerHTML += "s2 = u*(t-2x) - (1/2)g((t-2x)<sup>2</sup>) <br>";
		results.innerHTML += "<br>";
		results.innerHTML += "s1 = s2 <br>";
		results.innerHTML += "<br>";
		results.innerHTML += "u*t - (1/2)g(t<sup>2</sup>) = u*(t-2x) - (1/2)g((t-2x)<sup>2</sup>) <br>";
		results.innerHTML += "u*t - (1/2)g(t<sup>2</sup>) = u*(t-2x) - (1/2)g(t<sup>2</sup> - 4tx + 4(x<sup>2</sup>)) <br>";
		results.innerHTML += "ut - (1/2)g(t<sup>2</sup>) = ut - 2ux - (1/2)g(t<sup>2</sup>) + 2gtx - 2g(x<sup>2</sup>) <br>";
		results.innerHTML += "<br>";
		results.innerHTML += "0 = -2ux + 2gtx - 2g(x<sup>2</sup>) <br>";
		results.innerHTML += "0 = -u + gt - gx <br>";
		results.innerHTML += "t = (u/g) + x (this is the time when both balls are at the same height) <br>";
		results.innerHTML += "<br>";
		results.innerHTML += "Now we can calculate the height <br>";
		results.innerHTML += "h = ut - (1/2)g(t<sup>2</sup>) <br>";
		results.innerHTML += "<br>";
		results.innerHTML += "Sub in new value for t <br>";
		results.innerHTML += "<br>";
		results.innerHTML += "h = u((u/g) + x) - (1/2)g(((u/g) + x)<sup>2</sup>) <br>";
		results.innerHTML += "h = (u<sup>2</sup>)/g + ux - (1/2)g( (u<sup>2</sup>)/(g<sup>2</sup>) + (2ux)/g + (x<sup>2</sup>) ) <br>";
		results.innerHTML += "h = (u<sup>2</sup>)/2g - (g(x<sup>2</sup>))/2 <br>";
		results.innerHTML += "<br>";
		results.innerHTML += "multiply both the top and bottom of the right fraction by g <br>";
		results.innerHTML += "<br>";
		results.innerHTML += "h = (u<sup>2</sup>)/2g - g(g(x<sup>2</sup>))/2g <br>";
		results.innerHTML += "h = ((u<sup>2</sup>) - (g<sup>2</sup>)(x<sup>2</sup>))/2g <br>";
	}
	
	if(quest == "LeaAM2016Q3a")
	{
		var InitialVerticalVelocity = Math.round( 100 * speeds.yVelocity) / 100;
		var InitialHorizontalVelocity = Math.round( 100 * speeds.xVelocity) / 100;
		var dispTime = Math.round(100 * (21 / InitialHorizontalVelocity)) / 100;
		var FinalVerticalVelocity = Math.round(100 * (InitialVerticalVelocity + (speeds.yAcceleration * dispTime))) / 100;
		var FinalHorizontalVelocity = Math.round(100 * (InitialHorizontalVelocity + (speeds.xAcceleration * dispTime))) / 100;
		
		var sqrt = Math.sqrt(Math.pow(InitialVerticalVelocity,2) - (2*17.4*speeds.yAcceleration));
		var t1 = ((-InitialVerticalVelocity + sqrt) / speeds.yAcceleration);
		var t2 = ((-InitialVerticalVelocity - sqrt) / speeds.yAcceleration);
		var time = Math.max(t1,t2);
		
		results.innerHTML += "Initial Vertical Velocity = -25 * sin(30) = " + InitialVerticalVelocity + "<br>";
		results.innerHTML += "Acceleration Due To Gravity = " + speeds.yAcceleration + "<br>";
		results.innerHTML += "Displacement When Ball Hits ground is = " + -17.4 + "<br>";
		results.innerHTML += "<br>";
		results.innerHTML += "i. <br>";
		results.innerHTML += "<br>";
		results.innerHTML += "Formula used:" + "<br>";
		results.innerHTML += "s = u*t + (0.5)*a*(t<sup>2</sup>)" + "<br>";
		results.innerHTML += "Displacement = (Initial Vertical Velocity)*(Time) + (0.5)*(Acceleration)*(Time Squared)" + "<br>";
		results.innerHTML += "<br>";
		results.innerHTML += "-17.4 = 25 * sin(30) * t + (0.5)(" + speeds.yAcceleration + ")(t<sup>2</sup>)" + "<br>";
		results.innerHTML += "-17.4 = " + InitialVerticalVelocity + " * t + " + (0.5 * speeds.yAcceleration) + "(t<sup>2</sup>)" + "<br>";
		results.innerHTML += (0.5 * speeds.yAcceleration) + "(t<sup>2</sup>) + " + InitialVerticalVelocity + "t + 17.4 = 0 (solve as a quadratic)" + "<br>";
		results.innerHTML += "t = " + time + "<br>";
		results.innerHTML += "<br>";
		results.innerHTML += "<br>";
		results.innerHTML += "ii. <br>";
		results.innerHTML += "<br>";
		results.innerHTML += "Horizontal Displacement = Initial Horizontal Velocity * Time <br>";
		results.innerHTML += "|OB| = " + InitialHorizontalVelocity + " * " + time + " = " + (InitialHorizontalVelocity * time) + "<br>";
		results.innerHTML += "|TB| = " + (InitialHorizontalVelocity * time) + " - " + 21 + " = " + Math.round(100 *((InitialHorizontalVelocity * time) - 21)) / 100 + "<br>";
		results.innerHTML += "<br>";
		results.innerHTML += "<br>";
		results.innerHTML += "iii. <br>";
		results.innerHTML += "<br>";
		results.innerHTML += "Time = Horizontal Displacement / Initial Horizontal Velocity <br>";
		results.innerHTML += "t = " + 21 + " / " + InitialHorizontalVelocity + "<br>";
		results.innerHTML += "t = " + Math.round(100 * (21 / InitialHorizontalVelocity)) / 100 + "<br>";
		results.innerHTML += "<br>";
		results.innerHTML += "Final Horizontal Velocity = 25 * cos(30) + " + speeds.xAcceleration + " * " + dispTime + " = " + FinalHorizontalVelocity + "<br>";
		results.innerHTML += "Final Vertical Velocity = 25 * sin(30) + " + speeds.yAcceleration + " * " + dispTime + " = " + FinalVerticalVelocity + "<br>";
		results.innerHTML += "<br>";
		results.innerHTML += "Final Velocity = Square Root(Final Horizontal Velocity<sup>2</sup> + Final Vertical Velocity<sup>2</sup>) = " + Math.round(100 * Math.sqrt(
			Math.pow(FinalHorizontalVelocity, 2) + Math.pow(FinalVerticalVelocity, 2)
			) ) / 100;
	}
	
	if(quest == "LeaAM2015Q3a")
	{
		var initialVelocity = Math.round( Math.sqrt( Math.pow(speeds.xVelocity,2) + Math.pow(speeds.yVelocity,2) ) );
		var newVertialVelocity = Math.round( 100 * (0.5)*( speeds.yAcceleration )*Math.pow(18.5/initialVelocity,2)) / 100;
		
		var sqrt = Math.sqrt(Math.pow(initialVelocity * (18.5/initialVelocity),2) - (4*(-newVertialVelocity)*(-3 - newVertialVelocity)));
		var t1 = Math.round( 10000 * ((initialVelocity * (18.5/initialVelocity)) + sqrt) / (2 * -newVertialVelocity)) / 10000;
		var t2 = Math.round( 10000 * ((initialVelocity * (18.5/initialVelocity)) - sqrt) / (2 * -newVertialVelocity)) / 10000
		
		var B1 = Math.round( 100 * (Math.atan(t2) * (180/Math.PI)) ) / 100;
		var B2 = Math.round( 100 * (Math.atan(t1) * (180/Math.PI)) ) / 100;
		
		var timeOverNet = Math.round(1000 * (12 / (initialVelocity * Math.cos(B1 * (Math.PI/180))))) / 1000;
		
		var height = Math.round(100 * (initialVelocity * Math.sin(B1 * (Math.PI/180)) * timeOverNet + (0.5) * speeds.yAcceleration * Math.pow(timeOverNet,2))) / 100;
		
		results.innerHTML += "Initial Velocity = " + initialVelocity + "<br>";
		results.innerHTML += "Vertical distance traveled = -3 <br>";
		results.innerHTML += "Horizontal distance traveled = 18.5 <br>";
		results.innerHTML += "<br>";
		results.innerHTML += "i. <br>";
		results.innerHTML += "<br>";
		results.innerHTML += "Formula used:" + "<br>";
		results.innerHTML += "s = u*t + (0.5)*a*(t<sup>2</sup>)" + "<br>";
		results.innerHTML += "<br>";
		results.innerHTML += "Horizontal Distance: " + initialVelocity + "cosB * t + (0.5)(0)t = " + initialVelocity + "cosB * t = 18.5 <br>";
		results.innerHTML += "Vertical Distance: " + initialVelocity + "sinB * t + (0.5)(" + speeds.yAcceleration + ")t<sup>2</sup> = -3 <br>";
		results.innerHTML += "<br>";
		results.innerHTML += "t = 18.5 / 50cosB <br>";
		results.innerHTML += "t = " + (18.5/initialVelocity) + " / cosB <br>";
		results.innerHTML += "<br>";
		results.innerHTML += "Sub in the new value for 't' in the vertial distance <br>";
		results.innerHTML += "-3 = " + initialVelocity + "sinB * (" + (18.5/initialVelocity) + " / cosB) + (0.5)(" + speeds.yAcceleration + ") * (" + (18.5/initialVelocity) + " / cosB)<sup>2</sup> <br>";
		results.innerHTML += "-3 = " + initialVelocity + "sinB * (" + (18.5/initialVelocity) + " / cosB) + " + newVertialVelocity + " / cos(B)<sup>2</sup><br>";
		results.innerHTML += "<br>";
		results.innerHTML += newVertialVelocity + " = " + newVertialVelocity + " * " + 1 + "<br>";
		results.innerHTML += "1 = sin<sup>2</sup>B + cos<sup>2</sup>B<br>";
		results.innerHTML += "<br>";
		results.innerHTML += "-3 = " + initialVelocity + "sinB * (" + (18.5/initialVelocity) + " / cosB) + ( " + newVertialVelocity + " * (sin(B)<sup>2</sup> + cos(B)<sup>2</sup>) ) / cos(B)<sup>2</sup> <br>";
		results.innerHTML += "-3 = " + initialVelocity + "sinB * (" + (18.5/initialVelocity) + " / cosB) + ( " + newVertialVelocity + " * (( sin(B)<sup>2</sup> / cos(B)<sup>2</sup> ) + 1) )<br>";
		results.innerHTML += "-3 = (" + (initialVelocity * (18.5/initialVelocity)) + " * sinB) / cosB + " + newVertialVelocity + " * ( 1 + ( sin(B)<sup>2</sup> / cos(B)<sup>2</sup> ) ) <br>";
		results.innerHTML += "<br>";
		results.innerHTML += "sinB / cosB = tanB <br>";
		results.innerHTML += "<br>";
		results.innerHTML += "-3 = " + (initialVelocity * (18.5/initialVelocity)) + " * tanB + " + newVertialVelocity + "(1 + tan(B)<sup>2</sup>) <br>";
		results.innerHTML += "(" + newVertialVelocity + " * tan(B)<sup>2</sup>) - (" + (initialVelocity * (18.5/initialVelocity)) + " * tanB) + " + (-3 - newVertialVelocity) + " = 0 <br>";
		results.innerHTML += "<br>";
		results.innerHTML += "solve as a quadratic equation <br>";
		results.innerHTML += "tanB1 = " + t2 + " or tanB2 = " + t1 + " <br>";
		results.innerHTML += "<br>";
		results.innerHTML += "<br>";
		results.innerHTML += "ii. <br>";
		results.innerHTML += "<br>";
		results.innerHTML += "B1 = tan(" + t2 + ")<sup>-1</sup> = " + B1 + "<br>";
		results.innerHTML += "B2 = tan(" + t1 + ")<sup>-1</sup> = " + B2 + "<br>";
		results.innerHTML += "<br>";
		results.innerHTML += "t1 = " + (18.5/initialVelocity) + " / cosB1 = " + Math.round( 100 * ( (18.5/initialVelocity) / Math.cos(B1 * (Math.PI/180)) ) ) / 100 + " <br>";
		results.innerHTML += "t2 = " + (18.5/initialVelocity) + " / cosB2 = " + Math.round( 100 * ( (18.5/initialVelocity) / Math.cos(B2 * (Math.PI/180)) ) ) / 100 + " <br>";
		results.innerHTML += "<br>";
		results.innerHTML += "<br>";
		results.innerHTML += "iii. <br>";
		results.innerHTML += "<br>";
		results.innerHTML += "Calcualte time when ball was over the net <br>";
		results.innerHTML += "12 = " + initialVelocity + "*cosB1 * t <br>";
		results.innerHTML += "t = 12 / " + initialVelocity + "*cosB1 <br>";
		results.innerHTML += "t = " + timeOverNet + " <br>";
		results.innerHTML += "<br>";
		results.innerHTML += "Calcualte the balls height at this time <br>";
		results.innerHTML += "Height = " + initialVelocity + "sinB1 * t + (0.5)(-9.8)t<sup>2</sup> <br>";
		results.innerHTML += "Height = " + height + " <br>";
		results.innerHTML += "<br>";
		results.innerHTML += "The ball starts at a height of 3. The net has a height of 1.<br>";
		results.innerHTML += "This means the inital gap between the ball and net is 2<br>";
		results.innerHTML += "<br>";
		results.innerHTML += "Distance between = 2 + " + height + " = " + Math.round( 100 * (2 + height) ) / 100 + " <br>";
	}
	
	if(quest == "LeaAM2014Q3a")
	{
		results.innerHTML += "Initial Angle of Velocity = 30 <br>";
		results.innerHTML += "Height to Reach = 7.35 <br>";
		results.innerHTML += "Time spent above Height to Reach = 1.5 <br>";
		results.innerHTML += "<br>";
		results.innerHTML += "Formula used:" + "<br>";
		results.innerHTML += "s = u*t + (0.5)*a*(t<sup>2</sup>)" + "<br>";
		results.innerHTML += "<br>";
		results.innerHTML += "Horizontal Distance: u * cos30 * t + (0.5)(0)t = u * cos30 * t <br>";
		results.innerHTML += "Vertical Distance: u * sin30 * t - (0.5)gt<sup>2</sup> <br>";
		results.innerHTML += "<br>";
		results.innerHTML += "calcualte time when ball reached 7.35m in height";
		results.innerHTML += "<br>";
		results.innerHTML += "u * sin30 * t - (0.5)gt<sup>2</sup> = 7.35 <br>";
		results.innerHTML += "(0.5)ut - (0.5)gt<sup>2</sup> = 7.35 <br>";
		results.innerHTML += "ut - gt<sup>2</sup> = 14.7 <br>";
		results.innerHTML += "gt<sup>2</sup> - ut + 14.7 = 0 <br>";
		results.innerHTML += "<br>";
		results.innerHTML += "Treat as a quadratic equation <br>";
		results.innerHTML += "<br>";
		results.innerHTML += "t1 = (u - SQUARE_ROOT(u<sup>2</sup> - 58.8g)) / 2g <br>";
		results.innerHTML += "t2 = (u + SQUARE_ROOT(u<sup>2</sup> - 58.8g)) / 2g <br>";
		results.innerHTML += "t2 - t1 = 1.5 <br>";
		results.innerHTML += "<br>";
		results.innerHTML += "(2 * SQUARE_ROOT(u<sup>2</sup> - 58.8g)) / 2g = 1.5 <br>";
		results.innerHTML += "SQUARE_ROOT(u<sup>2</sup> - 58.8g) / g = 1.5 <br>";
		results.innerHTML += "(SQUARE_ROOT(u<sup>2</sup> - 58.8g))<sup>2</sup> = (1.5g)<sup>2</sup> <br>";
		results.innerHTML += "<br>";
		results.innerHTML += "u<sup>2</sup> - 58.8g = 2.25g<sup>2</sup> <br>";
		results.innerHTML += "u<sup>2</sup> = 2.25g<sup>2</sup> + 58.8 <br>";
		results.innerHTML += "u<sup>2</sup> = 792.33 <br>";
		results.innerHTML += "u = 28.15 <br>";
	}
	
	if(quest == "LeaAM2013Q3b")
	{
		results.innerHTML += "Vertical Displacement = 0 <br>";
		results.innerHTML += "Angle of incline A = tanInverse(1/2) <br>";
		results.innerHTML += "Trajectory of particle = B <br>";
		results.innerHTML += "<br>";
		results.innerHTML += "Formula used:" + "<br>";
		results.innerHTML += "s = u*t + (0.5)*a*(t<sup>2</sup>)" + "<br>";
		results.innerHTML += "<br>";
		results.innerHTML += "u * sinB * t - (0.5)g * cosA * t<sup>2</sup> = 0 <br>";
		results.innerHTML += "u * sinB * t = (0.5)g * cosA * t<sup>2</sup> <br>";
		results.innerHTML += "u * sinB = (0.5)g * cosA * t <br>";
		results.innerHTML += "2u * sinB = g * cosA * t <br>";
		results.innerHTML += "t = (2u * sinB) / (g * cosA) <br>";
		results.innerHTML += "<br>";
		results.innerHTML += "USE Pythagoras's theorem <br>";
		results.innerHTML += "<br>";
		results.innerHTML += "If tanA = 1/2 <br>";
		results.innerHTML += "and 1<sup>2</sup> + 2<sup>2</sup> = 5 <br>";
		results.innerHTML += "then cosA = 2/sqrt(5) <br>";
		results.innerHTML += "<br>";
		results.innerHTML += "t = (2u * sinB) / (g * (2/sqrt(5))) <br>";
		results.innerHTML += "t = (2u * sinB * sqrt(5)) / (g * 2) <br>";
		results.innerHTML += "t = (u * sinB * sqrt(5)) / g <br>";
		results.innerHTML += "<br>";
		results.innerHTML += "Displacement = u * cosB * t - (1/2)g * sinA * t<sup>2</sup> <br>";
		results.innerHTML += "<br>";
		results.innerHTML += "Sub in the value for t <br>";
		results.innerHTML += "<br>";
		results.innerHTML += "Displacement = u * cosB * ((u * sinB * sqrt(5)) / g) - (1/2)g * sinA * ((u * sinB * sqrt(5)) / g)<sup>2</sup> <br>";
		results.innerHTML += "<br>";
		results.innerHTML += "sinA = (1/sqrt(5))<br>";
		results.innerHTML += "<br>";
		results.innerHTML += "Displacement = ((sqrt(5) * u<sup>2</sup> * cosBsinB) / g) - (1/2) * sinA * (u * sinB * sqrt(5)) *  ((u * sinB * sqrt(5)) / g) <br>";
		results.innerHTML += "Displacement = ((sqrt(5) * u<sup>2</sup> * cosBsinB) / g) - (1/2) * (u * sinB) *  ((u * sinB * sqrt(5)) / g) <br>";
		results.innerHTML += "Displacement = ((sqrt(5) * u<sup>2</sup> * cosBsinB) / g) - (((1/2) * sqrt(5) * u<sup>2</sup> * sin<sup>2</sup>(B)) / g) <br>";
		results.innerHTML += "Displacement = ((sqrt(5) * u<sup>2</sup> * cosBsinB) / g) - (((1/2) * sqrt(5) * u<sup>2</sup> * sin<sup>2</sup>(B)) / g) <br>";
		results.innerHTML += "Displacement = ((sqrt(5) * u<sup>2</sup>) / g) ( cosBsinB - (1/2) * sin<sup>2</sup>(B) ) <br>";
		results.innerHTML += "Displacement = ((sqrt(5) * u<sup>2</sup>) / g) (1/2) ( 2cosBsinB - sin<sup>2</sup>(B) ) <br>";
		results.innerHTML += "Displacement = ((sqrt(5) * u<sup>2</sup>) / 2g) ( sin2B - sin<sup>2</sup>(B) ) <br>";
		results.innerHTML += "<br>";
		results.innerHTML += "Using calculus, find the derivitive of displacement with respect to B <br>";
		results.innerHTML += "Displacement is maximum when derivitive is 0 <br>";
		results.innerHTML += "<br>";
		results.innerHTML += "Derivitive = ((sqrt(5) * u<sup>2</sup>) / 2g) (2cos2B - 2sinBcosB) = 0 <br>";
		results.innerHTML += "<br>";
		results.innerHTML += "(sqrt(5) * u<sup>2</sup>) / 2g can't equal 0<br>";
		results.innerHTML += "<br>";
		results.innerHTML += "2cos2B - 2sinBcosB = 0 <br>";
		results.innerHTML += "2cos2B - sin2B = 0 <br>";
		results.innerHTML += "sin2B = 2cos2B <br>";
		results.innerHTML += "(sin2B / cos2B) = (2cos2B / cos2B) <br>";
		results.innerHTML += "tan2B = 2 <br>";
		results.innerHTML += "B = 31.7 degress <br>";
	}
}