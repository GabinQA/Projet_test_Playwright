## **US1. Authentification et gestion du compte** 

### **Description**  
L'utilisateur doit pouvoir accéder à son compte en toute sécurité via un système d'authentification. Cela inclut la connexion avec des identifiants valides, la gestion des erreurs en cas de saisie incorrecte et la possibilité de se déconnecter.

### **Critères d'acceptation**  

#### ✅ **Connexion réussie**  
- L’utilisateur peut entrer un nom d’utilisateur et un mot de passe valides pour accéder à son compte.  
- Une fois connecté, l’utilisateur est redirigé vers la page principale du site.  

#### ✅ **Gestion des erreurs**  
- Si les identifiants sont incorrects, un message d’erreur clair doit s’afficher.  
- Si un champ est laissé vide, un message d'erreur spécifique doit être affiché.  

#### ✅ **Déconnexion**  
- L’utilisateur peut se déconnecter via une option dédiée.  
- Après déconnexion, l’utilisateur est redirigé vers la page de connexion et ne peut plus accéder à son compte sans se reconnecter.  


---

### **🔹 Test 01 : Connexion avec un compte valide**  

#### **Description**  
Vérifier que l’utilisateur peut se connecter avec des identifiants valides.  

#### **Préconditions**  
📍 Se rendre sur le site [SauceDemo](https://www.saucedemo.com).  

#### **Étapes du test**  

| **#** | **Action** | **Données** | **Résultat attendu** |
|-------|-----------|-------------|----------------------|
| **1.** | Saisir le `Username` et `Password` dans les champs correspondants. | `Username: standard_user`<br>`Password: secret_sauce` | Les identifiants sont saisis. |
| **2.** | Cliquer sur le bouton `Login`. | - | L’utilisateur est redirigé vers la page des produits. |

---

### **🔹 Test 02 : Connexion invalide - Identifiants incorrects**  

#### **Description**  
Vérifier que la connexion échoue avec des identifiants incorrects.  

#### **Préconditions**  
📍 Se rendre sur le site [SauceDemo](https://www.saucedemo.com).  

#### **Étapes du test**  

| **#** | **Action** | **Données** | **Résultat attendu** |
|-------|-----------|-------------|----------------------|
| **1.** | Saisir un `Username` et un `Password` incorrects. | `Username: faux_user`<br>`Password: faux_mdp` | Les identifiants sont saisis. |
| **2.** | Cliquer sur `Login`. | - | Un message d’erreur s'affiche : **"Epic sadface: Username and password do not match any user in this service"**. |

---

### **🔹 Test 03 : Connexion invalide - Champ `Username` vide**  

#### **Description**  
Vérifier que la connexion échoue lorsque le champ `Username` est vide.  

#### **Préconditions**  
📍 Se rendre sur le site [SauceDemo](https://www.saucedemo.com).  

#### **Étapes du test**  

| **#** | **Action** | **Données** | **Résultat attendu** |
|-------|-----------|-------------|----------------------|
| **1.** | Laisser le champ `Username` vide et saisir un `Password` valide. | `Username: ` (vide)<br>`Password: secret_sauce` | Seul le mot de passe est saisi. |
| **2.** | Cliquer sur `Login`. | - | Un message d’erreur s'affiche : **"Epic sadface: Username is required"**. |

---

### **🔹 Test 04 : Connexion invalide - Champ `Password` vide**  

#### **Description**  
Vérifier que la connexion échoue lorsque le champ `Password` est vide.  

#### **Préconditions**  
📍 Se rendre sur le site [SauceDemo](https://www.saucedemo.com).  

#### **Étapes du test**  

| **#** | **Action** | **Données** | **Résultat attendu** |
|-------|-----------|-------------|----------------------|
| **1.** | Saisir un `Username` valide et laisser le champ `Password` vide. | `Username: standard_user`<br>`Password: ` (vide) | Seul le nom d’utilisateur est saisi. |
| **2.** | Cliquer sur `Login`. | - | Un message d’erreur s'affiche : **"Epic sadface: Password is required"**. |

---

### **🔹 Test 05 : Déconnexion de l'utilisateur connecté**  

#### **Description**  
Vérifier que l’utilisateur peut se déconnecter correctement.  

#### **Préconditions**  
📍 Se rendre sur le site [SauceDemo](https://www.saucedemo.com).  
📍 Être connecté avec :  
🔑 `Username: standard_user`  
🔑 `Password: secret_sauce`  

#### **Étapes du test**  

| **#** | **Action** | **Données** | **Résultat attendu** |
|-------|-----------|-------------|----------------------|
| **1.** | Cliquer sur l’icône du menu en haut à gauche. | - | Le menu latéral s’ouvre. |
| **2.** | Cliquer sur `Logout`. | - | L’utilisateur est redirigé vers la page de connexion. |

---
