var gulp = require("gulp"),
    sass = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    hash = require("gulp-hash"),
    del = require("del");

gulp.task("scss", function () {
    del(["static/css/**/*"]);

    gulp.src("static-src/scss/**/*.scss")
        .pipe(sass({
            outputStyle : "compressed"
        }))
        .pipe(autoprefixer({
            browsers : ["last 20 versions"]
        }))
        .pipe(hash())
        .pipe(gulp.dest("static/css"))
        .pipe(hash.manifest("hash.json"))
        .pipe(gulp.dest("data/css"));
});

gulp.task("watch", ["scss"], function () {
    gulp.watch("static-src/scss/**/*", ["scss"]);
});

gulp.task("default", ["watch"]);
