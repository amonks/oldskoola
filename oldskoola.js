// oldskoola
// js library for making websites look like old documents
// andrew monks 2014

// bookmarklet(?) to make shit oldskool
// 1. convert images to sepia
// 2. change fonts
// 3. change background to old paper

// oldskoola();

// // include pixastic library
// var pixasticJSCode = document.createElement('script');
// pixasticJSCode.setAttribute('src', 'https://raw2.github.com/amonks/oldskoola.js/master/pixastic.sepia.js');
// document.body.appendChild(pixasticJSCode);


// function to do the thing
function oldskoola() {
	oldskoolaBackground();
	oldskoolaFonts();
	oldskoolaImages();
	// oldskoolaImages only works if pixastic is loaded...
	// setTimeout(function(){oldskoolaImages()}, 3000);
}


// // function to load a script with a callback function once it loads
// loadScript("", myPrettyCode );
var bodyTag = document.getElementsByTagName("body")[0];
var script = document.createElement("script");
script.src = "//raw2.github.com/amonks/oldskoola.js/master/pixastic.sepia.js";
bodyTag.appendChild(script);
script.onload = script.onreadystatechange = function() {
	oldskoolaImages();
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
	changeFontsTo("p", "'Pinyon Script', cursive")
	changeFontsTo("h2", "'IM Fell DW Pica', serif")
	changeFontsTo("h3", "'IM Fell DW Pica', serif")
	changeFontsTo("h4", "'IM Fell DW Pica', serif")

	// function to change an element's font
	function changeFontsTo(element, font){
		var h1Elements = document.getElementsByTagName(element);
		for(var i = 0; i < h1Elements.length; i++) {
			h1Elements[i].style.fontFamily = font;
		}
	}
}

// function to convert images to sepia
function oldskoolaImages() {

	// iterate through images
	var images = $('img')
	console.log(window.location.baseUrl());
	while(images.length > 0){
		if ( images[0] ) {
			console.log($(images[0]).attr('src').baseUrl);
			// if ($(images[0]).attr('src').baseUrl == window.location.baseUrl) {
				Pixastic.process(images[0], 'sepia');
			// } else {
			// 	console.log("Skip!");
			// }
		}
	// }
}

function baseUrl(url) {
	pathArray = url.split( '/' );
	protocol = pathArray[0];
	host = pathArray[2];
	url = protocol + '://' + host;
}
