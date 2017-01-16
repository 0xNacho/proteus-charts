import typescript from 'rollup-plugin-typescript';

export default {
  entry: 'index.ts',
  dest: 'dist/proteic.js',
  moduleName: 'proteic',
  format: 'umd',
  sourceMap: true,
  plugins: [
    typescript({
      typescript: require('typescript')
    })
  ],
  globals: {
    'd3': 'd3',
    chai: 'chai',
  },
  external: [
    'd3',
    'chai'
  ]
};
