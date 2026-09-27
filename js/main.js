(function () {
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('site-nav');
  if (!toggle || !menu) return;

  function setOpen(open) {
    menu.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  toggle.addEventListener('click', function () {
    setOpen(!menu.classList.contains('is-open'));
  });

  menu.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function () {
      setOpen(false);
    });
  });
})();
