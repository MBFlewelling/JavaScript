# Exercise 13

## Objectives
* Create a class that inherits from Person

## Instructions

Start work in `Employee.js`.

Create a class `Employee`, which inherits from `Person`.  
It should have the following fields:  
* employeeId (hidden, non-enumerable, as `id` in `Person`)
* jobTitle
* department
It should override `Person`'s `toString` method to use the new properties `jobTitle`
and `department`.  
 