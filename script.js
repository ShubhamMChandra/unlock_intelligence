/* ═══════════════════════════════════════════════════════
   UNLOCK INTELLIGENCE — SCRIPT
   ═══════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ─── NAV SCROLL BEHAVIOUR ────────────────────────── */
  const nav = document.getElementById('nav');

  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 100);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ─── SMOOTH SCROLL ───────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = parseInt(getComputedStyle(document.documentElement)
        .getPropertyValue('--nav-h'), 10) || 72;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      // Close mobile menu if open
      closeMobileMenu();
    });
  });

  /* ─── MOBILE NAV ──────────────────────────────────── */
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  function closeMobileMenu() {
    if (!hamburger) return;
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
      if (isOpen) {
        closeMobileMenu();
      } else {
        hamburger.setAttribute('aria-expanded', 'true');
        hamburger.classList.add('active');
        mobileMenu.classList.add('open');
        mobileMenu.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      }
    });
  }

  /* ─── INTERSECTION OBSERVER REVEAL ───────────────── */
  const revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = el.dataset.delay ? parseInt(el.dataset.delay, 10) : 0;
          el.style.setProperty('--reveal-delay', delay + 'ms');
          el.classList.add('is-visible');
          revealObserver.unobserve(el);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('[data-reveal]').forEach(function (el) {
    revealObserver.observe(el);
  });

  /* ─── ACCORDION ───────────────────────────────────── */
  document.querySelectorAll('.acc-trigger').forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      const body = this.nextElementSibling;
      const isOpen = this.getAttribute('aria-expanded') === 'true';

      // Close all siblings in same accordion group
      const accordion = this.closest('.accordion');
      if (accordion) {
        accordion.querySelectorAll('.acc-trigger').forEach(function (t) {
          if (t !== trigger) {
            t.setAttribute('aria-expanded', 'false');
            t.nextElementSibling.style.maxHeight = null;
          }
        });
      }

      if (isOpen) {
        this.setAttribute('aria-expanded', 'false');
        body.style.maxHeight = null;
      } else {
        this.setAttribute('aria-expanded', 'true');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });

  /* ─── PARALLAX ORBS (subtle) ──────────────────────── */
  var ticking = false;

  function moveOrbs() {
    var scrollY = window.scrollY;
    var orbs = document.querySelectorAll('.hero .orb');
    orbs.forEach(function (orb, i) {
      var speed = i === 0 ? 0.08 : -0.05;
      orb.style.transform = 'translateY(' + (scrollY * speed) + 'px)';
    });
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(moveOrbs);
      ticking = true;
    }
  }, { passive: true });

  /* ─── CONTACT FORM HANDLER ───────────────────────── */
  var contactForm = document.getElementById('contact-form');
  var formSuccess = document.getElementById('form-success');
  var formError = document.getElementById('form-error');
  var submitBtn = document.getElementById('submit-btn');

  if (contactForm) {
    // Pre-select interest dropdown from query param (?type=corporate)
    var params = new URLSearchParams(window.location.search);
    var typeParam = params.get('type');
    if (typeParam) {
      var interestSelect = document.getElementById('interest');
      if (interestSelect) {
        var optionMap = {
          'individual': 'individual',
          'corporate': 'corporate',
          'question': 'question'
        };
        if (optionMap[typeParam]) {
          interestSelect.value = optionMap[typeParam];
        }
      }
    }

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Basic validation
      var name = document.getElementById('name');
      var email = document.getElementById('email');
      var isValid = true;

      if (!name.value.trim()) {
        name.classList.add('input-error');
        isValid = false;
      } else {
        name.classList.remove('input-error');
      }

      if (!email.value.trim() || !email.value.includes('@')) {
        email.classList.add('input-error');
        isValid = false;
      } else {
        email.classList.remove('input-error');
      }

      if (!isValid) return;

      // Disable button
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending…';

      var formData = new FormData(contactForm);

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          if (data.success) {
            contactForm.style.display = 'none';
            formSuccess.style.display = 'block';
          } else {
            throw new Error('Submission failed');
          }
        })
        .catch(function () {
          // Fallback: open mailto with form data pre-filled
          var subject = encodeURIComponent('New enquiry from Unlock Intelligence');
          var body = encodeURIComponent(
            'Name: ' + (formData.get('name') || '') + '\n' +
            'Email: ' + (formData.get('email') || '') + '\n' +
            'Company: ' + (formData.get('company') || '') + '\n' +
            'Interest: ' + (formData.get('interest') || '') + '\n\n' +
            'Message:\n' + (formData.get('message') || '')
          );
          window.location.href = 'mailto:hello@unlockintelligence.co?subject=' + subject + '&body=' + body;

          // Also show error state
          contactForm.style.display = 'none';
          formError.style.display = 'block';
        })
        .finally(function () {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Send Message →';
        });
    });

    // Remove error styling on input
    contactForm.querySelectorAll('input, textarea, select').forEach(function (input) {
      input.addEventListener('input', function () {
        this.classList.remove('input-error');
      });
    });
  }

})();
