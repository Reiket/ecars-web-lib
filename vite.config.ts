import {defineConfig} from 'vite';
import {extname, relative, resolve} from 'path';
import {fileURLToPath} from 'node:url';
import dts from 'vite-plugin-dts';
import {libInjectCss} from 'vite-plugin-lib-inject-css';
import {glob} from 'glob';
import {codecovVitePlugin} from '@codecov/vite-plugin';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  plugins: [
    dts({include: ['lib']}),
    libInjectCss(),
    codecovVitePlugin({
      enableBundleAnalysis: process.env.CODECOV_TOKEN !== undefined,
      bundleName: 'dist',
      uploadToken: process.env.CODECOV_TOKEN,
    }),
  ],
  server: {
    fs: {
      allow: ['lib', 'src'],
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      name: 'ecars-web-lib',
      fileName: (format) => `index.${format}.js`,
      formats: ['cjs', 'es'],
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
      input: Object.fromEntries(
        glob
          .sync('lib/**/*.{ts,tsx}', {
            ignore: ['lib/**/*.d.ts'],
          })
          .map((file) => [
            relative('lib', file.slice(0, file.length - extname(file).length)),
            fileURLToPath(new URL(file, import.meta.url)),
          ]),
      ),
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
      },
    },
    sourcemap: true,
    emptyOutDir: true,
    copyPublicDir: false,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './lib'),
      '@src': resolve(__dirname, './lib'),
    },
  },
});