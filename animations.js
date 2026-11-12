// =========================================================
// Animations : faire apparaître les éléments quand on descend
// =========================================================

// Les éléments à animer quand ils arrivent à l'écran
const aAnimer = document.querySelectorAll(
  '.espace, .postit, .polaroid, .soin, .membre, .quote, .note, .info-card, ' +
  '.practical > div, .plan-video, .plan-texte, .swatch, .collage, .main-page, .annot, h2'
);

// Chaque élément commence caché (classe "cache")
// On ajoute un petit délai pour qu'ils arrivent les uns après les autres
aAnimer.forEach((el, i) => {
  el.classList.add('cache');
  el.style.transitionDelay = (i % 6) * 0.08 + 's';
});

// L'IntersectionObserver prévient quand un élément devient visible à l'écran
const observateur = new IntersectionObserver(entrees => {
  entrees.forEach(entree => {
    if (entree.isIntersecting) {
      entree.target.classList.add('visible');   // on le fait apparaître
      observateur.unobserve(entree.target);     // une seule fois suffit
    }
  });
}, { threshold: 0.15 });

aAnimer.forEach(el => observateur.observe(el));
