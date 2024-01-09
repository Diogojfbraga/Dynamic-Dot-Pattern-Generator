/*
* STEP 7
  The code is using Perlin and Simplex noise functions to generate random values that 
are used to determine the color and movement of dots on a canvas.
Perlin and Simplex noise functions are good choices for generating smooth, continuous, 
and natural-looking random values that are suitable for creating organic patterns, textures, 
and animations.
  In this code, Perlin noise is used to calculate the red and blue components of the dot's color, 
while Simplex noise is used to calculate the green component. Additionally, Simplex noise is 
used to calculate the vector from the mouse to the dot to move the dots away from the mouse when 
it's too close. Finally, the wave function uses the phase angle, which is also calculated using 
Perlin noise, to rotate the ellipse drawn at the transformed origin.
The map() function is used in the code to convert a Simplex noise value, which is in the range of 0 to 1, 
to a color value in the range of 0 to 255 for the green component of the dot's color.

  The map() function is a useful tool for converting values from one range to another range. 
In this case, the map() function is used to remap the Simplex noise value to the appropriate range 
for the green component of the color.
  Without using the map() function, the noise value would need to be manually scaled to the appropriate 
range using arithmetic operations, which can be cumbersome and error-prone.

This code block is used to move the dots away from the mouse if the distance between them is less 
than a certain threshold (in this case, 50 pixels). A bit like the tickle walker assignment from week 6. 
When the distance is less than 50 pixels, the code calculates the direction vector from the mouse to the dot 
and sets its magnitude to 50 divided by the distance multiplied by 10. This is done to make the movement away 
from the mouse more pronounced.

The xPos and yPos variables are then updated by adding the x and y components of the direction vector, respectively. 
This causes the dot to move away from the mouse along the direction vector.

By doing this, the code creates an interactive effect where the dots move away from the mouse when it gets too 
close, adding an extra layer of interactivity to the sketch.

*/

function setup()
{
    createCanvas(500, 500);
    background(255);
}

function draw()
{
    background(255);

    var noOfDots = 20;
    var size = width/noOfDots;

    for (var x = 0; x < noOfDots; x++)
    {
      for (var y = 0; y < noOfDots; y++)
      {
        // your code here
        // STEP 1
        var halfSize = size / 2 ;               // Half the size of the dots based on the "size"
        var xPos = x * size + halfSize / 2;     // x position of the dot on the canvas based on the row and column position of the dot in the grid
        var yPos = y * size + halfSize / 2;     // y position of the dot on the canvas based on the row and column position of the dot in the grid
        
        // STEP 2 
        // Uses Perlin noise to calculate the red and blue colors
        var r = noise(
          x * 0.05, 
          y * 0.05, 
          frameCount * 0.01
          ) * 255; // Red 
        
        var b = noise(
          x * 0.06, 
          y * 0.06, 
          frameCount * 0.01
          ) * 255; // Blue
  
        // STEP 6
        // Uses Simplex noise to calculate the green component
        var g = map(
          noise(
            (x + frameCount * 0.005) * 0.05,
            (y + frameCount * 0.005) * 0.05
          ),
          0,
          1,
          0,
          255
        );
        
        // STEP 3
        var newColor = color(r, g, b);  // calculate the green component of the dot's color using Simplex noise

        // STEP 5
        // Calculate the noise value for the wave animation
        var phaseAngle = (xPos + yPos) * 0.01 + frameCount * 0.02 + mouseX * 0.01;

        // STEP 6
        // Calculates the vector from the mouse to the dot
        var mousePos = createVector(mouseX, mouseY);      // Creates a vector representing the current mouse position
        var dotPos = createVector(xPos, yPos);            // Creates a vector representing the position of the dot
        var direction = p5.Vector.sub(dotPos, mousePos);  // Calculates the direction vector from the mouse to the dot  
        var distance = direction.mag();                   // Calculates the distance between the mouse and the dot

        // Move the dot away from the mouse if it's too close
        if (distance < 50) {                                // Checks if the distance between the mouse and dot is less than 50 pixels.
          direction.setMag(50 / distance * 10);               // Sets the magnitude of the direction vector to move the dot away from the mouse.
          xPos += direction.x;                              // Updates the dot's position by adding the x and y components of the direction 
          yPos += direction.y;
        }
        wave(xPos, yPos, halfSize, newColor, phaseAngle); // Replace params with the necessary parameters
        
      }
    }
}


function wave(xPos, yPos, halfSize, newColor, phaseAngle) // replace params with the necessary parameters
{
 // your code here
 fill(newColor);            // Gives dots with colour generated by the noise function 

 // STEP 4
 push();                    // Save the current state of the drawing matrix
  translate(xPos, yPos);    // Move the origin of the drawing matrix
  rotate(phaseAngle);       // Rotate the drawing matrix
  ellipse(phaseAngle, phaseAngle, halfSize, halfSize);  // Draw the ellipse at the transformed origin
 pop();                     // Restore the previous state of the drawing matrix
}