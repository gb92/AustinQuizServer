let gulp = require('gulp')
let ts = require('gulp-typescript')
let tslint = require('tslint')
let gulpTslint = require('gulp-tslint')

let tsProject = ts.createProject('tsconfig.json')
let srcPath = 'App/**/*.ts'
gulp.task('default', () => {
    return gulp.src(srcPath)
                .pipe(tsProject())
})

gulp.task('lint', function() {
    let program = tslint.Linter.createProgram('./tsconfig.json')
    return gulp.src(srcPath, { base: '.' })
            .pipe(gulpTslint({
                        configuration: "tslint.json",
                        program: program
                    }))
})