const path = require('path');
// const pxtorem = require('postcss-pxtorem');
const appconfig = require("./appconfig.json");
const theme = require("./src/theme/theme.js");

const svgSpriteDirs = [
  require.resolve('antd-mobile').replace(/warn\.js$/, ''), // antd-mobile 内置svg
  path.resolve(__dirname, 'src/assets/svgs'),  // 业务代码本地私有 svg 存放目录
];

function createEnv(){
  //为了统一web和native的配置，根据appconfig.json 生成相应的env配置 相应的开发变量配置请转向appconfig.json
  var evnConfig = {};
  for(var key in appconfig){
    var itemConfig =  {
      define:{
        SNKMOBILECONFIG:appconfig[key]||{}
      }
    };
    if(key==="development"){
      itemConfig.extraBabelPlugins = ["dva-hmr"];
    }
    evnConfig[key] =itemConfig;
  }
  return evnConfig;
}

function createTheme(){
  var result = {
    '@hd':"1px"
  };
  const themeStyles = theme.themeStyle||{};
  if(theme.brandPrimary){
    result["@brand-primary"] = theme.brandPrimary;
  }
  if(theme.brandPrimaryTap){
    result["@brand-primary-tap"] = theme.brandPrimaryTap;
  }
  for(const key in themeStyles){
    let val =  themeStyles[key];
    val = !isNaN(val)?val+"px":val;
    const newKey = "@"+key.split("_").join("-");
    result[newKey] = val;
  }
  return result;
}


export default {
  entry: 'src/index.js',
  theme:createTheme(theme),
  hash:true,
  publicPath:"./",
  svgSpriteLoaderDirs: svgSpriteDirs,
  extraBabelPlugins: [
    'transform-runtime',
    ['import', { 'libraryName': 'antd-mobile', 'libraryDirectory': 'lib', 'style': true }],
    [
      "module-resolver",
      {
        "cwd":"babelrc",
        "alias": {
          "snk-mobile-test": "./src/lib"
       },
        "extensions": [".js",".ios.js",".android.js",".web.js"]
      }
    ]
  ],
  extraBabelIncludes: [
    './node_modules/react-native-storage'
  ],
  // extraPostCSSPlugins: [
  //   pxtorem({
  //     rootValue: 100,
  //     propWhiteList: [],
  //   }),
  // ],
  env: createEnv(),
  define: {
    VERSION: require('./package.json').version
  }
}
