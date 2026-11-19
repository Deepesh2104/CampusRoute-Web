export default {
  displayName: 'domains-finance',
  preset: '../../../jest.preset.js',
  testEnvironment: 'node',
  coverageDirectory: '../../../coverage/libs/domains/finance',
  transform: {
    '^.+\\.ts$': [
      'ts-jest',
      { tsconfig: '<rootDir>/tsconfig.spec.json', useESM: false },
    ],
  },
  moduleFileExtensions: ['ts', 'js'],
  testMatch: ['**/*.spec.ts'],
};
