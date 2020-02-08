'use strict';
// https://www.yuque.com/easy-team/egg-react/config
const path = require('path');
const resolve = (filepath) => path.resolve(__dirname, filepath);
module.exports = {
  entry: {
    blog: 'app/web/page/blog/index.tsx',
    'demo/node': 'app/web/page/demo/node.tsx',
    'demo/async': 'app/web/page/demo/async.tsx',
  },
  module: {
    rules: [
      {
        less: {
          include: [resolve('app/web'), resolve('node_modules')],
          options: {
            javascriptEnabled: true,
            modifyVars: {
              'primary-color': 'red',
              'link-color': '#1DA57A',
              'border-radius-base': '2px'
            }
          }
        }
      }, 
      {
        typescript: true
      }
    ],
  },
  plugins:[
    { imagemini: false }
  ]
};