console.log("Test");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const square = entry.target.querySelector('.ufo');
        const text = entry.target.querySelector(".fading-effect")

        if (entry.isIntersecting) {
            square.classList.add('ufo-animation');
            text.classList.add('fading-effect-animation');
            return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        square.classList.remove('ufo-animation');
        text.classList.remove('fading-effect-animation');
    });
});

observer.observe(document.querySelector('.skills-title'));




$(document).ready(function(){
    // Add scrollspy to <body>
    $('body').scrollspy({target: ".my-navbar", offset: 50});

    // Add smooth scrolling on all links inside the navbar
    $("#myNavbar a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1500, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }  // End if
    });
});