var gulp = require("gulp");
var sass = require("gulp-sass");
var coffee = require("gulp-coffee");

gulp.task("sass", function() {
    gulp.src("src/sass/**/*scss")
        .pipe(sass())
        .pipe(gulp.dest("./www/css"));
});

gulp.task("coffee", function() {
    gulp.src("src/coffee/**/*coffee")
        .pipe(coffee())
        .pipe(gulp.dest("./www/js"));
});
