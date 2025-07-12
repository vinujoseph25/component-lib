import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: '4b7344',
  reporter: 'junit',
  video: false,
  experimentalFetchPolyfill: true,
  chromeWebSecurity: false,
  requestTimeout: 15000,
  reporterOptions: {
    mochaFile: 'cypress/test-results/test-output-[hash].xml',
    toConsole: true,
    attachments: true,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
