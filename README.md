# ekko of al-Balât — site vitrine

Site statique (HTML/CSS/JS pur, aucune dépendance, aucun build) pour
l'application mobile **ekko of al-Balât**, prêt à être déployé sur Vercel
depuis GitHub.

## Arborescence

```
/
├── index.html                     → page d'accueil (desktop + mobile)
├── legal/
│   ├── avis-legal.html
│   ├── condiciones-de-uso.html
│   └── creditos.html
├── assets/
│   ├── css/
│   │   ├── fonts.css               → déclarations @font-face
│   │   └── style.css               → tout le design + animations
│   ├── js/
│   │   └── main.js                 → petit garde-fou sur les boutons stores
│   ├── fonts/                      → à compléter (voir README dans ce dossier)
│   └── img/                        → à compléter (voir README dans ce dossier)
├── favicon.svg / favicon.ico / apple-touch-icon.png   → déjà générés
├── site.webmanifest
├── vercel.json                     → cache des assets + URLs propres
└── README.md                       → ce fichier
```

Aucun framework, aucun `package.json`, aucune étape de build : Vercel sert
les fichiers tels quels.

## Ce qui est déjà fait

- Structure complète des 4 pages (accueil + 3 pages légales), textes réels
  repris de la maquette Figma.
- Mise en page desktop **et** mobile, fidèle aux deux frames Figma
  (« LP - DESK » et « LP - MOB »).
- Animation d'apparition élégante au premier chargement (fondu + léger
  décalage vertical, en cascade sur le logo, le titre, les boutons, les
  visuels et le footer). Désactivée automatiquement si la personne a
  activé « réduire les animations » dans son système.
- Les 3 liens du menu (Avis legal / Condiciones de uso / Creditos)
  pointent vers les 3 pages légales, avec soulignement sur la page active.
- Le logo Talkartive en bas de page s'ouvre sur `https://talkartive.com/`
  dans un nouvel onglet.
- Les boutons App Store / Google Play sont en place mais désactivés
  (`href="#"`) : voir plus bas pour les activer.
- Favicon fonctionnel (généré, voir `assets/img/README.md` pour le
  remplacer par le visuel exact de la maquette si besoin).

## Ce qu'il reste à faire avant la mise en ligne

**Uniquement des fichiers à déposer, aucun code à écrire :**

1. **Images** — voir `assets/img/README.md` : liste précise des visuels à
   exporter depuis Figma (logos, photos, badges stores, logos partenaires),
   avec un lien direct vers chaque calque concerné.
2. **Polices** — voir `assets/fonts/README.md` : déposez vos fichiers
   Fratelli et Sofia Pro avec les noms indiqués.
3. **Champs à compléter dans les pages légales** — certains champs sont
   encore entre crochets dans la maquette d'origine, à remplacer dans le
   HTML directement :
   - `legal/avis-legal.html` : `[fecha]`, `[Dirección]`, `[Correo
     electrónico]`, `[Sitio web]` (×2, pour la mairie et pour Talkartive).
   - `legal/condiciones-de-uso.html` : `[fecha]`.
   - `legal/creditos.html` : `Jaume [Apellidos]`.
4. **Liens des stores** (quand l'app sera publiée) — dans `index.html`,
   remplacez `href="#"` par la vraie URL sur les deux blocs
   `store-badge` (il y en a deux occurrences : desktop et mobile). Rien
   d'autre à toucher, le petit script `main.js` s'efface tout seul dès
   qu'un vrai lien est présent.

## Aperçu en local (optionnel, avant de pousser sur GitHub)

Les chemins du site sont absolus (`/assets/...`) : un simple double-clic sur
`index.html` ne fonctionnera pas correctement (le navigateur cherchera les
fichiers à la racine du disque). Lancez un petit serveur local à la place,
depuis ce dossier :

```bash
python3 -m http.server 8000
# puis ouvrez http://localhost:8000
```

ou, si vous avez Node.js :

```bash
npx serve .
```

## Mise en ligne : GitHub → Vercel

### 1. Créer le dépôt GitHub

Sur [github.com/new](https://github.com/new), créez un dépôt (par exemple
`ekko-albalat-site`), puis uploadez tout le contenu de ce dossier via
l'éditeur web GitHub (bouton **Add file → Upload files**, en glissant
l'ensemble des fichiers et dossiers en conservant l'arborescence).

> Astuce : pour uploader un dossier entier (comme `assets/`) via
> l'interface web, glissez-déposez directement le dossier depuis votre
> ordinateur dans la zone d'upload de GitHub — l'arborescence est
> conservée automatiquement.

### 2. Connecter le dépôt à Vercel

1. Sur [vercel.com](https://vercel.com), **Add New → Project**.
2. Sélectionnez le dépôt GitHub que vous venez de créer.
3. Framework Preset : choisissez **Other** (site statique, aucune
   commande de build nécessaire).
   - Build Command : laisser vide
   - Output Directory : laisser vide (racine du dépôt)
4. Cliquez sur **Deploy**.

Votre site est en ligne sur une URL `*.vercel.app` en moins d'une minute.
Vous pouvez ensuite brancher votre propre nom de domaine dans
**Project → Settings → Domains**.

### 3. Mises à jour suivantes

Chaque fois que vous modifiez un fichier sur GitHub (édition directe en
ligne ou nouvel upload), Vercel redéploie automatiquement le site en
quelques secondes.

## Régénérer le favicon (si vous exportez le visuel exact de Figma)

Si vous déposez un nouveau `favicon.svg` (ou une image carrée 1024×1024),
régénérez les déclinaisons PNG avec :

```bash
pip install cairosvg pillow
python3 -c "
import cairosvg
for path, size in {'apple-touch-icon.png':180,'assets/img/favicon-32x32.png':32,'assets/img/favicon-16x16.png':16,'assets/img/icon-192.png':192,'assets/img/icon-512.png':512}.items():
    cairosvg.svg2png(url='favicon.svg', write_to=path, output_width=size, output_height=size)
"
python3 -c "
from PIL import Image
Image.open('assets/img/favicon-16x16.png').save('favicon.ico', sizes=[(16,16),(32,32)], format='ICO')
"
```

## Notes techniques

- Tous les chemins (`/assets/...`, `/legal/...`) sont **absolus depuis la
  racine** du site : cela fonctionne aussi bien en local (avec un petit
  serveur statique) qu'une fois déployé sur Vercel.
- Pas de dépendance externe, pas de tracking, pas de cookie : rien à
  déclarer côté RGPD pour le site lui-même (la question se pose côté
  application mobile, hors périmètre de ce site).
- Testé pour rester lisible et fonctionnel même sans les images/polices
  finales (fonds de couleur et polices système en secours).
