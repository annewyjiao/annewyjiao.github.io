

// button scroll to code section
function scroll2code() {
  // Get the target element using the ID
  const targetElement = document.getElementById("program");

  // Use smooth scrolling to scroll to the target element
  targetElement.scrollIntoView({ behavior: 'smooth' });
}

// button scroll to art section
function scroll2art() {
  // Get the target element using the ID
  const targetElement = document.getElementById("arts");

  // Use smooth scrolling to scroll to the target element
  targetElement.scrollIntoView({ behavior: 'smooth' });
}



let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


// // go back to top button 
// let topButton = document.getElementById("topBtn");

// window.onscroll = function () {
//     scrollFunction();
// };

// function scrollFunction() {
//     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//         topButton.style.display = "block";
//     } else {
//         topButton.style.display = "none";
//     }
// }

// function backToTop() {
//     document.body.scrollTop = 0; // For Safari
//     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
// }


