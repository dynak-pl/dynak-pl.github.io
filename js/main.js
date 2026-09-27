(function () {
  var toggle = document.querySelector('.navbar-toggle');
  var menu = document.getElementById('navbar-collapse-main');
  if (!toggle || !menu) return;

  function setOpen(open) {
    menu.classList.toggle('in', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  toggle.addEventListener('click', function () {
    setOpen(!menu.classList.contains('in'));
  });

  menu.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function () {
      setOpen(false);
    });
  });
})();
