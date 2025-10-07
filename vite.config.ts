import {defineConfig} from 'vite';
import {resolve} from 'path';
import dts from 'vite-plugin-dts';
import {libInjectCss} from 'vite-plugin-lib-inject-css';
import {codecovVitePlugin} from '@codecov/vite-plugin';
import dotenv from 'dotenv';
import pkg from './package.json';

dotenv.config();

const externalDeps = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
  'react/jsx-runtime',
];

export default defineConfig({
  plugins: [
    dts({
      include: ['lib'],
      insertTypesEntry: true,
      outDir: 'dist',
      exclude: ['**/*.test.ts', '**/*.spec.ts'],
    }),
    libInjectCss(),
    codecovVitePlugin({
      enableBundleAnalysis: process.env.CODECOV_TOKEN !== undefined,
      bundleName: 'dist',
      uploadToken: process.env.CODECOV_TOKEN,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      name: 'EcarsWebLib',
      fileName: (format) => `index.${format}.js`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: externalDeps,
      output: {
        exports: 'named',
      },
    },
    sourcemap: true,
    emptyOutDir: true,
    copyPublicDir: false,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './lib'),
      '@src': resolve(__dirname, './src'),
    },
  },
});
