console.log( 'Just a test, for the START of the exercise' );

import { defaultPerson } from './people';
import { logger } from './utils';

window.addEventListener( 'DOMContentLoaded', () => {
  logger.personLog( defaultPerson );
} );
