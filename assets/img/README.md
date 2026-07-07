# Visuels à exporter depuis Figma

Le code du site est prêt et fonctionne déjà (mise en page, animations, liens,
responsive). Il ne manque que les fichiers image ci-dessous, à exporter
depuis le fichier Figma **Ekko x Al-Bâlât** puis à déposer dans ce dossier
(mêmes noms de fichiers exacts).

Fichier Figma : `https://www.figma.com/design/N9L42LWe71mtaHhWww4mI0/Ekko-x-Al-B%C3%A2l%C3%A2t`

> Pourquoi je ne les ai pas exportés moi-même : mon environnement n'a pas
> accès au réseau de Figma pour télécharger les images (seul le rendu à
> l'écran est visible côté agent). Le reste du site — code, structure,
> textes, logique — est terminé.

## Comment exporter un calque dans Figma
1. Ouvrez le lien du node ci-dessous (il sélectionne directement le bon calque/frame).
2. Dans le panneau de droite, cliquez sur **+ Export** en bas.
3. Choisissez le format et l'échelle indiqués.
4. Cliquez sur **Export** puis renommez le fichier téléchargé exactement comme indiqué.

## Liste des fichiers nécessaires

### Logos (fond transparent, format PNG, échelle 2x)

| Fichier | Contenu | Lien Figma (node) |
|---|---|---|
| `logo-ekko-albalat.png` | Lockup complet « ekko / OF / al-Balât » avec cadre décoratif et sous-titre arabe (version grande utilisée en hero — réutilisée à taille réduite dans l'en-tête via le CSS) | [node 2172:68710](https://www.figma.com/design/N9L42LWe71mtaHhWww4mI0/Ekko-x-Al-B%C3%A2l%C3%A2t?node-id=2172-68710) |
| `talkartive-logo.png` | Logo « Talkartive Studio » (hexagone + texte) en bas de page | [node 2172:68944](https://www.figma.com/design/N9L42LWe71mtaHhWww4mI0/Ekko-x-Al-B%C3%A2l%C3%A2t?node-id=2172-68944) |
| `badge-app-store.svg` | Badge « Download on the App Store » | [node 2172:68913](https://www.figma.com/design/N9L42LWe71mtaHhWww4mI0/Ekko-x-Al-B%C3%A2l%C3%A2t?node-id=2172-68913) |
| `badge-google-play.svg` | Badge « Get it on Google Play » | [node 2172:68912](https://www.figma.com/design/N9L42LWe71mtaHhWww4mI0/Ekko-x-Al-B%C3%A2l%C3%A2t?node-id=2172-68912) |

*(Pour les deux badges, export SVG conseillé ; PNG @2x fonctionne aussi, il suffit d'adapter l'extension dans le HTML si besoin.)*

### Photos (JPG ou PNG selon transparence, largeur ~1920px)

| Fichier | Contenu | Où le trouver |
|---|---|---|
| `hero-bg.jpg` | Photo de fond (roche sombre) | Dans le frame [LP - DESK](https://www.figma.com/design/N9L42LWe71mtaHhWww4mI0/Ekko-x-Al-B%C3%A2l%C3%A2t?node-id=2172-45506), cliquez sur la photo de fond pour la sélectionner, puis exportez-la seule |
| `sand-landscape.png` | Bande de sable/paysage en bas de page (PNG transparent) | [node 2172:68939](https://www.figma.com/design/N9L42LWe71mtaHhWww4mI0/Ekko-x-Al-B%C3%A2l%C3%A2t?node-id=2172-68939) |
| `mockup-phones.png` | Composition des deux téléphones (PNG transparent) | [node 2172:68940](https://www.figma.com/design/N9L42LWe71mtaHhWww4mI0/Ekko-x-Al-B%C3%A2l%C3%A2t?node-id=2172-68940) |
| `legal-bg.jpg` | Photo de fond des pages légales (peut être la même photo que `hero-bg.jpg`, recadrée) | Frames [Avis legal](https://www.figma.com/design/N9L42LWe71mtaHhWww4mI0/Ekko-x-Al-B%C3%A2l%C3%A2t?node-id=2172-69317) / [Condiciones](https://www.figma.com/design/N9L42LWe71mtaHhWww4mI0/Ekko-x-Al-B%C3%A2l%C3%A2t?node-id=2172-69831) / [Créditos](https://www.figma.com/design/N9L42LWe71mtaHhWww4mI0/Ekko-x-Al-B%C3%A2l%C3%A2t?node-id=2173-70094) |

### Logo partenaires (page Créditos uniquement — dossier `credits/`)

| Fichier | Contenu | Lien Figma (node) |
|---|---|---|
| `credits/herodot-studio.png` | Logo Herodot Studio | [node 2174:45628](https://www.figma.com/design/N9L42LWe71mtaHhWww4mI0/Ekko-x-Al-B%C3%A2l%C3%A2t?node-id=2174-45628) |
| `credits/logo-02.png` | Logo Ayuntamiento de Romangordo | [node 2174:45629](https://www.figma.com/design/N9L42LWe71mtaHhWww4mI0/Ekko-x-Al-B%C3%A2l%C3%A2t?node-id=2174-45629) |
| `credits/eu-funded.png` | Logo « Financiado por la Unión Europea » | [node 2174:45630](https://www.figma.com/design/N9L42LWe71mtaHhWww4mI0/Ekko-x-Al-B%C3%A2l%C3%A2t?node-id=2174-45630) |
| `credits/prtr.png` | Logo PRTR | [node 2174:45631](https://www.figma.com/design/N9L42LWe71mtaHhWww4mI0/Ekko-x-Al-B%C3%A2l%C3%A2t?node-id=2174-45631) |
| `credits/mitgob-set.png` | Logo Ministerio / SET | [node 2174:45632](https://www.figma.com/design/N9L42LWe71mtaHhWww4mI0/Ekko-x-Al-B%C3%A2l%C3%A2t?node-id=2174-45632) |

### Favicon (optionnel — un favicon générique est déjà en place)

Un favicon fonctionnel (trois anneaux blancs sur fond bleu nuit) est déjà
généré et fonctionne dès la mise en ligne (`/favicon.svg`, `/favicon.ico`,
`/apple-touch-icon.png`). Si vous voulez le visuel exact de la maquette
(trois anneaux texturés sur fond pierre), exportez le node
[2173:70913](https://www.figma.com/design/N9L42LWe71mtaHhWww4mI0/Ekko-x-Al-B%C3%A2l%C3%A2t?node-id=2173-70913)
en PNG 1024×1024, puis régénérez les déclinaisons (voir commande dans
`/README.md`, section « Régénérer le favicon »).

### Aperçu Open Graph (optionnel)

`og-image.jpg` (1200×630) — utilisée quand le lien est partagé sur
WhatsApp/X/LinkedIn. Une capture d'écran de la page d'accueil desktop fait
très bien l'affaire.

---

Une fois tous les fichiers déposés avec les bons noms, il n'y a **rien
d'autre à modifier dans le code** : les chemins sont déjà branchés.
