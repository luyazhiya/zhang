module.exports = {
  css: {
    loaderOptions: {
        scss: {
            prependData: '@import "@/assets/scss/base.scss";'
        },
        postcss: {
            plugins: [
                require('postcss-px2rem')({
                    //机主的值
                    remUnit: 50
                })
            ]
        }
    }
},
// 解决跨域
  devServer: {
    proxy: {
      '/api': {
        target: 'https://ad.maoyan.com',
        ws: true,
        changeOrgin: true
      },
      '/mmdb': {
        target: 'https://api.maoyan.com',
        ws: true,
        changeOrgin: true
      },
      '/maoyansh': {
        target: 'https://wx.maoyan.com',
        ws: true,
        changeOrgin: true
      },
      '/sns': {
        target: 'https://api.maoyan.com',
        ws: true,
        changeOrgin: true
      },
    }
  }
}