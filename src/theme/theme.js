/* eslint-disable */
const brandPrimary = '#ef473a';
const brandPrimaryTap = '#e05947';

/*
  配置表：https://github.com/ant-design/ant-design-mobile/blob/master/components/style/themes/default.less
  颜色格式必须为 #xxxxxx
  key的格式按照react native的风格
  ~web风格是 @primary-button-fill-tap 相对应的 key为primary_button_fill_tap
  数字单位必须为数字，不能加px，比如 button_height:80
*/
const themeStyle = {
  primary_button_fill_tap:"#f3776e"
};

const style = {
  FILL_BODY: {
    backgroundColor: themeStyle.fill_body,
    height: '100%',
  },
  FILL_SCREEN: {
    width: '100%',
    height: '100%',
  },
  FILL_HEIGHT: {
    height: '100%',
  },
  FILL_WIDTH: {
    width: '100%',
  },
  FILL_LIST_CONTENT: {
    maxWidth: '100%',
    height: '100%',
  },
  LIST_CONTAINER: {
    display: 'flex',
    marginLeft: 0,
    width: '100%',
  },
};

module.exports.brandPrimary = brandPrimary;
module.exports.brandPrimaryTap = brandPrimaryTap;
module.exports.style = style;
module.exports.themeStyle = themeStyle;
