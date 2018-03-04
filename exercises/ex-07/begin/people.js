import format from 'date-fns/format';

let id = 0;

const defaultPerson = {
  toString: function() {
    return `${this.firstName} ${this.lastName}, born ${format( this.birthDate,
      'MMMM D, YYYY' )}`;
  }
};

Object.defineProperties( defaultPerson, {
  firstName: {
    enumerable: true,
    writable  : false,
    value     : 'Jane'
  },

  lastName : {
    enumerable: true,
    writable  : false,
    value     : 'Doe'
  },
  gender   : {
    enumerable: true,
    value     : 'female'
  },
  birthDate: {
    configurable: true,
    enumerable  : true,
    writable    : true,
    value       : new Date()
  },

  id: {
    enumerable: false,
    value     : ++id
  },

  toString: {
    enumerable: false
  }
} );

defaultPerson.toString = function() {
  return `${this.firstName} ${this.lastName}, born ${format( this.birthDate,
    'MMMM D, YYYY' )}`;
};

export { defaultPerson };