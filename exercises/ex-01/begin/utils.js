let target;

window.addEventListener( 'DOMContentLoaded', function() {
  target = document.getElementById( 'output' );

  // target will be null if output is not found
  if ( !target ) {
    target = document.createElement( 'div' );
    target.setAttribute( 'id', 'output' );
    document.body.insertBefore( target, document.body.firstChild );
  }
} );
