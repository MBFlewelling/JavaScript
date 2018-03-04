import format from 'date-fns/format';

let id = 0;

const defaultPerson = {
  firstName: 'Jane',
  lastName : 'Doe',
  gender   : 'female',
  birthDate: new Date( 1985, 2, 15 ),
  toString : function() {
    return `${this.firstName} ${this.lastName}, born ${format( this.birthDate,
      'MMMM D, YYYY' )}`;
  }
};

const idConfig = {
  enumerable  : false,
  writable    : false,
  configurable: false,
  value       : ++id
};

Object.defineProperty( defaultPerson, 'id', idConfig );

const personFactory = ( { firstName, lastName, gender, birthDate } ) => {
  const newPerson = {
    firstName,
    lastName,
    gender,
    birthDate,
    ...defaultPerson
  };
  Object.defineProperty( newPerson, 'id', idConfig );

  return newPerson;
};

const people = [
  personFactory( {
    'firstName'  : 'Jenny',
    'lastName'   : 'Sparks',
    'dateOfBirth': '1995-01-01'
  } ),
  personFactory( {
    'firstName'  : 'Lucas',
    'lastName'   : 'Trent',
    'gender'     : 'male',
    'dateOfBirth': '1983-02-12'
  } ),
  personFactory( {
    'firstName'  : 'Jack',
    'lastName'   : 'Hawksmoor',
    'gender'     : 'male',
    'dateOfBirth': '1974-03-26'
  } ),
  personFactory( {
    'firstName'  : 'Jeroen',
    'lastName'   : 'Thornedike',
    'gender'     : 'male',
    'dateOfBirth': '1984-04-07'
  } ),
  personFactory( {
    'firstName'  : 'Angela',
    'lastName'   : 'Cortez',
    'dateOfBirth': '1979-05-15'
  } ),
  personFactory( {
    'firstName'  : 'Shen',
    'lastName'   : 'Li-Min',
    'dateOfBirth': '1990-06-30'
  } ),
  personFactory( {
    'firstName'  : 'Spider',
    'lastName'   : 'Jerusalem',
    'gender'     : 'male',
    'dateOfBirth': '1977-07-05'
  } ),
  personFactory( {
    'firstName'  : 'Jakita',
    'lastName'   : 'Wagner',
    'dateOfBirth': '1988-08-12'
  } ),
  personFactory( {
    'firstName'  : 'Elijah',
    'lastName'   : 'Snow',
    'gender'     : 'male',
    'dateOfBirth': '1968-09-19'
  } ),
  personFactory( {
    'firstName'  : 'Ambrose',
    'lastName'   : 'Chase',
    'gender'     : 'male',
    'dateOfBirth': '1993-10-22'
  } )
];

export { defaultPerson, personFactory, people };