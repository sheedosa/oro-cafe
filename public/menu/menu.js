/* ORO menu renderer — builds the filter chips + nav strip + sections from
   menu.json, then wires up the scroll/nav/filter interactions. Pure vanilla
   JS, no deps. The menu CONTENT lives in menu.json (edited via Pages CMS at
   orosweets.ly/admin); this file is the presentation layer and the markup it
   emits must match the site's CSS exactly. */
(function () {
  'use strict';

  // --- helpers -------------------------------------------------------------
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function price(p) {
    return '<div class="price">' + esc(p) + '<span class="unit">LYD</span></div>';
  }

  // --- render pieces -------------------------------------------------------
  function renderItem(it) {
    var cls = 'item' + (it.featured ? ' featured' : '') + (it.twoPrice ? ' two-price' : '');
    var note = (it.noteAr || it.noteEn)
      ? '<span class="note"><span class="note-ar">' + esc(it.noteAr) + '</span>' +
        '<span class="note-en">' + esc(it.noteEn) + '</span></span>'
      : '';
    var name = '<div class="name"><span class="ar">' + esc(it.ar) + '</span>' +
               '<span class="en">' + esc(it.en) + '</span>' + note + '</div>';
    var prices = it.twoPrice ? price(it.priceSmall) + price(it.priceLarge) : price(it.price);
    return '<li class="' + cls + '">' + name + prices + '</li>';
  }

  // Walk the flat items array. An item carrying a subcat heading closes the
  // current <ul> and opens a new one, preceded by the gold .subcat divider —
  // reproducing the original "subcategory then its own list" structure.
  function renderItems(items) {
    var out = '', open = false;
    (items || []).forEach(function (it) {
      if (it.subcatAr || it.subcatEn) {
        if (open) out += '</ul>';
        out += '<div class="subcat"><span class="subcat-ar">' + esc(it.subcatAr) + '</span>' +
               '<span class="subcat-en">' + esc(it.subcatEn) + '</span></div>';
        out += '<ul class="item-list">';
        open = true;
      } else if (!open) {
        out += '<ul class="item-list">';
        open = true;
      }
      out += renderItem(it);
    });
    if (open) out += '</ul>';
    return out;
  }

  function renderSizeRow(sr) {
    if (!sr) return '';
    function tag(ar, en) {
      return '<span class="size-tag">' + esc(ar) +
             '<br><small style="font-size:9px;letter-spacing:.2em;">' + esc(en) + '</small></span>';
    }
    return '<div class="size-row"><span></span>' +
           tag(sr.smallAr, sr.smallEn) + tag(sr.largeAr, sr.largeEn) + '</div>';
  }

  function hasMedia(m) { return !!(m && (m.base || m.image || m.type === 'video')); }

  function renderMedia(m) {
    var dims = (m.width ? ' width="' + esc(m.width) + '"' : '') +
               (m.height ? ' height="' + esc(m.height) + '"' : '');
    if (m.type === 'video') {
      var poster = m.poster ? ' poster="img/' + esc(m.poster) + '.jpg"' : '';
      return '<video src="img/' + esc(m.base) + '.mp4"' + poster +
             ' autoplay loop muted playsinline preload="metadata"' + dims +
             ' aria-label="' + esc(m.alt) + '"></video>';
    }
    // An uploaded image (m.image) is stored as an absolute /menu/img/… path by
    // Pages CMS — use it verbatim (this menu is served from /menu/, not site root,
    // so we must NOT strip the leading slash). Otherwise use the webp+png base pair.
    if (m.image) {
      return '<img src="' + esc(m.image) + '" alt="' + esc(m.alt) +
             '" loading="lazy" decoding="async"' + dims + ' />';
    }
    return '<picture><source srcset="img/' + esc(m.base) + '.webp" type="image/webp" />' +
           '<img src="img/' + esc(m.base) + '.png" alt="' + esc(m.alt) +
           '" loading="lazy" decoding="async"' + dims + ' /></picture>';
  }

  function renderSection(s) {
    var cls = 'menu-section ' + esc(s.theme) + ' pattern-bg';
    var head = '';
    if (s.showHead && s.title) {
      head = '<div class="section-head">' +
               '<div class="line"></div>' +
               '<div class="title-block">' +
                 '<h2 class="ar-title">' + esc(s.title.ar) + '</h2>' +
                 '<div class="en-title">' + esc(s.title.en) + '</div>' +
               '</div>' +
               '<div class="line right"></div>' +
             '</div>';
    }
    var photo = hasMedia(s.media)
      ? '<div class="photo-cell"><div class="frame">' + renderMedia(s.media) + '</div>' +
        '<div class="caption">' + esc(s.media.caption) + '</div></div>'
      : '';
    var items = '<div class="items-cell">' + renderSizeRow(s.sizeRow) + renderItems(s.items) + '</div>';
    var grid = '<div class="menu-grid' + (s.flip ? ' flip' : '') + '">' + photo + items + '</div>';
    return '<section id="' + esc(s.id) + '" data-group="' + esc(s.group) + '" class="' + cls + '">' +
             '<div class="container">' + head + grid + '</div>' +
           '</section>';
  }

  // Nav is DERIVED from sections (those with a header) so it auto-stays in sync
  // when the client adds/removes sections. The tea continuation (showHead:false)
  // is intentionally excluded, matching the original.
  function renderNav(sections) {
    return (sections || []).filter(function (s) { return s.showHead !== false; })
      .map(function (s) {
        var t = s.title || {};
        return '<a href="#' + esc(s.id) + '">' +
                 '<span class="nav-ar">' + esc(t.ar) + '</span>' +
                 '<span class="nav-en">' + esc(t.en) + '</span>' +
               '</a>';
      }).join('');
  }

  // Fixed filter chips (presentation, not content). Groups key off section
  // data-group; ★ Featured keys off .item.featured.
  var CHIPS = [
    { f: 'all',      ar: 'الكل',      en: 'All',          active: true },
    { f: 'drinks',   ar: 'مشروبات',   en: 'Drinks' },
    { f: 'sweets',   ar: 'حلويات',    en: 'Sweets' },
    { f: 'savory',   ar: 'مأكولات',   en: 'Savory' },
    { f: 'featured', ar: '★ مميّز',   en: '★ Featured' }
  ];
  function renderChips() {
    return CHIPS.map(function (c) {
      return '<button class="filter-chip' + (c.active ? ' active' : '') + '" data-filter="' + c.f + '">' +
               '<span class="chip-ar">' + esc(c.ar) + '</span>' +
               '<span class="chip-en">' + esc(c.en) + '</span>' +
             '</button>';
    }).join('');
  }

  function render(data) {
    var barEl = document.querySelector('.filter-bar');
    var navEl = document.querySelector('.category-scroll');
    var secEl = document.getElementById('sections');
    if (barEl) barEl.innerHTML = renderChips();
    if (navEl) navEl.innerHTML = renderNav(data.sections);
    if (secEl) secEl.innerHTML = (data.sections || []).map(renderSection).join('');
  }

  // --- interactions (run AFTER render, since they read the DOM) -------------
  function initInteractions() {
    // Smooth-scroll with sticky offset
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var id = a.getAttribute('href');
        if (id.length < 2) return;
        var el = document.querySelector(id);
        if (!el) return;
        e.preventDefault();
        var top = el.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: top, behavior: 'smooth' });
      });
    });

    // Active category highlight in sticky strip
    var strip = document.querySelector('.category-scroll');
    var links = strip ? [].slice.call(strip.querySelectorAll('a')) : [];
    var sections = links.map(function (l) { return document.querySelector(l.getAttribute('href')); })
                        .filter(Boolean);
    var lastIdx = -1;
    var ticking = false;

    // Scroll progress bar + back-to-top button (updated inside the rAF tick)
    var progressBar = document.getElementById('scrollProgress');
    var backBtn = document.getElementById('backToTop');
    var docEl = document.documentElement;
    function updateChrome() {
      var max = docEl.scrollHeight - docEl.clientHeight;
      var p = max > 0 ? docEl.scrollTop / max : 0;
      if (progressBar) progressBar.style.transform = 'scaleX(' + p.toFixed(4) + ')';
      if (backBtn) backBtn.classList.toggle('show', docEl.scrollTop > window.innerHeight * 0.8);
    }

    var tick = function () {
      ticking = false;
      updateChrome();
      var y = window.scrollY + 140;
      var idx = -1;
      for (var i = 0; i < sections.length; i++) {
        var s = sections[i];
        if (s && s.offsetParent !== null && s.offsetTop <= y) idx = i;   // skip hidden (filtered) sections
      }
      if (idx === lastIdx) return;
      if (lastIdx >= 0 && links[lastIdx]) links[lastIdx].classList.remove('active');
      if (idx >= 0 && links[idx]) {
        links[idx].classList.add('active');
        var linkLeft = links[idx].offsetLeft;
        var linkRight = linkLeft + links[idx].offsetWidth;
        var view = strip.scrollLeft;
        var viewRight = view + strip.clientWidth;
        if (linkLeft < view + 40 || linkRight > viewRight - 40) {
          strip.scrollTo({ left: Math.max(0, linkLeft - 40), behavior: 'smooth' });
        }
      }
      lastIdx = idx;
    };

    window.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(tick);
    }, { passive: true });

    tick();

    // Scroll-affordance: toggle edge fades + chevrons based on category-scroll position
    var stripWrap = document.querySelector('.category-strip');
    if (strip && stripWrap) {
      var updateAffordance = function () {
        var canLeft = strip.scrollLeft > 4;
        var canRight = strip.scrollLeft + strip.clientWidth < strip.scrollWidth - 4;
        stripWrap.classList.toggle('can-scroll-left', canLeft);
        stripWrap.classList.toggle('can-scroll-right', canRight);
      };
      strip.addEventListener('scroll', updateAffordance, { passive: true });
      window.addEventListener('resize', updateAffordance);
      updateAffordance();

      // One-time auto-scroll hint on page load (only if there's right overflow)
      if (!sessionStorage.getItem('oroNavHinted') && strip.scrollWidth > strip.clientWidth) {
        sessionStorage.setItem('oroNavHinted', '1');
        setTimeout(function () {
          var original = strip.scrollLeft;
          strip.scrollTo({ left: original + 70, behavior: 'smooth' });
          setTimeout(function () { strip.scrollTo({ left: original, behavior: 'smooth' }); }, 650);
        }, 1000);
      }

      // Allow tapping chevrons to scroll
      document.querySelectorAll('.category-strip .chevron').forEach(function (ch) {
        ch.style.pointerEvents = 'auto';
        ch.style.cursor = 'pointer';
        ch.addEventListener('click', function () {
          var dir = ch.classList.contains('right') ? 1 : -1;
          strip.scrollBy({ left: dir * strip.clientWidth * 0.6, behavior: 'smooth' });
        });
      });
    }

    // ============ Filter chips (All / Drinks / Sweets / Savory / Featured) ============
    var chips = [].slice.call(document.querySelectorAll('.filter-chip'));
    var allSections = [].slice.call(document.querySelectorAll('section.menu-section'));
    var navLinkFor = function (id) {
      return links.filter(function (l) { return l.getAttribute('href') === '#' + id; })[0];
    };

    function applyFilter(type) {
      document.body.classList.toggle('filter-featured', type === 'featured');
      allSections.forEach(function (sec) {
        var show;
        if (type === 'all') show = true;
        else if (type === 'featured') show = !!sec.querySelector('.item.featured');
        else show = sec.dataset.group === type;
        sec.style.display = show ? '' : 'none';
        var link = navLinkFor(sec.id);
        if (link) link.style.display = show ? '' : 'none';
      });
      lastIdx = -1;
      window.dispatchEvent(new Event('resize'));   // refresh strip edge-fades for the new link set
      tick();
    }

    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        if (chip.classList.contains('active')) return;
        chips.forEach(function (c) { c.classList.remove('active'); });
        chip.classList.add('active');
        applyFilter(chip.dataset.filter);
        var menu = document.getElementById('menu');
        if (menu) {
          var top = menu.getBoundingClientRect().top + window.scrollY;
          if (window.scrollY > top + 1) window.scrollTo({ top: top, behavior: 'smooth' });
        }
      });
    });

    // ============ Back to top ============
    if (backBtn) backBtn.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
    window.addEventListener('resize', updateChrome);
    updateChrome();

    // ============ Deep-link: honour #hash on load (e.g. homepage category tiles) ============
    // Sections only exist after render, so run this here. Re-apply after a short
    // delay once category photos settle. `auto` works under reduced-motion too.
    (function () {
      var hash = window.location.hash;
      if (!hash || hash.length < 2) return;
      var jump = function () {
        var el = document.querySelector(hash);
        if (!el) return;
        var top = el.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: Math.max(0, top), behavior: 'auto' });
      };
      jump();
      setTimeout(jump, 250);
    })();
  }

  // --- boot ----------------------------------------------------------------
  fetch('menu.json', { cache: 'no-cache' })
    .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
    .then(function (data) { render(data); initInteractions(); })
    .catch(function (err) {
      console.error('Menu failed to load:', err);
      var s = document.getElementById('sections');
      if (s) {
        s.innerHTML = '<p style="text-align:center;padding:80px 20px;color:#ead9d6;' +
          'font-family:\'Cormorant Garamond\',serif;font-size:22px;">' +
          'Our menu is temporarily unavailable. Please refresh the page.</p>';
      }
    });
})();
