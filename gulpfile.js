let gulp = require( 'gulp' ),
    markdown = require( 'gulp-markdown' ),
    concat = require( 'gulp-concat' ),
    wrap = require( 'gulp-wrap' ),
    del = require( 'del' ),
    opn = require( 'opn' ),
    fs = require( 'fs' ),
    argv = require('yargs').argv;

let exercises = 'exercises/',
    begin = '/begin/',
    solution = '/end/',
    student = '/student/',
    src = 'current-exercise/',
    publicFolder = 'public/',
    instructionsFolder = 'instructions/',
    instructions = '-instructions.md',
    instructionsOut = 'instructions.html',
    images = 'images/',
    imageFiles = '**/*.+(png|jpg|gif)',
    files = '**/*.+(js|html)',
    notData = '!' + src + 'data/**/*',
    allFiles = '**/*';

const exerciseNumber = argv._[1] ;

// this is a bit of silliness to address two issues:
// 1) I need to change the workbook to use the command
//    gulp start-exercise --src ex-01 (or something similar) and
// 2) Gulp is terrible and has neither a catch-all for task names, nor a way
//    to catch tasks by regular expressions.
// TODO: Remove after ESRI class.
for (let x = 0; x < 50; x++) {
  let xString = x + '';
  if (xString.length === 1) {
    xString = '0' + xString;
  }

  gulp.task('ex-' + xString, function() {
    console.log( 'Executed task.' );
  })
}


gulp.task( 'start-exercise', [ 'clean-all' ], function() {
  if ( exerciseNumber ) {
    const baseDir = exercises + exerciseNumber + begin;
    gulp.src( baseDir + files )
        .pipe( gulp.dest( src ) );

    gulp.src( baseDir + images + imageFiles )
        .pipe( gulp.dest( src + images ) );

    const instructionsFile = exercises + `${exerciseNumber}/` + exerciseNumber +
     instructions;
    console.log( 'Testing ' + instructionsFile );
    if ( fs.existsSync( instructionsFile ) ) {
      console.log( 'Building instructions....' );
      gulp.src( instructionsFile )
          .pipe( markdown() )
          .pipe( wrap( { src: exercises + instructionsFolder + 'instructions-template.html' } ) )
          .pipe( concat( instructionsOut ) )
          .pipe( gulp.dest( src ) );

      gulp.src( exercises + exerciseNumber + instructionsFolder + 'instructions.css' )
          .pipe( gulp.dest( src ) );

      opn( 'http://localhost:3000/' + src + instructionsOut );

      // opn seems to hang up gulp, this exits after a (relatively safe?) 2 seconds
      setTimeout( () => {
        process.exit( 0 );
      }, 2000 );
    } else {
      console.warn('Could not find ' + instructionsFile );
    }

  }
} );

gulp.task( 'show-solution', [ 'clean-all' ], function() {
  if ( exerciseNumber ) {
    gulp.src( exercises + exerciseNumber + solution + src + files )
        .pipe( gulp.dest( src ) );
  }
} );

gulp.task( 'copy-to-begin', [ 'clean-begin' ], () => {
  if ( exerciseNumber ) {
    gulp.src( [ src + files, notData ] )
        .pipe( gulp.dest( exercises + exerciseNumber + begin + src ) );
    gulp.src( publicFolder + files )
        .pipe( gulp.dest( exercises + exerciseNumber + begin + publicFolder ) );
  }
} );

gulp.task( 'copy-to-solution', [ 'clean-solution' ], () => {
  if ( exerciseNumber ) {
    // TODO: Make sure that the data folder is not included
    gulp.src( [ src + files, notData ] )
        .pipe( gulp.dest( exercises + exerciseNumber + solution + src ) );
    gulp.src( publicFolder + files )
        .pipe( gulp.dest( exercises + exerciseNumber + solution + publicFolder ) );
  }
} );

gulp.task( 'clean-solution', () => {
  return del( [ exercises + exerciseNumber + solution + src,
    exercises + exerciseNumber + solution + publicFolder ] );
} );

gulp.task( 'clean-begin', () => {
  return del( [ exercises + exerciseNumber + begin + src,
    exercises + exerciseNumber + begin + publicFolder ] );
} );

gulp.task( 'clean-src', () => {
  return del( [ src + files, notData ] );
} );

gulp.task( 'clean-public', () => {
  return del( publicFolder + files, { ignore: 'favicon.ico' } );
} );

gulp.task( 'clean-all', [ 'clean-src' ] );

/*gulp.task( 'swap', function() {
  if ( exerciseNumber && options.dest && options.ex ) {
    let base = `${exercises}${options.ex}/`;
    gulp.src( base + exerciseNumber + '/!**!/!*', { base: base + exerciseNumber } )
        .pipe( gulp.dest( base + options.dest ) );
  }
} );*/
