/**
 * Created on 2017/09/26
 * @author wenboh
 */

import React from 'react';
import { connect } from 'dva';
import { createForm } from 'rc-form';
import { Button, InputItem, Text, View, WingBlank, WhiteSpace } from 'snk-mobile-test';

class UserBasicInfo extends React.Component {
  _save = () => {
    const { type, dispatch, users } = this.props;
    const { name, email, website } = users;
    if (type === 0) {
      dispatch({
        type: 'users/create',
        payload: { name, email, website },
      });
    } else if (type === 1) {
      dispatch({
        type: 'users/patch',
        payload: { id: users.id, values: { name, email, website } },
      });
    }
  }
  render() {
    const { form: { getFieldProps }, users } = this.props;
    return (<View>
      <InputItem
        {...getFieldProps('name')}
        placeholder="请输入姓名"
        value={users.name}
      >
        <Text>姓名</Text>
      </InputItem>
      <InputItem
        {...getFieldProps('email')}
        placeholder="请输入邮箱"
        value={users.email}
      >
        <Text>邮箱</Text>
      </InputItem>
      <InputItem
        {...getFieldProps('website')}
        placeholder="请输入网址"
        value={users.website}
      >
        <Text>网址</Text>
      </InputItem>
      <WingBlank>
        <WhiteSpace size="xl" />
        <Button type="primary" onClick={this._save} >保存</Button>
      </WingBlank>
    </View>);
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

export default connect(mapStateToProps)(createForm({
  onFieldsChange(props, fields) {
    props.dispatch({
      type: 'users/save',
      payload: fields,
    });
  },
})(UserBasicInfo));
