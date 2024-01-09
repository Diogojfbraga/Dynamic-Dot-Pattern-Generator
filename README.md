# Interactive Dot Pattern Generator

This project is an interactive dot pattern generator that utilizes Perlin and Simplex noise functions to determine the color and movement of dots on a canvas. The combination of these noise functions creates smooth, continuous, and natural-looking random values, providing an organic feel to the generated patterns.

## Features
- **Color Generation:** Perlin noise is used to calculate the red and blue components of the dot's color, while Simplex noise determines the green component. This results in vibrant and dynamic color patterns.
- **Interactive Movement:** Dots move away from the mouse when it gets too close, creating an engaging and interactive effect.
- **Wave Animation:** The project includes a wave animation using the phase angle, which is calculated using Perlin noise. This adds a dynamic element to the dot patterns.
- **Modular Design:** The code is structured with clear steps, making it easy to understand and modify. Each step corresponds to a specific feature, facilitating customization and experimentation.

## How It Works
1. **Grid Creation:** Dots are arranged in a grid on the canvas.
2. **Color Calculation:** Perlin noise is used for red and blue components, while Simplex noise is used for the green component, creating a diverse color palette.
3. **Interactive Movement:** Dots move away from the mouse if it approaches within a certain threshold, enhancing user interaction.
4. **Wave Animation:** The wave function rotates ellipses drawn at transformed origins, creating a mesmerizing animation.
5. **Map Function Usage:** The map() function is employed to convert Simplex noise values to appropriate color ranges, streamlining the color calculation process.

## Instructions
- Run the project and observe the dynamic and interactive dot patterns.
- Experiment with the code to create custom patterns by adjusting noise parameters, colors, and interactive behaviors.

Feel free to explore and modify this project to unleash your creativity!
