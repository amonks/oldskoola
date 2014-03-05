// oldskoola
// js library for making websites look like old documents
// andrew monks 2014

// bookmarklet(?) to make shit oldskool
// 1. convert images to sepia
// 2. change fonts
// 3. change background to old paper

// oldskoola();

// function to do the thing
function oldskoola() {

	// // function to load a script with a callback function once it loads
	// loadScript("", myPrettyCode );
	var bodyTag = document.getElementsByTagName("body")[0];
	var pixasticScript = document.createElement("script");
	pixasticScript.src = "//raw2.github.com/amonks/oldskoola.js/master/pixastic.sepia.js";
	bodyTag.appendChild(pixasticScript);
	pixasticScript.onload = pixasticScript.onreadystatechange = function() {
		oldskoolaBackground();
		oldskoolaFonts();
		oldskoolaImages();
	};
};

// function to change background to old paper texture
function oldskoolaBackground() {
	document.body.style.backgroundImage="url('https://raw2.github.com/amonks/oldskoola.js/master/paper.jpg')";
};

// function to change fonts to oldish looking google fonts
function oldskoolaFonts() {
	// js pasted from google fonts:
		WebFontConfig = {
			google: {
				families: ['IM+Fell+DW+Pica:400,400italic:latin', 'Pinyon+Script::latin', 'Germania+One::latin', 'Miltonian::latin', 'Fruktur::latin']
			}
		};
		(function () {
			var wf = document.createElement('script');
			wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
				'://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
			wf.type = 'text/javascript';
			wf.async = 'true';
			var s = document.getElementsByTagName('script')[0];
			s.parentNode.insertBefore(wf, s);
		})();

	// change fonts for elements
	changeFontsTo("h1", "'Fruktur', serif")
	changeFontsTo("body", "'Pinyon Script', cursive")
	changeFontsTo("p", "'Pinyon Script', cursive, 2em")
	changeFontsTo("h2", "'IM Fell DW Pica', serif")
	changeFontsTo("h3", "'IM Fell DW Pica', serif")
	changeFontsTo("h4", "'IM Fell DW Pica', serif")

	// function to change an element's font
	function changeFontsTo(element, font){
		var h1Elements = document.getElementsByTagName(element);
		for(var i = 0; i < h1Elements.length; i++) {
			h1Elements[i].style.fontFamily = font;
		};
	};
};

// function to convert images to sepia
function oldskoolaImages() {

	// iterate through images.
	// When Pixastic processes images[i], it's removed from the nodelist, and images[i+1] becomes images[i], etc.
	// This means I could loop through images[0], except that if Pixastic is called on a cross-domain image, it doesn't work, and images[0] doesn't change. The loop loops infinitely.
	// By keeping track of Pixastic's failures in `i`, I can call Pixastic only on same-domain images.
	var images = document.getElementsByTagName('img');
	var i = 0;
	while(images.length > i){
		if ( images[i] ) {
			console.log(images[i].src);
			if ( baseUrl( images[i].src ) == baseUrl(window.location.href) ) {
				Pixastic.process(images[i], 'sepia');
			} else {
				console.log("Skip " + baseUrl( images[i].src ));
				i++;
			};
		};
	};
};

function baseUrl(url) {
	pathArray = url.split( '/' );
	protocol = pathArray[0];
	host = pathArray[2];
	url = protocol + '://' + host;
	return url
};
