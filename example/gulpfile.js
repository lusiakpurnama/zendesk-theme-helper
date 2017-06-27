var gulp = require('gulp');
var config = require('config');

// Need to add this line to package.json dependencies
// "zendesk-theme-helper": "git+ssh://git@github.com:lusimail/zendesk-theme-helper.git#master"
var theme = require('zendesk-theme-helper');

gulp.task('default', function() {
	console.log('Tasks available: download, upload')
})

gulp.task('download', function(done) {
	theme.download(config)
	.then(function() {
		done();
	});
});

gulp.task('upload', function(done) {
	theme.upload(config)
	.then(function() {
		done();
	});
});
