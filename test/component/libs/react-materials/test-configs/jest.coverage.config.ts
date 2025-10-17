import { baseConfig } from './jest.base.config'

export default {

    ...baseConfig,

    collectCoverage: true,
    collectCoverageFrom: [
        '<rootDir>/libs/react-material/source/**/*.{ts,tsx}',
        '!**/*.d.ts',
        '!**/index.ts',
        '!**/node_modules/**',
    ],
    forceCoverageMatch: ['**/libs/react-material/source/**/*.ts?(x)'],
    coverageDirectory: '<rootDir>/test/component/libs/react-materials/coverage',
    coverageReporters: ['text', 'lcov']
}