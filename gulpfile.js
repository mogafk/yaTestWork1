var gulp = require('gulp');
var jade = require('gulp-jade');
var uglify = require('gulp-uglify');
//var rename = require('gulp-rename');
//var copy = require('gulp-copy');

gulp.task('make', function(){
    console.log(__dirname);
    //return gulp.src(["dev/js/main.js", "dev/js/controllers/*.js", "dev/js/services/*.js", "dev/js/directives/*.js"])
    return gulp.src(["dev/js/main.js", "dev/js/services/*.js", "dev/js/directives/*.js"])
        .pipe(concat("all.js"))
        .pipe(gulp.dest('build'))
        .pipe(rename("all.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest('build'));
});
gulp.task('buildJade', function(){
   return gulp.src(["*.jade", "dev/*.jade"])
       .pipe(jade({
           pretty: true
           //locals: {}
       }))
       .pipe(gulp.dest('release'))
});
gulp.task('moveCss', function(){
    return gulp.src("dev/css/*.css")
        .pipe(gulp.dest('release/css'))
});
//gulp.task('ugly', function(){
//    console.log(__dirname);
//return gulp.src("./js/app.js")
//    .pipe(uglify())
//    .pipe(gulp.dest('build'));
///})

gulp.task('default', ['make']);
gulp.task('build', ['buildJade', 'moveCss']);
