const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    API: "https://express-ph9i.onrender.com",
    FRONT_URL: "https://preeminent-cascaron-963d93.netlify.app",
  },
});
