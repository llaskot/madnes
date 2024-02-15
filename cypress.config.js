const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: "mochawesome",
  reporterOptions: {
    reportFilename: "[status]_[datetime]-[name]-report",
    timestamp: "longDate",
    reportDir: 'results',
    charts: true,
    code: true,
    overwrite: false,
    html: false,
    json: true,
    addUncougth: true
  },

  e2e: {
    baseUrl: 'https://www.qamadness.com',
    viewportWidth: 1920,
    viewportHeight: 1080,
    videosFolder: 'mochawesome-report/assets/videos',
    screenshotsFolder: 'mochawesome-report/assets/screenshots',
    video: true,
    screenshotOnRunFailure: true,
    retries: { "runMode": 2, "openMode": 2 },
    defaultCommandTimeout: 5000,
    pageLoadTimeout: 8000,
    requestTimeout: 5000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
