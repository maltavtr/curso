
/*ORÇAMENTO*/

function openOrcamentoForm() {
    document.getElementById("orcamentoForm").style.display = "block";
}

function closeOrcamentoForm() {
    document.getElementById("orcamentoForm").style.display = "none";
}
/*FIM ORÇAMENTO*/


/*CONTATO*/
function openContactForm() {
    document.getElementById("contactForm").style.display = "block";
}

function closeContactForm() {
    document.getElementById("contactForm").style.display = "none";
}
/*FIM CONTATO*/

/*PORTFÓLIO*/
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-images img');
const totalSlides = slides.length;

function updateSlidePosition() {
    const carouselWidth = document.querySelector('.carousel').clientWidth;
    const newTransformValue = -carouselWidth * currentSlide;
    document.querySelector('.carousel-images').style.transform = `translateX(${newTransformValue}px)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlidePosition();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
}

function openCarousel() {
    document.getElementById("carouselModal").style.display = "flex";
    currentSlide = 0; // Reset to the first slide when opening
    updateSlidePosition();
}

function closeCarousel() {
    document.getElementById("carouselModal").style.display = "none";
}

/*FIM DO PORTFÓLIO*/



/*BOTÃO DE ROLAR*/
window.onscroll = function() {
    var backToTopButton = document.getElementById("backToTop");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};