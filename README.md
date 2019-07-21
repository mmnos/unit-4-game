# unit-4-game

### Overview

In this web application, you can choose to click between 4 different images which hold random values and try to match the random number given.

The game will reset whether you win or lose and there will be a counter to keep it updated. 

Each time it resets, a new random number will be given to you along with different values for the images.

---

### Behind the Code

This line of code below is what is allowing the entire program to work properly by storing random numbers within the images.

`$(".imgPoints").attr("data-imgValue", imgPoints);`

It starts off by selecting the `.imgPoints` class in the HTML and adds a data attribute with jQuery. It is than given a value of `imgPoints` which is a function within the JavaScript file that gets a random number between 1 and 12. Since the `.imgPoints` class in the HTML is assigned to 4 different images, this allows each image to get a random value of there own.