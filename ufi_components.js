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
    projects: 'UFI_projects.html',
    about: 'UFI_about.html',
    contact: 'UFI_contact.html'
  };

  var ABOUT_MANUFACTURING_HREF = UFI_LINKS.about + '#process';

  var NAV_ITEMS = [
    { key: 'home', label: 'Home', href: UFI_LINKS.home },
    { key: 'products', label: 'Products', href: UFI_LINKS.home + '#our-range' },
    { key: 'projects', label: 'Projects', href: UFI_LINKS.projects },
    { key: 'about', label: 'About', href: UFI_LINKS.about },
    { key: 'contact', label: 'Contact', href: UFI_LINKS.contact }
  ];

  function escAttr(s) { return String(s).replace(/"/g, '&quot;'); }

  function navHTML() {
    var links = NAV_ITEMS.map(function (item) {
      if (item.key === 'products') {
        // Mega-menu for Products
        return '' +
          '<li class="nav-item has-submenu">' +
            '<a href="' + escAttr(item.href) + '" data-nav-key="' + item.key + '" class="nav-link-main">' + item.label + '</a>' +
            '<div class="submenu" id="productsSubmenu" role="region" aria-label="Product categories">' +
              '<ul class="submenu-list">' +
                '<li><a href="UFI_store_furniture.html" data-cat="store">' +
                  '<span class="submenu-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3L2 8l10 5 10-5-10-5z"/><path d="M6 10.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.5"/></svg></span>Store Furniture</a></li>' +
                '<li><a href="UFI_school_furniture.html" data-cat="school">' +
                  '<span class="submenu-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3L2 8l10 5 10-5-10-5z"/><path d="M6 10.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.5"/></svg></span>School Furniture</a></li>' +
                '<li><a href="UFI_hospital_furniture.html" data-cat="hospital">' +
                  '<span class="submenu-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 14h16v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1 1v-5z"/><path d="M5 14V9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg></span>Hospital Furniture</a></li>' +
                '<li><a href="UFI_office_furniture.html" data-cat="office">' +
                  '<span class="submenu-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="12" rx="1"/><path d="M8 20h8M12 16v4"/></svg></span>Office Furniture</a></li>' +
                '<li><a href="UFI_home_furniture.html" data-cat="home">' +
                  '<span class="submenu-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 12l8-8 8 8"/><path d="M6 10v9a1 1 0 0 0 1 1h3v-6h4v6h3a1 1 0 0 0 1-1v-9"/></svg></span>Home Furniture</a></li>' +
              '</ul>' +
              '<div class="submenu-preview">' +
                '<div class="submenu-preview-media" id="submenuPreviewMedia" style="background-image:url(\'ufi_range_store.jpg\')"></div>' +
                '<div class="submenu-preview-scrim"></div>' +
                '<div class="submenu-preview-copy">' +
                  '<b id="submenuPreviewTitle">Store Furniture</b>' +
                  '<p id="submenuPreviewTagline">Built for the pace of a busy retail floor.</p>' +
                  '<a class="submenu-preview-cta" id="submenuPreviewLink" href="UFI_store_furniture.html">Explore Store Furniture →</a>' +
                '</div>' +
              '</div>' +
            '</div>' +
          '</li>';
      } else {
        return '<li><a href="' + escAttr(item.href) + '" data-nav-key="' + item.key + '">' + item.label + '</a></li>';
      }
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
        { label: 'Manufacturing Process', href: ABOUT_MANUFACTURING_HREF },
        { label: 'Projects &amp; Installations', href: UFI_LINKS.projects },
        { label: 'Contact', href: UFI_LINKS.contact }
      ])
      + footerCol('Resources', [
        { label: 'Request a Quote', href: UFI_LINKS.contact },
        { label: 'Institutional &amp; Tender Supply', href: UFI_LINKS.contact },
        { label: 'Quality Standards', href: ABOUT_MANUFACTURING_HREF }
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
      function openMenu() {
        navLinks.classList.add('open');
        hamburger.classList.add('open');
        hamburger.setAttribute('aria-expanded', 'true');
        hamburger.setAttribute('aria-label', 'Close menu');
        document.body.style.overflow = 'hidden';
      }
      function closeMenu() {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.setAttribute('aria-label', 'Open menu');
        document.body.style.overflow = '';
        hamburger.focus();
      }
      hamburger.addEventListener('click', function () {
        if (navLinks.classList.contains('open')) { closeMenu(); } else { openMenu(); }
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && navLinks.classList.contains('open')) { closeMenu(); }
      });
      navLinks.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          if (navLinks.classList.contains('open')) { closeMenu(); }
        });
      });
    }

    /* ---- page transition ---- */
    if ('requestAnimationFrame' in window) {
      document.body.classList.add('ufi-page-transition');
      window.addEventListener('pageshow', function (e) {
        if (e.persisted) { document.body.classList.add('ufi-page-transition'); }
      });
    }

    /* ---- smooth anchor scrolling with offset for sticky header ---- */
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var targetId = anchor.getAttribute('href');
        if (targetId === '#') return;
        var target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          var headerOffset = 72;
          var elementPosition = target.getBoundingClientRect().top;
          var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      });
    });

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

    /* ---- mega-menu ---- */
    var subItem = document.querySelector('.nav-item.has-submenu');
    if (subItem) {
      var mainLink = subItem.querySelector('.nav-link-main');
      var catLinks = subItem.querySelectorAll('.submenu-list a');
      var CATS = {
        store:{label:'Store Furniture', tagline:'Built for the pace of a busy retail floor.', img:'ufi_range_store.jpg', href:UFI_LINKS.store, color:'#006a6a'},
        school:{label:'School Furniture', tagline:'Furniture that survives a full school day, every day.', img:'ufi_range_school.jpg', href:UFI_LINKS.school, color:'#FBB03D'},
        hospital:{label:'Hospital Furniture', tagline:'Ward-ready furniture built for hygiene and durability.', img:'ufi_range_hospital.jpg', href:UFI_LINKS.hospital, color:'#3E6690'},
        office:{label:'Office Furniture', tagline:'Work surfaces engineered for daily institutional use.', img:'ufi_range_office.jpg', href:UFI_LINKS.office, color:'#5b6b76'},
        home:{label:'Home Furniture', tagline:'Metal furniture, brought home.', img:'ufi_range_home.jpg', href:UFI_LINKS.homeFurniture, color:'#C1694F'}
      };
      function setPreview(key){
        var c = CATS[key]; if (!c) return;
        document.getElementById('submenuPreviewTitle').textContent = c.label;
        document.getElementById('submenuPreviewTagline').textContent = c.tagline;
        var previewMedia = document.getElementById('submenuPreviewMedia');
        previewMedia.style.backgroundColor = c.color;
        previewMedia.style.backgroundImage = "url('" + c.img + "')";
        var linkEl = document.getElementById('submenuPreviewLink');
        linkEl.href = c.href; linkEl.textContent = 'Explore ' + c.label + ' →';
      }
      catLinks.forEach(function(a){
        a.addEventListener('mouseenter', function(){ setPreview(a.dataset.cat); });
        a.addEventListener('focus', function(){ setPreview(a.dataset.cat); });
      });
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
