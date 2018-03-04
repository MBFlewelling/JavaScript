# Exercise 02

## Objectives
* Use rest parameters to capture and process a variable number of arguments to a function
* Use default values for arguments to permit skipping optional values

## Instructions

### Rest parameters

Change the function signature of `logger.log` to accept a variable number of arguments.  
Capture all the arguments into one variable.  
Use the data in that variable to output all the values passed to `log()`.  
Uncomment the first function call to `logger.log` in `main.js`

### Default values for arguments

Create a new method on `logger` called `colorLog`.  
It should take a single message as an argument, and two optional arguments
* A `level` which is set to a default of `log` but could be a different value  
* A `howMany` argument, which determines how many of the last x log statements should be shown. 
  * The default for howMany should be 'all'
  * Users can pass in 'all' or a number
  * If the value is a number, x, they get back x last logging statements  
  
Uncomment the other function calls (except the last one) to `logger.colorLog` 
in `main.js`

### Testing your code

Verify that your code works by visiting http://localhost:3000/src/current-exercise
  
  