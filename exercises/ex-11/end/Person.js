import format from 'date-fns/format';

const defaultPerson = {
  firstName: 'Jane',
  lastName : 'Doe',
  gender   : 'female',
  birthDate: new Date( 1985, 2, 15 ),
};

let id = 0;
const idConfig = {
  enumerable  : false,
  writable    : false,
  configurable: false
};

const fields = Object.keys( defaultPerson );

class Person {
  constructor( config ) {
    fields.forEach( field => {
      if ( config[ field ] ) {
        this[ field ] = config[ field ];
      } else {
        this[ field ] = defaultPerson[ field ];
      }
    } );

    Object.defineProperty( this, 'id', { ...idConfig, value: ++id } );

  }

  getBirthDate() {
    return format( this.birthDate, 'MMMM D, YYYY' );
  }

  toString() {
    return `${this.firstName} ${this.lastName}, born ${this.getBirthDate()}`;
  }
}

export { Person };