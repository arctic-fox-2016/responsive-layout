var gulp = require("gulp"),
    sass = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    browserSync = require("browser-sync"),
    webpack = require("webpack-stream");

gulp.task('compileBootstrap', function() {
    return gulp.src('node_modules/bootstrap/scss/bootstrap.scss')
        .pipe(customizeBootstrap('styles/scss/*.scss'))
        .pipe(sass())
        .pipe(gulp.dest('css/'));
});


//wepack digabung dengan gulp
gulp.task("script", function() {
    return gulp.src("./resource/assets/js/app.js")
        .pipe(webpack(require("./webpack.config.js")))
        .pipe(gulp.dest("./public/assets/js"))

})

gulp.task("serve", function() {
    browserSync.init({
        server: {
            baseDir: "./" // server nnya !
        }
    })
    gulp.watch("./public/assets/css/**/*.css").on("change", browserSync.reload) //stiap ada perubahan reload
    gulp.watch("./css/*.css").on("change", browserSync.reload)
    gulp.watch("./*.html").on("change", browserSync.reload)
})
