// ── Тема 
function typewriter(el, text, speed = 55) {
  return new Promise(resolve => {
    let i = 0;
    const cursor = document.createElement('span');
    cursor.className = 'cursor';
    el.appendChild(cursor);
    const id = setInterval(() => {
      cursor.before(text[i++]);
      if (i === text.length) { clearInterval(id); resolve(); }
    }, speed);
  });
}

(async () => {
  const name = document.getElementById('tw-name');
  const role = document.getElementById('tw-role');
  await typewriter(name, 'Матвей Попов');
  await new Promise(r => setTimeout(r, 300));
  await typewriter(role, 'Будущий дата-аналитик · full-stack разработчик', 35);
})();


const STORAGE_KEY = 'cv-theme';

const getInitialTheme = () => {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
};

const applyTheme = (theme) => {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem(STORAGE_KEY, theme);
};

const toggle = document.getElementById('theme-toggle');
applyTheme(getInitialTheme());

toggle?.addEventListener('click', () => {
  const current = document.documentElement.dataset.theme;
  applyTheme(current === 'dark' ? 'light' : 'dark');
});

// ── Skill bars ───────────────────────────────────────
function animateBars() {
  document.querySelectorAll('.skill-bar-fill').forEach(bar => {
    bar.style.width = '0';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        bar.style.width = bar.dataset.pct + '%';
      });
    });
  });
}

const skillsSection = document.querySelector('.cv__skills-bars');
if (skillsSection) {
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animateBars();
      observer.disconnect();
    }
  }, { threshold: 0.3 });
  observer.observe(skillsSection);
}

// ── Project accordion ────────────────────────────────
document.querySelectorAll('.project__toggle').forEach(btn => {
  const body = btn.nextElementSibling;

  btn.addEventListener('click', () => {
    const isOpen = btn.getAttribute('aria-expanded') === 'true';

    if (isOpen) {
      btn.setAttribute('aria-expanded', 'false');
      body.style.gridTemplateRows = '0fr';
      body.addEventListener(
        'transitionend',
        () => { body.hidden = true; },
        { once: true }
      );
    } else {
      body.hidden = false;
      body.getBoundingClientRect(); // force reflow
      btn.setAttribute('aria-expanded', 'true');
      body.style.gridTemplateRows = '1fr';
    }
  });
});

(function () {
  const KONAMI = [
    'ArrowUp','ArrowUp','ArrowDown','ArrowDown',
    'ArrowLeft','ArrowRight','ArrowLeft','ArrowRight',
    'b','a'
  ];
  let pos = 0;
  document.addEventListener('keydown', e => {
    if (e.key === KONAMI[pos]) {
      pos++;
      if (pos === KONAMI.length) {
        document.getElementById('eggReveal')?.classList.add('active');
        pos = 0;
      }
    } else {
      pos = e.key === KONAMI[0] ? 1 : 0;
    }
  });
})();