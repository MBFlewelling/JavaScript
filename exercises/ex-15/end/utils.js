let target;

window.addEventListener( 'DOMContentLoaded', () => {
  target = document.getElementById( 'output' );

  // target will be null if output is not found
  if ( !target ) {
    target = document.createElement( 'div' );
    target.setAttribute( 'id', 'output' );
    document.body.insertBefore( target, document.body.firstChild );
  }
} );

const logColors = {
  log  : 'black',
  debug: 'lightgrey',
  info : 'blue',
  warn : 'orange',
  error: 'red'
};

const allMsgs = [];

const logger = {
  howMany     : 'all',
  setLogLength: function( length ) {
    this.howMany = -( Math.abs( length ) );
  },

  personLog: ( { firstName, lastName, gender, birthDate, id } ) => {
    let msg = `${firstName} ${lastName} [${gender}] born on ${birthDate} (ID #: ${id})`;
    allMsgs.push( msg );
    target.innerHTML += `${msg}<br>`;
  },

  objectLog: obj => {
    const keys = Object.keys( obj );
    let html = '<ul>';

    for ( let i = 0; i < keys.length; i++ ) {
      let key = keys[ i ];
      if ( [ 'function, object' ].indexOf( typeof obj[ key ] ) ) {
        html += `<li>${key} : ${obj[ key ]}</li>`;
      }
    }

    html += '</ul>';

    allMsgs.push( html );
    target.innerHTML += html;

  },

  log: function( ...msg ) {

    // Add the message(s) to allMsgs
    for ( let x = 0; x < msg.length; x++ ) {
      allMsgs.push( msg[ x ] );
    }

    const msgs = allMsgs.slice( this.howMany );
    target.innerHTML = msgs.join( '<br>' );
  },

  colorLog: ( msg, level = 'log', howMany = 'all' ) => {

    // Add the message to allMsgs
    const wrappedMsg = `<span style="color: ${logColors[ level ]}">${msg}</span>`;
    allMsgs.push( wrappedMsg );

    if ( howMany === 'all' ) {
      howMany = 0;
    } else {
      howMany = -howMany;
    }

    const msgs = allMsgs.slice( howMany );
    target.innerHTML = msgs.join( '<br>' );
  }
};

export { logger };