# Portfolio

Portfolio personnel réalisé avec Angular. Il présente mon parcours, mes compétences et mes projets. L'application utilise une API Express distincte pour récupérer les informations des projets.

## Fonctionnalités

- Présentation et parcours
- Compétences techniques
- Liste de projets avec descriptions, technologies et captures d'écran
- Thème clair/sombre mémorisé dans le navigateur
- Liens de contact, GitHub et LinkedIn
- API Express avec une route de vérification et une route de consultation des projets

## Technologies

- **Interface :** Angular 22, TypeScript, HTML et CSS
- **API :** Node.js, Express 5 et CORS
- **Tests :** Vitest via Angular CLI

## Prérequis

- Node.js et npm

## Installation et lancement en local

L'interface et l'API se lancent dans deux terminaux distincts.

### 1. Démarrer l'API

Depuis la racine du projet :

```bash
cd server
npm install
npm run dev
```

Le serveur démarre sur `http://localhost:3000`. Il redémarre automatiquement lorsque ses fichiers changent.

### 2. Démarrer l'interface

Dans un autre terminal, depuis la racine du projet :

```bash
npm install
npm start
```

Ouvrir ensuite `http://localhost:4200`. En développement, Angular utilise l'URL de l'API locale (`http://localhost:3000/api`).

## API

| Méthode | Route | Description |
| --- | --- | --- |
| `GET` | `/api/health` | Vérifie que l'API est disponible |
| `GET` | `/api/projects` | Renvoie la liste des projets |

Les données des projets sont définies dans [`server/data/projects.js`](server/data/projects.js). Les images et autres fichiers publics de l'interface se trouvent dans [`public/`](public/).

## Configuration

- L'URL utilisée par l'interface est définie dans [`src/environments/environment.ts`](src/environments/environment.ts) pour la production et [`src/environments/environment.development.ts`](src/environments/environment.development.ts) pour le développement local.
- L'API écoute le port `3000` par défaut. La variable d'environnement `PORT` permet de le modifier.
- Pour autoriser un domaine de l'interface autre que `http://localhost:4200`, définir `FRONTEND_URL` côté serveur.
- Sur Vercel, la variable `VERCEL` empêche le serveur d'ouvrir son propre port : la plateforme prend en charge le démarrage de l'application.

## Commandes utiles

Depuis la racine du projet :

```bash
npm start       # Lance le serveur de développement Angular
npm run build   # Génère la version de production dans dist/
npm test        # Lance les tests Angular
```

Depuis le dossier `server/` :

```bash
npm run dev     # Lance l'API avec redémarrage automatique
```
