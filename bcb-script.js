$( document ).ready(function() {
    let elements = [];
    let previous = 0;
    let bkg_img = "";
    
    //iterates through each carousel item, gets the 'js_image' attribute and pushes a div with background image (js_image) to the elements array
    $(".carousel-inner .carousel-item").each(function(index) {
        // get the js_image attribute from the carousel items
        let imageUrl = $(this).attr("js_image"); 
        bkg_img = imageUrl;      
        let div = '<div id="bgslide-' + index + '" class="bgslide active" style="background-image:url(' + imageUrl + ')"></div>';
        elements.push(div); // pushes div to the end of the elements array 
    });
    
    // add a div to the top of the body element
    $('body').prepend('<div id="bgslide-0" class="bgslide active"></div>'); 
    // create a div behind the previous div with 
    $('#bgslide-0').before('<div id="bgslide-bkg" class="bgslide active" style="background-image:url(' + bkg_img + ')"></div>'); 
    
    /* #homepageCarousel is main carousel, when carousel slide.bs.carousel event is triggered, adds a new slide slide div 
    behind previous two with active class set and removes active class from topmost background div - css transition causes it to fade out*/
    $('#homepageCarousel').on('slide.bs.carousel', function (event) {
        console.log('#bgslide-' + event.from);
        $('#bgslide-' + event.from).before(elements[event.to]);
        $('#bgslide-' + event.from).removeClass('active');
        
        // removes top inactive bkg div after a 1200 millisecond delay - giving time for the div to fade out
        setTimeout(function() {
            $('#bgslide-' + event.from).remove();
        }, 1200); // sets the amount of time in milliseconds to wait before 
    })
});
