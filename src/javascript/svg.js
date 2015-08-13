var snap = require('snapsvg');

window.onload = function(){
	var s = Snap('#lightBulb'),
	bulb = s.selectAll('#bulb'),
	filament = s.select('#filament'),
	streaks = s.select('#streaks'),
	threads = s.selectAll('#threads'),
	bigGroup = s.group(bulb, filament)
// var bulbLength = bulb.getTotalLength();

// bulb.attr({
// 	'strokeDasharray': bulbLength + ' ' + bulbLength,
// 	'strokeDashoffset': bulbLength
// });

// bulb.animate({
// 	'strokeDashoffset': 0
// }, 1000, mina.easeOut);

function Drawing( svgString, transformString, timeBetweenDraws ) {
    this.fragment = Snap.parse( svgString );
    this.pathArray = this.fragment.selectAll('path');
    this.group = s.g().transform( transformString ).drag();
    this.timeBetweenDraws = timeBetweenDraws;
};

Drawing.prototype.init = function( svgString, transformString ) {
      this.group.clear();
      this.currentPathIndex = 0;

};

Drawing.prototype.endReached = function() {
    if( this.currentPathIndex >= this.pathArray.length ) {
        return true;
    };
};

Drawing.prototype.callOnFinished = function() {
}

Drawing.prototype.initDraw = function() {
    this.init();
    this.draw();
};

Drawing.prototype.quickDraw = function() {
    this.init();
    this.timeBetweenDraws = 0;
    this.draw();
};

Drawing.prototype.draw = function() {         // this is the main animation bit
    if( this.endReached() ) {
        if( this.callOnFinished ) {
            this.callOnFinished();
            return
        };
    };
    var myPath = this.pathArray[ this.currentPathIndex ] ;

    this.leng = myPath.getTotalLength();

    this.group.append( myPath );

     myPath.attr({
       "stroke-dasharray": this.leng + " " + this.leng,
       "stroke-dashoffset": this.leng
     });

     this.currentPathIndex++;

     myPath.animate({"stroke-dashoffset": 0}, this.timeBetweenDraws, mina.easeout, this.draw.bind( this ) );

};

var myDrawing = new Drawing(filament, 's1', 800);
var myDrawing2 = new Drawing(bulb, 's1', 1000);
myDrawing.initDraw();
myDrawing.callOnFinished = function() { myDrawing2.initDraw() };

console.log(myDrawing);

}