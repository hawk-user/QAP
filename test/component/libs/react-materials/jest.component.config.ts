export default {
    roots: [ '<rootDir>' ],
    testMatch: [ '**/*.test.{ts,tsx}' ],
    transform: {
        '^.+\\.(ts|tsx)$': [ 'ts-jest', { tsconfig: 'tsconfig.json' } ],
    },
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '^@libs/react-material$': '<rootDir>/../../../../libs/react-material/source',
    },
    setupFilesAfterEnv: [ '<rootDir>/setupTests.ts' ]
}