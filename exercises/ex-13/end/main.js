console.log( 'Just a test, for the START of the exercise' );

import { logger } from './utils';
import { Employee } from './Employee';


window.addEventListener( 'DOMContentLoaded', () => {
  const clerk = new Employee( {
    firstName : 'Jane',
    lastName  : 'Dulce',
    birthDate : '1990-01-30',
    gender    : 'female',
    jobTitle  : 'clerk',
    department: 'accounting'
  } );

  logger.log( 'Employee: ' + clerk );
  logger.log('<br/>');
  logger.personLog( clerk );
} );
