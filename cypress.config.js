const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      allureWriter(on, config); // Ativa o plugin Allure
      return config;
    },
    baseUrl: 'https://www.vr.com.br',
    specPattern: 'cypress/e2e/tests/**/*.cy.{js,jsx,ts,tsx}',
    env: {
      allure: true, // Ativa o uso do Allure nos testes
      allureReuseAfterSpec: true, // Reutiliza o relatório após cada spec
    },
    experimentalMemoryManagement: true, // Habilita o gerenciamento experimental de memória
    numTestsKeptInMemory: 1, // Reduz o número de testes mantidos na memória
  },
});
