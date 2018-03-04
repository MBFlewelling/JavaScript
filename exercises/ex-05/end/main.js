console.log( 'Just a test, for the START of the exercise' );

import { defaultPerson, personFactory } from './people';
import { logger } from './utils';

window.addEventListener( 'DOMContentLoaded', () => {
  logger.log( `defaultPerson: ${defaultPerson.firstName} ${defaultPerson.lastName}` );
  logger.log( `defaultPerson: ${defaultPerson.toString()}` );
  logger.log( `personFactory(): ${personFactory().toString()}` );
  logger.objectLog( defaultPerson );
} );
