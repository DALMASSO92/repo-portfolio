// ─── LOADER ────────────────────────────────────────────────────────────────
window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('loader').classList.add('hidden'), 1800);
});

// ─── CUSTOM CURSOR ──────────────────────────────────────────────────────────
const cursor   = document.getElementById('cursor');
const follower = document.getElementById('cursorFollower');
let mx = 0, my = 0, fx = 0, fy = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
});

(function animateFollower() {
  fx += (mx - fx) * 0.12;
  fy += (my - fy) * 0.12;
  follower.style.left = fx + 'px';
  follower.style.top  = fy + 'px';
  requestAnimationFrame(animateFollower);
})();

function addCursorHover(selector) {
  document.querySelectorAll(selector).forEach(el => {
    el.addEventListener('mouseenter', () => { cursor.classList.add('hover'); follower.classList.add('hover'); });
    el.addEventListener('mouseleave', () => { cursor.classList.remove('hover'); follower.classList.remove('hover'); });
  });
}
addCursorHover('a, button, .project-card, .skill-category, .tech-icon, .tag, .service-card, .testimonial-card, .back-to-top');

// ─── NAVIGATION ─────────────────────────────────────────────────────────────
const nav       = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

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

// ─── THREE.JS CYBERNETIC GRID ───────────────────────────────────────────────
(function initGrid() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas || typeof THREE === 'undefined') return;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);

  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 200);
  camera.position.set(0, 3.2, 9);
  camera.lookAt(0, 0, 0);

  // ── Vertex shader: wave deformation ──────────────────────────────────────
  const vertexShader = /* glsl */`
    uniform float uTime;
    uniform vec2  uMouse;
    varying vec2  vUv;
    varying float vElevation;

    void main() {
      vUv = uv;
      vec3 p = position;

      float wave = sin(p.x * 0.40 + uTime * 0.85) * 0.45
                 + sin(p.z * 0.28 + uTime * 0.70) * 0.55
                 + sin((p.x + p.z) * 0.22 + uTime * 0.60) * 0.25;

      // Mouse ripple
      float dist = length(p.xz - uMouse * 14.0);
      wave += sin(dist * 0.60 - uTime * 2.2) * 0.55 * exp(-dist * 0.10);

      p.y += wave;
      vElevation = wave;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
    }
  `;

  // ── Fragment shader: grid lines + color ───────────────────────────────────
  const fragmentShader = /* glsl */`
    uniform float uTime;
    varying vec2  vUv;
    varying float vElevation;

    void main() {
      vec2 uv = vUv * 22.0;
      vec2 g  = abs(fract(uv - 0.5) - 0.5);

      float lineW = 0.035;
      float fine  = 1.0 - smoothstep(lineW, lineW + 0.04, min(g.x, g.y));

      // thick line every 5 cells
      vec2 big = abs(fract(vUv * 4.4 - 0.5) - 0.5);
      float thick = 1.0 - smoothstep(0.04, 0.09, min(big.x, big.y));

      float grid = max(fine, thick * 0.6);

      // colour: indigo → cyan → pink based on elevation + time
      vec3 indigo = vec3(0.50, 0.35, 1.00);
      vec3 cyan   = vec3(0.05, 0.85, 0.95);
      vec3 pink   = vec3(0.95, 0.45, 1.00);

      float t     = clamp((vElevation + 1.0) * 0.5, 0.0, 1.0);
      float pulse = 0.5 + 0.5 * sin(uTime * 1.2 + vUv.x * 6.28);
      vec3  col   = mix(mix(indigo, cyan, t), pink, pulse * 0.25);

      // glow on high-elevation spots
      float glow = smoothstep(0.4, 1.0, vElevation * 0.5 + 0.5);
      col += cyan * glow * 0.55;

      // fade toward edges
      float edge = smoothstep(0.0, 0.18, vUv.x) * smoothstep(1.0, 0.82, vUv.x)
                 * smoothstep(0.0, 0.12, vUv.y) * smoothstep(1.0, 0.88, vUv.y);

      float alpha = grid * edge;
      gl_FragColor = vec4(col, alpha * (0.75 + glow * 0.25));
    }
  `;

  const uniforms = {
    uTime:  { value: 0 },
    uMouse: { value: new THREE.Vector2(0, 0) }
  };

  const geometry = new THREE.PlaneGeometry(55, 55, 90, 90);
  const material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms,
    transparent: true,
    depthWrite:  false,
    blending:    THREE.AdditiveBlending
  });

  const mesh = new THREE.Mesh(geometry, material);
  mesh.rotation.x = -Math.PI / 2;
  mesh.position.y = -1.5;
  scene.add(mesh);

  // ── Mouse tracking ────────────────────────────────────────────────────────
  let gx = 0, gy = 0;
  document.addEventListener('mousemove', e => {
    gx = (e.clientX / window.innerWidth)  * 2 - 1;
    gy = (e.clientY / window.innerHeight) * 2 - 1;
    uniforms.uMouse.value.set(gx, -gy);
  });

  // ── Resize ────────────────────────────────────────────────────────────────
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // ── Render loop ───────────────────────────────────────────────────────────
  (function render(t) {
    uniforms.uTime.value = t * 0.001;
    // gentle camera sway with mouse
    camera.position.x += (gx * 0.5 - camera.position.x) * 0.028;
    camera.position.y += (3.2 - gy * 0.3 - camera.position.y) * 0.028;
    camera.lookAt(0, 0, 0);
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  })(0);
})();

// ─── TYPEWRITER ─────────────────────────────────────────────────────────────
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
setTimeout(type, 2400);

// ─── GSAP SCROLL ANIMATIONS ─────────────────────────────────────────────────
(function initGSAP() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  // Make the hero-content container visible; children start at opacity:0 below
  gsap.set('.hero-content', { opacity: 1 });

  // Hero entrance (stagger after loader)
  const heroTl = gsap.timeline({ delay: 2.0 });
  heroTl
    .fromTo('#heroBadge',  { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' })
    .fromTo('.tl-1',       { opacity: 0, y: 40, skewX: -4 }, { opacity: 1, y: 0, skewX: 0, duration: 0.8, ease: 'power3.out' }, '-=0.3')
    .fromTo('.tl-2',       { opacity: 0, y: 40, skewX: -4 }, { opacity: 1, y: 0, skewX: 0, duration: 0.8, ease: 'power3.out' }, '-=0.55')
    .fromTo('.hero-role',  { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4')
    .fromTo('#heroDesc',   { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.35')
    .fromTo('#heroCta',    { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.3')
    .fromTo('#heroStats',  { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.3');

  // Generic reveal
  gsap.utils.toArray('.gs-label').forEach(el => {
    gsap.fromTo(el, { opacity: 0, y: 18 }, {
      opacity: 1, y: 0, duration: 0.6, ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 88%' }
    });
  });

  gsap.utils.toArray('.gs-title').forEach(el => {
    gsap.fromTo(el, { opacity: 0, y: 36, skewX: -3 }, {
      opacity: 1, y: 0, skewX: 0, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 85%' }
    });
  });

  gsap.utils.toArray('.gs-fade').forEach(el => {
    gsap.fromTo(el, { opacity: 0, y: 24 }, {
      opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 88%' }
    });
  });

  gsap.utils.toArray('.gs-card').forEach((el, i) => {
    gsap.fromTo(el, { opacity: 0, y: 50, scale: 0.95 }, {
      opacity: 1, y: 0, scale: 1, duration: 0.75, ease: 'power3.out',
      delay: (i % 3) * 0.12,
      scrollTrigger: { trigger: el, start: 'top 88%' }
    });
  });

  gsap.utils.toArray('.gs-left').forEach(el => {
    gsap.fromTo(el, { opacity: 0, x: -50 }, {
      opacity: 1, x: 0, duration: 0.85, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 85%' }
    });
  });

  gsap.utils.toArray('.gs-right').forEach(el => {
    gsap.fromTo(el, { opacity: 0, x: 50 }, {
      opacity: 1, x: 0, duration: 0.85, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 85%' }
    });
  });

  gsap.utils.toArray('.gs-timeline').forEach((el, i) => {
    gsap.fromTo(el, { opacity: 0, x: -40 }, {
      opacity: 1, x: 0, duration: 0.7, ease: 'power2.out',
      delay: i * 0.1,
      scrollTrigger: { trigger: el, start: 'top 88%' }
    });
  });
})();

// ─── SCROLL REVEAL + SKILL BARS (fallback without GSAP) ─────────────────────
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      e.target.querySelectorAll('.skill-fill').forEach(f => { f.style.width = f.dataset.width + '%'; });
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// ─── COUNTER ANIMATION ───────────────────────────────────────────────────────
function countUp(el, target, duration = 1800) {
  let start = 0;
  const step  = target / (duration / 16);
  const timer = setInterval(() => {
    start = Math.min(start + step, target);
    el.textContent = Math.floor(start) + '+';
    if (start >= target) clearInterval(timer);
  }, 16);
}

const statsObs  = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    document.querySelectorAll('.stat-number').forEach(el => countUp(el, parseInt(el.dataset.count)));
    statsObs.disconnect();
  }
}, { threshold: 0.5 });
const heroStats = document.querySelector('.hero-stats');
if (heroStats) statsObs.observe(heroStats);

// ─── 3D CARD TILT ────────────────────────────────────────────────────────────
document.querySelectorAll('[data-tilt]').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r  = card.getBoundingClientRect();
    const rx = ((e.clientY - r.top)  - r.height / 2) / r.height * -10;
    const ry = ((e.clientX - r.left) - r.width  / 2) / r.width  *  10;
    card.style.transform  = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(8px)`;
    card.style.transition = 'none';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform  = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    card.style.transition = 'transform 0.5s ease, border-color 0.3s, box-shadow 0.3s';
  });
});

// ─── MAGNETIC BUTTONS ────────────────────────────────────────────────────────
document.querySelectorAll('.magnetic').forEach(el => {
  el.addEventListener('mousemove', e => {
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width  / 2) * 0.18;
    const y = (e.clientY - r.top  - r.height / 2) * 0.18;
    el.style.transform = `translate(${x}px, ${y}px) translateY(-3px)`;
  });
  el.addEventListener('mouseleave', () => { el.style.transform = ''; });
});

// ─── CONTACT FORM ────────────────────────────────────────────────────────────
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

// ─── SMOOTH SCROLL ───────────────────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ─── SCROLL PROGRESS BAR ─────────────────────────────────────────────────────
const scrollBar = document.getElementById('scrollBar');
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const max      = document.documentElement.scrollHeight - window.innerHeight;
  scrollBar.style.width = (scrolled / max * 100) + '%';
}, { passive: true });

// ─── BACK TO TOP ─────────────────────────────────────────────────────────────
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop.classList.toggle('visible', window.scrollY > 600);
}, { passive: true });
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
