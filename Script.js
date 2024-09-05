// Example: Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // FAQ Toggle Functionality
  const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;

    // Check the computed style of the answer to determine its visibility
    if (getComputedStyle(answer).display === 'block') {
      answer.style.display = 'none';  // Hide the answer
    } else {
      // Hide all other answers
      document.querySelectorAll('.faq-answer').forEach(otherAnswer => {
        otherAnswer.style.display = 'none';
      });
      // Show the clicked answer
      answer.style.display = 'block';
    }
  });
});
// JavaScript to make the slider rotate
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
  // Set the transform property to slide the content
  const slider = document.querySelector('.slider');
  slider.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides; // Loop back to first slide
  showSlide(currentSlide);
}

// Automatically switch slides every 5 seconds
setInterval(nextSlide, 5000);

// Optional: Manual controls for slider
document.querySelectorAll('.slider-controls button').forEach((button, index) => {
  button.addEventListener('click', () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});

  

// Search FAQ Functionality
// const searchInput = document.getElementById('faqSearch');
// searchInput.addEventListener('input', () => {
//   const query = searchInput.value.toLowerCase();
//   const faqItems = document.querySelectorAll('.faq-item');
  
//   faqItems.forEach(item => {
//     const question = item.querySelector('.faq-question').textContent.toLowerCase();
//     if (question.includes(query)) {
//       item.style.display = 'block';
//     } else {
//       item.style.display = 'none';
//     }
//   });
// });


  