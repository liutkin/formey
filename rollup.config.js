import babel from 'rollup-plugin-babel';
import filesize from 'rollup-plugin-filesize';
import { uglify } from 'rollup-plugin-uglify';
import pkg from './package.json';

export default [
  {
    input: 'src/formey.js',
    output: {
      name: pkg.name,
      file: pkg.main,
      format: 'umd',
    },
    plugins: [
      babel({
        babelrc: false,
        presets: [
          [
            'env',
            {
              modules: false,
            },
          ],
          'stage-0',
        ],
      }),
      filesize(),
    ],
  },
  {
    input: 'src/formey.js',
    output: {
      name: pkg.name,
      file: pkg.browser,
      format: 'umd',
    },
    plugins: [
      babel({
        babelrc: false,
        presets: [
          [
            'env',
            {
              modules: false,
            },
          ],
          'stage-0',
        ],
      }),
      uglify({
        output: {
          comments: true,
        },
      }),
      filesize(),
    ],
  },
  {
    input: 'src/formey.js',
    output: [{ file: pkg.module, format: 'es' }],
    plugins: [filesize()],
  },
];
