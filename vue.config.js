const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  // 关闭ESLINT校验工具
  lintOnSave: false,

})
