$(document).ready(function() {
	

	var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'http://www.uscis.gov/files/nativedocuments/Track%2093.mp3');
    audioElement.addEventListener("load", function() {
    audioElement.play();
    }, true);

    $('.play').click(function() {
    	var mp3 = $(this).attr('media');
    	audioElement.setAttribute('src', mp3);
    	audioElement.play();
    });
    $('.pause').click(function() {
    	audioElement.pause();
    });


    $( ".play" ).each(function() {
      $( this ).addClass( "foo" );

      var mp3 = $(this).attr('media');

        audioElement.setAttribute('src', mp3);
        audioElement.play();
    });

});