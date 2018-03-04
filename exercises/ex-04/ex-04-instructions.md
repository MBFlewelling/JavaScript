# Exercise 04

## Objectives
* Use a closure to more efficiently manage configuration data for `logger.colorLog()`
* Use another closure to more efficiently store all the messages logged by either
  `colorLog()` or `log()`

## Instructions

Open up **src/current-exercise/utils.js**  
In `colorLog()`, change where logColors is defined so that it is a closure (currently, 
it is recreated every time the method is called. Very inefficient!)

Create an array that can be accessed by both `log()` and `colorLog()`  
Both `log()` and `colorLog()` should store their messages in this array  
The array should be used to generate the output from both `log()` and `colorLog()`  
(Put another way, replace the local array that `log()` and `colorLog()` each used with 
an array they can both share. Share it via a closure.)

When you are finished, open http://localhost:3000/current-exercise to see if your 
code works.  
Try uncommenting some of the code in main.js to see if it has any effects on your
output. 
