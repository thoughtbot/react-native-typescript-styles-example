module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    '@babel/transform-flow-strip-types',
    '@babel/transform-runtime',
    '@babel/plugin-proposal-class-properties',
  ],
}
