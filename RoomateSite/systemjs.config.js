// /**
 // * System configuration for Angular 2 samples
 // * Adjust as necessary for your application needs.
 // */
// (function(global) {

  // // map tells the System loader where to look for things
  // var map = {
    // 'app':                        	'app',
    // '@angular':                   	'node_modules/@angular',
	// 'rxjs':                       	'node_modules/rxjs',
	// 'ng2-charts':                 	'node_modules/ng2-charts',
	// 'npm:': 						'node_modules/'
  // };

  // // packages tells the System loader how to load when no filename and/or no extension
  // var packages = {
	  // // angular bundles
      // '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      // '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      // '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      // '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      // '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      // '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      // '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      // '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
	  
	  // 'app'                              : {main: 'main', defaultExtension: 'js'},
      // 'rxjs': 'npm:rxjs',
	  // 'ng2-charts':                 { main: 'ng2-charts.js', defaultExtension: 'js' }
  // };

  // // var packageNames = [
    // // '@angular/common',
    // // '@angular/compiler',
    // // '@angular/core',
    // // '@angular/forms',
    // // '@angular/http',
    // // '@angular/platform-browser',
    // // '@angular/platform-browser-dynamic',
    // // '@angular/router'
  // // ];

  // var paths = {
      // 'node_modules/@angular/*': 'node_modules/@angular/*/bundles'
    // };
  
  // var meta = {
	  // '@angular/*': {'format': 'cjs'}
    // };
  // // add package entries for angular packages in the form 
  // // '@angular/common': { main: 'index.js', defaultExtension: 'js' }
  // // packageNames.forEach(function(pkgName) {
    // // packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
  // // });


  // var config = {
    // map: map,
    // packages: packages,
	// paths: paths,
	// meta: meta
  // };

  // System.config(config);

// })(this);


/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

      // other libraries
      'rxjs': 'npm:rxjs',
      'ng2-charts':                 	'npm:ng2-charts',
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
	  'ng2-charts':                 { main: 'ng2-charts.js', defaultExtension: 'js' }
    }
  });
})(this);