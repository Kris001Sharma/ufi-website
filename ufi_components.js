/* ============================================================
   UFI SHARED NAV + FOOTER COMPONENT
   Written once, loaded by every page. Edit markup/links here —
   every page picks up the change on next load.

   Each page provides two empty mount elements:
     <header id="site-header" class="at-top"></header>   (omit "at-top" on pages with no hero)
     <footer id="site-footer"></footer>
    ...and sets <body data-page="KEY"> to highlight the matching nav item
    (KEY is one of: home, products, projects, about, contact —
    set data-page="home" on the homepage).

   See ux-patterns.md #6 for the header-state behavior this also drives.
   ============================================================ */

(function () {

  /* ---- Link map: the ONLY place hrefs are defined.
     Currently relative filenames, correct for opening these pages directly
     or previewing them as-is. Switch every value here to a clean production
     URL (e.g. store: '/store-furniture/') at deploy time — one edit here,
     not a find-replace across twelve files. ---- */
  var UFI_LINKS = {
    home: 'index.html',
    store: 'UFI_store_furniture.html',
    school: 'UFI_school_furniture.html',
    hospital: 'UFI_hospital_furniture.html',
    office: 'UFI_office_furniture.html',
    homeFurniture: 'UFI_home_furniture.html',
    manufacturing: 'UFI_manufacturing.html',
    projects: 'UFI_projects.html',
    about: 'UFI_about.html',
    contact: 'UFI_contact.html'
  };

  var NAV_ITEMS = [
    { key: 'home', label: 'Home', href: UFI_LINKS.home },
    { key: 'products', label: 'Products', href: UFI_LINKS.home + '#collage' },
    { key: 'projects', label: 'Projects', href: UFI_LINKS.projects },
    { key: 'about', label: 'About', href: UFI_LINKS.about },
    { key: 'contact', label: 'Contact', href: UFI_LINKS.contact }
  ];

  function escAttr(s) { return String(s).replace(/"/g, '&quot;'); }

  function navHTML() {
    var links = NAV_ITEMS.map(function (item) {
      return '<li><a href="' + escAttr(item.href) + '" data-nav-key="' + item.key + '">' + item.label + '</a></li>';
    }).join('');
    return ''
      + '<nav>'
      + '<a href="' + escAttr(UFI_LINKS.home) + '" class="brand">'
      + '<img src="ufi_logo_nav.png" alt="Universal Furniture Industries logo">'
      + '<span>UNIVERSAL FURNITURE&nbsp;INDUSTRIES</span>'
      + '</a>'
      + '<ul class="nav-links" id="navLinks">' + links + '</ul>'
      + '<div class="nav-right">'
      + '<a href="' + escAttr(UFI_LINKS.contact) + '" class="btn btn-solid nav-cta">Get a Quote</a>'
      + '<button class="hamburger" id="hamburgerBtn" aria-label="Open menu" aria-expanded="false" aria-controls="navLinks">'
      + '<span></span><span></span><span></span>'
      + '</button>'
      + '</div>'
      + '</nav>';
  }

  function footerCol(title, items) {
    var lis = items.map(function (it) {
      return '<li><a href="' + escAttr(it.href) + '">' + it.label + '</a></li>';
    }).join('');
    return '<div class="footer-col"><h4>' + title + '</h4><ul>' + lis + '</ul></div>';
  }

  function footerHTML() {
    return ''
      + '<div class="wrap">'
      + '<div class="footer-top">'
      + '<div class="footer-brand">'
      + '<img src="ufi_logo_lg.png" alt="Universal Furniture Industries logo">'
      + '<p>Precision metal furniture manufacturer. Engineered solutions for institutional and retail spaces since 1990.</p>'
      + '</div>'
      + footerCol('Products', [
        { label: 'Store Furniture', href: UFI_LINKS.store },
        { label: 'School Furniture', href: UFI_LINKS.school },
        { label: 'Hospital Furniture', href: UFI_LINKS.hospital },
        { label: 'Office Furniture', href: UFI_LINKS.office },
        { label: 'Home Furniture', href: UFI_LINKS.homeFurniture }
      ])
      + footerCol('Company', [
        { label: 'About Us', href: UFI_LINKS.about },
        { label: 'Manufacturing Process', href: UFI_LINKS.manufacturing },
        { label: 'Projects &amp; Installations', href: UFI_LINKS.projects },
        { label: 'Contact', href: UFI_LINKS.contact }
      ])
      + footerCol('Resources', [
        { label: 'Request a Quote', href: UFI_LINKS.contact },
        { label: 'Institutional &amp; Tender Supply', href: UFI_LINKS.contact },
        { label: 'Quality Standards', href: UFI_LINKS.manufacturing }
      ])
      + '<div class="footer-col"><h4>Contact</h4><ul>'
      + '<li>Bharatpur-07, Srijana Tole, Chitwan</li>'
      + '<li>+977-9855053857</li>'
      + '<li>www.ufichitwan.com</li>'
      + '</ul></div>'
      + '</div>'
      + '<div class="footer-bottom">'
      + '<span>&copy; 2026 Universal Furniture Industries. All rights reserved.</span>'
      + '<span class="crafted-by">Crafted with precision by  <a href = "https://krishna-sharma.com.np/" > Krishna Sharma</span>'
      + '<div class="social">'
      + '<a href="https://www.facebook.com/ufichitwan" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.25-1.5 1.55-1.5H17V3.7C16.6 3.65 15.4 3.5 14 3.5c-2.8 0-4.7 1.7-4.7 4.9v2.5H6.6V14h2.7v7h4.2z"/></svg></a>'
      + '<a href="https://www.tiktok.com/@ufichitwan" aria-label="TikTok"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 3c.5 2 1.9 3.6 4 3.9v2.9c-1.4 0-2.8-.4-4-1.2v6.6c0 3.3-2.7 6-6 6-1.4 0-2.7-.5-3.7-1.3a6 6 0 0 1 6.6-9.5v3a3 3 0 1 0 2.1 2.9V3h1z"/></svg></a>'
      + '</div>'
      + '</div>';
  }

  function init() {
    var header = document.getElementById('site-header');
    var footer = document.getElementById('site-footer');
    if (header) header.innerHTML = navHTML();
    if (footer) footer.innerHTML = footerHTML();

    /* highlight the current section in the nav, driven by <body data-page="..."> */
    var currentKey = document.body.getAttribute('data-page');
    if (currentKey) {
      var currentLink = document.querySelector('.nav-links a[data-nav-key="' + currentKey + '"]');
      if (currentLink) currentLink.classList.add('current');
    }

    /* mobile nav toggle */
    var hamburger = document.getElementById('hamburgerBtn');
    var navLinks = document.getElementById('navLinks');
    if (hamburger && navLinks) {
      hamburger.addEventListener('click', function () {
        var open = navLinks.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    }

    /* header state: solid-navy over a hero, blurred-light once scrolled — see ux-patterns.md #6.
       Pages with no hero (dummy/content pages) just stay in the normal solid state. */
    if (header) {
      var heroEl = document.querySelector('.hero');
      if (heroEl && 'IntersectionObserver' in window) {
        var headerIO = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) { header.classList.toggle('at-top', entry.isIntersecting); });
        }, { threshold: 0, rootMargin: '-64px 0px 0px 0px' });
        headerIO.observe(heroEl);
      } else if (heroEl) {
        var headerTicking = false;
        function syncHeader() { header.classList.toggle('at-top', window.scrollY < 40); headerTicking = false; }
        window.addEventListener('scroll', function () {
          if (!headerTicking) { window.requestAnimationFrame(syncHeader); headerTicking = true; }
        }, { passive: true });
        syncHeader();
      } else {
        header.classList.remove('at-top');
      }
    }

    /* ---- generic scroll reveal ---- */
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduceMotion) {
      var revealEls = document.querySelectorAll('[data-reveal]');
      var revealIO = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) { entry.target.classList.add('in-view'); revealIO.unobserve(entry.target); }
        });
      }, { threshold: 0.15 });
      revealEls.forEach(function (el) { revealIO.observe(el); });
    } else {
      document.querySelectorAll('[data-reveal]').forEach(function (el) { el.classList.add('in-view'); });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.UFI_LINKS = UFI_LINKS; /* exposed so a page's own script can reuse a link, e.g. a hero CTA to Contact */
})();
