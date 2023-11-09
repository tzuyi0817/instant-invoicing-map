module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'tailwindcss/nesting': {},
    'postcss-nesting': {},
    'postcss-pxtorem': {
      rootValue: 16,
      propList: ['*'],
    },
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
  },
}
