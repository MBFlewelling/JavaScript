import { Person } from './Person';

let employeeId = 0;
const idConfig = {
  enumerable  : false,
  configurable: false
};

const fields = [ 'department', 'jobTitle' ];

class Employee extends Person {
  constructor( config ) {
    super( config );
    fields.forEach( field => {
      if ( config[ field ] ) {
        this[ field ] = config[ field ];
      } else {
        this[ field ] = defaultPerson[ field ];
      }
    } );

    Object.defineProperty( this, '_employeeId',
      { ...idConfig, value: ++employeeId } );
  }

  toString() {
    return `${this.firstName} ${this.lastName} is employed as a ${this.jobTitle}` +
           ` in the ${this.department} department.`;
  }
}

export { Employee };