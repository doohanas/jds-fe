module.exports = {
  devServer: {
    host: 'localhost'
  },
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Humanly',
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
}
