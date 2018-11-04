function makeThirdLevelGUI()
{
	// Makes user interface for Third level education
	if(!third_level_exits)
	{
		third_level = new dat.GUI();
				
		var object_Sizes = third_level.addFolder('Object Sizes'); object_Sizes.open();
		var factors = third_level.addFolder('Factors');	factors.open();				
		var movement_Variables = third_level.addFolder('Movement Variables'); movement_Variables.open();						

		movement_Variables.add(speeds, 'xVelocity').listen();
		movement_Variables.add(speeds, 'xAcceleration').listen();
		movement_Variables.add(speeds, 'yVelocity').listen();
		movement_Variables.add(speeds, 'yAcceleration').listen();
		movement_Variables.add(speeds, 'zVelocity').listen();
		movement_Variables.add(speeds, 'zAcceleration').listen();

		factors.add(speeds, 'angle').listen();
		factors.add(speeds, 'elasticity').listen();
		factors.add(speeds, 'friction').listen();
		factors.add(speeds, 'StopTime').listen();
			
		object_Sizes.add(speeds, 'roomSize').listen();
		object_Sizes.add(speeds, 'radius').listen();
		
		third_level_exits = true;
	}
	else
		third_level.open();
}