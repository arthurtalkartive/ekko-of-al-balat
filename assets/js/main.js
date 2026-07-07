/**
 * ekko of al-Balât — main.js
 * -------------------------------------------------------------
 * Aucune dépendance. Une seule responsabilité : empêcher les
 * boutons App Store / Google Play de "sauter" en haut de page
 * tant qu'ils n'ont pas de vraie URL (href="#").
 *
 * Le jour où vous renseignez la vraie URL dans le HTML
 * (data-store="ios" / data-store="android"), ce garde-fou
 * s'efface tout seul : aucune modification de code nécessaire.
 */
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".store-badge").forEach(function (link) {
    link.addEventListener("click", function (event) {
      if (link.getAttribute("href") === "#") {
        event.preventDefault();
      }
    });
  });
});
