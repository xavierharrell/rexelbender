var classie = require('classie');
var Modernizr = require('browsernizr');

(function () {
	if(Modernizr.touch){
		[].slice.call(document.querySelectorAll('section.portfolio-billboard > figure')).forEach(function(el, i){
			el.querySelector('figcaption').addEventListener('touchstart', function(e){
				e.stopPropagation();
			}, false);
			el.addEventListener('touchstart', function(e){
				classie.toggle(this, 'cs-hover');
			}, false);
		})
	}
})(window);
