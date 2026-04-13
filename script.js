(() => {
  'use strict';

  // --- Language Toggle ---
  const DEFAULT_LANG = 'es';

  function getLang() {
    return localStorage.getItem('lang') || DEFAULT_LANG;
  }

  function setLang(lang) {
    localStorage.setItem('lang', lang);
    applyLang(lang);
    updateToggle(lang);
  }

  function applyLang(lang) {
    document.querySelectorAll('[data-es]').forEach(el => {
      const text = el.getAttribute(`data-${lang}`);
      if (text) el.textContent = text;
    });

    document.querySelectorAll('[data-es-placeholder]').forEach(el => {
      const ph = el.getAttribute(`data-${lang}-placeholder`);
      if (ph) el.placeholder = ph;
    });

    document.documentElement.lang = lang;
  }

  function updateToggle(lang) {
    document.querySelectorAll('.lang-option').forEach(el => {
      el.classList.toggle('active', el.dataset.lang === lang);
    });
  }

  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      const current = getLang();
      setLang(current === 'es' ? 'en' : 'es');
    });
  }

  // Apply saved language on load
  const savedLang = getLang();
  if (savedLang !== DEFAULT_LANG) {
    applyLang(savedLang);
    updateToggle(savedLang);
  }

  // --- Sticky Nav Border ---
  const nav = document.getElementById('nav');
  function handleScroll() {
    if (window.scrollY > 10) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // --- Mobile Menu ---
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.querySelector('.nav-links');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('open');
      navLinks.classList.toggle('open');
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  // --- Intersection Observer for Section Tags ---
  const sectionTags = document.querySelectorAll('.section-tag');
  if (sectionTags.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    sectionTags.forEach(tag => observer.observe(tag));
  }

  // --- Smooth scroll for anchor links (fallback) ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
})();
