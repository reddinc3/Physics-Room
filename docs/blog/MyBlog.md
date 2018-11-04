# Blog: Physics Room

**Conor Reddin**

## Blog Entry 1 - 02/02/2017

- I started researching my projects several weeks ago and am now starting my project.
- I have installed Three.js and am now able to starting tinkering with the application.
- I have decided to approach my project in sprints to break the project down into more achievable tasks.
- For my first sprint I want to create the world in which my application's functions will take place.
- I have managed to create the space that the application will take place in. I have also created a ground and a cube that is rotating in the air. There are still several issues to fix but I am making progress.

![world](https://gitlab.computing.dcu.ie/reddinc3/2017-ca400-reddinc3/raw/master/docs/blog/images/Blog1.PNG)

## Blog Entry 2 - 09/02/2017

- After showing the work I had done to several people. It was suggested to me that I should change the colours used in my world to accommodate for colour blindness.
- Once I changed the colours I then moved on to trying to get the cube that was suspended in the air to fall. My plan for doing this was to make use of a third party JavaScript API called Physi.js.
- After much trial and error I successfully managed to make the cube fall from its position and collide with the ground beneath it.
- I had met with my supervisor later this week to ask for advice on how to approach my project. I was growing concerned with the level of difficulties I was having with the application. My supervisor reassured me by giving me material to study advising that it would help me have a better understanding of JavaScript and Three.js.

![world](https://gitlab.computing.dcu.ie/reddinc3/2017-ca400-reddinc3/raw/master/docs/blog/images/Blog2.PNG)

## Blog Entry 3 - 16/02/2017

- I spent most of the week going through the material on JavaScript and Three.js that my supervisor had provided for me.
- The material was both very interesting and very helpful and gave me ideas for my project.
- After some thought I decided that I should try and not use Physi.js and instead try to make my own physics using mathematical formulas.
- By using formulas I have managed to create a room containing a ball that with bounce around the room and decelerate over time due to gravity, elasticity, wind resistance and friction. 
- There is still much to do but this is a very promising leap forward.

![world](https://gitlab.computing.dcu.ie/reddinc3/2017-ca400-reddinc3/raw/master/docs/blog/images/blog3.png)

## Blog Entry 4 - 09/03/2017

- I have made significant changes to the application since my last entry.
- The main change to the application is that I have now included a graphical user interface to the application which will allow the user to alter the settings such as room size, ball size, gravity, elasticity, velocity, etc.
- Another addition is that the results are now displayed to the user beneath the application. When the ball touches the ground for the first time both the time it took to land and the distance it traveled are displayed. At the time of writing this blog this feature still needs to be fixed as I wish to find are preferable way of displaying the results.
- As of now in the user interface there are 5 buttons two of which (the "Q1" and "Q2" buttons) are demo buttons and not relevant right now. the other 3 buttons are the "start", "generate" and "reset" buttons which are used to start and restart the program.
- I included a light and shadows into the world. This is to give the application a little more aesthetic appeal as well has make it a little easier to see the movement of the ball as it bounces around the room.
- I have also adjusted the appearance slightly. I gave the ball a green color and brightened the room. After talking with my supervisor one of his comments was that it lacked appeal and would look dull to the user. There are other cosmetics I plan to use but have not implemented them by the time of writing this blog.
- I fell that this is a good leap forward and I currently have a list of other features I am trying to add to the application.

![world](https://gitlab.computing.dcu.ie/reddinc3/2017-ca400-reddinc3/raw/master/docs/blog/images/Blog4.PNG)

## Blog Entry 5 - 29/03/2017

- Since my last entry several changes have been made.
- I have managed to improve the graphical user interface into categories so that it is easier for the user to find features.
- I have also added the ability to give the program a stopping time so that the program with only run for a set interval.
- I have begun incorporating a physics question into the program. The question is from "2015, ordinary physics, section 1, Q5, b". At the time of writing this blog there is a button in the questions section which refers to this question and when clicked will change the settings to match the requirements of the question.
- I have added in additional walls to make the room a full square instead of just a corner and make the walls textured on one side so that they can be seen through.
- In the earlier entry I was experiencing difficulties with lighting but after a lot of tweaking I managed to understand what was wrong and now the ball casts a shadow as it moves which make the balls movement through the room more clear.
- I still have yet to find a better alternative to the way the results are displayed and I am still looking. I have included new details in the results such as highest point reached and how long it took to reach it, time the ground was hit, how far the ball moved, the velocity of the ball on impact with the ground and there are still more to add.
- On inspection of some of my code I found that some of the calculations were off and so I spend some time re adjusting how certain things were calculated.
- The final change to mention is that i have made more texture changes. At the time of writing this blog the colour of the ball is yellow to try and make it easier to see. I have given the world a blue background and I have textured images onto the ground and walls. This is all to hopefully give it more of a visual appeal.

![world](https://gitlab.computing.dcu.ie/reddinc3/2017-ca400-reddinc3/raw/master/docs/blog/images/blog5.png)

## Blog Entry 6 - 24/04/2017

- I have redesigned my user interface in order to try and make it more user friendly. There is now a menu on the left hand side which is used to select the level of education the user is at. Once the user clicks the level of education they want they are given access to the features used at that level.
- I have split the old physics user interface on the right hand side into three separate interfaces for each level. This was done to prevent younger users from being overwhelmed with features that they may have no need for.
- I have also changed the textures that were used for the ground and walls to something that is easier on the eyes and makes it easier to see the ball.
- Additional features I have added are that the simulator now marks where the ball first touches the ground with a black spot.
- The simulator also adds a red line from the balls origin which represents the highest point the ball reaches and a blue line which shows the displacement of the ball from its origin to where it first hit the ground on the x and y axis.
- Using a third party JavaScript file I was able to create a trail that shows the path of the ball as it travels.
- I have made a huge improvement the way the results button works. When the show/hide button is clicked it will make a window containing the exam question and the answer to it appear in a window over the simulator which the user can make disappear by clicking the button again.
- I have include sound into the application so now whenever the ball hits the ground or a wall there is a thumping sound to indicate that the ball hit a surface.
- I have started implementing all the different exam questions I could find and am calculating the answers to each one. At the time of writing this blog this process is still not finished.
- I am starting to notice that the lab computers are having a little difficulty running this application. After discussing this with my supervisor he has suggested that I ask a friend for a laptop to borrow for the demonstration. I am currently in the process of trying to get one.

![world](https://gitlab.computing.dcu.ie/reddinc3/2017-ca400-reddinc3/raw/master/docs/blog/images/blog6.png)

## Blog Entry 7 - 04/05/2017

- I have refactored my application to make the code easier to read.
- I have also managed to remove some unnecessary variables in my code so now it takes up less memory.
- I have managed to adjust the lighting slightly so that it is easier to run.
- I spoke with my supervisor on the latest version and he was pleased with the application.
- He made some suggestions on some things I could change which shouldn't be too difficult. I am going to implement them soon.
- My project is starting to near its completion and is looking very promising.

## Blog Entry 8 - 15/05/2017

- I have included a light switch button which allows the user to turn the lighting on and off. This was done to help computers that have trouble running the application. Shadows take up a lot of processing power and some weaker computers can't handle it.
- The project is now at a point I would be happy to demo it.
- I have begun writing my documentation and conducting my testing.
- At the time of writing this I am well underway to writing my technical spec and getting approved for testing. I am planning to start my video walkthrough soon.

## Blog Entry 9 - 22/05/2017

- I have conducted my user testing and have taken what people have had to say into account.
- In response to what people have said I made slight alterations to the application to take their opinions into account.
- Some changes included the wording in the interface, the inclusion of a legend and buttons to change the texture.
- I have completed my Technical guide, User manual and video walkthrough for the project documentation.
- I had one final meeting with my supervisor and incorporated all the changes that followed from that.
- I have now submitted my project.
- I feel proud of what I have developed and am proud of the work I put in to see this through.
- Every hurdle was a learning experience I will take with me.