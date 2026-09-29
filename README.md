# Portfolio — Achraf Belasri

Portfolio statique en français, anglais, espagnol et arabe, compatible avec Vercel.
Ouvrir `index.html` ou servir ce dossier avec un serveur HTTP statique. Aucune compilation n’est nécessaire.

## Organisation

- `index.html`, `en.html`, `es.html`, `ar.html` : portfolio dans les quatre langues.
- `cv-fr.html`, `cv-en.html`, `cv-es.html`, `cv-ar.html` : CV consultables et imprimables.
- `cv_Achraf_BELASRI.pdf` : PDF français original, conservé.
- `assets/site.css`, `assets/site.js` : présentation et interactions communes.
- `assets/cv.css` : présentation commune des CV.
- `assets/portrait.jpg` : photo originale extraite des pages, sans retouche.

Les pages restent lisibles sans JavaScript. Les menus et les détails des projets utilisent des éléments HTML natifs. Les polices disposent de solutions de remplacement locales.

## Version précédente et retour arrière

La version avant amélioration correspond au commit :

`3f60f786e258316d572c46bd542f1b7980760219`

Elle est conservée dans la branche distante :

`backup/portfolio-before-refresh-2026-09-27`

[Consulter la sauvegarde](https://github.com/A0707/AchrafBELASRI/tree/backup/portfolio-before-refresh-2026-09-27)

Pour récupérer un élément précis, copier son contenu depuis cette branche puis créer un nouveau commit. Pour annuler la refonte complète après publication, utiliser `git revert` sur le commit intitulé « Improve multilingual portfolio navigation and project presentation ». Cela conserve l’historique et les éventuelles modifications ultérieures. Ne pas réinitialiser de force la branche principale.

## Contenu à compléter

Les projets reprennent les interventions et résultats déjà présents dans le portfolio. Aucun chiffre, diplôme obtenu ou certification supplémentaire n’a été ajouté. Les résultats mesurés, captures anonymisées et schémas propres à chaque réalisation pourront être ajoutés lorsqu’ils seront disponibles. Le statut « en cours » de la licence reprend celui des CV existants.

## Vérifications de la refonte

- Quatre langues et sept largeurs d’écran : 320, 360, 390, 600, 768, 1024 et 1440 pixels.
- Liens internes et fichiers locaux disponibles, affichage des CV sur mobile.
- Menus au clavier, fermeture avec Échap, sélection des langues et ouverture des interventions.
- Contenu et menus accessibles sans JavaScript.
- Aucun débordement horizontal ni erreur JavaScript dans ces tests locaux.

Les mesures de performance du déploiement Vercel restent à vérifier sur le site publié.
