module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\tsx?$': 'ts-jest',
  },
  preset: 'ts-jest/presets/js-with-ts',
  modulePaths: ['<rootDir>/lib'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/lib/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
