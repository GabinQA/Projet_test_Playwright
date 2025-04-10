## **US4. Passage de Commande**

### **Description**  
L’utilisateur doit pouvoir finaliser une commande en remplissant un formulaire avec ses informations personnelles. Le processus doit afficher des erreurs si les champs ne sont pas remplis, et une confirmation à la fin.

### **Critères d'acceptation**  

#### ✅ **Passage de commande avec infos valides**  
- L’utilisateur peut finaliser une commande en remplissant tous les champs requis.  
- La commande est confirmée après validation.

#### ✅ **Erreur si champs vides**  
- Si l’un des champs est vide, un message d’erreur s’affiche et empêche la validation.  

---

### **🔹 Test 12 : Passage d’une commande réussie**  

#### **Description**  
Vérifier qu’une commande peut être passée avec des informations valides et qu’une page de confirmation s’affiche.

#### **Préconditions**  
📍 Se rendre sur le site [SauceDemo](https://www.saucedemo.com).  
📍 Se connecter avec :  
🔑 `Username: standard_user`  
🔑 `Password: secret_sauce`  
📍 Ajouter au moins un produit au panier.  

#### **Étapes du test**  

| **#** | **Action** | **Données** | **Résultat attendu** |
|-------|------------|-------------|------------------------|
| **1.** | Cliquer sur l'icône du panier | - | La page "Your Cart" s'affiche |
| **2.** | Cliquer sur le bouton "Checkout" | - | La page "Checkout: Your Information" s'affiche |
| **3.** | Remplir tous les champs obligatoires | First Name: test<br>Last Name: test<br>Postal Code: 34130 | Les champs sont correctement remplis |
| **4.** | Cliquer sur "Continue" | - | La page "Checkout: Overview" s'affiche |
| **5.** | Vérifier le récapitulatif et cliquer sur "Finish" | - | La page de confirmation "THANK YOU FOR YOUR ORDER" s'affiche |

---

### **🔹 Test 13 : Passage d’une commande avec champs vides**  

#### **Description**  
Vérifier que le système affiche un message d’erreur si l’un des champs requis n’est pas rempli lors du checkout.

#### **Préconditions**  
📍 Se rendre sur le site [SauceDemo](https://www.saucedemo.com).  
📍 Se connecter avec :  
🔑 `Username: standard_user`  
🔑 `Password: secret_sauce`  
📍 Ajouter au moins un produit au panier.  

#### **Étapes du test**  

| **#** | **Action** | **Données** | **Résultat attendu** |
|-------|------------|-------------|------------------------|
| **1.** | Aller sur la page panier et cliquer sur "Checkout" | - | La page "Checkout: Your Information" s'affiche |
| **2.** | Laisser le champ "First name" vide<br> - remplir le champ "Last name" et "Zip code" | Last name : test <br> Zip code : 34130 | Un message d’erreur s’affiche : "Error: First Name is required" |
| **3.** | Laisser le champ "Last name" vide<br> - remplir le champ "First name" et "Zip code" | First name : test <br> Zip code : 34130 | Un message d’erreur s’affiche : "Error: Last Name is required" |
| **4.** | Laisser le champ "Postal code" vide<br> - remplir le champ "First name" et "Last name" | First name : test <br> Last name : 34130 | Un message d’erreur s’affiche : "Error: Postal code is required" |
