// @ts-check
import { test, expect } from '@playwright/test';

// Avant chaque test, naviguer vers le site
test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/'); // Aller sur le site
});

// US1 : Authentification
test('01_connexion_compte_valide', async ({ page }) =>  {
    await page.locator('#user-name').fill('standard_user'); // remplir username avec "standard_user"
    await page.locator('#password').fill('secret_sauce'); // remplir password avec "secret_sauce"
    await page.click('#login-button'); // Cliquer sur le bouton Login
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html'); // Vérifier la redirection vers la page des produits
});

test('02_connexion_sans_username' , async ({ page }) =>  {
    await page.locator('#user-name').fill('standard_user'); // remplir username avec "standard_user"
    await page.click('#login-button'); // Cliquer sur le bouton Login
    await expect(page.locator('h3[data-test="error"]')).toHaveText('Epic sadface: Password is required');
});

test('03_connexion_sans_password' , async ({ page }) =>  {
    await page.locator('#password').fill('secret_sauce'); // remplir password avec "secret_sauce"
    await page.click('#login-button'); // Cliquer sur le bouton Login
    await expect(page.locator('h3[data-test="error"]')).toHaveText('Epic sadface: Username is required');
});


test('04_connexion_identifiants_incorrects', async ({ page }) =>  {
    await page.locator('#user-name').fill('wrong_username'); // remplir username avec "wrong_username"
    await page.locator('#password').fill('wrong_password'); // remplir password avec "wrong_password"
    await page.click('#login-button'); // Cliquer sur le bouton Login
    await expect(page.locator('h3[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service');
});

test('05_deconnexion', async ({ page }) =>  {
    await page.locator('#user-name').fill('standard_user'); // remplir username avec "standard_user"
    await page.locator('#password').fill('secret_sauce'); // remplir password avec "secret_sauce"
    await page.click('#login-button'); // Cliquer sur le bouton Login
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html'); // Vérifier la redirection vers la page des produits
    await page.click('#react-burger-menu-btn'); // Cliquer sur le bouton du menu latéral en haut à gauche
    await page.locator('a#logout_sidebar_link').click(); // cliquer sur Logout
    await expect(page).toHaveURL('https://www.saucedemo.com/'); // Vérifier que nous sommes redirigés sur la page de connexion 
});