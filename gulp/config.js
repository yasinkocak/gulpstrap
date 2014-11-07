// Config.js
var dest = './public',
	src = './app';

module.exports = {

	// Which tasks will be fired when default task is executed?
	tasks: [],

	// Which will be watch?
	watchers: {},

	// Scripts and styles.
	assets: { css: {}, js: {}, images: {} },

	// Files to be copied
	duplicate: [],

	// Hinting Your Javascript
	lint: {},

	// Wich directories will be clean?
	clean: [],

	// The default root output directory.
	baseDir: dest
};