function toggleParagraph(id) {
    const paragraph = document.getElementById(id);
    const arrow = document.getElementById('arrow-down');

    paragraph.classList.toggle('hidden');
    paragraph.classList.toggle('show-more');
    paragraph.classList.toggle('show-less');

    if (paragraph.classList.contains('hidden')) {
        arrow.style.transform = 'rotate(0deg)';
    } else {
        arrow.style.transform = 'rotate(180deg)';
    }
}
function scrollToAbout() {
    const aboutSection = document.getElementById('ABOUT');
    const windowHeight = window.innerHeight;
    const sectionHeight = aboutSection.offsetHeight;

  
    const scrollToY = aboutSection.offsetTop - (windowHeight - sectionHeight) / 2;

    
    window.scroll({ top: scrollToY, behavior: 'smooth' });
}


const aboutLink = document.querySelector('a[href="#About"]');
aboutLink.addEventListener('click', function (event) {
    event.preventDefault();
    scrollToAbout();
});
 // Function to handle smooth scrolling to the middle of the section
 function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const windowHeight = window.innerHeight;
    const sectionHeight = section.offsetHeight;

    // Calculate the position to scroll to the middle of the section
    const scrollToY = section.offsetTop - (windowHeight - sectionHeight) / 2;

    // Scroll to the calculated position
    window.scroll({ top: scrollToY, behavior: 'smooth' });
}


let prevScrollPos = window.pageYOffset;
const header = document.querySelector('.header');

window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        // Scrolling up, show the header
        header.style.top = '0';
    } else {
        // Scrolling down, hide the header
        header.style.top = `-${header.offsetHeight}px`;
    }

    prevScrollPos = currentScrollPos;
};
// Wrap your code inside the DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function () {
    // Function to handle smooth scrolling to the middle of the section
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // Attach the function to the "ABOUT" link click event
    const aboutLink = document.querySelector('a[href="#About"]');
    aboutLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior
        scrollToSection('ABOUT');
    });

    // Attach the function to the "PRODUCTS" link click event
    const productsLink = document.querySelector('a[href="#Products"]');
    productsLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior
        scrollToSection('Products');
    });
});