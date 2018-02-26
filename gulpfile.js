let gulp     = require( 'gulp' ),
    markdown = require( 'gulp-markdown' ),
    concat   = require( 'gulp-concat' ),
    wrap     = require( 'gulp-wrap' ),
    del      = require( 'del' ),
    rimraf   = require( 'rimraf' ),
    open     = require( 'gulp-open' ),
    path     = require( 'path' ),
    webpack  = require( 'webpack' ),
    fs       = require( 'fs' ),
    argv     = require( 'yargs' ).argv;

let exercises          = 'exercises/',
    begin              = '/begin/',
    solution           = '/end/',
    student            = '/student/',
    src                = 'current-exercise/',
    publicFolder       = 'public/',
    instructionsFolder = 'instructions/',
    instructions       = '-instructions.md',
    instructionsOut    = 'instructions.html',
    images             = 'images/',
    imageFiles         = '**/*.+(png|jpg|gif)',
    files              = '**/*.+(js|html)',
    notData            = '!' + src + 'data/**/*',
    notBundle          = '!' + src + 'bundle.js',
    notInstructions    = '!' + src + 'instructions.*',
    allFiles           = '**/*';

// Cheap cast to String
argv.ex += '';
const exerciseNumber = argv.ex.length === 1 ? 'ex-0' + argv.ex : 'ex-' + argv.ex;

const webpackConfig = {
  context: path.resolve( __dirname, src ),
  entry  : './main',
  output : {
    filename: `${src}/bundle.js`,
    path    : path.resolve( __dirname )
  },
  devtool: 'inline-source-map',
  stats  : 'verbose'
};

gulp.task( 'webpack-current-exercise', () => {

  return new Promise( resolve => webpack( webpackConfig, ( err, stats ) => {

    if ( err ) {
      console.error( err.stack || err );
      if ( err.details ) {
        console.error( err.details );
      }
      return;
    }

    const info = stats.toJson();

    if ( stats.hasErrors() ) {
      console.error( `${info.errors}` );
    }

    if ( stats.hasWarnings() ) {
      console.warn( `${info.warnings}` );
    }

    console.log( stats.toString() );

    resolve();
  } ) );
} );

gulp.task( 'webpack-watch', () => {
  return gulp.watch( [ src + '!(bundle.js)', ], { delay: 1000 },
    gulp.series( 'webpack-current-exercise' ) );
} );

gulp.task( 'clean-solution', () => {
  return del( [ exercises + exerciseNumber + solution ] );
} );

gulp.task( 'clean-begin', () => {
  return del( [ exercises + exerciseNumber + begin + src,
    exercises + exerciseNumber + begin + publicFolder
  ] );
} );

gulp.task( 'clean-public', () => {
  return del( publicFolder + files, { ignore: 'favicon.ico' } );
} );

gulp.task( 'clean-src', function( done ) {
  rimraf( src + files, done );
} );

gulp.task( 'clean-all', gulp.series( 'clean-src' ) );

gulp.task( 'copy-exercise-files', () => {
  const baseDir = exercises + exerciseNumber + begin;
  return gulp.src( baseDir + files )
             .pipe( gulp.dest( src ) );
} );

gulp.task( 'generate-exercise-docs', done => {
  const instructionsFile = exercises + `${exerciseNumber}/` + exerciseNumber +
                           instructions;
  console.log( 'Testing ' + instructionsFile );
  if ( fs.existsSync( instructionsFile ) ) {
    console.log( 'Building instructions....' );
    gulp.src( exercises + instructionsFolder + 'instructions.css' )
        .pipe( gulp.dest( src ) );

    gulp.src( instructionsFile )
        .pipe( markdown() )
        .pipe( wrap(
          { src: exercises + instructionsFolder + 'instructions-template.html' } ) )
        .pipe( concat( instructionsOut ) )
        .pipe( gulp.dest( src ) )
        .pipe(
          open( { uri: `http://localhost:3000/${src}/${instructionsOut}` } ) );
  } else {
    console.warn( 'Could not find ' + instructionsFile );
  }

  done();
} );

gulp.task( 'start-exercise',
  gulp.series( 'clean-src',
    'copy-exercise-files',
    'generate-exercise-docs',
    'webpack-current-exercise',
    'webpack-watch' ) );

gulp.task( 'show-solution', gulp.series( 'clean-all', function() {
  if ( !exerciseNumber ) throw Error( 'No exercise number!' );

  const baseDir = exercises + exerciseNumber + solution;
  return gulp.src( baseDir + files )
             .pipe( gulp.dest( src ) );
} ) );

gulp.task( 'copy-to-begin', gulp.series( 'clean-begin', () => {
  if ( !exerciseNumber ) throw Error( 'No exercise number!' );
  return gulp.src( [ src + allFiles, notBundle, notInstructions ] )
             .pipe( gulp.dest( exercises + exerciseNumber + begin ) );
} ) );

gulp.task( 'copy-to-solution', gulp.series( 'clean-solution', () => {
  if ( !exerciseNumber ) throw Error( 'No exercise number!' );
  return gulp.src( [ src + allFiles, notBundle, notInstructions ] )
             .pipe( gulp.dest( exercises + exerciseNumber + solution ) );
} ) );

gulp.task( 'swap', function() {
  if ( exerciseNumber && options.dest && options.ex ) {
    let base = `${exercises}${options.ex}/`;
    gulp.src( base + exerciseNumber + '/**/*', { base: base + exerciseNumber } )
        .pipe( gulp.dest( base + options.dest ) );
  }
} );
