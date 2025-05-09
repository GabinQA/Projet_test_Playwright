// @ts-check
import { test, expect } from '@playwright/test';

test.describe('US2 - Navigation & Consultation des Produits', () => {
  test.beforeEach(async ({ page }) => {
    // Aller sur la page de login
    await page.goto('https://www.saucedemo.com/');
    // Remplir les champs et se connecter
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    // Vérifie qu'on est bien connecté
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });

  test('TC06 - Tous les produits ont une image, un nom et un prix', async ({ page }) => {
    
    const productsSelector = '[data-test="inventory-item"]';
    await page.waitForSelector(productsSelector, { timeout: 5000 });
    const products = page.locator(productsSelector); // Localiser tous les éléments avec le sélecteur 'inventory-item'

    const count = await products.count();// Vérifier qu'il y a au moins un produit
    if (count === 0) {
      throw new Error('Il n\'y a aucun produit sur la page');
    }

    console.log(`Nombre de produits: ${count}`);

    // Vérifier que chaque produit a une image, un nom et un prix
    for (let i = 0; i < count; i++) {
      const product = products.nth(i);
      const img = product.locator('img');
      const name = product.locator('.inventory_item_name');
      const price = product.locator('.inventory_item_price');

      // Vérifier que l'image est visible
      await expect(img).toBeVisible();

      // Vérifier que le nom du produit est visible
      await expect(name).toBeVisible();

      // Vérifier que le prix du produit est visible
      await expect(price).toBeVisible();
      
    }
  });

  test('TC07 - Tri des produits par nom et prix', async ({ page }) => {
    
    // Test de tri dans l'ordre A-Z
    await page.selectOption('[data-test="product-sort-container"]', 'az'); 
    const ordre_az = await page.locator('.inventory_item_name').allInnerTexts();
    expect(ordre_az).toEqual([...ordre_az].sort());

    // Test de tri dans l'ordre Z-A
    await page.selectOption('[data-test="product-sort-container"]', 'za'); 
    const ordre_za = await page.locator('.inventory_item_name').allInnerTexts();
    expect(ordre_za).toEqual([...ordre_za].sort().reverse());

    // Test de tri prix dans l'ordre croissant
    await page.selectOption('[data-test="product-sort-container"]', 'lohi');  
    const prixTextCr = await page.locator('.inventory_item_price').allInnerTexts();
    const prixCroissants = prixTextCr.map(p => parseFloat(p.replace(/[^0-9,\.]/g, '').replace(',', '.'))); 
    expect(prixCroissants).toEqual([...prixCroissants].sort((a, b) => a - b)); 

    // Test de tri prix dans l'ordre décroissant
    await page.selectOption('[data-test="product-sort-container"]', 'hilo');  
    const prixTextDecr = await page.locator('.inventory_item_price').allInnerTexts();
    const prixDecroissants = prixTextDecr.map(p => parseFloat(p.replace(/[^0-9,\.]/g, '').replace(',', '.'))); 
    expect(prixDecroissants).toEqual([...prixDecroissants].sort((a, b) => b - a));
    
  });
  
  test('TC08 - Vérification de la page de détails du produit', async ({ page }) => {
    // Récupérer tous les éléments des produits (les liens d'images et de noms)
    const products = await page.locator('.inventory_item').all();
  
    // Choisir un produit aléatoire parmi les produits disponibles
    const randomProductIndex = Math.floor(Math.random() * products.length);
    const randomProduct = products[randomProductIndex];

    // Sélectionner aléatoirement entre cliquer sur l'image ou le nom du produit
    const clickOn = Math.random() < 0.5;  // 50% de chance de cliquer sur l'image

    if (clickOn) {
       
        await randomProduct.locator('a[data-test*="img-link"]').click(); 
    } else {
       
        await randomProduct.locator('a[data-test*="title-link"]').click();
    }

    // Attendre que l'URL contienne l'ID du produit choisi
    await page.waitForURL(/inventory-item.html\?id=\d+/);

    // Vérifier que le nom, la description, le prix et l'image sont visibles dans la page de détails
    await expect(page.locator('.inventory_details_name')).toBeVisible(); // vérifie que le nom du produit est visible
    await expect(page.locator('.inventory_details_desc')).toBeVisible(); // vérifie que la description du produit est visible
    await expect(page.locator('.inventory_details_price')).toBeVisible(); // vérifie que le prix du produit est visible
    await expect(page.locator('.inventory_details_img')).toBeVisible(); // vérifie que l'image du produit est visible
    await expect(page.locator('[data-test="add-to-cart"]')).toBeVisible(); // vérifie que le bouton du produit est visible
    await expect(page.locator('[data-test="add-to-cart"]')).toBeEnabled(); // Vérifie que le bouton est cliquable.
  });

});

