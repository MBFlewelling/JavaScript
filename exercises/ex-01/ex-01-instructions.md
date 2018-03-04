# Exercise 1

## Objectives
* Create a logging utility 
* Import and use the logging utility into our main JavaScript file

## Instructions

### Create a logging utility
* Create a `logger` object in `utils.js`.
* It should have at least one method, `log`, which takes a string as an argument
* It should print the message to an element with the id **output**
  * Check to make sure that the #output element exists first!
* Export the logger object

### Import and use the logging utility into our main JavaScript file
* In `main.js`, import the logger from `utils.js`
* Use the logger's `log` method to print out a test message
* Verify that the logger worked by viewing http://localhost:3000/src/current-exercise
