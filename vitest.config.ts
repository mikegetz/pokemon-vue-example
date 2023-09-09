import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        clearMocks: true,
        coverage: {
            all: true,
            branches: 85,
            functions: 85,
            lines: 85,
            statements: 85,
            include: [
                'src',
            ],
        },
        exclude: [
            'build',
            'dev-build',
            'node_modules',
            '.stryker-tmp',
            '**/*.int.test.ts',
            '.build',
        ],
        globals: true,
        mockReset: true,
        restoreMocks: true,
        typecheck: {
            checker: 'tsc',
            exclude: [
                'build',
                'dev-build',
                'node_modules',
            ],
            include: [
                'src',
            ],
            tsconfig: './tsconfig.json',
        },
        watch: false,
    },
});