import arbitraryDefault from './export-with-default';
import {
  foo as renamedFoo,
  x,
  names,
  getNamesCount
} from './export-no-default';

console.log( 'From export-no-default: x is %d, names are: ', x, names );
console.log( 'Calling getNamesCount(): ', getNamesCount() );

console.log( 'From export-with-default, foo is [%s]', arbitraryDefault );
console.log( 'From export-no-default, foo is [%s]', renamedFoo );