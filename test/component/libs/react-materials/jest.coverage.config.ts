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
    setupFilesAfterEnv: [ '<rootDir>/setupTests.ts' ],

    collectCoverage: true,
    collectCoverageFrom: [
        '<rootDir>/**/*.{ts,tsx}',
        '!**/node_modules/**',
        '!**/coverage/**',
        '!**/*.d.ts',
        '!**/setupTests.ts',
    ],
    coverageDirectory: '<rootDir>/coverage',
    coverageReporters: [ 'lcov', 'text-summary' ]
    
}