const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
    const files = [
	    './dist/personal-forms/main-es5.js',
		'./dist/personal-forms/main-es2015.js',
		'./dist/personal-forms/polyfills-es5.js',
		'./dist/personal-forms/polyfills-es2015.js',
		'./dist/personal-forms/runtime-es5.js',
		'./dist/personal-forms/runtime-es2015.js',
        './dist/personal-forms/styles-es5.js',
        './dist/personal-forms/styles-es2015.js',
        './dist/personal-forms/vendor-es5.js',
        './dist/personal-forms/vendor-es2015.js'
    ]

    await fs.ensureDir('elements')

    await concat(files, 'elements/fluid-element.js')
}) ()