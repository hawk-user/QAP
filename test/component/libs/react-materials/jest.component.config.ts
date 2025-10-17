import path from 'node:path';
const ROOT_DIR = path.resolve(__dirname, '../../../..');

export default {
        rootDir: ROOT_DIR,
        roots: [
            '<rootDir>/test/component/libs/react-materials',
            '<rootDir>/libs/react-material/source',
        ],
        testMatch: ['**/*.test.{ts,tsx}'],
        testEnvironment: 'jsdom',
        transform: {
            '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: 'tsconfig.json' }],
        },
        setupFilesAfterEnv: [
            '<rootDir>/test/component/libs/react-materials/setupTests.ts',
        ],
        moduleNameMapper: {
            '^@libs/react-material$': '<rootDir>/libs/react-material/source',
        }
}