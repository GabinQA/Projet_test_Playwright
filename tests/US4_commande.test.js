// @ts-check
import { test, expect,  } from '@playwright/test';;

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
  
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  
    // On récupère toutes les cartes des produits
    const cards = page.locator('.inventory_item');
    const count = await cards.count();
  
    // Générer un tableau avec les index, mélanger et en prendre 2 aléatoirement
    const indices = [...Array(count).keys()].sort(() => 0.5 - Math.random()).slice(0, 2);
  
    for (const i of indices) {
      const card = cards.nth(i);
      const name = await card.locator('.inventory_item_name').innerText();
      console.log(`🛒 Produit ajouté au panier : ${name}`);
      await card.locator('button:has-text("Add to cart")').click();
    }

    await page.click('[data-test="shopping-cart-link"]'); //Cliquer sur le panier
    await expect(page).toHaveURL(/.*cart\.html/); // Vérifier l'URL du panier
    await page.click('[data-test="checkout"]'); // Cliquer sur le bouton checkout
  });
  

test('TC12 - Passage de commande réussie', async ({ page }) => {

    // Remplir les champs du checkout 
    await page.fill('#first-name', 'Gabin');
    await page.fill('#last-name', 'PAOLINO');
    await page.fill('#postal-code', '34130');

    await page.locator('[data-test="continue"]').click(); // Cliquer sur le bouton "Continue"
    await page.locator('[data-test="finish"]').click(); // Cliquer sur le bouton "Finish"

    //Vérification que la commande est confirmée
    await expect(page.locator('[data-test="complete-header"]')).toHaveText('Thank you for your order!');
    await expect(page.locator('[data-test="complete-text"]')).toHaveText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
    await expect(page.locator('[data-test="back-to-products"]')).toBeVisible(); // vérfifie que le bouton "Back home" est visible sur la page
    await expect(page.locator('[data-test="back-to-products"]')).toBeEnabled(); // vérifie que le bouton "Back home" est cliquable 
    await expect(page.locator('[data-test="back-to-products"]')).toHaveText('Back Home'); // vérifie que le texte est bien "Back home"
});

test('TC13 - Passage de commande avec des champs vides', async ({ page }) => {

    // Laisser le champ "First name" vide et remplir les 2 autres

    await page.fill('#first-name', '');
    await page.fill('#last-name', 'PAOLINO');
    await page.fill('#postal-code', '34130');
    await page.locator('[data-test="continue"]').click();
    await expect(page.locator('[data-test="error"]')).toHaveText('Error: First Name is required'); // vérifie que le texte d'erreur est correct

    // Laisser le champ "Last name" vide et remplir les 2 autres

    await page.fill('#last-name', '');
    await page.fill('#first-name', 'Gabin');
    await page.fill('#postal-code', '34130');
    await page.locator('[data-test="continue"]').click();
    await expect(page.locator('[data-test="error"]')).toHaveText('Error: Last Name is required'); // vérifie que le texte d'erreur est correct

    // Laisser le champ "Postal code" vide et remplir les 2 autres

    await page.fill('#postal-code', '');
    await page.fill('#first-name', 'Gabin');
    await page.fill('#last-name', 'PAOLINO');
    await page.locator('[data-test="continue"]').click();
    await expect(page.locator('[data-test="error"]')).toHaveText('Error: Postal Code is required'); // vérifie que le texte d'erreur est correct
});