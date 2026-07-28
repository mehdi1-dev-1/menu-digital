# Pop's — Menu Digital (QR)

Ce petit projet fournit un menu digital responsive prêt à être déployé. Le design reprend un style sombre avec accents dorés pour correspondre à vos visuels.

Contenu du dossier:
- `index.html` — page principale
- `css/styles.css` — styles
- `js/script.js` — données du menu + recherche/filtre

Personnalisation rapide
1. Ouvrez `js/script.js` et modifiez les éléments du tableau `menuData` si vous voulez ajuster les noms ou prix.
2. Remplacez l'URL du QR dans `index.html` (balise `img#qr-img`) par l'URL publique où vous déploierez le site (ex: https://votre-entreprise.github.io/nom-repo/).

Générer un QR Code
Vous pouvez générer un QR public via l'API gratuite suivante (remplacez `URL`):

```
https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=URL
```

Exemple (remplacez `URL` par votre lien de production et collez l'URL de l'image dans `index.html`):

```
https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://monsite.example.com
```

Déploiement rapide
- GitHub Pages: poussez ce dossier dans un repo, activez Pages sur la branche `main` > `/` root.
- Netlify: glissez-déposez le dossier sur Netlify Drop ou connectez le repo Git.

Conseils pour un rendu professionnel
- Remplacez les images d'illustration par vos photos optimisées (webp/jpg réduits).
- Ajoutez un favicon et un logo en haut à gauche.
- Si vous voulez prise de commande en ligne, liez le bouton QR à une page de commande (formulaire, WhatsApp API, ou plateforme de livraison).

Préparation pour rendu professionnel

1. Remplacez `assets/logo.png` par votre logo (transparent PNG recommandé, 400x400 px). Si vous n'avez pas d'assets, je peux générer un placeholder.
2. Ajoutez `assets/favicon.png` (32x32). Sinon supprimez la balise `<link rel="icon">` dans `index.html`.
3. Dans `js/script.js` remplacez la constante `WHATSAPP_NUMBER` par votre numéro international (sans `+`) si vous souhaitez que le bouton "Commander (WhatsApp)" fonctionne.
4. Remplacez l'URL du QR dans `index.html` (balise `img#qr-img`) par l'URL publique finale après déploiement — ou me donnez l'URL et je l'intègre.

Étapes de livraison que je peux faire pour vous
- Générer le QR final et l'insérer dans la page (fournissez l'URL de production).
- Créer une archive ZIP prête à déployer contenant tous les fichiers.
- Personnaliser le design (couleurs, typographie, ajouter logo et images optimisées).

Déploiement rapide
```
git init
git add .
git commit -m "Menu digital Pop's"
git remote add origin <votre-repo>
git push -u origin main
```
Activez GitHub Pages ou connectez le repo à Netlify.

Que voulez-vous que je fasse maintenant ?
- Intégrer l'URL finale et générer le QR + mettre à jour `index.html`.
- Créer l'archive ZIP prête à déployer.
- Personnaliser palette/typo et ajouter logo (si vous fournissez les fichiers).
