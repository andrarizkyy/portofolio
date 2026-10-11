/**
 * Interaktivitas Portofolio Digital
 * - Menu Toggle Responsif (Mobile Hamburger)
 * - Auto-close mobile menu saat link diklik
 * - Active Navigation Highlight saat di-scroll
 * - Dynamic Year di Footer
 */

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const navItems = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');
  const currentYearSpan = document.getElementById('current-year');

  // 1. Tampilkan Tahun Berjalan di Footer
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // 2. Toggle Mobile Navigation Menu
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
      hamburger.setAttribute('aria-expanded', !isExpanded);
    });
  }

  // 3. Tutup Menu Mobile Saat Link Navigasi Diklik
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      if (hamburger && navLinks.classList.contains('active')) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // 4. ScrollSpy: Update Active Navigation Link saat Halaman Di-scroll
  window.addEventListener('scroll', () => {
    let currentSectionId = '';
    const scrollPosition = window.scrollY + 120; // offset header

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navItems.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });
});
