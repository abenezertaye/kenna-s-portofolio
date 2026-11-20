// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Mobile navigation =====
const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.getElementById('site-nav');

function closeMenu() {
  siteNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation menu');
}

function openMenu() {
  siteNav.classList.add('open');
  menuToggle.setAttribute('aria-expanded', 'true');
  menuToggle.setAttribute('aria-label', 'Close navigation menu');
}

menuToggle.addEventListener('click', () => {
  if (siteNav.classList.contains('open')) {
    closeMenu();
  } else {
    openMenu();
  }
});

siteNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('click', (event) => {
  if (!siteNav.classList.contains('open')) return;
  if (siteNav.contains(event.target) || menuToggle.contains(event.target)) return;
  closeMenu();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 760) closeMenu();
});

// ===== Active navigation link =====
const navLinks = Array.from(document.querySelectorAll('.nav-link'));
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

const linkBySection = new Map(
  navLinks.map((link) => [link.getAttribute('href').slice(1), link])
);

function setActive(id) {
  navLinks.forEach((link) => link.classList.remove('active'));
  const link = linkBySection.get(id);
  if (link) link.classList.add('active');
}

if ('IntersectionObserver' in window) {
  const spy = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    },
    { rootMargin: '-25% 0px -55% 0px', threshold: [0, 0.15, 0.4, 0.75] }
  );

  sections.forEach((section) => spy.observe(section));
}

// ===== Scroll reveal =====
const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}
