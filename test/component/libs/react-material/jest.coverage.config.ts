import { Config } from 'jest';

const config: Config = {
      rootDir: '../../../../libs/react-material',
      roots: [ '<rootDir>', '<rootDir>/../../test/component/libs/react-material/' ],
      testMatch: ['**/*.test.{ts,tsx}'],
      testEnvironment: 'jsdom',
      transform: {
        '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: 'tsconfig.json' }],
      },
      setupFilesAfterEnv: [
        '<rootDir>/../../test/component/libs/react-material/setupTests.ts',
      ],
      moduleNameMapper: {
        '^@libs/react-material(.*)$': '<rootDir>/source$1'
      },
      collectCoverageFrom: [
        '!**/*.d.ts',
        '!**/node_modules/**',
      ],
      coverageDirectory: '<rootDir>/../../test/component/libs/react-material/coverage',
      coverageReporters: ['text', 'lcov'],

};

export default config;
