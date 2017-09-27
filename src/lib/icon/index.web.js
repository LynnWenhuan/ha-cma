/* eslint-disable eol-last */
import { Icon } from 'antd-mobile';
import React from 'react';

class Com extends React.Component{
  render(){
    return <Icon {...this.props} type={this.props.type.default.id}/>
  }
}
export default Com;