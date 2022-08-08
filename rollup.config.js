import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

const packageJSON = require('./package.json');

export default {
  input: './src/index.ts',
  output: [
    {
      file: packageJSON.main,
      format: 'cjs',
    },
    {
      file: packageJSON.module,
      format: 'esm',
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({ browser: true }),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss(),
    terser(),
  ],
};
