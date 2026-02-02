const gulp = require("gulp");

gulp.task("copy", () => {
  return gulp.src("src/**/*")
    .pipe(gulp.dest("dist"));
});

gulp.task("default", gulp.series("copy"));
