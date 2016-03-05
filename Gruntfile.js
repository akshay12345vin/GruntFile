/*
Project Name : Perfect grunt file for your static site
Author : Akshay Vinchurkar
*/
module.exports = function(grunt){

	grunt.initConfig({
	  // concatenation task for all css and js files
	  concat: {
	    js: {
	      src: ['js/jquery.min.js','js/bootstrap.min.js', 'js/parsley.js', 'js/waypoint.js', 'js/typed.min.js','js/jquery.backTop.min.js','js/jquery.waypoints.js', 'js/script.js'],
	      dest: 'dist/js/script.js',
	    },
	    css: {
	      src: ['css/animate.min.css', 'css/backtop.css', 'css/bootstrap.min.css', 'css/style.css'],
	      dest: 'dist/css/style.css',
	    }
	  },

	  // html minification task
	  htmlmin: {                                     
	    dist: {                                     
	      options: {                                
	        removeComments: true,
	        collapseWhitespace: true
	      },
	      files: {                                   
	        'dist/index.php': 'index.php',
	        'dist/success.php': 'success.php'
	      }
	    }
	  },

	  // copy the bootstrap font folder in dist location
	  copy: {
		  main: {
		    expand: true,
		    src: 'fonts/*',
		    dest: 'dist/',
		  }
	  },

	  //image minification task
	  imagemin: {                          
	    static: {                          
	      options: {                       
	        optimizationLevel: 3
	      },
	      files: {                         
	        'dist/img/fevicon.png': 'img/fevicon.png',
	        'dist/img/imac.png': 'img/imac.png',
	        'dist/img/iphone.png': 'img/iphone.png',
	        'dist/img/logo.png': 'img/logo.png',
	        'dist/img/macbook.png': 'img/macbook.png',
	        'dist/img/tablet.png': 'img/tablet.png',
	        'dist/img/tablet2.png': 'img/tablet2.png',
	        'dist/img/tablets.png': 'img/tablets.png',
	        'dist/img/uparr-48-b.png': 'img/uparr-48-b.png',
	        'dist/img/uparr-48-w.png': 'img/uparr-48-w.png'
	      }
	   }
	 },


});
	
	
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-imagemin');

	grunt.registerTask('default', ['concat', 'htmlmin', 'copy', 'imagemin']);

};