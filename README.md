# oldskoola

## js library + bookmarklet for making websites look like old documents

oldskoola can change the page background to an old paper texture, change fonts to oldish looking google fonts, convert all the images on a page to sepia, or do all of the above.

## Use it as a bookmarklet!

this only works in safari cuz chrome won't load javascript directly from github (which uses a text mime type)

add the following text as a bookmark

	javascript:var a=document.createElement("script");a.setAttribute("src","https://raw2.github.com/amonks/oldskoola/master/oldskoola.js");document.body.appendChild(a);

## Use it in your own sites!

you need to include [oldskoola.js](https://raw2.github.com/amonks/oldskoola/master/oldskoola.js), wait until `pixastic` loads, and then run `oldskoola();`

### include it

add the following to the bottom of your `<body>`:

	<script src="http://monks.co/oldskoola.js"></script>

### call it

you now have 4 cool new functions:

1. 	`oldskoolaBackground();`: function to change background to old paper texture

2. 	`oldskoolaFonts();`: function to change fonts to oldish looking google fonts

3. 	`oldskoolaImages();`: function to convert images to sepia

4. 	`oldskoola();`: function to do all of the above

note that you can only call `oldskoolaImages();` or `oldskoola();` once the pixastic.sepia.js library has successfuly loaded
