import format from 'date-fns/format';

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

const personFactory = () => ( { ...defaultPerson } );

export { defaultPerson, personFactory };
