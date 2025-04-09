module.exports = {
  testEnvironment: 'jsdom',
  reporters: [
    'default',
    ['jest-junit', {
      outputDirectory: 'test-results',
      outputName: 'junit.xml',
    }]
  ],
  transform: {
    '^.+\\tsx?$': 'ts-jest',
  },
  preset: 'ts-jest/presets/js-with-ts',
  modulePaths: ['<rootDir>/lib'],
  moduleDirectories: ['node_modules', 'lib'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/lib/$1',
  },
  setupFiles: ['<rootDir>/jest.setup.ts'],
  setupFilesAfterEnv: ['<rootDir>/lib/setupTests.ts'],
};
