const webpack = require( 'webpack' );
const path = require( 'path' );
const demos = [ '../demos/import-export/import-export.js' ];

const configs = demos.map( configPath => {
  const dir  = path.dirname( configPath ),
        file = path.basename( configPath );

  const config = {
    entry : configPath,
    output: {
      filename: './bundle.js',
      path    : path.resolve( __dirname, dir )
    },
    stats : 'verbose'
  };

  console.log( 'Input: ', configPath );
  console.log( 'Generated config: ', config );

  return config;
} );

const compiler = webpack( configs );
compiler.watch( {}, ( err, stats ) => {
  console.log( 'Change detected, recompiling....' );
  console.log( stats.stats );

} );
