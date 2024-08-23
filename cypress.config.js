const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Base URL for your tests
    // baseUrl: 'https://4r.hashe.com/',
    
    // Combine the patterns into a single `specPattern` using an array
    specPattern: [
      'cypress/integration/e2e/tests/**/*.{js,ts,jsx,tsx}', // Include specific folders and file types
      'cypress/integration/**/*.spec.js' // Include all .spec.js files in the integration folder
    ],

    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
  },
});

