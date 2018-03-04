console.log( 'Just a test, for the START of the exercise' );

import { people } from './people';
import { logger } from './utils';

window.addEventListener( 'DOMContentLoaded', () => {
  // people is an array of person objects
  logger.log( 'With for-of: ' );
  for ( let person of people ) {
    logger.personLog( person );
  }

  logger.log( ' <br/> With forEach():' );
  people.forEach( logger.personLog );

  logger.log( ' <br/>Women only:' );
  people.filter( person => {
          console.log( `${person.firstName} ${person.gender}` );
          return person.gender === 'female';
        } )
        .forEach( logger.personLog );

  const arrayOfNames = people.map(
    person => `${person.firstName} ${person.lastName}` );

  logger.log('<br/> Just names: ');
  logger.log( arrayOfNames );
} );
