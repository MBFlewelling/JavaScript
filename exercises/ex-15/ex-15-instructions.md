# Exercise 15

## Objectives
* Add a validation routine to check birth date
* Do not submit the form if any fields are invalid

## Instructions
### Validate `birthDate`
Create a variable `isValidDate` and set it to false.  
When the `#birth-date` field changes, check its value against `validateDate` 
(which has been provided for this exercises). 
Set the return of `validateDate` to `isValidDate`

### Do not submit an invalid form
Add an event handler to the form for the `submit` event.
If `isValidDate` is false, prevent the form from submitting, and return false
from the handler.
If `isValidDate` is true, log to the console, and **still** prevent the form from
submitting (so that you do not lose the state of the form).

