const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = false; // Auto scroll
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
    // Get current class
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');
    // Check for next slide
    if (current.nextElementSibling) {
        // Add current to next sibling
        current.nextElementSibling.classList.add('current');
    } else {
        // Add current to start
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
    // Get current class
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');
    // Check for prev slide
    if (current.previousElementSibling) {
        // Add current to prev sibling
        current.previousElementSibling.classList.add('current');
    } else {
        // Add current to last
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
};

// Button events
next.addEventListener('click', e => {
    nextSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

prev.addEventListener('click', e => {
    prevSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

// Auto slide
if (auto) {
    // Run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime);
}




// nav
$(function(){
    
    $(document).ready(function(){
        $('.toggle').click(function(){
            $('.toggle').toggleClass('active')
            $('.arosmenu').toggleClass('active')
        })
    })
    
    });


    // FIXED GALLERY SCROLL

window.onscroll = function() {myFunction()};

// Get the section-links
var links = document.getElementById("section-links");

// Get the offset position of the navbar
var sticky = links.offsetTop;

// Add the sticky class to the links when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    links.classList.add("sticky");
  } else {
    links.classList.remove("sticky");
  }
}

// document.getElementById("clickme").addEventListener("click", function() {
//     document.getElementById("lightbox").className = "open";
//   });
  
//   document.getElementById("close").addEventListener("click", function() {
//     document.getElementById("lightbox").className = "";
//   });
  
//   document.getElementById("lightbox").addEventListener("click", function(e) {
//     if (e.target.id == "lightbox") {
//       document.getElementById("lightbox").className = "";
//     }
//   });

  $(function(){

    var $overlay = $('<div id="overlay"></div>');
    var $wrap = $('<div class="wrap"></div>');
    var $image = $('<img>');
    var $close = $('<a href="#" class="close">×</a>');
    
    $overlay.append($wrap);
    $wrap.append($image);
    $wrap.append($close);
    $('body').append($overlay);
    
    //klik på billederne
    
    $('.main-content').on('click', 'a.gallery', function(event){
        event.preventDefault();
        
        var cup = $(this).attr('href');
        $image.attr('src', cup);
        
        $overlay.show();
    });
    
    //knap der lukker billede
    
    $close.click(function(){
        $overlay.hide();
        return false; 
    });
    
    
        
    
    });