window.addEventListener( 'DOMContentLoaded', function() {
  if ( !document.getElementById( 'output' ) ) {
    const el = document.createElement( 'div' );
    el.setAttribute( 'id', 'output' );
    document.body.appendChild( el );
  }

  const el = document.getElementById('output');
  el.innerHTML = '<h1>Success! Welcome to the class files.</h1>';
} );
