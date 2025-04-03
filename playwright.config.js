// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright configuration file.
 * Reference: https://playwright.dev/docs/test-configuration
 */

export default defineConfig({
  timeout: 10000,  // Temps maximum d'attente pour chaque test

  testDir: './tests',  // Répertoire contenant les tests

  // Options liées à l'exécution des tests
  fullyParallel: true,  // Exécuter les tests dans les fichiers en parallèle
  forbidOnly: !!process.env.CI,  // Empêche les tests marqués avec test.only en CI
  retries: process.env.CI ? 2 : 0,  // Réessayer les tests échoués en CI
  workers: process.env.CI ? 1 : undefined,  // Nombre de workers en CI
  reporter: 'html',  // Rapport des résultats au format HTML

  // Paramètres partagés pour tous les projets ci-dessous
  use: {
    // baseURL: 'http://127.0.0.1:3000',  // URL de base (commentée ici, à personnaliser si nécessaire)
    trace: 'on-first-retry',  // Collecter des traces lors des premières tentatives échouées
  },

  // Configuration des projets pour différents navigateurs
  projects: [
    {
      name: 'chromium',  // Projet pour Chromium (Chrome)
      use: { ...devices['Desktop Chrome'] },  // Utilise les paramètres de périphérique pour Chrome
    },

    {
      name: 'firefox',  // Projet pour Firefox
      use: { ...devices['Desktop Firefox'] },  // Utilise les paramètres de périphérique pour Firefox
    },

    {
      name: 'webkit',  // Projet pour Webkit (Safari)
      use: { ...devices['Desktop Safari'] },  // Utilise les paramètres de périphérique pour Safari
    },
  ],

  // Serveur local pour démarrer avant les tests (commenté ici, à activer si nécessaire)
  // webServer: {
  //   command: 'npm run start',  // Commande pour démarrer le serveur local
  //   url: 'http://127.0.0.1:3000',  // URL du serveur local
  //   reuseExistingServer: !process.env.CI,  // Réutiliser le serveur existant en dehors de CI
  // },
});
