import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import json from "@rollup/plugin-json";

export default {
  input: './src/index.ts', // Entry file
  output: [
    {
      file: './dist/index.cjs', // CommonJS output
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: './dist/index.mjs', // ES Module output
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(), // Resolves node_modules
    commonjs(), // Converts CommonJS to ES Modules
    typescript({ tsconfig: './tsconfig.json' }), // Integrates TypeScript
    json(),
  ],
};