# Gulpstrap
Gulpstrap provides a clean starter kit with some basic Gulp tasks for your application including some common CSS, JavaScript and even testing tools!

- [Features](#features)
- [What's included](#whatsincluded)
- [Available Gulp Commands](#gulpcommands)
- [Installation](#installation)
- [Setup your project](#setup)
- [Configuration](@configuration)
- [Bugs and feature requests](#bugsandfeatures)

<a name="features"></a>
## Features
* Copying Files
* Compress Images
* Compiling Less
* Compiling Sass/Compass
* Hinting Your Javascript
* Combine Your Javascript
* Watching Files For Changes

### Aditional features
* Minification CSS / Javascript
* Autoprefixer CSS
* Apache HTTP server boilerplate configs
* Runs a sequence of gulp tasks
* Notification

<a name="whatsincluded"></a>
## What's included

Within the download you'll find the following directories and files. You'll see something like this:

```
gulpstrap/
├── gulp/
│   ├── tasks/
│   │   ├── clean.js
│   │   ├── copy.js
│   │   ├── default.js
│   │   ├── images.js
│   │   ├── less.js
│   │   ├── lint.js
│   │   ├── sass.js
│   │   ├── scripts.js
│   │   ├── watch.js
│   ├── config.js
├── gulpfile.js
└── package.json
```
<a name="gulpcommands"></a>
### Available Gulp Commands
* `gulp` — Default task
* `gulp copy` — Copying files
* `gulp clean` — Cleaning output
* `gulp images` — Lossless compression of PNG, JPEG, GIF and SVG images
* `gulp less` — Compile LESS to CSS
* `gulp sass` — Compile Sass to CSS
* `gulp lint` — Hinting your JavaScript
* `gulp scripts` — Combine / Minify your JavaScript
* `gulp watch` - Watching assets when file changes are made

<a name="installation"></a>
## Installation
**Prerequisites**
[Node.js](http://nodejs.org/download/), [NPM](https://www.npmjs.org/) & [Gulp](http://gulpjs.com/) are the absolute requirements. If you have any trouble installing it, refer to the documentation for help.

Clone the git repo - `git clone https://github.com/yasinkocak/gulpstrap.git` - or [download it](https://github.com/yasinkocak/gulpstrap/archive/master.zip) and then rename the directory to the name of your project.

**Install NPM dependencies**
``
npm install
``
<a name="setup"></a>
### Setup your project
For this example, our project files will be contained in a folder named 
`app` — the location of pre-processed HTML source files and folders
Our `app` folder contains the following sub-folders:

* `assets`
  * `images` — uncompressed images
  * `scripts` — multiple pre-processed script files
  * `sass` — multiple pre-processed Sass files

> If you want Less instead of Sass
> create `less` directory in `assets`

<a name="configuration"></a>
### Configuration
Edit `gulp/config.js` to set up your project.

Define your build and src directory:
```php
var dest = './public',
	src = './app';
```

There are default objects

* `tasks` — Which tasks will be fired when `gulp` is executed
* `watchers` — Which will be watch when `gulp watch` is executed
* `assets` — Locations and options of scripts, styles and images
* `duplicate` — Which files will be copied when `gulp copy` is executed
* `lint` — Which JavaScripts will be hinting when `gulp lint` is executed
* `clean` — Which directories will be clean when `gulp clean` is executed
```php
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
```

<a name="bugsandfeatures"></a>
## Bugs and feature requests

Have a bug or a feature request? [please open a new issue](https://github.com/yasinkocak/gulpstrap/issues).

## Creator

**Yasin Kocak**

- <https://github.com/yasinkocak>


## Copyright and license

Code and documentation copyright 2014. Code released under [the MIT license](LICENSE).
