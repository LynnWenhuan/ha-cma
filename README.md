# snk-mobile 2.0

## 技术栈

> React/React Native dav ant-design/-mobile

## Quick Start

### 开发环境配置

    node.js 
    推荐vscode

### 项目配置

#### snk-cli

#### appconfig.json配置以及终端命令行介绍

在appconfig.json中我们一般配置对于不同开发环境的变量配置。
一般我们会分为development（开发），urt（用户验收/预发布），productiion（生产），当然可以在这个基础上按照实际情况进行阶段的增减。


```
{
  "development":{
    "SERVER":"http://xxx/dev/api"
    ...
  },
  "uat":{
    "SERVER":"http://xxx/dev/api"
    ...
  },
  "production":{
    "SERVER":"http://xxx/dev/api"
    ...
  }
}

```

 > 以上三个变量分别对应的是三个开发环境，相对应的web mobile，Android，IOS就会有其相对的三组命令
 
 命令行工具一般分为运行和打包两个命令，所以相对应的package.json中的配置如下
 
 
```
  "android": "cross-env NODE_ENV=development node scripts/run-native run-android",
  "android-uat": "cross-env NODE_ENV=uat node scripts/run-native run-android",
  "android-pro": "cross-env NODE_ENV=production node scripts/run-native run-android",
    
	"ios": "cross-env NODE_ENV=development node scripts/run-native run-ios",
	"ios-uat": "cross-env NODE_ENV=uat node scripts/run-native run-ios",
  "ios-pro": "cross-env NODE_ENV=production node scripts/run-native run-ios",
    
  "start": "cross-env NODE_ENV=development roadhog server",
  "start-uat":"cross-env NODE_ENV=uat roadhog server",
  "start-pro":"cross-env NODE_ENV=production roadhog server",
```

> 以上都是运行命令，NODE_ENV 变量传递了取哪个appconfig.json变量配置 


```
import { Config } from 'snk-mobile';
// Server 是我们配置的变量 当然还可以配置其他的变量
const SERVER = Config.SERVER;
```






#### mock模拟API

#### 静态资源文件使用 （图片和SVG）


## 项目结构介绍

## 组成部分

### Model
    数据驱动界面

### Component

### Router
    传参机制

### Service

## Ajax数据获取

## 本地存储机制
   基于react-native-store进行封装，web app和native app 通用

## 自定义组件
   
## 问题解答

### 页面之间如何传递参数
### 页面之间如何共享数据

## 交互实践

### 友好的错误提示

#### 空数据页面 NoData

如果列表没有数据则显示无数据的页面 而不是弹出无数据的提示，也不是显示一个空白页

#### timeout 网络超时

提供再次加载的机会



## 项目打包发布