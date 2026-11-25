// Splash Screen Controller for MD Fresh Inventory
// Ported from Fruitmart-main: opening water/produce slow-motion video, logo center reveal & fluid fly into brand header

const REVEAL_AT_S = 2.0; // video time when produce leaves frame
const REVEAL_LATEST_MS = 3200; // reveal by then even if video stalls or cannot autoplay
const HOLD_MS = 500; // snappy logo center hold
const FLY_MS = 600; // smooth transit into brand logo

export function initSplashScreen(onDone) {
  if (typeof document === 'undefined') {
    if (onDone) onDone();
    return;
  }

  const root = document.getElementById('md-splash');
  if (!root) {
    if (onDone) onDone();
    return;
  }

  const html = document.documentElement;
  html.dataset.splash = 'playing';

  const sheet = root.querySelector('.sp-sheet');
  const logo = root.querySelector('.sp-logo-wrap');
  const video = root.querySelector('video');

  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const timers = [];
  let cancelled = false;
  let revealed = false;
  let holdDone = false;

  const finish = () => {
    if (!cancelled) {
      cancelled = true;
      timers.forEach(clearTimeout);
      html.dataset.splash = 'seen';
      root.style.display = 'none';
      if (onDone) onDone();
    }
  };

  const fly = () => {
    if (cancelled) return;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const target = document.querySelector('[data-brand-logo]');
    const to = target ? target.getBoundingClientRect() : null;
    const from = logo ? logo.getBoundingClientRect() : null;
    const onScreen = Boolean(to && to.width > 0 && to.bottom > 0 && to.top < vh);

    if (reduce || !onScreen || !logo) {
      if (root.animate) {
        root.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 300, fill: 'forwards' }).onfinish = finish;
      } else {
        finish();
      }
      return;
    }

    const tx = to.left + to.width / 2;
    const ty = to.top + to.height / 2;
    const dx = tx - (from.left + from.width / 2);
    const dy = ty - (from.top + from.height / 2);
    const scale = to.width / from.width;

    // Fluid transit into brand logo
    if (logo.animate) {
      logo.animate(
        [
          { transform: 'translate(0, 0) scale(1) rotate(0deg)' },
          { offset: 0.12, transform: 'translate(0, 6px) scale(1.03) rotate(1.5deg)' },
          { offset: 0.55, transform: `translate(${dx * 0.45}px, ${dy * 0.75 - 20}px) scale(${0.25 + scale}) rotate(-6deg)` },
          { transform: `translate(${dx}px, ${dy}px) scale(${scale}) rotate(0deg)` }
        ],
        { duration: FLY_MS, easing: 'cubic-bezier(0.4, 0, 0.2, 1)', fill: 'forwards' }
      ).onfinish = finish;
    } else {
      finish();
    }

    // Mask hole opens smoothly outward from logo position
    if (sheet) {
      const radius = Math.hypot(Math.max(tx, vw - tx), Math.max(ty, vh - ty));
      sheet.style.setProperty('--hx', `${tx}px`);
      sheet.style.setProperty('--hy', `${ty}px`);
      const supportsHole = typeof CSS !== 'undefined' && 'registerProperty' in CSS;
      if (sheet.animate) {
        sheet.animate(
          supportsHole ? [{ '--hole': '0px' }, { '--hole': `${radius}px` }] : [{ opacity: 1 }, { opacity: 0 }],
          { duration: FLY_MS * 0.85, delay: FLY_MS * 0.15, easing: 'cubic-bezier(0.4, 0, 0.2, 1)', fill: 'forwards' }
        );
      }
    }
  };

  const maybeFly = () => {
    if (holdDone) fly();
  };

  const reveal = () => {
    if (revealed || cancelled) return;
    revealed = true;
    root.classList.add('sp-reveal');
    timers.push(setTimeout(() => { holdDone = true; maybeFly(); }, HOLD_MS));
    timers.push(setTimeout(() => { if (!cancelled) finish(); }, HOLD_MS + FLY_MS + 250));
  };

  const onTime = () => {
    if (video && (video.currentTime >= REVEAL_AT_S || video.ended)) reveal();
  };

  // Instant skip on click / tap anywhere
  root.addEventListener('click', () => {
    if (!revealed) {
      reveal();
    } else {
      finish();
    }
  });

  if (reduce || !video) {
    if (video) video.pause();
    reveal();
  } else {
    video.addEventListener('timeupdate', onTime);
    video.addEventListener('ended', reveal);
    video.addEventListener('error', reveal);
    onTime();
    if (video.paused && !video.ended) {
      video.play().catch(reveal);
    }
    timers.push(setTimeout(reveal, REVEAL_LATEST_MS));
  }
}
