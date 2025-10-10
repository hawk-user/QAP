// jest.config.ts
export default {
  roots: ['<rootDir>/test'],
  testMatch: ['**/*.test.{ts,tsx}'],
  setupFilesAfterEnv: ['<rootDir>/test/setupTests.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: 'tsconfig.test.json' }],
  },
  testEnvironment: 'jsdom',
};
