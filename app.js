/* ─────────────────────────────────────────────────────────
   arthurtressol.me — language switch, scroll reveal, nav.
   ───────────────────────────────────────────────────────── */

(function () {
  'use strict';

  /* ── Language ────────────────────────────────────────── */

  var nodes = Array.prototype.slice.call(document.querySelectorAll('[data-i18n]'));
  var EN = {};
  nodes.forEach(function (node) {
    EN[node.dataset.i18n] = node.innerHTML;
  });

  var TITLES = {
    en: {
      title: 'Arthur Tressol — Senior web engineer',
      description: 'Senior web engineer in Montréal and co-founder of KaribouLab Inc. I build products end to end, with AI agents as part of the craft.'
    },
    fr: {
      title: 'Arthur Tressol — Ingénieur web senior',
      description: 'Ingénieur web senior à Montréal et cofondateur de KaribouLab Inc. Je construis des produits de bout en bout, avec des agents IA au cœur du métier.'
    }
  };

  function apply(lang) {
    var dict = lang === 'fr' ? window.I18N_FR : EN;

    nodes.forEach(function (node) {
      var value = lang === 'fr' ? dict[node.dataset.i18n] : EN[node.dataset.i18n];
      if (value) node.innerHTML = value;
    });

    document.documentElement.lang = lang;
    document.title = TITLES[lang].title;

    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', TITLES[lang].description);

    document.querySelectorAll('.lang button').forEach(function (button) {
      button.setAttribute('aria-pressed', String(button.dataset.lang === lang));
    });

    try { localStorage.setItem('lang', lang); } catch (e) { /* private mode */ }
  }

  function initialLang() {
    var fromUrl = new URLSearchParams(location.search).get('lang');
    if (fromUrl === 'fr' || fromUrl === 'en') return fromUrl;

    var stored;
    try { stored = localStorage.getItem('lang'); } catch (e) { /* private mode */ }
    if (stored === 'fr' || stored === 'en') return stored;

    return (navigator.language || 'en').toLowerCase().indexOf('fr') === 0 ? 'fr' : 'en';
  }

  document.querySelectorAll('.lang button').forEach(function (button) {
    button.addEventListener('click', function () { apply(button.dataset.lang); });
  });

  apply(initialLang());

  /* ── Nav border on scroll ────────────────────────────── */

  var nav = document.querySelector('.nav');
  var onScroll = function () {
    nav.classList.toggle('scrolled', window.scrollY > 8);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── Reveal on scroll ────────────────────────────────── */

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reduced && 'IntersectionObserver' in window) {
    var targets = document.querySelectorAll(
      '.section > .label, .section > .split, .section > .h2, .section > .prose,' +
      '.tools, .cards > .card, .products > .product, .timeline > .entry, .contact-links'
    );

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px' });

    targets.forEach(function (target, i) {
      target.classList.add('reveal');
      target.style.transitionDelay = (i % 5) * 60 + 'ms';
      observer.observe(target);
    });
  }

  /* ── Footer year ─────────────────────────────────────── */

  document.getElementById('year').textContent = new Date().getFullYear();
})();
