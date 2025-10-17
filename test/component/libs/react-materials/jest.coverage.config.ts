export default {

        roots: ['<rootDir>'],
        testMatch: ['**/*.test.{ts,tsx}'],
        testEnvironment: 'jsdom',
        transform: {
            '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: 'tsconfig.json' }],
        },
        setupFilesAfterEnv: [
            '<rootDir>/setupTests.ts',
        ],
        moduleNameMapper: {
            '^@libs/react-material$': '<rootDir>/../../../../libs/react-material/source',
        },

        collectCoverage: true,
        collectCoverageFrom: [
            '<rootDir>/../../../../libs/react-material/source/**/*.{ts,tsx}',
            '!**/*.d.ts',
            '!**/index.ts',
            '!**/node_modules/**',
        ],
        forceCoverageMatch: [ '**/libs/react-material/source/**/*.ts?(x)' ],
        coverageDirectory: '<rootDir>/coverage',
        coverageReporters: ['text', 'lcov']

}