(function() {
  if (window.__scrollTrackerActive) return;
  window.__scrollTrackerActive = true;

  var current = null;

  function update() {
    var sections = document.querySelectorAll('[data-section]');
    if (!sections.length) return;

    var scrollTop = window.scrollY;
    var vpH = window.innerHeight;
    var docH = document.documentElement.scrollHeight;
    var el = null;

    if (scrollTop < 100) {
      el = sections[0];
    } else if (scrollTop + vpH >= docH - 100) {
      el = sections[sections.length - 1];
    } else {
      var line = vpH * 0.3;
      for (var i = 0; i < sections.length; i++) {
        if (sections[i].getBoundingClientRect().top <= line) el = sections[i];
      }
    }

    if (el) {
      var id = el.getAttribute('data-section');
      if (id !== current) {
        current = id;
        for (var j = 0; j < sections.length; j++) sections[j].classList.remove('active');
        el.classList.add('active');
        var visual = el.getAttribute('data-visual') || '';
        var firstId = sections[0].getAttribute('data-section');
        var lastId = sections[sections.length - 1].getAttribute('data-section');
        window.dispatchEvent(new CustomEvent('sectionchange', {
          detail: { id: id, visual: visual, isEdge: id === firstId || id === lastId }
        }));
      }
    }
  }

  var ticking = false;
  window.addEventListener('scroll', function() {
    if (!ticking) {
      requestAnimationFrame(function() { update(); ticking = false; });
      ticking = true;
    }
  }, { passive: true });

  // Poll to catch navigations
  setInterval(function() {
    var sections = document.querySelectorAll('[data-section]');
    if (sections.length > 0 && !document.querySelector('.dd-section.active')) {
      current = null;
      update();
    }
  }, 150);

  update();
})();
