
function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    console.log('File html: ', file);
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
    }
}

$(document).ready(function() {
	
  includeHTML();
  
	var audioElement = document.createElement('audio');
    // audioElement.setAttribute('src', 'http://www.uscis.gov/files/nativedocuments/Track%2093.mp3');
    // audioElement.addEventListener("load", function() {
    // audioElement.play();
    // }, true);

    $('.play').click(function() {
    	var mp3 = $(this).attr('media');
    	audioElement.setAttribute('src', mp3);
    	audioElement.play();
    });


});