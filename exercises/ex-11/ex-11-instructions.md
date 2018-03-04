# Exercise 11

## Objectives
* Refactor our code to create a Person class

## Instructions

Start in the new file `Person.js`. 
Delete the placeholder `peopleFactory` function. We will not need it anymore.  
Create a class called Person.
Add a `constructor` to the class. It should take an object as an argument.  
Using the `fields` array, make sure that you only copy valid fields from 
the argument to the constructor onto the instance you are creating (held in the
variable `this`). 
* Iterate over `fields`
* If the field you are on does not exist, copy the field's value from `defaultPerson`  

Define a property on `this` called `id` and ensure that it is neither enumerable
nor writable. Give it a value of `++id` from the closure.

Add a `getBirthDate` method to the class which returns a formatted birth date.

Move the `toString` definition from `defaultPerson` to the `Person` class.  
Update `toString` so that it uses `getBirthDate` instead of accessing 
`this.birthDate` directly.

Delete `personFactory` from the export list and add `Person`.

Now go to `people.js`. Replace all calls to `personFactory` with invocations of 
`new Person()`. A simple search-and-replace should suffice.

Finally, go to `main.js`. Remove `personFactory` from the import list for `people`.
Iterate over `people` and print each one out with logger.personLog.

Check your code at http://localhost:3000/src/current-exercise


