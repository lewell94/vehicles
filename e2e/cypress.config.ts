import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run storyteq:serve:development',
        production: 'nx run storyteq:serve:production',
      },
      ciWebServerCommand: 'nx run storyteq:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
