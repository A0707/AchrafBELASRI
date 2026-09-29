const mobileMenu = document.querySelector('.mobile-menu');
if (mobileMenu) {
  mobileMenu.addEventListener('click', event => {
    if (event.target.closest('a')) mobileMenu.open = false;
  });
  document.addEventListener('click', event => {
    if (!mobileMenu.contains(event.target)) mobileMenu.open = false;
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && mobileMenu.open) {
      mobileMenu.open = false;
      mobileMenu.querySelector('summary').focus();
    }
  });
}

const intro = document.getElementById('intro');
if (intro && !document.documentElement.classList.contains('intro-seen')) {
  let introTimer;
  const finishIntro = () => {
    if (document.documentElement.classList.contains('intro-seen')) return;
    clearTimeout(introTimer);
    document.documentElement.classList.add('intro-seen');
    intro.classList.add('is-leaving');
    try { sessionStorage.setItem('portfolioIntroSeen','1'); } catch (error) {}
    const startMesh=() => dispatchEvent(new Event('portfolio:start-mesh'));
    if ('requestIdleCallback' in window) requestIdleCallback(startMesh,{timeout:1200});
    else setTimeout(startMesh,350);
    setTimeout(() => intro.remove(), 260);
  };
  intro.querySelector('.intro-skip')?.addEventListener('click', finishIntro);
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') finishIntro();
  }, {once:true});
  introTimer=setTimeout(finishIntro, 1250);
}
