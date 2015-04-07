// Browserify entry point for the page.js bundle (yay JavaScript!)

var $ = require('jquery');
var nav = require('./nav.js');
var classie = require('classie');
var picturefill = require('picturefill');
var Modernizr = require('browsernizr');




document.createElement( "picture" );