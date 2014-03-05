javascript:
var bodyTag = document.getElementsByTagName("body")[0];
var script = document.createElement("script");
script.src = "//raw2.github.com/amonks/oldskoola/master/oldskoola.js";
bodyTag.appendChild(script);
script.onload = script.onreadystatechange = function() {
	oldskoolaBackground();
	oldskoolaFonts();
};