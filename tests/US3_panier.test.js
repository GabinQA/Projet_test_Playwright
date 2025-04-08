// @ts-check
import { test, expect,  } from '@playwright/test';

// Avant chaque test, naviguer vers le site
test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/'); // Aller sur le site
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    // Vérifie qu'on est bien connecté
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('TC09 - Ajouter un produit au panier', async ({ page }) => {

    // ajouter un produit au panier et vérifier que le badge affiche "1"
    await page.click('#add-to-cart-sauce-labs-backpack') // Cliquer sur add to cart du produit sauce labs backpack
    await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible(); // vérfifie que le bouton remove est apparu à la place du bouton add to cart 
    await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeEnabled(); // vérifie que le bouton remove est cliquable
    await page.waitForSelector('[data-test="shopping-cart-badge"]'); // attendre que le sélecteur du badge s'affiche
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1'); // vérifier qu'il affiche '1'

    // ajouter un autre produit et vérfifier que le badge affiche "2"
    await page.click('#add-to-cart-sauce-labs-fleece-jacket') // Cliquer sur add to cart du produit sauce labs fleece jacket
    await expect(page.locator('[data-test="remove-sauce-labs-fleece-jacket"]')).toBeVisible(); // vérfifie que le bouton remove est apparu à la place du bouton add to cart 
    await expect(page.locator('[data-test="remove-sauce-labs-fleece-jacket"]')).toBeEnabled(); // vérifie que le bouton remove est cliquable 
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('2'); // vérifier qu'il affiche '2'

});

test('TC10 - Supprimer un produit du panier depuis la page panier', async ({ page }) => {

    await page.click('#add-to-cart-sauce-labs-backpack') // Cliquer sur add to cart du produit sauce labs backpack
    await page.click('#add-to-cart-sauce-labs-fleece-jacket') // Cliquer sur add to cart du produit sauce labs fleece jacket
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('2'); // vérifier que le badge du panier affiche '2'
    await page.click('[data-test="shopping-cart-link"]'); // Cliquer sur le panier
    await expect(page).toHaveURL(/.*cart\.html/); // vérifier que cart.html est dans l'URL de la page = on est sur la page panier

    await expect(page.locator('div[data-test="inventory-item"] >> text="Sauce Labs Backpack"')).toBeVisible();  // Vérifier que les produits sont dans le panier
    await expect(page.locator('div[data-test="inventory-item"] >> text="Sauce Labs Fleece Jacket"')).toBeVisible(); // Vérifier que les produits sont dans le panier

    await page.locator('button[data-test="remove-sauce-labs-backpack"]').click(); // Cliquer sur le bouton remove sous le produit sauce labs backpack
    await expect(page.locator('div[data-test="inventory-item"] >> text="Sauce Labs Backpack"')).not.toBeVisible(); // vérifie qu'il n'est plus visible après suppression
    await expect(page.locator('div[data-test="inventory-item"] >> text="Sauce Labs Fleece Jacket"')).toBeVisible(); // vérifie que l'autre produit reste visible
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1'); // vérifier que le badge du panier affiche 1.
});

test('TC11 vérifier la mise à jour du prix total du panier', async ({ page }) => {
  
    // Fonctions utilitaires spécifiques à ce test
    async function fillCheckoutForm(page) {
      await page.fill('#first-name', 'Gabin');
      await page.fill('#last-name', 'PAOLINO');
      await page.fill('#postal-code', '34130');
      await page.locator('[data-test="continue"]').click();
    }
  
    async function getSubtotal(page) {
      const subtotalText = await page.locator('[data-test="subtotal-label"]').textContent();
      return parseFloat(subtotalText.replace('Item total: $', ''));
    }
  
    async function calculateExpectedTotal(page) {
      const priceElements = await page.locator('.inventory_item_price').allTextContents();
      const prices = priceElements.map(p => parseFloat(p.replace('$', '')));
      return prices.reduce((acc, val) => acc + val, 0);
    }

    // Test
    await page.click('#add-to-cart-sauce-labs-backpack'); // Cliquer sur add to cart du produit sauce labs backpack
    await page.click('#add-to-cart-sauce-labs-fleece-jacket'); // Cliquer sur add to cart du produit sauce labs fleece jacket
    await page.click('[data-test="shopping-cart-link"]'); // Cliquer sur le panier
    await expect(page).toHaveURL(/.*cart\.html/); // Vérifier que cart.html est dans l'URL de la page = on est sur la page panier
  
    // Calculer le total attendu
    const expectedTotal = await calculateExpectedTotal(page);
  
    await page.click('[data-test="checkout"]'); // Cliquer sur le bouton checkout
    await fillCheckoutForm(page); // Remplir le formulaire d'informations
  
    // Vérifier le total affiché
    const actualTotal = await getSubtotal(page);
    expect(actualTotal).toBeCloseTo(expectedTotal, 0); // Vérifier si le total attendu est le même que celui affiché dans le checkout
    
    console.log(`Le total actuel est : ${actualTotal}, comparé au total attendu : ${expectedTotal}`);
  
    // Supprimer un article et voir si le total a bien changé et le recomparer
    await page.click('[data-test="shopping-cart-link"]'); // cliquer sur le panier
    await page.click('[data-test="remove-sauce-labs-backpack"]'); // Retirer un produit
  
    // Calculer le nouveau total attendu après suppression
    const updatedTotal = await calculateExpectedTotal(page);
  
    await page.click('[data-test="checkout"]');
    await fillCheckoutForm(page); // Remplir de nouveau le formulaire
  
    // Vérifier le total affiché après suppression
    const updatedActualTotal = await getSubtotal(page);
    expect(updatedActualTotal).toBeCloseTo(updatedTotal, 0); // Vérifier si le total mis à jour est correct
  
    console.log(`Nouveau total après suppression d'un article : ${updatedActualTotal}, attendu : ${updatedTotal}`);
  });


