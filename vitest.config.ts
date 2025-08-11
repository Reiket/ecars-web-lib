import {defineConfig} from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    include: ['lib/**/*.test.ts', 'lib/**/*.test.tsx', 'lib/**/*.spec.ts', 'lib/**/*.spec.tsx'],
    globals: true,
    setupFiles: './vitest.setup.ts',

    reporters: ['default', ['junit', {outputFile: './test-results/junit.xml'}]],
    alias: {
      '@': '/lib',
      '@src': '/src',
    },
  },
});
