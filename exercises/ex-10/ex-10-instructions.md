# Exercise 10

## Objectives
* Manipulate the array like a stack
* Find people in the array

## Instructions
### Manipulate the array like a stack
Take the first person in the array and make them the last person in the array.  
Save the first person in a variable called `firstPerson`, though, because you will need them in the
second part of the exercise.

### Find people in the array
Use `indexOf` to search for `firstPerson` in the array with `indexOf`. Report on
the position of `firstPerson` in the array.

Make a copy of `firstPerson` using either `Object.assign` or the spread operator.
Use the `includes` method to check to see if the **copy** is in the array. Report
whether it is or not.
