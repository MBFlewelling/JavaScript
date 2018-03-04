# Exercise 12

## Objectives
* Allow access to `id` via a getter
* Force formatting of `birthDate` with a getter and setter

## Instructions

### Allow access to `id` via a getter

In `Person.js`, make three changes:
* In the `constructor` function, change the reference to `id` in the last line
  to `_id` (note the underscore)
* Add a getter method for `id` which returns `this._id` (again, note the underscore)
* Remove `writable` from `idConfig`

### Format `birthDate`

Still in `Person.js`, add a getter and setter for `birthDate`. Use `_birthDate` as 
the pseudo-hidden variable to store the birth date. Use `format` and `parse` from
the date-fns library to format and parse dates respectively.

Check the results at http://localhost:3000/current-exercise