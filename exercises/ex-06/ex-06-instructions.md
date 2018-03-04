# Exercise 6

## Objectives
* Use `Object.defineProperty` and `Object.defineProperties` to define the properties
of `defaultPerson`
* Verify that non-enumerable properties do not show up in loops

## Instructions

Note that `people.js` has been simplified since the last exercise. There is no longer 
a `peopleFactory` function.

### Using `Object.defineProperty / Object.defineProperties`

Refactor `defaultPerson` to be defined via `Object.defineProperty` and/or `Object.defineProperties`
Define each of these properties as follows:
* `firstName`: give it a value, make it read-only, but also enumerable
* `lastName`: give it a value, make it read-only, but also enumerable
* `gender`: give it a value, make it enumerable
* `birthDate`: give it a value, make it enumerable and wriatable and ensure we can
  edit it later if needed
* `id`: Non-enumerable, but give it a value (maybe use a closure?)
* `toString`: non-enumerable, but give it a value

### Verify non-enumerable properties

In `main.js`, write a loop that goes over the key-value pairs of defaultPerson. 
(You can use either Object.keys, or a for-in loop.). Verify that the non-enumerable
values do not show up in the loop. 

Then write some code which prints the output from the non-enumerable properties.
