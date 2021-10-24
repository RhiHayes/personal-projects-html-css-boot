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