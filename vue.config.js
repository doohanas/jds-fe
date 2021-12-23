module.exports = {
  devServer: {
    host: 'localhost'
  },
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'JDS-FE-Form',
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
}
