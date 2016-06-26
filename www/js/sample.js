(function() {
  var coffee, gulp;

  gulp = require('gulp');

  coffee = require('gulp-coffee');

  gulp.task('compile-coffee', function() {
    return gulp.src('sourde/coffee/**/*.coffee').pipe(coffee()).pipe(gulp.dest('dist/js'));
  });

}).call(this);
