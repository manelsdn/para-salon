// =========================================================
// Lightbox : agrandir une photo quand on clique dessus
// (utilisé sur les pages Galerie, Salle d'attente et Avis)
// =========================================================

// On récupère la lightbox et l'image à l'intérieur
const lb = document.getElementById('lightbox');
const lbi = document.getElementById('lightboxImg');

// Clic sur une photo (sauf le scotch décoratif) : on l'affiche en grand
document.querySelectorAll('.photo img:not(.scotch), .client-photo img:not(.scotch)').forEach(img => {
  img.style.cursor = 'zoom-in';
  img.addEventListener('click', () => {
    lbi.src = img.src;
    lb.classList.add('active');
  });
});

// Fermeture : bouton ×, clic à côté de l'image, ou touche Échap
document.getElementById('close').onclick = () => lb.classList.remove('active');
lb.addEventListener('click', e => { if (e.target === lb) lb.classList.remove('active'); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') lb.classList.remove('active'); });
