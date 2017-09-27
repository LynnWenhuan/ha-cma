/* eslint-disable */
import React from 'react';
import { connect } from 'dva';
import { createForm } from 'rc-form';
import { Button, List, InputItem, View, Flex, Text, WhiteSpace, Icon, HttpUtils,Config } from 'snk-mobile-test';


class LoginView extends React.Component {
  login = () => {
    this.props.dispatch({
      type: 'user/login',
    });
  };

  render() {
    const { getFieldProps } = this.props.form;
    return (
      <View style={{ backgroundColor: 'white', height: '100%' }}>
        <Flex style={{ backgroundColor: 'red', height: 75 }} justify="center">
          <Text style={{ color: 'white' }}>登录/注册</Text>
        </Flex>
        <WhiteSpace size="lg" />
        <Flex justify="center">
          <Text>{'Let\'s play !'}</Text>
        </Flex>
        <Flex justify="center">
          <Icon type={require('../../assets/svgs/xbox.svg')} icon="xbox" size="lg" style={{ fill: '#ef473a' }} />
        </Flex>
        <WhiteSpace size="lg" />
        <List>
          <List.Item>
            <InputItem placeholder="请输入手机号" clear {...getFieldProps('mobile')} />
          </List.Item>
          <List.Item extra={<Button type="primary" size="small" inline>获取验证码</Button>}>
            <InputItem placeholder="请输入验证码" clear {...getFieldProps('vCode')} />
          </List.Item>
          <List.Item>
            <Button size="large" onClick={this.login}>立即登录</Button>
          </List.Item>
        </List>
      </View>
    );
  }
}

export default connect()(createForm({
  onFieldsChange(props, fields) {
    props.dispatch({
      type: 'user/save',
      payload: fields,
    });
  },
})(LoginView));
