# 📌 Projet de Tests Automatisés - SauceDemo

## 📖 Présentation du projet

Le projet **SauceDemo** est une suite de tests automatisés visant à valider les fonctionnalités principales du site de commerce en ligne. Ces tests couvrent les processus essentiels tels que l'authentification, la navigation, la gestion du panier et le passage de commande. L'objectif est de garantir que ces fonctionnalités sont performantes et fonctionnelles, tout en assurant une couverture pour des tests de régression futurs.

## 🎯 Objectifs

- **Automatiser les tests fonctionnels** du site **SauceDemo**
- **Valider les scénarios clés** : connexion, consultation des produits, gestion du panier, passage de commande
- **Fournir un cadre de tests réutilisable** pour des tests de régression à l'avenir
- **Illustrer l'utilisation de Playwright** pour l'automatisation des tests
- **Pratiquer la gestion des cas de test** via des outils comme Jira/Xray

## 📌 Périmètre des tests

- **Authentification** : connexion, gestion des erreurs et déconnexion
- **Navigation** : Accès aux produits et consultation des détails
- **Panier** : Ajout, suppression, mise à jour du total
- **Commande** : Finalisation d’une commande et gestion des erreurs

## ⛔ Ce projet ne couvre pas

- **Page "About"** : Le projet ne teste pas la page "About" qui contient des informations sur l'entreprise. Cette page n'est pas incluse dans le cadre de l'automatisation des tests.
- **Les autres types de comptes** : Le projet prend en compte seulement l'utilisateur sans erreurs : "standard_user"

## 🛠️ Stack technique

- **Langage** : JavaScript
- **Framework de test** : [Playwright](https://playwright.dev/)
- **Gestion des tests** : Jira/Xray ---> Tests retranscrits  dans le dossier test_description

## 📂 Structure du projet

## 📂 Structure du projet
```
 ├── 📂 test_description         # Fichiers de description des tests manuels en .md
 │   ├── US1_authentification.md # Description des tests d'authentification 
 │   ├── US2_navigation.md       # Description des tests de navigation // 
 │   ├── US3_panier.md           # Description des tests du panier // 
 │   ├── US4_commande.md         # Description des tests de commande // 
 ├── 📂 tests                    # Fichiers des tests automatisés en .js
 │   ├── authentification.test.js  # Tests automatisés liés à l'authentification 
 │   ├── navigation.test.js      # Tests automatisés liés à la navigation // 
 │   ├── panier.test.js            # Tests automatisés liés au panier // 
 │   ├── commande.test.js           # Tests automatisés liés au passage de commande // 
 ├── .gitignore                  # Liste des fichiers et dossiers à ignorer par Git
 ├── README.md                   # Documentation du projet
 ├── package-lock.json           # Verrouillage des versions des dépendances
 ├── package.json                # Dépendances et scripts npm
 ├── playwright.config.js         # Configuration Playwright

```

### **Synthèse des cas de test**

| User Story | Cas de Test | Description |
| --- | --- | --- |
| **US1** - Authentification | TC01 | Connexion avec un compte valide |
|  | TC02 | Connexion sans nom d’utilisateur |
|  | TC03 | Connexion sans mot de passe |
|  | TC04 | Connexion avec identifiants incorrects |
|  | TC05 | Déconnexion |
| **US2** - Navigation | TC06 | Vérification de l'affichage des produits |
|  | TC07 | Tri des produits |
|  | TC08 | Consultation des détails d’un produit |
| **US3** - Panier | TC09 | Ajouter un produit au panier |
|  | TC10 | Supprimer un produit du panier |
|  | TC11 | Vérifier la mise à jour du total |
| **US4** - Commande | TC12 | Passage d’une commande réussie |
|  | TC13 | Passage d’une commande avec erreurs |

## 🚀 Exécution des tests
### Installation des dépendances
```sh
npm install
```

### Exécuter tous les tests
```sh
npx playwright test
```

### Exécuter un test spécifique
```sh
npx playwright test tests/authentification.test.js
```

## 📌 Améliorations futures
- Ajouter des tests pour les scénarios avancés
---
🛠 **Auteur** : PAOLINO Gabin