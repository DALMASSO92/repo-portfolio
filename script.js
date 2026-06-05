// LOADER
window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('loader').classList.add('hidden'), 1800);
});

// CUSTOM CURSOR
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursorFollower');
let mx = 0, my = 0, fx = 0, fy = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top = my + 'px';
});

(function animateFollower() {
  fx += (mx - fx) * 0.12;
  fy += (my - fy) * 0.12;
  follower.style.left = fx + 'px';
  follower.style.top = fy + 'px';
  requestAnimationFrame(animateFollower);
})();

document.querySelectorAll('a, button, .project-card, .skill-category, .tech-icon, .tag').forEach(el => {
  el.addEventListener('mouseenter', () => { cursor.classList.add('hover'); follower.classList.add('hover'); });
  el.addEventListener('mouseleave', () => { cursor.classList.remove('hover'); follower.classList.remove('hover'); });
});

// NAVIGATION
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
  updateActiveLink();
});

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => { navToggle.classList.remove('active'); navLinks.classList.remove('open'); });
});

function updateActiveLink() {
  const pos = window.scrollY + 200;
  document.querySelectorAll('section[id]').forEach(sec => {
    if (pos >= sec.offsetTop && pos < sec.offsetTop + sec.offsetHeight) {
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      const link = document.querySelector(`.nav-link[href="#${sec.id}"]`);
      if (link) link.classList.add('active');
    }
  });
}

// CANVAS PARTICLE SYSTEM
const canvas = document.getElementById('heroCanvas');
const ctx = canvas.getContext('2d');
let W = canvas.width = window.innerWidth;
let H = canvas.height = window.innerHeight;
window.addEventListener('resize', () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; });

let mpx = -9999, mpy = -9999;
document.addEventListener('mousemove', e => { mpx = e.clientX; mpy = e.clientY; });

class Particle {
  constructor() { this.init(); }
  init() {
    this.x = Math.random() * W;
    this.y = Math.random() * H;
    this.size = Math.random() * 1.5 + 0.3;
    this.vx = (Math.random() - 0.5) * 0.4;
    this.vy = (Math.random() - 0.5) * 0.4;
    this.alpha = Math.random() * 0.5 + 0.1;
    this.color = Math.random() > 0.5 ? '99,102,241' : '6,182,212';
  }
  update() {
    this.x += this.vx; this.y += this.vy;
    if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.init();
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${this.color},${this.alpha})`;
    ctx.fill();
  }
}

const particles = Array.from({ length: 130 }, () => new Particle());

function drawLines() {
  for (let i = 0; i < particles.length; i++) {
    const p = particles[i];
    // particle-to-mouse
    const dmx = p.x - mpx, dmy = p.y - mpy;
    const dm = Math.sqrt(dmx * dmx + dmy * dmy);
    if (dm < 160) {
      ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mpx, mpy);
      ctx.strokeStyle = `rgba(6,182,212,${0.35 * (1 - dm / 160)})`;
      ctx.lineWidth = 0.7; ctx.stroke();
    }
    // particle-to-particle
    for (let j = i + 1; j < particles.length; j++) {
      const q = particles[j];
      const dx = p.x - q.x, dy = p.y - q.y;
      const d = Math.sqrt(dx * dx + dy * dy);
      if (d < 110) {
        ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
        ctx.strokeStyle = `rgba(99,102,241,${0.12 * (1 - d / 110)})`;
        ctx.lineWidth = 0.5; ctx.stroke();
      }
    }
  }
}

(function animate() {
  ctx.clearRect(0, 0, W, H);
  particles.forEach(p => { p.update(); p.draw(); });
  drawLines();
  requestAnimationFrame(animate);
})();

// TYPEWRITER
const roles = ['Développeur Full Stack', 'Architecte Web', 'Creative Developer', 'Problem Solver', 'Open Source Contributor'];
let rIdx = 0, cIdx = 0, deleting = false;
const tw = document.getElementById('typewriter');

function type() {
  const role = roles[rIdx];
  tw.textContent = role.substring(0, deleting ? cIdx - 1 : cIdx + 1);
  deleting ? cIdx-- : cIdx++;
  let delay = deleting ? 55 : 95;
  if (!deleting && cIdx === role.length) { delay = 2000; deleting = true; }
  else if (deleting && cIdx === 0) { deleting = false; rIdx = (rIdx + 1) % roles.length; delay = 400; }
  setTimeout(type, delay);
}
setTimeout(type, 2200);

// SCROLL REVEAL + SKILL BARS
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      e.target.querySelectorAll('.skill-fill').forEach(f => { f.style.width = f.dataset.width + '%'; });
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// COUNTER ANIMATION
function countUp(el, target, duration = 1800) {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start = Math.min(start + step, target);
    el.textContent = Math.floor(start) + '+';
    if (start >= target) clearInterval(timer);
  }, 16);
}

const statsObs = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    document.querySelectorAll('.stat-number').forEach(el => countUp(el, parseInt(el.dataset.count)));
    statsObs.disconnect();
  }
}, { threshold: 0.5 });
const heroStats = document.querySelector('.hero-stats');
if (heroStats) statsObs.observe(heroStats);

// 3D CARD TILT
document.querySelectorAll('[data-tilt]').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left, y = e.clientY - r.top;
    const rx = (y - r.height / 2) / r.height * -10;
    const ry = (x - r.width / 2) / r.width * 10;
    card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(8px)`;
    card.style.transition = 'none';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    card.style.transition = 'transform 0.5s ease, border-color 0.3s, box-shadow 0.3s';
  });
});

// CONTACT FORM
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Message envoyé !';
  btn.style.background = 'linear-gradient(135deg,#10b981,#059669)';
  setTimeout(() => {
    btn.innerHTML = 'Envoyer le message <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>';
    btn.style.background = '';
    e.target.reset();
  }, 3000);
});

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// SCROLL PROGRESS BAR
const scrollBar = document.getElementById('scrollBar');
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  scrollBar.style.width = (scrolled / max * 100) + '%';
}, { passive: true });

// BACK TO TOP
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop.classList.toggle('visible', window.scrollY > 600);
}, { passive: true });
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// MAGNETIC BUTTONS
document.querySelectorAll('.magnetic').forEach(el => {
  el.addEventListener('mousemove', e => {
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * 0.18;
    const y = (e.clientY - r.top - r.height / 2) * 0.18;
    el.style.transform = `translate(${x}px, ${y}px) translateY(-3px)`;
  });
  el.addEventListener('mouseleave', () => { el.style.transform = ''; });
});

// CURSOR HOVER — include new elements
document.querySelectorAll('.service-card, .testimonial-card, .back-to-top').forEach(el => {
  el.addEventListener('mouseenter', () => { cursor.classList.add('hover'); follower.classList.add('hover'); });
  el.addEventListener('mouseleave', () => { cursor.classList.remove('hover'); follower.classList.remove('hover'); });
});
