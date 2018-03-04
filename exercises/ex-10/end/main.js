console.log( 'Just a test, for the START of the exercise' );

import { people, personFactory } from './people';
import { logger } from './utils';

window.addEventListener( 'DOMContentLoaded', () => {

  const firstPerson = people.shift();
  people.push( firstPerson );

  logger.log( `${firstPerson.firstName} found at ` + people.indexOf(
    firstPerson ) );

  const copyOfFirstPerson = { ...firstPerson };
  logger.log( 'Can we find a copy of firstPerson? ' +
    people.includes( copyOfFirstPerson ) );

} );
