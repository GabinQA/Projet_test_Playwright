
## **US3. Gestion du Panier**

### **Description**  
L’utilisateur doit pouvoir ajouter des produits à son panier, les supprimer, et voir le total du panier se mettre à jour dynamiquement.

### **Critères d'acceptation**  

#### ✅ **Ajout de produit au panier**  
- L’utilisateur peut ajouter un ou plusieurs produits depuis la page d’accueil ou la fiche produit.  
- Le badge du panier (icône en haut à droite) se met à jour pour afficher le nombre d’articles.

#### ✅ **Suppression de produit du panier**  
- L’utilisateur peut supprimer un produit directement depuis la page panier.  
- Le produit disparaît du panier et le total est mis à jour.

#### ✅ **Mise à jour du total du panier**  
- Le total du panier doit refléter correctement l’ensemble des produits ajoutés.  
- Le total se met à jour dynamiquement après chaque ajout ou suppression.

---

### **🔹 Test 09 : Ajouter un produit au panier**  

#### **Description**  
Vérifier que l’ajout d’un produit dans le panier est bien pris en compte et que le badge du panier est mis à jour.

#### **Préconditions**  
📍 Se rendre sur le site [SauceDemo](https://www.saucedemo.com).  
📍 Se connecter avec :  
🔑 `Username: standard_user`  
🔑 `Password: secret_sauce`  

#### **Étapes du test**  

| **#** | **Action** | **Données** | **Résultat attendu** |
|-------|-----------|-------------|----------------------|
| **1.** | Cliquer sur le bouton "Add to cart" d’un produit. | Ex : Sauce Labs Bike Light | Le bouton se transforme en "Remove". |
| **2.** | Vérifier le badge du panier. | - | Le badge affiche "1". |
| **3.** | Cliquer sur le bouton "Add to cart" d’un autre produit. | / | Le bouton se transforme en "Remove". |
| **2.** | Vérifier le badge du panier. | - | Le badge affiche "2". |
---

### **🔹 Test 10 : Supprimer un produit du panier**  

#### **Description**  
Vérifier que la suppression d’un produit depuis la page panier fonctionne correctement.

#### **Préconditions**  
📍 Se rendre sur le site [SauceDemo](https://www.saucedemo.com).  
📍 Se connecter avec :  
🔑 `Username: standard_user`  
🔑 `Password: secret_sauce`  

📍 Aller sur la page du panier.

#### **Étapes du test**  

| **#** | **Action** | **Données** | **Résultat attendu** |
|-------|-----------|-------------|----------------------|
| **1.** | Cliquer sur le bouton "Add to cart" d’un produit. | Ex : Sauce Labs Bike Light | Le bouton se transforme en "Remove" et le badge affiche "1" sur le panier |
| **1.** | Cliquer sur l'icone du panier en haut a droite de l'écran | - | La page "Your Cart" s'affiche |
| **2.** | Cliquer sur "Remove" à côté du produit. | - | Le produit est retiré du panier. |
| **3.** | Vérifier le badge du panier. | - | Le badge n’affiche plus rien  |

---

### **🔹 Test 11 : Vérifier la mise à jour du total du panier**  

#### **Description**  
Vérifier que le total du panier reflète bien les produits ajoutés ou supprimés.

#### **Préconditions**  
📍 Se connecter et ajouter deux produits au panier.  

#### **Étapes du test**  

| **#** | **Action** | **Données** | **Résultat attendu** |
|-------|-----------|-------------|----------------------|
| **1.** | Cliquer sur l'icone du panier en haut a droite de l'écran | - | La page affiche les articles dans le panier |
| **2.** | Cliquer sur le bouton Checkout | - | La page "Checkout: Your Information" s'affiche et demande les informations de l'utilisateur |
| **3.** | Remplir les 3 champs avec les données indiquées | First Name : test<br> Last Name : test<br> Zip/Postal code : 34130<br>  | // |
| **4.** | Cliquer sur le bouton "Continue" | - | "La page Checkout: Overview" s'affiche et affiche les informations de la commande et le prix total qui doit être la somme du prix des articles dans le panier|