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
        }
}