## **US2. Navigation & Consultation des Produits**

### **Description**  
L’utilisateur doit pouvoir accéder à la liste des produits une fois connecté, trier les articles selon différents critères (prix ou nom) et consulter les détails d’un produit spécifique.

### **Critères d'acceptation**  

#### ✅ **Affichage des produits après connexion**  
- L’utilisateur connecté voit immédiatement une liste de produits disponibles.  
- Chaque produit affiche son nom, son prix et une image.

#### ✅ **Tri des produits**  
- L’utilisateur peut trier les produits par ordre alphabétique (A → Z, Z → A).  
- Il peut également les trier par prix (du plus bas au plus élevé et inversement).

#### ✅ **Détails d’un produit**  
- L’utilisateur peut cliquer sur un produit pour afficher sa fiche détaillée.  
- La fiche affiche : le nom, la description, le prix, et une image du produit.

---

### **🔹 Test 06 : Affichage de la liste des produits après connexion**  

#### **Description**  
Vérifier que la liste des produits est bien affichée après une connexion réussie.  

#### **Préconditions**  
📍 Se rendre sur le site [SauceDemo](https://www.saucedemo.com).  
📍 Se connecter avec :  
🔑 `Username: standard_user`  
🔑 `Password: secret_sauce`  

#### **Étapes du test**  

| **#** | **Action** | **Données** | **Résultat attendu** |
|-------|-----------|-------------|----------------------|
| **1.** | Vérifier la présence des produits sur la page. | - | Une liste de produits s’affiche, chaque produit a un nom, un prix et une image. |

---

### **🔹 Test 07 : Tri des produits par nom et prix**  

#### **Description**  
Vérifier que les options de tri permettent d’organiser les produits selon le nom ou le prix.  

#### **Préconditions**  
📍 Se rendre sur le site [SauceDemo](https://www.saucedemo.com).  
Se connecter avec :  
🔑 `Username: standard_user`  
🔑 `Password: secret_sauce`  

#### **Étapes du test**  

| **#** | **Action** | **Données** | **Résultat attendu** |
|-------|-----------|-------------|----------------------|
| **1.** | Cliquer sur le menu déroulant de tri. | - | Le menu s’ouvre. |
| **2.** | Sélectionner "Name (A to Z)". | - | Les produits sont triés par nom de A à Z. |
| **3.** | Sélectionner "Name (Z to A)". | - | Les produits sont triés par nom de Z à A. |
| **4.** | Sélectionner "Price (low to high)". | - | Les produits sont triés par prix croissant. |
| **5.** | Sélectionner "Price (high to low)". | - | Les produits sont triés par prix décroissant. |

---

### **🔹 Test 08 : Consultation des détails d’un produit**  

#### **Description**  
Vérifier qu’un utilisateur peut consulter les informations détaillées d’un produit.  

#### **Préconditions**  
📍 Se rendre sur le site [SauceDemo](https://www.saucedemo.com).  
Se connecter avec :  
🔑 `Username: standard_user`  
🔑 `Password: secret_sauce`   

#### **Étapes du test**  

| **#** | **Action** | **Données** | **Résultat attendu** |
|-------|-----------|-------------|----------------------|
| **1.** | Cliquer sur le nom d’un produit. | Ex : Sauce Labs Backpack | L’utilisateur est redirigé vers la fiche du produit. |
| **2.** | Vérifier les informations affichées. | - | La page détail affiche le nom, la description, le prix, et une image du produit. |
