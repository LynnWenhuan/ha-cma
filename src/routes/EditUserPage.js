/**
 * Created on 2017/09/26
 * @author wenboh
 */

import React from 'react';
import { connect } from 'dva';
import { createForm } from 'rc-form';
import { Button, List, Text, View, NavBar } from 'snk-mobile-test';

import UserBasicInfo from '../components/users/UserBasicInfo';

class EditUsersPage extends React.Component {
  render() {
    const { location } = this.props;
    const type = location.pathname === '/edit' ? 1 : 0;
    return (<View>
      <NavBar>{type ? '编辑' : '添加'}用户</NavBar>
      <UserBasicInfo type={type} />
    </View>);
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

export default connect(mapStateToProps)(EditUsersPage);
