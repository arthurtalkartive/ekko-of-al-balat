# Polices — Fratelli & Sofia Pro

Le CSS (`/assets/css/fonts.css`) est déjà prêt à charger vos fichiers de
police. Il suffit de déposer les fichiers suivants dans ce dossier, avec
exactement ces noms :

| Fichier attendu | Police | Graisse |
|---|---|---|
| `Fratelli-Regular.woff2` (+ `.woff`) | Fratelli | Regular (titres) |
| `SofiaPro-Regular.woff2` (+ `.woff`) | Sofia Pro | Regular |
| `SofiaPro-SemiBold.woff2` (+ `.woff`) | Sofia Pro | Semi Bold (sous-titres H2) |
| `SofiaPro-Bold.woff2` (+ `.woff`) | Sofia Pro | Bold |
| `SofiaPro-Italic.woff2` (+ `.woff`) | Sofia Pro | Italic |

## Si vous n'avez que des fichiers .otf/.ttf

Convertissez-les en `.woff2` (bien plus léger) avec un outil en ligne comme
[Transfonter](https://transfonter.org/) ou [CloudConvert](https://cloudconvert.com/otf-to-woff2),
ou en local avec [fonttools](https://github.com/fonttools/fonttools) :

```bash
pip install fonttools brotli
fonttools varLib.instancer ... # ou simplement :
python -c "from fontTools.ttLib import TTFont; f=TTFont('Fratelli-Regular.otf'); f.flavor='woff2'; f.save('Fratelli-Regular.woff2')"
```

## En attendant

Tant que les fichiers ne sont pas déposés, le site s'affiche déjà
correctement grâce aux polices de secours (`Georgia` pour les titres,
police système pour le texte courant) — rien n'est cassé, seule
l'identité typographique exacte manque.
