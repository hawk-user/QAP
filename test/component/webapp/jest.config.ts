export default {
    roots: [ '<rootDir>' ],
    testMatch: [ '**/*.test.{ts,tsx}' ],
    transform: { '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: 'tsconfig.json' }] },
    testEnvironment: 'jsdom',
    moduleNameMapper: { '^@libs/(.*)$': '<rootDir>/../../../libs/$1/source' },
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
}