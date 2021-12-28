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


// When the user clicks on div, open the popup.

//Need individual functions for each popup for the following reasons:

// * To avoid all popups showing up at once (thus why using getElementsByClassName doesn't work).
// * Need to get it by Id, because you only want ONE popup to show at a time.
// * No way to generate unique ids/ loop function for every icon. Must manually write all functions.

function popup1() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

function popup2() {
    var popup = document.getElementById("myPopup2");
    popup.classList.toggle("show");
}

function popup3() {
    var popup = document.getElementById("myPopup3");
    popup.classList.toggle("show");
}

function popup4() {
    var popup = document.getElementById("myPopup4");
    popup.classList.toggle("show");
}

function popup5() {
    var popup = document.getElementById("myPopup5");
    popup.classList.toggle("show");
}

function popup6() {
    var popup = document.getElementById("myPopup6");
    popup.classList.toggle("show");
}

function popup7() {
    var popup = document.getElementById("myPopup7");
    popup.classList.toggle("show");
}

function popup8() {
    var popup = document.getElementById("myPopup8");
    popup.classList.toggle("show");
}

function popup9() {
    var popup = document.getElementById("myPopup9");
    popup.classList.toggle("show");
}

function popup10() {
    var popup = document.getElementById("myPopup10");
    popup.classList.toggle("show");
}

function popup11() {
    var popup = document.getElementById("myPopup11");
    popup.classList.toggle("show");
}

function popup12() {
    var popup = document.getElementById("myPopup12");
    popup.classList.toggle("show");
}

function popup13() {
    var popup = document.getElementById("myPopup13");
    popup.classList.toggle("show");
}

function popup14() {
    var popup = document.getElementById("myPopup14");
    popup.classList.toggle("show");
}

function popup15() {
    var popup = document.getElementById("myPopup15");
    popup.classList.toggle("show");
}

function popup16() {
    var popup = document.getElementById("myPopup16");
    popup.classList.toggle("show");
}

function popup17() {
    var popup = document.getElementById("myPopup17");
    popup.classList.toggle("show");
}

function popup18() {
    var popup = document.getElementById("myPopup18");
    popup.classList.toggle("show");
}

function popup19() {
    var popup = document.getElementById("myPopup19");
    popup.classList.toggle("show");
}