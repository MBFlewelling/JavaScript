# Exercise 05

## Objectives
* Create a `defaultPerson` object
* Add a `toString` method to `defaultPerson`
* Create a function which creates copies of `defaultPerson`
* Write an `objectLog` function which logs out the key-value pairs of an object
  as an unordered list in HTML

## Instructions

### Create a `defaultPerson` object
In `people.js`, create and export a defaultPerson with the following properties:
* `firstName`
* `lastName`
* `gender`
* `birthDate`

Define the values for the above properties as you see fit. The property `birthDate`
should be a `Date` object, though. 

Using `logger.log`, print out the contents of `defaultPerson`.

### Add a `toString` method to `defaultPerson`

Add a `toString` method to `defaultPerson`. It should print out the following:  
**Jane Doe, born March 15, 1985**  
You can use the `format` method from the date-fns library to format `birthDate`.  
Use `logger.log` to print out the value returned by `defaultPerson.toString()`.

### Create a function which creates copies of `defaultPerson`

Create a function called `personFactory`. When called, it should return a copy
of `defaultPerson`, either by using `Object.assign` or the Object spread operator.

Create a duplicate of `defaultPerson` using `personFactory`. Log this new person
with `logger.log`.

### Write `objectLog`
In `utils.js`, add a method to `logger` called `objectLog`.  
It should take an object as an argument. Iterate over the keys of the object,
generating an unordered list. Each key-value pair should be an item in the unordered list.

While iterating over the keys, if the corresponding value is not a function or 
an object (hint: try `typeof`), add the key-value pair as a list item. Otherwise, 
do not.  

Try your new `logger.objectLog` function against `defaultPerson` and see what happens. 

### Try it out

Visit http://localhost:3000/current-exercise/ to try it out!


