var $ = require('jquery');
var nav = require('./nav.js');
var classie = require('classie');
var picturefill = require('picturefill');
var Modernizr = require('browsernizr');
var fluidvids = require('fluidvids.js')();
var echojs = require('echojs');


document.createElement( "picture" );

fluidvids.init({
	selector: ['iframe', 'object'],
	players: ['www.youtube.com', 'player.vimeo.com']
});

echo.init({
	offset: 100
});