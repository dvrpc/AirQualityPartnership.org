var fs = require('fs-extra');
var CleanCSS = require('clean-css');
var exec = require('child_process').exec;
var findFiles = require('glob');
var package = require('./package.json');
var UglifyJS = require("uglify-js2");

var ROOT = {
	"production": "",
	"development": "/new"
}

console.info('Building...');

//Copy static to dist
console.time('Creating dist folder');
fs.emptyDirSync('dist');
console.timeEnd('Creating dist folder');

console.time('Copying static files');
//fs.copySync('static', 'dist');
console.timeEnd('Copying static files');

//Inject versions in HTML for caching
console.time('Updating file versions');
findFiles.sync('**/*.@(html|css|js)', {cwd: 'src/'}).forEach(function (file) {
	var html = fs.readFileSync('src/' + file, 'utf8');
	fs.outputFileSync('temp/' + file, 
		html/*.replace(/src=(['"])(?!http|mailto:|#)(.*?)\1/gmi, 'src=$1' + ROOT['development'] + '$2?' + package.version + '$1')
			.replace(/href=(['"])(?!http|mailto:|#)(.*?)\1/gmi, 'href=$1' + ROOT['development'] + '$2?' + package.version + '$1')
			.replace(/url\((['"])(?!http|mailto:|#)(.*?)\1\)/gmi, 'url($1' + ROOT['development'] + '$2?' + package.version + '$1)')
			.replace(ROOT['development'] + ROOT['development'], ROOT['development'])*/
	);
});
console.timeEnd('Updating file versions');

//Minify and concat CSS to styles.css
console.time('Minifying CSS');
var css = new CleanCSS({sourceMap: true}).minify(findFiles.sync('temp/css/*.css'));
fs.outputFileSync('dist/css/styles.css', css.styles);
fs.outputFileSync('dist/css/styles.css.map', css.sourceMap);
console.timeEnd('Minifying CSS');

//Minify and concat JS to app.js
console.time('Minifying Javascript');
var js = UglifyJS.minify(findFiles.sync('temp/js/*.js'), {outSourceMap: 'app.js.map'});
fs.outputFileSync('dist/js/app.js', js.code);
fs.outputFileSync('dist/js/app.js.map', js.map);
console.timeEnd('Minifying Javascript');

//Remove temp
console.time('Cleaning up');
findFiles.sync('**/*.html', {cwd: 'temp'}).forEach(function (file) {
	fs.copySync('temp/' + file, 'dist/' + file);
});
fs.removeSync('temp');
console.timeEnd('Cleaning up');

//Update licenses
console.time('Updating licenses');
/*exec('npm run licenses', {}, function (err) {
	err&&console.error(err);console.timeEnd('Updating licenses'); 
});
*/
