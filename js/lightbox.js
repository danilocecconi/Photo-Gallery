//variables
var $overlay = $('<div id="overlay"></div>');
var $img = $('<img id="lightboximg">');
var $caption = $('<p id="lightboxcap"></p> ');
var $button = $(":button"); // show arrow
var $close = $(".close");
var imagearray = ["img/Photo/01.jpg", "img/Photo/02.jpg", "img/Photo/03.jpg", "img/Photo/04.jpg", "img/Photo/05.jpg", "img/Photo/06.jpg", "img/Photo/07.jpg", "img/Photo/08.jpg", "img/Photo/09.jpg", "img/Photo/10.jpg", "img/Photo/11.jpg", "img/Photo/12.jpg"];
var imageindex = 0;
var captionArray = ["I love hay bales. Took this snap on a drive through the countryside past some straw fields", "The lake was so calm today. We had a great view of the snow on the mountains from here.", "I hiked to the top of the mountain and got this picture of the canyon and trees below.", "It was amazing to see an iceberg up close, it was so cold but didn’t snow today.", "The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons.", "Fall is coming, I love when the leaves on the trees start to change color.", "I drove past this plantation yesterday, everything is so green!", "My summer vacation to the Oregon Coast. I love the sandy dunes!", "Lane We enjoyed a quiet stroll down this countryside lane.", "Sunset at the coast! The sky turned a lovely shade of orange.", "I did a tour of a cave today and the view of the landscape below was breathtaking.", "I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in."];

// appending elements
$overlay.append($img);
$overlay.append($caption);
$overlay.append($button);
$("body").append($overlay);

//function if you click the link
$("#galleria a").click(function(event) {
	event.preventDefault(); //prevent default behaviour
	
	// show the overlay and hide the footer
	$overlay.show();
	$("footer").hide();
	
	// shows the image
	var href = $(this).attr("href");
	$img.attr("src", href);
	
	//shows the caption
	var captionText = $(this).children("img").attr("alt");
	$caption.text(captionText);
	
});

//close the overlay

$close.click(function() {
	$overlay.hide();
});

//the two arrows

$(".prev").click(function() {
	
	imageindex = imageindex - 1;
	
	if (imageindex < 0) {
		imageindex = 11;
	}
	$img.attr("src", imagearray[imageindex]);
	$("#lightboxcap").text(captionArray[imageindex]);
});

$(".next").click(function() {
	imageindex = imageindex + 1;
	
	if (imageindex > 6) {
		imageindex = 0;
	}
	$img.attr("src", imagearray[imageindex]);
	$("#lightboxcap").text(captionArray[imageindex]);
});