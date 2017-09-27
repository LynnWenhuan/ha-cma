/* eslint-disable */
const path = require('path');
const fs = require('fs');
const runNative = require('../node_modules/react-native/local-cli/cli.js');

const nodeEnv = process.env.NODE_ENV || 'development';
const br = /^win/.test(process.platform) ? '\r\n' : '\r';

const defaultVars = require('antd-mobile/lib/style/themes/default.native');
const customVars = require('../src/theme/theme.js');

const themePath = path.resolve(require.resolve('antd-mobile'), '../style/themes/default.native.js');
try {
  const customThemeStyle = customVars.themeStyle || {};

  const svgDir = path.resolve(__dirname, '.././src/assets/svg');

  // 主题色
  const brandPrimary = customVars.brandPrimary || defaultVars['brand_primary'];
  const brandPrimaryTap = customVars.brandPrimaryTap || defaultVars['brand_primary_tap'];

  // defaultVars 默认设置中 有brand_primary brand_primary_tap 这两个字段标识主题颜色 
  // 遍历默认的设置如果和相关值相等则替换成新的brandPrimary 和 brandPrimaryTap
  for (const key in defaultVars) {
    if (defaultVars[key] === defaultVars['brand_primary'] && key !== 'brand_primary') {
      defaultVars[key] = brandPrimary;
    } else if (defaultVars[key] === defaultVars['brand_primary_tap'] && key !== 'brand_primary_tap') {
      defaultVars[key] = brandPrimaryTap;
    }
  }

  defaultVars['brand_primary'] = brandPrimary;
  defaultVars['brand_primary_tap'] = brandPrimaryTap;
  customThemeStyle['ghost_button_fill_tap'] = brandPrimary + '99';
  customThemeStyle['segmented_control_fill_tap'] = brandPrimary + '10';
  const themeVars = Object.assign({}, defaultVars, customThemeStyle);
  if (fs.statSync(themePath).isFile()) {
    const script = `
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  var brandPrimary='${brandPrimary}';
  var brandPrimaryTap='${brandPrimaryTap}';
  exports['default'] = ${JSON.stringify(themeVars)}
  module.exports = exports['default'];`;
    fs.writeFileSync(themePath, script);
  }
} catch (e) {
  console.error('请确认已经npm install操作');
  console.log(e);
  return;
}


// createSvg(function(error){
//   console.error(error);
//   console.error("svg创建失败!");
//   return;
// });



fs.readFile('./appconfig.json', 'utf-8', (err, data) => {
  if (err) {
    console.error('项目根目录下缺少appconfig.json文件');
  } else {
    let context = null;
    try {
      context = JSON.parse(data);
    } catch (e) {
      console.log(e);
      console.error('项目根目录下appconfig.json文件配置错误，需要为JSON格式，或者key值需要使用引号，请参照相应文档');
    }
    writeNativeEvn(context);
  }
});

function writeNativeEvn(context) {
  const config = context[nodeEnv];
  if (!config) {
    console.error('项目根目录下appconfig.json文件配置错误，没有相应的' + nodeEnv + '配置');
    return;
  }

  const strArr = [];
  for (const key in config) {
    strArr.push(key + '=' + config[key]);
  }

  fs.writeFile('./.env', strArr.join(br), (err) => {
    if (err) {
      console.error('save .evn file faild!');
      return console.log(err);
    } else {
      console.log('save .evn file success!');
      runNative.run();
    }
  });
}






// 读取单个文件
function readfile(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(svgDir, filename), 'utf8', (err, data) => {
      data = data.replace(/<\?xml.*?\?>|<!--.*?-->|<path fill='#[a-zA-Z0-9]'|<!DOCTYPE.*?>/g, '');
      data = data.replace(/<path fill="#[a-zA-Z0-9]+"|<path/g, '<path fill="#ef473a"');
      if (err) reject(err);
      resolve({
        [filename.slice(0, filename.lastIndexOf('.'))]: data,
      });
    });
  });
}

// 读取SVG文件夹下所有svg
function readSvgs() {
  return new Promise((resolve, reject) => {
    fs.readdir(svgDir, (err, files) => {
      if (err) reject(err);
      Promise.all(files.map(filename => readfile(filename)))
        .then(data => resolve(data))
        .catch(() => reject(err));
    });
  });
}

function createSvg(errorcb) {
  // 生成js文件
  readSvgs().then((data) => {
    const svgFile = 'export default ' + JSON.stringify(Object.assign.apply(this, data));
    // 因为要在icon组件中使用到svgs文件，所以直接将文件写到icon组件目录下
    // 框架开发时候写入到src/lib/icon 目录底下
    // 业务开发的时候写入到node_modules/snk-mobile/src/lib/icon目录底下
    // 所以先判断是否存在路径 然后再写入
    // 这样就方便icon组件进行引用
    fs.writeFile(path.resolve(__dirname, '../src/assets/svgs.js'), svgFile, (err) => {
      if (err) {
        errorcb(err);
      } else {
        console.log("svg创建成功！");
      }
    });
  }).catch((err) => {
    errorcb(err);
  });
}


