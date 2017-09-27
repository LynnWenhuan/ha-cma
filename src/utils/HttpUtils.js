/* eslint-disable */
import { Config, HttpClient } from 'snk-mobile-test';

//指定默认的API配置地址 具体名称自行在项目根目录的appconfig.json中进行配置
const DEFAULTSERVER = Config.SERVER;

export default class HttpUtils {
  static _seq = 0;

  // 拼接完整的url 指定默认的Config配置服务器地址 如果指定了sever那么以sever优先
  static _createUrl(params){
    const sever = params.sever || DEFAULTSERVER;
    return sever + params.url;
  }

  static async post(params) {
    //url, body
    const uri = HttpUtils._createUrl(params);
    const request = HttpUtils._createRequest(params.body);
    const response = await HttpClient.post(uri, request);
    return HttpUtils._processResponse(response);
  }

  static async get(params) {
    const uri = HttpUtils._createUrl(params);
    const request = {
      headers: {
        Seq: HttpUtils._seq += 1,
      },
    };
    const response = await HttpClient.get(uri, request);
    return HttpUtils._processResponse(response);
  }

  static async put(params) {
    const uri = HttpUtils._createUrl(params);
    const request = HttpUtils._createRequest(params.body);
    const response = await HttpClient.put(uri, request);
    return HttpUtils._processResponse(response);
  }

  static async delete(params) {
    const uri = HttpUtils._createUrl(params);
    const request = HttpUtils._createRequest(params.body);
    const response = await HttpClient.delete(uri, request);
    return HttpUtils._processResponse(response);
  }

  static async patch(params) {
    const uri = HttpUtils._createUrl(params);
    console.log(uri);
    const request = HttpUtils._createRequest(params.body);
    const response = await HttpClient.patch(uri, request);
    return HttpUtils._processResponse(response);
  }

  static async upload(params) {
    // url body pcb
    const uri = HttpUtils._createUrl(params);
    const request = HttpUtils._createRequest(params.body);
    const response = await HttpClient.upload(uri, request, params.pcb);
    return HttpUtils._processResponse(response);
  }

  // 集中构造请求 包括请求头部和请求数据
  static _createRequest(body) {
    const request = {
      headers: {
        Seq: HttpUtils._seq += 1,
      },
      body,
    };
    return request;
  }

  /* 
    集中处理服务器相应返回数据 
  */
  static async _processResponse(response) {
    const json = await response.json();
    const { code, message, data } = json;
    if (code === 0) {
      return data;
    } else {
      const err = { code, message };
      throw err;
    }
  }
}
