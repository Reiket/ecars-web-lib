module.exports = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/lib'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: 'test-results',
        outputName: 'junit.xml',
      },
    ],
  ],
  transform: {
    '^.+\\tsx?$': 'ts-jest',
  },
  preset: 'ts-jest/presets/js-with-ts',
  modulePaths: ['<rootDir>/lib', '<rootDir>/src'],
  moduleDirectories: ['node_modules', 'lib'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/lib/$1',
    '^@src/(.*)$': '<rootDir>/src/$1',
  },
  setupFiles: ['<rootDir>/jest.setup.ts'],
  setupFilesAfterEnv: ['<rootDir>/tests/setupTests.ts'],
};
