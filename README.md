# Flouflix

Application mobile de recherche de séries, réalisée en binôme avec Thibaut en deux jours pendant le Bachelor.

La consigne était inversée : produire volontairement l'interface la plus laide et la moins utilisable possible.
L'exercice servait à découvrir React Native et Expo, et à pousser les mauvaises pratiques d'ergonomie assez loin
pour comprendre pourquoi ce sont de mauvaises pratiques.

Sous la couche ratée, l'application fonctionne vraiment.

## Captures

| Liste                                | Carte                                                 | Détail                                             |
|--------------------------------------|-------------------------------------------------------|----------------------------------------------------|
| ![La liste](docs/captures/Liste.png) | ![Une carte de série](docs/captures/Liste_cartes.jpg) | ![Le détail d'une série](docs/captures/Detail.jpg) |

| Favoris annoncés                                                           | Pop-up de tutoriel                                       | Favoris                                 |
|----------------------------------------------------------------------------|----------------------------------------------------------|-----------------------------------------|
| ![Les favoris annoncés en bas de la page](docs/captures/Liste_favoris.jpg) | ![Le pop-up de tutoriel](docs/captures/Detail_popup.jpg) | ![Un favori](docs/captures/Favoris.jpg) |

## Fonctionnalités

- Trois écrans : liste, détail et favoris, avec la navigation par fichiers d'Expo Router.
- Recherche par titre sur les données de l'[API TVmaze](https://www.tvmaze.com/api), publique et sans clé.
- Ajout et retrait de favoris, état partagé entre les écrans par un contexte React.

## Technologies

React Native, Expo (SDK 54), Expo Router, JavaScript.

## Lancer le projet

```bash
npm install
npx expo start
```

Puis ouvrir l'application dans Expo Go, un émulateur, ou dans le navigateur avec la touche `w`.
