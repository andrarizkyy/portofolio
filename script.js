// 1. Hamburger Menu Toggle (Mobile Responsive)
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// 2. Image Carousel / Slider Logic
const track = document.getElementById('project-track');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');

// Fungsi geser ke kanan
btnNext.addEventListener('click', () => {
  const slideWidth = track.clientWidth;
  track.scrollBy({ left: slideWidth, behavior: 'smooth' });
});

// Fungsi geser ke kiri
btnPrev.addEventListener('click', () => {
  const slideWidth = track.clientWidth;
  track.scrollBy({ left: -slideWidth, behavior: 'smooth' });
});

// 3. Form Submission Prevent Default
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Pesan berhasil disimulasikan! Siap dihubungkan ke backend.');
});