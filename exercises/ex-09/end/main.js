console.log( 'Just a test, for the START of the exercise' );

import { people } from './people';
import { logger } from './utils';

window.addEventListener( 'DOMContentLoaded', () => {
  people.slice( 0, 3 )
        .forEach( logger.personLog );

  logger.log( '<br/> Halves reversed:' );
  const firstFive = people.slice( 0, 5 );
  const lastFive = people.slice( 5 );
  const allPeople = [ ...lastFive, ...firstFive ];
  allPeople.forEach( logger.personLog );

  // As a one-liner
  // [ ...people.slice( 5 ), ...people.slice( 0, 5 ) ].forEach( logger.personLog );

  logger.log('<br/> Sorted by last name: <br/>');
  people.sort( ( p1, p2 ) => {
    return p1.lastName > p2.lastName;
  } ).forEach( logger.personLog );

} );
