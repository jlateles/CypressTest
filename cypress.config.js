const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "4qeou5",
  // ...rest of the Cypress project config
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,
    reporter:'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: false,
      charts: true,
      timestamp: "mmddyyyy_HHMMss" }

  },
});
