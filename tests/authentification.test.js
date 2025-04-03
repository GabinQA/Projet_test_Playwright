// @ts-check
import { test, expect } from '@playwright/test';

// US1 : Authentification

test('02_connexion_compte_valide', async ({ page }) =>  {

    await page.goto('https://www.demoblaze.com/'); // Aller sur le site 
    await page.getByRole('link', { name: 'Log in' }).click(); // Cliquer sur le bouton Log in
    await page.locator('#loginusername').fill('test'); // remplir username avec "test" (compte déja crée préalablement)
    await page.locator('#loginpassword').fill('test'); // remplir password avec "test" 
    await page.getByRole('button', { name: 'Log in' }).click(); // Cliquer sur le bouton Log in
    await expect(page.locator('#nameofuser')).toContainText('Welcome test'); // S'assurer que l'utilisateur est connecté en localisant "Welcome test" dans la nav bar

});
