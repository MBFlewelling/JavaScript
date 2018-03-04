# Exercise 7

## Objectives
* Use object destructuring to write a logger which logs only the properties it
cares about

## Instructions

Open `utils.js`  
Add a method to the `logger` called `personLog`
It should destructure an object passed to it into the following properties:
* `firstName`
* `lastName`
* `id`  

And then it should print them out to match "Jane Doe (#1)".

Open `main.js`.  
Call `logger.personLog()` in the event handler, passing it `defaultPerson`.

Verify that your code works at http://localhost:3000/current-exercise