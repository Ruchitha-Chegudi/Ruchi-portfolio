 const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a');
    function activateNav() {
      const y = window.scrollY + 150;
      sections.forEach(sec => {
        if (y >= sec.offsetTop && y < sec.offsetTop + sec.offsetHeight) {
          navLinks.forEach(l => l.classList.remove('active'));
          document.querySelector(`nav a[href*="${sec.id}"]`).classList.add('active');
        }
      });
    }
    window.addEventListener('scroll', activateNav);
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      themeToggle.textContent = document.documentElement.classList.contains('dark') ? '☀️' : '🌙';
    });
    const menuToggleBtn = document.getElementById('menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    menuToggleBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('show');
    });
    mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileNav.classList.remove('show')));

    document.getElementById('year').textContent = new Date().getFullYear();