// Browserify entry point for the page.js bundle (yay JavaScript!)

var $ = require('jquery');
var _ = require('underscore');
var nav = require('./nav.js');
var classie = require('classie');
var picturefill = require('picturefill');
var snap = require('snap');

(function(){
	var getBlurb = document.getElementById('blurb');
	var winWidth = window.innerWidth;

	if (winWidth <= 1450) {
		classie.toggle(getBlurb, 'hide');
	};

})(window);