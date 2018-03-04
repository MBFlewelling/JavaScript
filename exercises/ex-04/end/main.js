console.log( 'Just a test, for the START of the exercise' );

import { logger } from './utils';

window.addEventListener( 'DOMContentLoaded', () => {
  logger.log( 'This is a test',  'of our new', 'logging utility.' );
  logger.colorLog( 'This is a test of the "info" level', 'info' );
  logger.colorLog( 'This is a test of the "error" level', 'error' );
  logger.colorLog( 'This is a test of the "default" level' );

  // Uncomment to show only the last two log messages
  // logger.colorLog( 'This is a test of the "warn" level', 'warn', 2 );

  // Uncomment to show all the log messages
  // logger.colorLog('This should appear at the bottom of all the messages', null, 'all');
} );
